import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "../../lib/stripe";
import { ProductContainer, ProductInformations, ProductWrapper, PurchaseButton } from "../../styles/pages/proudct";

interface ProductProps {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: string,
}

interface ProductPageProps {
    product: ProductProps
}

export default function Product({product} : ProductPageProps) {
    const {isFallback} = useRouter()

    return(
        <>
            {
                isFallback ? (
                    <></>
                )

                :(
                    <ProductContainer>
                        <ProductWrapper>

                            <section>
                                <Image src={product.imageUrl}  width={520} height={480} alt=''/>
                            </section>

                            <ProductInformations>
                                <h1>{product.name}</h1>
                                <strong>{product.price}</strong>

                                <p>{product.description}</p>

                                <PurchaseButton>Colocar na sacola</PurchaseButton>
                            </ProductInformations>
                        </ProductWrapper>
                    </ProductContainer>

                )
            }
        
        </>
    )
}

export const getStaticPaths : GetStaticPaths = async() => {
    return {
        paths: [
            {params: {id: 'prod_MTZmeQ3UDHoyUX'}}
        ],
        fallback: true
    }
}

export const getStaticProps : GetStaticProps<any,{id: string}> = async({params}) => {
    const productId = params?.id as string
    const response = await stripe.products.retrieve(productId,{
        expand: ['default_price']
    })

    const price = response.default_price as Stripe.Price

    const FormatPrice = new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency: 'BRL',
    })

    const product = {
        id: response.id,
        name:  response.name,
        description: response.description,
        imageUrl: response.images[0],
        price: FormatPrice.format(price.unit_amount! / 100)
    }


    return{
        props:{
            product
        },
    }
}