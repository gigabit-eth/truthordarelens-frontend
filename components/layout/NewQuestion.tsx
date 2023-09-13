import Image from "next/image";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import { Database } from "@tableland/sdk";
import { toast, Toaster } from "react-hot-toast";

export default function NewQuestion() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [creator, setCreator] = useState("");

  const insertData = async () => {
    try {
      const tableName: string = "Truth_or_Dare_80001_7170";

      interface Schema {
        id: number;
        question: string;
        category: string;
        creator: string;
      }

      const db: Database<Schema> = new Database();
      const { meta: insert } = await db
        .prepare(
          `INSERT INTO ${tableName} (question, category, creator) VALUES(?, ?, ?)`
        )
        .bind(question, category, creator)
        .run();

      await insert.txn!.wait();
      const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
      console.log(results);

      toast.success("Question created!");
    } catch (error) {
      console.error("Error inserting data into database:", error);
      toast.error("Error creating question");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    insertData();
  };

  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-[#FEF5E9] dark:bg-[#212021] py-8 sm:py-16 lg:py-24 drop-shadow-xl">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-[#5E503F] sm:text-4xl">
              Create a new question
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-400">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Question
              </label>
              <input
                id="newQuestion"
                onChange={(e) => setQuestion(e.target.value)}
                name="newQuestion"
                type="text"
                autoComplete="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-[#5E503F] shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#5E503F] sm:text-sm sm:leading-6"
                placeholder="Enter your question"
              />
            </div>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Category
              </label>
              <input
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                type="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-[#5E503F] shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#5E503F] sm:text-sm sm:leading-6"
                placeholder="Choose a category"
              />
            </div>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Creator
              </label>
              <input
                id="creator"
                onChange={(e) => setCreator(e.target.value)}
                name="creator"
                type="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-[#5E503F] shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#5E503F] sm:text-sm sm:leading-6"
                placeholder="creator name"
              />
            </div>
          </div>
          {/* a container that takes up the entire container to hold a full width button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#FDF2D8] bg-[#5E503F] hover:bg-[#C6AC8F] md:py-4 md:text-lg md:px-10"
            >
              Create
            </button>
          </div>
        </div>
      </div>
      {/* gradient */}
      {/* <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          // Define default styles
          style: {
            bottom: "250px",
          },
        }}
      />
    </div>
  );
}
