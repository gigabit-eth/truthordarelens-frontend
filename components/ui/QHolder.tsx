import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const ShuffleCards = () => {
  const dragProgress = useMotionValue(0);
  const [order, setOrder] = useState(["front", "middle", "back"]);

  const handleDragEnd = () => {
    const x = dragProgress.get();
    if (x <= -50) {
      const orderCopy = [...order];
      if (orderCopy.length > 0) {
        const lastElement = orderCopy.pop();
        if (lastElement) {
          orderCopy.unshift(lastElement);
          setOrder(orderCopy);
        }
      }
    }
  };

  useEffect(() => {
    const FIVE_SECONDS = 5000;

    // Automatically shuffle the list every 5 seconds, so long
    // as it isn't being dragged
    const intervalRef = setInterval(() => {
      const x = dragProgress.get();
      if (x === 0) {
        setOrder((pv) => {
          const orderCopy = [...pv];
          const lastElement = orderCopy.pop();
          if (lastElement) {
            orderCopy.unshift(lastElement);
          }
          return orderCopy;
        });
      }
    }, FIVE_SECONDS);

    return () => clearInterval(intervalRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid place-content-center bg-transparent px-8 py-12 lg:py-20 md:py-10 sm:py-8 text-gray-50">
      <motion.div
        whileTap={{ scale: 0.985 }}
        className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]"
      >
        <Card
          imgUrl="https://i.pravatar.cc/300"
          width={350}
          height={450}
          testimonial="What's something in your fridge right now that should probably be thrown away?"
          author="@jenny"
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[0]}
        />
        <Card
          imgUrl="https://i.pravatar.cc/300"
          width={350}
          height={450}
          testimonial="What time period in history do you find most interesting?"
          author="@lloyd"
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[1]}
        />
        <Card
          imgUrl="https://i.pravatar.cc/300"
          width={350}
          height={450}
          testimonial="What would make you lie for your friend?"
          author="@truthordare"
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[2]}
        />
      </motion.div>
    </div>
  );
};

const Card = ({
  handleDragEnd,
  dragProgress,
  testimonial,
  position,
  imgUrl,
  author,
  width,
  height,
}: {
  handleDragEnd: () => void;
  dragProgress: MotionValue;
  testimonial: string;
  position: string;
  imgUrl: string;
  author: string;
  width: number;
  height: number;
}) => {
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);

  dragX.onChange((latest) => {
    // When component first mounts, dragX will be a percentage
    // due to us setting the initial X value in the animate prop.
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      // Default back to 0 so that setInterval can continue
      dragProgress.set(0);
    }
  });

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
        x: dragX,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-0 border-[#A79E97] dark:border-slate-900 bg-[#E6E2D0]/90 dark:bg-slate-700/80 bg-noise-100 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Image
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-[#A79E97] dark:border-slate-800 bg-[#E6E2D0] object-cover"
        width={width}
        height={height}
      />
      <span className="text-center text-lg italic text-[#142CD4] dark:text-white">
        {testimonial}
      </span>
      <span className="text-center text-sm font-medium text-[#D739D4] dark:text-[#f6dbbd]">
        {author}
      </span>
    </motion.div>
  );
};

export default ShuffleCards;
