import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { FC, ReactNode, useCallback, useMemo } from 'react'
import { AutoConnectProvider, useAutoConnect } from './AutoConnectProvider'
import { notify } from "../util/notifications"

export const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { autoConnect } = useAutoConnect()
    const network = WalletAdapterNetwork.Devnet
    const endpoint = useMemo(() => clusterApiUrl(network), [network])

    const wallets = useMemo(
        () => [
            //  new PhantomWalletAdapter(),
             new SolflareWalletAdapter(),
             new TorusWalletAdapter(),
        ],
        [network]
    );

    const onError = useCallback(
        (error: WalletError) => {
            notify({ type: 'error', message: error.message ? `${error.name}: ${error.message}` : error.name })
            console.error(error);
        },
        []
    );

    return (
        // TODO: updates needed for updating and referencing endpoint: wallet adapter rework
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect={autoConnect}>
                <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AutoConnectProvider>
            <WalletContextProvider>{children}</WalletContextProvider>
        </AutoConnectProvider>
    );
};
