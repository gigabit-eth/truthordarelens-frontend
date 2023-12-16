// import React, { useState, useEffect } from "react";

// type TickerProps = {
//   news: string[];
// };

// const Ticker = ({ news }: TickerProps) => {
//   //   const [index, setIndex] = useState(0);

//   //   useEffect(() => {
//   //     const interval = setInterval(() => {
//   //       setIndex((prevIndex) => (prevIndex + 1) % news.length);
//   //     }, 5000); // Change news item every 2 seconds

//   //     return () => clearInterval(interval); // Clean up on unmount
//   //   }, [news]);

//   //   return (
//   //     <div className="ticker">
//   //       <p>{news[index]}</p>
//   //     </div>
//   //   );

//   return (
//     <div className="ticker">
//       <div className="ticker__item">
//         {news.map((item, index) => (
//           <span key={index}>{item} &nbsp;&nbsp;&nbsp;&nbsp;</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Ticker;

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// // NOTE: Change this date to whatever date you want to countdown to :)
// const COUNTDOWN_FROM = "2024-10-01";

// const SECOND = 1000;
// const MINUTE = SECOND * 60;
// const HOUR = MINUTE * 60;
// const DAY = HOUR * 24;

// const StickyCountdown = () => {
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const [remaining, setRemaining] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     intervalRef.current = setInterval(handleCountdown, 1000);

//     return () => clearInterval(intervalRef.current || undefined);
//   }, []);

//   const handleCountdown = () => {
//     const end = new Date(COUNTDOWN_FROM);

//     const now = new Date();

//     const distance = +end - +now;

//     const days = Math.floor(distance / DAY);
//     const hours = Math.floor((distance % DAY) / HOUR);
//     const minutes = Math.floor((distance % HOUR) / MINUTE);
//     const seconds = Math.floor((distance % MINUTE) / SECOND);

//     setRemaining({
//       days,
//       hours,
//       minutes,
//       seconds,
//     });
//   };

//   return (
//     <div className="sticky left-0 right-0 top-0 z-50 w-full dark:bg-[#141b2d] bg-[#FCE5C6] px-2 py-0.5 text-slate-600 dark:text-[#FDF2D8] lg:py-2.5">
//       <div className="mx-auto flex w-fit max-w-5xl flex-wrap items-center justify-center gap-x-4 text-xs md:text-sm">
//         <CountdownItem num={remaining.days} text="days" />
//         <CountdownItem num={remaining.hours} text="hours" />
//         <CountdownItem num={remaining.minutes} text="minutes" />
//         <CountdownItem num={remaining.seconds} text="seconds" />
//       </div>
//     </div>
//   );
// };

// const CountdownItem = ({ num, text }: { num: number; text: string }) => {
//   return (
//     <div className="flex w-fit items-center justify-center gap-1.5 py-2">
//       <div className="relative w-full overflow-hidden text-center">
//         <AnimatePresence mode="popLayout">
//           <motion.span
//             key={num}
//             initial={{ y: "100%" }}
//             animate={{ y: "0%" }}
//             exit={{ y: "-100%" }}
//             transition={{ ease: "backIn", duration: 0.75 }}
//             className="block font-mono text-sm font-semibold md:text-base"
//           >
//             {num}
//           </motion.span>
//         </AnimatePresence>
//       </div>
//       <span>{text}</span>
//     </div>
//   );
// };

// export default StickyCountdown;

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
    }, 5000); // Change play state every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="sticky left-0 right-0 top-0 z-50 w-full dark:bg-[#141b2d] bg-[#FCE5C6] px-2 py-4 text-slate-600 dark:text-[#FDF2D8] lg:py-2.5">
      <div className="mx-auto flex w-fit max-w-5xl flex-wrap items-center justify-center gap-x-4 text-xs md:text-sm">
        <div className="ticker" style={{ animationPlayState: playState }}>
          {news.map((item, index) => (
            <div key={index} className="ticker__item">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
