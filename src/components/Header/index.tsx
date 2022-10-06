import Image from "next/image";
import Link from "next/link";
import { Handbag } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

import { SideBar } from "../SideBar";
import LogoImage from '../../assets/igniteLogo.svg'
import {  HeaderContainer,PurchaseCounter, PurchasesButton } from "./styles";
import { useContext } from "react";
import { ProductsForPurchaseContext } from "../../contexts/productsForPurchaseContext";

export function Header(){
    const {products} = useContext(ProductsForPurchaseContext)
    const productsAmount = products.length
    return(
        <HeaderContainer>
            <Link href={'/'}>
                <a >
                    <Image src={LogoImage} width={130} height={52} alt=''/>
                </a>
            
            </Link>

            <Dialog.Root>

                <Dialog.Trigger asChild>
                    <PurchasesButton>
                        {
                            productsAmount > 0 &&(
                            <PurchaseCounter>
                                <div>
                                    <span>{productsAmount}</span>
                                </div>
                            </PurchaseCounter>
                            )
                        }
                        <Handbag weight="bold"/>
                    </PurchasesButton>
                </Dialog.Trigger>

                <SideBar/>
            </Dialog.Root>
            
        </HeaderContainer>
    )
}