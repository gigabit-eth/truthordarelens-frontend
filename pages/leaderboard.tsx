import Head from "next/head";
import Image from "next/image";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { TopNav, BottomNav, Branding } from "@/components/layout";

export default function Vote() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
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
        {/* <Branding /> */}
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-bold text-center uppercase text-gray-900 dark:text-gray-100">
          Leaderboard
        </h1>
        <h2 className="mt-2 mb-6 tracking-wide lowercase italic text-xs text-center">
          Coming soon
        </h2>
      </div>
      <div className="relative flex items-center justify-center w-full h-full flex-grow">
        <Image
          className="opacity-5"
          src="./tod.svg"
          width={250}
          height={37}
          alt="Coming soon"
        />
      </div>
      <BottomNav />
    </main>
  );
}
