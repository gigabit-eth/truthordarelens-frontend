import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import BottomNav from "@/components/layout/BottomNav";

import Card from "@/components/layout/Card";

const examples = [
  {
    title: "Sign and Verify Message",
    description:
      "Sign in with your Ethereum account to securely verify your identity and access exclusive blockchain-based features.",
    href: "/settings/sign",
    icon: "/icons/sign.png",
  },
  {
    title: "Sign-in with Ethereum",
    description:
      "Experience the power of secure communication with Sign-In with Ethereum (SIWE), an EIP-4361 authentication standard that creates user sessions based on wallet connections and more!",
    href: "/settings/siwe",
    icon: "/icons/siwe.png",
  },
  {
    title: "Fetch ENS Names",
    description:
      "Fetch Ethereum Name Service names to Ethereum addresses using a decentralized domain name system that maps human-readable names to addresses.",
    href: "/settings/ens",
    icon: "/icons/ens.png",
  },
  {
    title: "Send Ether",
    description:
      "Send ether to another Ethereum address with a basic transaction.",
    href: "/settings/send-ether",
    icon: "/icons/ether.png",
  },
  {
    title: "Send ERC20",
    description:
      " ERC20 is a standard for fungible tokens on the Ethereum network. The example includes a tutorial on how to interact with a deployed ERC20 token contract.",
    href: "/settings/send-erc20",
    icon: "/icons/erc20.png",
  },
  {
    title: "Mint NFT",
    description:
      "NFTs are unique digital assets that can represent things like artwork, collectibles, and other unique items.",
    href: "/settings/mint-nft",
    icon: "/icons/nft.png",
  },
];

export default function Settings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <TopNav />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          Settings
        </h1>
        <h3 className="tracking-widest">menu</h3>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-24 justify-center items-center">
        {examples.map((example, index) => (
          <Card {...example} key={index} />
        ))}
      </div>
      <BottomNav />
    </main>
  );
}
