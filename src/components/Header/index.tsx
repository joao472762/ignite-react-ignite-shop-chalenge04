import Image from "next/image";
import Link from "next/link";
import { Handbag } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

import { SideBar } from "../SideBar";
import LogoImage from '../../assets/igniteLogo.svg'
import {  HeaderContainer,PurchaseCounter, PurchasesButton } from "./styles";

export function Header(){
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
                        <PurchaseCounter>
                            <div>
                                <span>0</span>
                            </div>
                        </PurchaseCounter>
                        <Handbag weight="bold"/>
                    </PurchasesButton>
                </Dialog.Trigger>

                <SideBar/>
            </Dialog.Root>
            
        </HeaderContainer>
    )
}