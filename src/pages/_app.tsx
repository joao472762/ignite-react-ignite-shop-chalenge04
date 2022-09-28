import type { AppProps } from 'next/app'

import { Container } from '../styles/app'
import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header/>
      <Component {...pageProps}/>
    </Container>
  )
}

export default MyApp
