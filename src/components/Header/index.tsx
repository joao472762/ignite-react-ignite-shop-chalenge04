import Image from "next/image";
import { Handbag } from 'phosphor-react'

import LogoImage from '../../assets/igniteLogo.svg'
import { HeaderContainer, PurchaseCounter, PurchasesButton } from "./styles";

export function Header(){
    return(
        <HeaderContainer>
            <Image src={LogoImage} width={130} height={52} alt=''/>
            <PurchasesButton>
                <PurchaseCounter>
                    <div>
                        <span>0</span>
                    </div>
                </PurchaseCounter>
                <Handbag weight="bold"/>
            </PurchasesButton>
        </HeaderContainer>
    )
}