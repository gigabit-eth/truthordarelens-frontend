import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRightIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/20/solid";
import { Database } from "@tableland/sdk";

// create database
const createTable = async () => {
  interface Schema {
    id: number;
    question: string;
    category: string;
    creator: string;
  }

  const db = new Database<Schema>();

  const prefix: string = "Truth_or_Dare";

  const { meta: create } = await db
    .prepare(
      `CREATE TABLE ${prefix} (id integer primary key, question text, category text, creator text);`
    )
    .run();

  // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
  const { name } = create.txn!; // e.g., my_sdk_table_80001_311

  console.log(name);
};

// createTable();

// insert into database
const insertData = async () => {
  const tableName: string = "Truth_or_Dare_80001_7170";

  // interface
  interface Schema {
    id: number;
    question: string;
    category: string;
    creator: string;
  }

  const db: Database<Schema> = new Database();
  // insert a row into the table
  const { meta: insert } = await db
    .prepare(
      `INSERT INTO ${tableName} (id, question, category, creator) VALUES(?, ?, ?, ?)`
    )
    .bind(
      7,
      "Draw a face around your belly button.",
      "Dare",
      "@truthordare.lens"
    )
    .run();

  // wait for tx finalization
  await insert.txn!.wait();

  // perform a read query, requesting all rows from the table
  const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
  console.log(results);
};

// insertData();

const people = [
  {
    name: "What is the most recent life lesson you've learned?",
    email: "@leslie.lens",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    width: 256,
    height: 256,
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "If you could only listen to 3 songs for the rest of your life, which ones would they be?",
    email: "@example.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    width: 256,
    height: 256,
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

export default function QuestionCard() {
  const [questions, setQuestions] = useState<Array<any>>([]);

  const fetchData = async () => {
    const tableName: string = "Truth_or_Dare_80001_7170";
    interface Schema {
      id: number;
      question: string;
      category: string;
      creator: string;
    }
    const db: Database<Schema> = new Database();

    try {
      const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
      setQuestions(results);
    } catch (error) {
      console.error("Error fetching data from database:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Link href="/question/">
      <ul role="list" className="divide-y divide-zinc-800">
        {questions &&
          questions.map((question) => (
            <li
              key={question.id}
              className="relative flex justify-between gap-x-6 px-4 py-6 hover:bg-zinc-700/30 sm:px-6 lg:px-8"
            >
              <div className="flex min-w-0 gap-x-4">
                <Image
                  className="blur h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="/tod.svg" // replace with a default image as there is no imageUrl in the provided schema
                  alt=""
                  width={256}
                  height={256}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-300">
                    <Link href={`/question/${question.id}`}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {question.question}
                    </Link>
                  </p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500 blur-sm">
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
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {/* Dummy values for thumbs up/down, replace them as required */}
                      <span className="ml-1 text-xs blur-sm">99</span>
                    </div>
                    <div className="px-1" id="thumbs-down-icon">
                      <HandThumbDownIcon className="h-5 w-5 text-gray-400" />
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
      </ul>
    </Link>
  );
}
