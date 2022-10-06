import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "../../lib/stripe";
import { useContext } from "react";
import { ProductsForPurchaseContext } from "../../contexts/productsForPurchaseContext";
import { ProductContainer,ProductInformations,ProductWrapper,PurchaseButton } from "../../styles/pages/prouduct";

interface ProductProps {
    id: string,
    priceId: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    priceFormated: string,
}

interface ProductPageProps {
    product: ProductProps
}


export default function Product({product} : ProductPageProps) {
    const {isFallback} = useRouter()
    const {addNewProduct} = useContext(ProductsForPurchaseContext)

    function handleAddNewProduct(){
        addNewProduct(product)
    }

    
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
                                <strong>{product.priceFormated}</strong>

                                <p>{product.description}</p>

                                <PurchaseButton
                                    onClick={handleAddNewProduct}
                                >Colocar na sacola</PurchaseButton>
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
        priceId: price.id,
        name:  response.name,
        description: response.description,
        imageUrl: response.images[0],
        price: price.unit_amount,
        priceFormated: FormatPrice.format(price.unit_amount! / 100)
    }


    return{
        props:{
            product
        },
    }
}