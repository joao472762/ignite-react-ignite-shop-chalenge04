import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import shirt from '../assets/shirt.svg'
import { stripe } from '../lib/stripe'
import { ImageContainer, ProductImages, SuccessContainer } from '../styles/success'

interface Product {
    imageUrl: string
}

interface SuccessProps {
    customerName: string,
    products: Product[]
}

export default function Success({customerName,products}:SuccessProps){
    <Head>
        <title>Compra efetuada | ignite Shop</title>
        <meta name='robots' content='noindex'/>
    </Head>
   
    return(
        <SuccessContainer>
            <ProductImages>
                {
                    products.map(product => (
                        <ImageContainer key={product.imageUrl}>
                            <Image src={product.imageUrl} width={120} height={130} alt=''/>
                        </ImageContainer>
                    ))
                }
            </ProductImages>
            <h1>Compra efetuada! </h1>
            <p>
                Uhuul <strong>{customerName} </strong> sua compra de {products.length} camisetas já está a caminho da sua casa. 
            </p>
            <Link href={'/'}>
                <a href="">Voltar ao catálogo</a>
            </Link>
        </SuccessContainer>
    )
}


export const getServerSideProps: GetServerSideProps = async ({query}) => {
    if(!query.session_id){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = query.session_id as string

  
    const session = await stripe.checkout.sessions.retrieve(sessionId,{
        expand:['line_items','line_items.data.price.product']
    })

    const customerName = session.customer_details?.name

    const products = session.line_items?.data.map(StripeProduct => {
        const product = StripeProduct.price?.product as Stripe.Product
        return {imageUrl: product.images[0]}
    })


    return{
      props:{
        customerName,
        products,
        
        
      }
    }
}