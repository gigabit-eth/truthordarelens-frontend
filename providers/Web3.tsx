"use client";
/* eslint-disable react/no-children-prop */

import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

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

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!alchemyId || !walletConnectProjectId) {
  throw new Error(
    "Environment variables ALCHEMY_ID and WALLETCONNECT_PROJECT_ID must be defined"
  );
}

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId,
    walletConnectProjectId,

    // Required
    appName: "Truth o/r Dare",

    // Optional
    appDescription: "Social Conversation platform for Web3.",
    appUrl: "https://truthordare.lol", // your app's url
    appIcon: "https://truthordare.lol/tod.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

// const lensConfig: LensConfig = {
//   bindings: wagmiBindings(),
//   environment: development,
// };

const Web3Provider = (props: Props) => {
  return (
    <WagmiConfig config={config}>
      {/* <LensProvider config={lensConfig}> */}
      <ConnectKitProvider
        theme="retro"
        options={{
          disclaimer: (
            <>
              By connecting your wallet you agree to the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Terms_of_service"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Privacy_policy"
              >
                Privacy Policy
              </a>
            </>
          ),
        }}
      >
        {props.children}
      </ConnectKitProvider>
      {/* </LensProvider> */}
    </WagmiConfig>
  );
};

export default Web3Provider;
