import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { TopNav, BottomNav, Branding, NewQuestion } from "@/components/layout";
import SearchBar from "@/components/ui/Search";
import SlideUpPanel from "@/components/ui/SlideUpPanel";
import TerminalContact from "@/components/ui/Terminal";

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <TopNav />
      <div className="relative flex items-center justify-center w-full h-full flex-grow">
        <TerminalContact />
      </div>
      <BottomNav />
    </main>
  );
}
