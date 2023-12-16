import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { Inter } from "next/font/google";
import { TopNav, BottomNav } from "@/components/layout";
import QuestionCard from "@/components/ui/Card";
import SearchBar from "@/components/ui/Search";
import Branding from "@/components/layout/Branding";
import Hero from "@/components/ui/Hero";
import ShuffleCards from "@/components/ui/QHolder";
import Ticker from "@/components/ui/Ticker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : SITE_URL;

  return (
    <main
      className={`flex max-h-screen flex-col items-center justify-between pt-24 ${inter.className}`}
    >
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
        <Ticker />
        <div className="">
          {/* <Ticker
            news={[
              "How many chances do you give a person before you write them off?",
              "Would you rather not be able to wear clothes or not be able to speak?",
              "Which super power would you rather have, night vision or a heightened senses in smell and hearing?",
            ]}
          /> */}
          {/* <Branding /> */}
          {/* <Hero /> */}
        </div>
        {/* <div className="">
          <SearchBar />
        </div> */}
        <div className="">
          {/* <QuestionCard /> */}
          <ShuffleCards />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
