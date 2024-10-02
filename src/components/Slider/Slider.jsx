import { useState } from "react";
import { imagesArray } from "../Images/imagesArray";
import { carNames } from "../Images/imagesArray";
import { wrap, motion, AnimatePresence } from "framer-motion";
import "./style.scss";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    zIndex: 0,
  }),
};

const swipeConfidence = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Slider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, imagesArray.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 },
            opacity: { duration: 0.5 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          className="w-full absolute flex justify-center items-center flex-col p-[40px] z-0"
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidence) {
              paginate(1);
            } else if (swipe > swipeConfidence) {
              paginate(-1);
            }
          }}
        >
          <div className="w-[900px] h-auto overflow-hidden flex z-0">
            <img
              className="w-full h-full object-cover"
              src={imagesArray[imageIndex]}
              alt={carNames[imageIndex]}
              draggable={true}
            />
          </div>
          <h1 className="mt-[10px] text-xl">{carNames[imageIndex]}</h1>
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute top-[50%] right-[10px] next z-4"
        onClick={() => paginate(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
      <div
        className="absolute top-[50%] left-[10px] prev z-4"
        onClick={() => paginate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>
    </>
  );
}

export default Slider;
