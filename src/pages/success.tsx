import Image from 'next/image'
import Link from 'next/link'
import shirt from '../assets/shirt.svg'
import { ImageContainer, ProductImages, SuccessContainer } from '../styles/success'

export default function Success(){
    return(
        <SuccessContainer>
            <ProductImages>
                <ImageContainer>
                    <Image src={shirt} width={120} height={130} alt=''/>
                </ImageContainer>
                <ImageContainer>
                    <Image src={shirt} width={120} height={130} alt=''/>
                </ImageContainer>
            </ProductImages>
            <h1>Compra efetuada! </h1>
            <p>
                Uhuul <strong>Amanda </strong> sua compra de 3 
                camisetas já está a caminho da sua casa. 
            </p>
            <Link href={'/'}>
                <a href="">Voltar ao catálogo</a>
            </Link>
        </SuccessContainer>
    )
}