import Head from "next/head";
import Image from "next/image";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { TopNav, BottomNav, Branding, NewQuestion } from "@/components/layout";
import SearchBar from "@/components/ui/Search";

export default function Create() {
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
        <div className="">
          <Branding />
        </div>
        <div className="">
          <SearchBar />
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full h-full flex-grow mb-12">
        <NewQuestion />
      </div>
      <BottomNav />
    </main>
  );
}
