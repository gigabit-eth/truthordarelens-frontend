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
  const [loading, setLoading] = useState(true);

  // Fetch the question from your data source using the id
  useEffect(() => {
    const fetchQuestion = async (id: string) => {
      setLoading(true);
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
      } finally {
        setLoading(false);
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
        <div className="dark:bg-[#0D1321] py-16 sm:py-24">
          <div className="flex flex-row justify-between mt-6 mb-2 px-4">
            <Button className="flex-1" />
          </div>
          <div className="w-full max-w-7xl min-h-[400px] sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-[#FEF5E9] dark:bg-[#1D1A1C] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 drop-shadow-xl">
              <h2 className="text-center text-3xl font-bold tracking-tight text-[#5E503F] dark:text-gray-300 sm:text-4xl min-h-[100px]">
                {loading ? (
                  <p className="max-w-2xl">Loading...</p>
                ) : (
                  question && (
                    <>
                      <p className="text-2xl uppercase">{question.category}</p>
                      <h1 className="mt-4">{question.question}</h1>
                      <p className="mt-6">{question.creator}</p>
                    </>
                  )
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
