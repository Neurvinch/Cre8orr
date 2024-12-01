import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: '1ee1f49d-743d-4804-aa69-abeedd6ed397',
        
        // Explicitly enable wallet connections and disable other auth methods
        enabledLoginMethods: ['wallet'],
        socialLoginOnly: false,
        walletOnly: true,
        
        // Configure the Ethereum network settings
        evmNetworks: [{
          chainId: 1,
          chainName: 'Ethereum Mainnet',
          vanityName: 'Ethereum',
          blockExplorer: 'https://etherscan.io',
          rpcUrls: ['https://ethereum.publicnode.com'],
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18
          }
        }],
        
        // Specify which wallet connectors to enable
        walletConnectors: [EthereumWalletConnectors],
        
        // Configure specific wallet options
        walletConnectorOptions: {
          metamask: true,
          coinbaseWallet: true,
          walletConnect: true,
          phantomWallet: false,
          brave: true
        },

        // Disable email and social authentication
        enableAuthMethods: {
          email: false,
          wallet: true,
          emailWallet: false,
          social: false
        }
      }}
    >
      <App />
    </DynamicContextProvider>
  </StrictMode>,
);