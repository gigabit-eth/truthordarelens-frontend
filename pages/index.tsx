import Image from "next/image";
import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { Inter } from "next/font/google";
import Link from "next/link";
import { TopNav, BottomNav } from "@/components/layout";
import QuestionCard from "@/components/ui/Card";
import SearchBar from "@/components/ui/Search";

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
          <Image
            src="./tod.svg"
            alt=""
            width={20}
            height={20}
            className="self-center w-20 h-20 rounded mx-1"
          />
        </div>
        <h1 className="text-3xl mt-2 font-bold text-center text-gray-900 dark:text-gray-100">
          <span className="text-[#40C9FF]">Truth</span> o/r{" "}
          <span className="text-[#EA1BFF]">Dare</span>
        </h1>
        <h2 className="m-2 tracking-wide uppercase text-xs">
          Have Fun With Your Lens Frens
        </h2>
        <div className="m-4">
          <SearchBar />
        </div>
        <div className="mt-12">
          <QuestionCard />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
