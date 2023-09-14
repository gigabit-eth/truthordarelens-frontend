"use client";
/* eslint-disable react/no-children-prop */
import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
  ledgerWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

import { ReactNode } from "react";

import { ETH_CHAINS, WALLET_CONNECT_PROJECT_ID } from "@/utils/config";

// import { LensConfig, development } from "@lens-protocol/react-web";
// import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
// import { LensProvider } from "@lens-protocol/react-web";

interface Props {
  children: ReactNode;
}

const projectId = WALLET_CONNECT_PROJECT_ID;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  ETH_CHAINS,
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      coinbaseWallet({ chains, appName: "TRUTH O/R DARE" }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

// const lensConfig: LensConfig = {
//   bindings: wagmiBindings(),
//   environment: development,
// };

const Web3Provider = (props: Props) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      {/* <LensProvider config={lensConfig}> */}
      <RainbowKitProvider
        chains={chains}
        theme={{
          lightMode: lightTheme({
            overlayBlur: "small",
            fontStack: "system",
          }),
          darkMode: darkTheme({
            overlayBlur: "small",
            fontStack: "system",
            accentColorForeground: "#fff",
            accentColor: "green",
          }),
        }}
        appInfo={{
          appName: "Truth o/r Dare",
          learnMoreUrl: "https://truthordare.lol/about",
        }}
      >
        {props.children}
      </RainbowKitProvider>
      {/* </LensProvider> */}
    </WagmiConfig>
  );
};

export default Web3Provider;
