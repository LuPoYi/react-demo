import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://ezqx3exhly6r.usemoralis.com:2053/server"
      appId="yv23QxESRerJu4ILuhvrq1Av6MxcxkPU2dp8ibYU"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp
