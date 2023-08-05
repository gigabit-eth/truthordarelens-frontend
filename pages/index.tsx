import Image from "next/image";
import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { Inter } from "next/font/google";
import Link from "next/link";
import BottomNav from "@/components/layout/BottomNav";
import TopNav from "@/components/layout/TopNav";
import Example from "@/components/ui/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : SITE_URL;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
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
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          Hey 👋 it&#39;s <span className="text-[#40C9FF]">Truth</span> o/r{" "}
          <span className="text-[#EA1BFF]">Dare</span>
        </h1>
        <h3 className="m-2 tracking-widest uppercase">
          Invite your Lens Frens
        </h3>
        <div className="mt-12">
          <Example />
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
