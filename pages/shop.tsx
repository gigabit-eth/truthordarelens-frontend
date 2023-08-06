import Head from "next/head";
import Image from "next/image";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import TopNav from "@/components/layout/TopNav";
import BottomNav from "@/components/layout/BottomNav";

export default function Shop() {
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
          Shop
        </h1>
        <h3 className="tracking-widest">marketplace</h3>
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
