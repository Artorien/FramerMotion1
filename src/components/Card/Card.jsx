import { motion } from "framer-motion";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { IsVisibleContext } from "../MainPage/MainPage";

function Card(properties) {
  const component = useRef(null);
  const { isVisible, setIsVisible } = useContext(IsVisibleContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (component.current) {
      observer.observe(component.current);
    }

    return () => {
      if (component.current) {
        observer.unobserve(component.current);
      }
    };
  });

  return (
    <motion.div
      className="flex rounded-2xl reviews items-center px-[20px] py-[40px] text-3xl text-center flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: properties.delay }}
      ref={component}
    >
      <p className="pb-[20px] text-3xl">{properties.text1}</p>
      {properties.type == "circle" ? (
        <div className="relative w-[160px] h-[160px] p-[20px] rounded-full outer">
          <div className="w-[120px] h-[120px] rounded-full inner fill-none flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className="absolute top-0 left-0 stroke-slate-800 stroke-[20px] circle"
              style={{ strokeDashoffset: properties.offset }}
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <p>{properties.data}%</p>
          </div>
        </div>
      ) : properties.type == "number" ? (
        <span className="text-5xl py-[20px] text-slate-800">
          {properties.data}
        </span>
      ) : (
        <p className="text-5xl text-slate-800">35%</p>
      )}
      <p className="py-[20px] text-3xl">{properties.text2}</p>
      {properties.type == "discount" ? (
        <img className="w-[90%]" src={properties.image}></img>
      ) : (
        <img src={properties.image}></img>
      )}
    </motion.div>
  );
}

export default Card;
