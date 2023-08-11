import Link from "next/link";

export default function SearchBar() {
  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-0 px-4 py-1.5 bg-zinc-900 text-[#FFEBB8] shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-600 focus:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 text-center"
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
