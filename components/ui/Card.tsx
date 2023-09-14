import { useState, useEffect, useRef, useCallback } from "react";
import { Database } from "@tableland/sdk";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRightIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/20/solid";

// create database
const createTable = async () => {
  interface Schema {
    question: string;
    category: string;
    creator: string;
    amount: number;
    collectLimit: number;
    currency: string;
    referralFee: number;
    followerOnly: boolean;
    endTimestamp: number;
    currentCollects: number;
    recipients: Array<string>;
    uniqueId: string;
  }

  const db = new Database<Schema>();

  const prefix: string = "TOD_Project";

  const { meta: create } = await db
    .prepare(
      `CREATE TABLE ${prefix} (id INTEGER PRIMARY KEY, question TEXT, category TEXT, creator TEXT, amount NUMBER, collectLimit NUMBER, currency TEXT, referralFee NUMBER, followerOnly BOOL, endTimestamp NUMBER, currentCollects NUMBER, recipients ARRAY, uniqueId TEXT);`
    )
    .run();

  // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
  const { name } = create.txn!; // e.g., my_sdk_table_80001_311

  console.log(name);
};

// createTable();

interface Schema {
  id: number;
  question: string;
  category: string;
  creator: string;
}

export default function QuestionCard() {
  const [questions, setQuestions] = useState<Array<Schema>>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [fetching, setFetching] = useState(false); // for infinite scroll
  const loader = useRef(null);
  const [pageSize, setPageSize] = useState(10);

  const questionsRef = useRef<Array<Schema>>([]);

  const fetchData = useCallback(
    async (page: number, pageSize: number) => {
      if (!hasMore || fetching) return;

      setFetching(true);

      const tableName: string = "Truth_or_Dare_80001_7170";
      const db: Database<Schema> = new Database();

      setLoading(true);

      try {
        const offset = (page - 1) * pageSize;
        const response = await db
          .prepare(`SELECT * FROM ${tableName} LIMIT ? OFFSET ?;`)
          .bind(pageSize, offset)
          .all();
        const results = response.results;

        if (results.length === 0 || results.length <= pageSize) {
          setHasMore(false);
        }

        // Filter out any duplicates
        const newQuestions = results.filter(
          (result) =>
            !questionsRef.current.some((question) => question.id === result.id)
        );

        setQuestions((prevQuestions) => {
          const updatedQuestions = [...prevQuestions, ...newQuestions];
          questionsRef.current = updatedQuestions;
          return updatedQuestions;
        });
      } catch (error) {
        console.error("Error fetching data from database:", error);
      } finally {
        setLoading(false);
        setFetching(false);
      }
    },
    [hasMore, fetching]
  );

  const handleObserver = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const target = entities[0];
      if (target.isIntersecting) {
        const newPage = page + 1;
        setPage(newPage);
        fetchData(newPage, pageSize);
      }
    },
    [page, fetchData, pageSize]
  );

  // Add a function to change pageSize
  const changePageSize = (newSize: number) => {
    setPageSize(newSize);
    // Reset page and questions when pageSize changes
    setPage(1);
    setQuestions([]);
  };

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  useEffect(() => {
    fetchData(page, pageSize);
  }, [fetchData, page, pageSize]);

  return (
    <>
      <ul
        role="list"
        className="divide-y divide-[#ebd4ba] dark:divide-zinc-800"
      >
        {questions.map((question) => (
          <li
            key={question.id}
            className="relative flex justify-between gap-x-6 px-4 py-6 hover:bg-zinc-300/20 dark:hover:bg-zinc-700/30 sm:px-6 lg:px-8"
          >
            <div className="flex min-w-0 gap-x-4">
              <Image
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="/tod.png" // replace with a default image as there is no imageUrl in the provided schema
                alt=""
                width={256}
                height={256}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm uppercase font-semibold leading-6 dark:text-gray-300 text-[#5E503F]">
                  <Link href={`/question/${question.id}`}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {question.question}
                  </Link>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  <Link
                    href={`mailto:${question.creator}`}
                    className="relative truncate hover:underline"
                  >
                    {question.creator}
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <div className="flex flex-col sm:flex-row" id="">
                  <div className="px-1" id="thumbs-up-icon">
                    <HandThumbUpIcon
                      className="h-5 w-5 text-green-400/80"
                      aria-hidden="true"
                    />
                    {/* Dummy values for thumbs up/down, replace them as required */}
                    <span className="ml-1 text-xs blur-sm">99</span>
                  </div>
                  <div className="px-1" id="thumbs-down-icon">
                    <HandThumbDownIcon className="h-5 w-5 text-pink-500/80" />
                    <span className="ml-1 text-xs blur-sm">28</span>
                  </div>
                </div>
                {/* Dummy value for lastSeen, replace it as required */}
                <p className="mt-1 text-xs leading-3 text-gray-500">
                  Submitted <time dateTime="2023-01-23T13:23Z">3h ago</time>
                </p>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
        <div
          className="loading w-full h-20 pt-12 flex items-center justify-center"
          ref={loader}
        >
          {loading && (
            <p className="text-3xl font-bold italic text-gray-500">
              Loading...
            </p>
          )}
        </div>
      </ul>
    </>
  );
}
