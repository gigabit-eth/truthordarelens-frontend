import Image from "next/image";

export default function Branding() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="">
        <div className="flex items-center justify-center">
          <Image
            src="./tod.svg"
            alt=""
            width={20}
            height={20}
            className="self-center w-20 h-20 rounded mx-1"
          />
        </div>
        <h2 className="text-xl mt-2 font-bold text-center text-gray-900 dark:text-gray-100">
          <span className="text-[#40C9FF]">Truth</span> o/r{" "}
          <span className="text-[#EA1BFF]">Dare</span>
        </h2>
        <h1 className="mt-2 mb-0 tracking-wide uppercase text-lg">
          Social Conversation Game
        </h1>
      </div>
    </div>
  );
}
