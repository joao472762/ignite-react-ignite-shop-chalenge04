import Stripe from 'stripe'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps} from 'next'
import { Handbag } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'
import { HomeContainer, Product, ProductInfo, PurchaseButton } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'

interface Product {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
}

interface HomeProps {
  products: Product[]
}

export default function Home({products}: HomeProps){
  const [sliderRef, instanceRef] = useKeenSlider({
    slides:{
      perView: 2.3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {

          products.map( product =>(
          <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`}>
                <a>
                  <div>
                    <Image src={product.imageUrl} alt='' width={520} height={420}/>
                    <ProductInfo>
                        <h2>{product.name}</h2>
                        <strong>{product.price}</strong>
                    </ProductInfo>

                  </div>

                </a>
              </Link>
            <PurchaseButton>
              <Handbag weight='bold'/>
            </PurchaseButton>
          </Product>
          ))

        }
      </HomeContainer>
    </>
  )
}


export const getStaticProps : GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const PriceFormater = new Intl.NumberFormat('pt-br',{
    style: 'currency',
    currency: 'BRL'
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: PriceFormater.format(price.unit_amount! / 100)
    }
  })

  return {
    props:{
      products
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}