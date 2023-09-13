import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Database } from "@tableland/sdk";

interface Schema {
  id: number;
  question: string;
  category: string;
  creator: string;
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    const tableName: string = "Truth_or_Dare_80001_7170";
    const db: Database<Schema> = new Database();

    try {
      const response = await db
        .prepare(`SELECT * FROM ${tableName} WHERE question MATCH ?;`)
        .bind(searchTerm)
        .all();

      const results = response.results;

      if (results.length > 0) {
        // Navigate to the first result
        router.push(`/question/${results[0].id}`);
      }
    } catch (error) {
      console.error("Error fetching data from database:", error);
    }
  };

  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={async (e) => {
            console.log("Key pressed", e.key);
            if (e.key === "Enter") {
              console.log("Enter key pressed. Calling handleSearch...");
              await handleSearch();
            }
          }}
          className="block w-full rounded-full border-0 px-4 py-1.5 bg-[#FDF2D8] dark:bg-zinc-900 text-yellow-800 dark:text-[#FFEBB8] shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-600 focus:placeholder:text-gray-700 dark:focus:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 text-center"
          placeholder="Search database"
        />
      </div>
      <div className="mt-4 text-center text-sm uppercase text-zinc-600 hover:text-[#40C9FF]">
        <Link
          href="https://testnets.opensea.io/assets/mumbai/0x4b48841d4b32c4650e4abc117a03fe8b51f38f68/7170"
          target="_blank"
        >
          OpenSea
        </Link>
      </div>
    </div>
  );
}
