import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"

import { Provider } from "../context/context"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit"
import { WagmiConfig, chain, configureChains, createClient } from "wagmi"
import { infuraProvider } from "wagmi/providers/infura"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"

const { chains, provider } = configureChains(
  [chain.goerli, chain.localhost],
  [
    infuraProvider({ apiKey: process.env.INFURA_API_KEY, priority: 1 }),
    jsonRpcProvider({
      priority: 2,
      rpc: (chain) => ({
        http: `HTTP://127.0.0.1:7545`,
      }),
    }),
  ]
)

const { connectors } = getDefaultWallets({ appName: "Airbnb", chains })

const wagmiClient = createClient({ autoConnect: true, connectors, provider })

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  )
}

export default MyApp
