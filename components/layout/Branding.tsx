import Image from "next/image";

export default function Branding() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="">
        <Image
          src="./tod.svg"
          alt=""
          width={20}
          height={20}
          className="self-center w-20 h-20 rounded mx-1"
        />
      </div>
      <h1 className="text-3xl mt-2 font-bold text-center text-gray-900 dark:text-gray-100">
        <span className="text-[#40C9FF]">Truth</span> o/r{" "}
        <span className="text-[#EA1BFF]">Dare</span>
      </h1>
      <h2 className="mt-2 mb-8 tracking-wide uppercase text-xs">
        Have Fun With Your Lens Frens
      </h2>
    </div>
  );
}
