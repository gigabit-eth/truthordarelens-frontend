import Image from "next/image";
import { TVScreen } from "./TVScreen";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-4">
        <Image
          src="./tod.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The {""}
          <span className="brown-gradient">Bold Conversations</span> {""}
          of Truth o/r Dare
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center top-24">
        <TVScreen />
      </div>
    </header>
  );
}

export default Hero;
