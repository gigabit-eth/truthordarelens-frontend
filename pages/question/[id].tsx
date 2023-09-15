import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/utils/config";
import { TopNav, BottomNav, Branding } from "@/components/layout";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Database } from "@tableland/sdk";

type QuestionType = {
  question: string;
  category: string;
  creator: string;
};

interface Question {
  id: number;
  question: string;
  category: string;
  creator: string;
}

export default function Question() {
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState<Question | null>(null);

  // Fetch the question from your data source using the id
  useEffect(() => {
    const fetchQuestion = async (id: string) => {
      const tableName: string = "Truth_or_Dare_80001_7170";
      const db: Database<Question> = new Database();

      try {
        const response = await db
          .prepare(`SELECT * FROM ${tableName} WHERE id = ?;`)
          .bind(id)
          .all();

        const results = response.results;

        if (results.length > 0) {
          setQuestion(results[0]); // Set the question state
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    if (id) {
      fetchQuestion(id as string);
    }
  }, [id]);

  // useEffect(() => {
  //   console.log(question);
  // }, [question]);

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
          <div className="relative place-items-start mt-6 mb-2 px-4">
            <Button />
          </div>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-[#FEF5E9] dark:bg-[#1D1A1C] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 drop-shadow-xl">
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-[#5E503F] dark:text-gray-300 sm:text-4xl">
                {question && (
                  <>
                    <p className="text-2xl uppercase">{question.category}</p>
                    <h1 className="mt-4">{question.question}</h1>
                    <p className="mt-6">{question.creator}</p>
                  </>
                )}
              </h2>
              {/* <svg
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
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
