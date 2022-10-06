import axios from 'axios'
import Link from 'next/link';
import Image from 'next/image';
import {X} from 'phosphor-react'
import { useContext, useState } from 'react';

import { ProductsForPurchaseContext } from '../../contexts/productsForPurchaseContext';
import { Content, Overlay,Close,Product,Products,PurchaseFooter,Title } from './styles';
import { ProductsAmount } from '../../hooks/productsAmount';

export function SideBar(){
    const {products,removeOneProduct} = useContext(ProductsForPurchaseContext)
    const [isRedirected, setIsRedirected] = useState(false)
    const {productsAmountFormated} = ProductsAmount()

    
    async function handleCheckoutProducts(){
        if(products.length  < 1){
            return
        }
        setIsRedirected(true)
        try {
            const productsForCheckout = products.map(product => {
                return {
                    price: product.priceId,
                    quantity: 1,
                }
            })
            const url = '/api/checkout'
            const response = await axios.post(url,{productsForCheckout})
            const checkoutUrl = response.data.checkoutUrl
            location.href = checkoutUrl
            
        } catch (error) {
            alert('não foi possível finalizar a transação')
            console.error(error)
        }
    }

    function handleRemoveOneProduct(key: string){
        removeOneProduct(key)
    }
    
    const productsLength = products.length
    const isDisabled = isRedirected || products.length < 1 ? true : false

    return(
        <Overlay>
            <Content>
                <Close>
                    <X weight="bold"/>
                </Close>
                
                <Title>Sacola de compras</Title>

                <Products>
                    {
                        products.map(product => (
                            <Product key={product.key}>
                                <Link href={`/product/${product.id}`} prefetch={false}>
                                    <a>
                                        <Image src={product.imageUrl} width={70} height={80} alt=''/>
                                    </a>
                                </Link>

                                <aside>
                                    <h2>{product.name}</h2>
                                    <strong>{product.priceFormated}</strong>
                                    <button
                                        type='button'
                                        onClick={() => handleRemoveOneProduct(product.key)}
                                    >Remover
                                    </button>
                                </aside>
                            </Product>
                        ))
                    }

                </Products>

                <PurchaseFooter>
                    <section>
                        <div>
                            <span>Quantia</span>
                            <strong>Valor Total</strong>
                        </div>
                        <div>
                            <span>{productsLength} itens</span>
                            <strong>{productsAmountFormated}</strong>
                        </div>
                    </section>

                    <button 
                        type='button' 
                        disabled={isDisabled}
                        onClick={handleCheckoutProducts}
                    >
                        Finalizar compra
                    </button>
                </PurchaseFooter>
            </Content>
        </Overlay>
    )
}