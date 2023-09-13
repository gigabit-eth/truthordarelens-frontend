import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { TopNav, BottomNav, Branding } from "@/components/layout";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";

type QuestionType = {
  question: string;
  category: string;
  creator: string;
};

export default function Question() {
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState<QuestionType | null>(null);

  // Fetch the question from your data source using the id
  useEffect(() => {
    // const fetchQuestion = async () => {
    //   const res = await fetch(`/api/questions/${id}`);
    //   const newQuestion = await res.json();
    //   setQuestion(newQuestion);
    // };
    // fetchQuestion();
    const fetchData = async (id: string | string[]) => {
      const res = await fetch(`/question/${id}`);
      const newQuestion = await res.json();
      setQuestion(newQuestion);
    };
    if (id) {
      fetchData(id);
      console.log(id);
    }
  }, [id, question]);

  useEffect(() => {
    console.log(question);
  }, [question]);

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
      {/* <Branding /> */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="dark:bg-[#1D1A1C] py-16 sm:py-24">
          <div className="relative items-center mb-6 px-10 z-10">
            <Button />
          </div>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 drop-shadow-xl">
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {question?.question}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                Reprehenderit ad esse et non officia in nulla. Id proident
                tempor incididunt nostrud nulla et culpa.
              </p>
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.5"
                />
                <defs>
                  <radialGradient
                    id="759c1415-0410-454c-8f7c-9a820de03641"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                  >
                    <stop stopColor="#EA1BFF" />
                    <stop offset={1} stopColor="#EA1BE3" stopOpacity={0} />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
