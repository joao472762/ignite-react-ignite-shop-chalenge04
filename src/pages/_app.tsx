import type { AppProps } from 'next/app'

import { Container } from '../styles/app'
import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'
import { ProductsForPurchaseContextProvider } from '../contexts/productsForPurchaseContext'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <ProductsForPurchaseContextProvider>
        <Header/>
        <Component {...pageProps}/>
      </ProductsForPurchaseContextProvider>
    </Container>
  )
}

export default MyApp
