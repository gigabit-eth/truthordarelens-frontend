import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { Inter } from "next/font/google";
import { TopNav, BottomNav } from "@/components/layout";
import QuestionCard from "@/components/ui/Card";
import SearchBar from "@/components/ui/Search";
import Branding from "@/components/layout/Branding";
import Hero from "@/components/ui/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : SITE_URL;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-24 ${inter.className}`}
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
        <div className="">
          {/* <Branding /> */}
          {/* <Hero /> */}
        </div>
        {/* <div className="">
          <SearchBar />
        </div> */}
        <div className="mt-12 mb-24">
          <QuestionCard />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
