import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { GetStaticProps} from 'next'
import { Handbag } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { stripe } from '../lib/stripe'
import { ProductsForPurchaseContext } from '../contexts/productsForPurchaseContext'
import { HomeContainer, Product, ProductInfo, PurchaseButton } from '../styles/pages/home'

interface Product {
  id: string,
  priceId: string,
  name: string,
  imageUrl: string,
  price: number,
  priceFormated: string
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

  const {addNewProduct} = useContext(ProductsForPurchaseContext)

    function handleAddNewProduct(product: Product){
        addNewProduct(product)
  }


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
                        <strong>{product.priceFormated}</strong>
                    </ProductInfo>

                  </div>

                </a>
              </Link>
            <PurchaseButton
              onClick={() => handleAddNewProduct(product)}
            >
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
      priceId: price.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      priceFormated: PriceFormater.format(price.unit_amount! / 100)
    }
  })

  return {
    props:{
      products
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}