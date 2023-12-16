import React, { useState, useEffect } from "react";

type TickerProps = {
  news: string[];
};

const Ticker = ({ news }: TickerProps) => {
  //   const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % news.length);
  //     }, 5000); // Change news item every 2 seconds

  //     return () => clearInterval(interval); // Clean up on unmount
  //   }, [news]);

  //   return (
  //     <div className="ticker">
  //       <p>{news[index]}</p>
  //     </div>
  //   );

  return (
    <div className="ticker">
      <div className="ticker__item">
        {news.map((item, index) => (
          <span key={index}>{item} &nbsp;&nbsp;&nbsp;&nbsp;</span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
