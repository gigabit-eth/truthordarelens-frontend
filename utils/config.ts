import {
  mainnet,
  polygon,
  sepolia,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  bsc,
  bscTestnet,
  arbitrum,
  arbitrumGoerli,
} from "wagmi/chains";

export const ETH_CHAINS = [
  // mainnet,
  polygon,
  // sepolia,
  // polygonMumbai,
  // polygonZkEvm,
  // polygonZkEvmTestnet,
  // bsc,
  // bscTestnet,
  // arbitrum,
  // arbitrumGoerli,
];
export const WALLET_CONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

export const SITE_NAME = "Play Truth o/r Dare";
export const SITE_DESCRIPTION =
  "Get to know your friends better, or make new ones, the game of truth or dare for the Lens Protocol. ";
export const SITE_URL = "https://truthordare.lol";

export const SOCIAL_TWITTER = "";
export const SOCIAL_GITHUB = "";

export const NFT_CONTRACT_ADDRESS =
  "0x0Fc5f8A784810dEd101BD734cC59F6F7b868A3AF";

export const ironOptions = {
  cookieName: SITE_NAME,
  password:
    process.env.SESSION_PASSWORD ?? "HB$TohaAGR5s!m7Q!x&7&?oMxyM#sgckihk&h3r@",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
