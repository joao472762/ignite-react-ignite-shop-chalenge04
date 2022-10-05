import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay,Close,Product,Products,PurchaseFooter,Title } from './styles'
import shirt from '../../assets/shirt.svg';
import Image from 'next/image';
import {X} from 'phosphor-react'


export function SideBar(){
    return(
        <Overlay>
            <Content>
                <Close>
                    <X weight="bold"/>
                </Close>
                
                <Title>Sacola de compras</Title>

                <Products>
                    <Product>
                        <div>
                            <Image src={shirt} width={70} height={80} alt=''/>
                        </div>

                        <aside>
                            <h2>Camiseta Explorer</h2>
                            <strong>R$ 79,90</strong>
                            <button>Remover</button>
                        </aside>
                    </Product>

                </Products>

                <PurchaseFooter>
                    <section>
                        <div>
                            <span>Quantia</span>
                            <strong>Valor Total</strong>
                        </div>
                        <div>
                            <span>3 itens</span>
                            <strong>R$ 270,00</strong>
                        </div>
                    </section>

                    <button>Finalizar compra</button>
                </PurchaseFooter>
            </Content>
        </Overlay>

    )
}