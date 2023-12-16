import React, { useEffect, useState } from "react";

type TickerProps = {
  news: string[];
};

const Ticker = ({ news }: TickerProps) => {
  const [playState, setPlayState] = useState("paused");

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayState((prevState) =>
        prevState === "running" ? "paused" : "running"
      );
    }, 15000); // Change play state every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="sticky left-0 right-0 top-0 z-50 w-full dark:bg-[#141b2d] bg-[#f7e6d0] px-2 py-1.5 text-slate-600 dark:text-[#f7e6d0] lg:py-2.5 sm:py-0.5 flex overflow-hidden">
      <div className="flex gap-4 px-2">
        <div
          className="ticker flex gap-2"
          style={{ animationPlayState: playState }}
        >
          {news.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-2 whitespace-nowrap px-2 py-4 text-3xl font-black uppercase text-orange-300 transition-colors hover:bg-orange-200/30"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
