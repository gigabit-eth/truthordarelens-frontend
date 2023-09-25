import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { TopNav, BottomNav, Branding, NewQuestion } from "@/components/layout";
import SearchBar from "@/components/ui/Search";
import SlideUpPanel from "@/components/ui/SlideUpPanel";

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="">{/* <Branding /> */}</div>
        <div className="mt-12">
          <h1 className="text-3xl font-bold text-center uppercase text-gray-900 dark:text-gray-100">
            Be a Creator
          </h1>
          <h2 className="mt-2 mb-6 tracking-wide lowercase italic text-xs text-center">
            whats on your mind?
          </h2>
          {/* <button onClick={togglePanel}>Toggle Panel</button> */}
        </div>
        {/* <div className="">
          <SearchBar />
        </div> */}
      </div>
      <div className="relative flex items-center justify-center w-full h-full flex-grow sm:mb-20">
        <NewQuestion />
      </div>
      <SlideUpPanel isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>This is the content of the slide up panel.</p>
      </SlideUpPanel>
      <BottomNav />
    </main>
  );
}
