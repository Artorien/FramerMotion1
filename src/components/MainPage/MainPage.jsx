import { motion, useMotionValue, useTransform } from "framer-motion";
import "./style.scss";
import Tesla from "../Images/Tesla.png";
import WhyUs from "../Images/whyUs.jpg";
import Globe from "../Globe/Globe";
import GoodReviews from "../Images/goodReviews.jpg";
import ExtendedContracts from "../Images/extended.jpg";
import { useEffect, useState } from "react";
import SaveMoney from "../Images/saveMoney.jpg";

function MainPage() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [-100, 100], ["#ff008c", "#7700ff"]);
  const [reviews, setReviews] = useState(0);
  const [extendedContracts, setExtendedContracts] = useState(0);
  const [offset, setOffset] = useState(472);

  useEffect(() => {
    if (reviews < 45638) {
      const interval = setInterval(() => {
        setReviews((prevReview) => Math.min(prevReview + 100, 45638));
      }, 1);

      return () => clearInterval(interval);
    }
  }, [reviews]);

  useEffect(() => {
    if (extendedContracts < 93) {
      const interval = setInterval(() => {
        setExtendedContracts((prevContracts) => prevContracts + 1);
        setOffset((prevOffset) => Math.max(prevOffset - 4, 80));
      }, 12);

      return () => clearInterval(interval);
    }
  }, [extendedContracts]);

  return (
    <>
      <div className="grid grid-cols-[1fr_4fr_1fr] justify-center pt-40">
        <motion.div
          className="hWrapper col-start-2 h-96 flex justify-between items-center"
          grid-col
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="font-light, text-3xl">
              We provide
              <div className="wrapper overflow-hidden h-10 inline-grid mx-2">
                <div className="container">
                  <div className="item item1">amazing</div>
                  <div className="item item2">reliable</div>
                  <div className="item item3">fantastic</div>
                  <div className="item item4">amazing</div>
                </div>
              </div>
              cars around the world
            </h2>
          </div>
          <div className="w-9/12 h-full overflow-hidden relative">
            <img
              className="w-full object-cover right-[-32px] absolute top-0"
              src={Tesla}
            ></img>
          </div>
        </motion.div>
        <motion.div
          className="col-start-2 aboutUsContainer mt-28 rounded-xl pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-[1fr_1fr] pb-20">
            <div className="col-start-1 border-r-2 flex justify-center">
              <Globe></Globe>
            </div>
            <div className="col-start-2 flex justify-center flex-col items-center">
              <div className="w-8/12 flex justify-center flex-col">
                <h2 className="text-3xl pb-2">About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, sed. Saepe, reprehenderit architecto! Veniam
                  ullam laudantium voluptatem. Quis optio voluptate dolorum
                  corrupti! Dolor sequi quia ipsam soluta tenetur minima
                  repellendus?
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="grid col-start-2 grid-cols-[1fr_1fr] py-20 border-dotted border-y-2">
          <div className="text-[150px] font-bold text-gray-200 col-start-1 flex justify-start leading-none">
            <p className="">Why Choose Us?</p>
          </div>
          <div className="col-start-2 flex justify-center items-center">
            <img className="w-[30rem]" src={WhyUs}></img>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr] justify-center gap-32 mt-[8rem] col-start-2">
          <div className="flex flex-col rounded-2xl reviews items-center justify-center px-[20px] py-[40px] text-3xl text-center">
            <p>
              We received
              <br />
            </p>
            <span className="text-5xl py-[20px] text-slate-800">{reviews}</span>
            <p className="text-3xl pb-[10px]">positive reviews.</p>
            <img src={GoodReviews}></img>
          </div>
          <div className="flex rounded-2xl reviews items-center px-[20px] py-[40px] text-3xl text-center flex-col">
            <p className="pb-[20px] text-3xl">We extended</p>
            <div className="relative w-[160px] h-[160px] p-[20px] rounded-full outer">
              <div className="w-[120px] h-[120px] rounded-full inner fill-none flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="160px"
                  height="160px"
                  className="absolute top-0 left-0 stroke-slate-800 stroke-[20px] circle"
                  style={{ strokeDashoffset: offset }}
                >
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#e91e63" />
                      <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                </svg>
                <p>{extendedContracts}%</p>
              </div>
            </div>
            <p className="py-[20px] text-3xl">of our contracts</p>
            <img src={ExtendedContracts}></img>
          </div>
          <div className="flex rounded-2xl reviews px-[20px] items-center py-[40px] text-3xl text-center flex-col">
            <p className="pb-[20px] text-3xl">We give You</p>
            <p className="text-5xl text-slate-800">35%</p>
            <p className="py-[20px] text-3xl">Discount on first payment</p>
            <img className="w-[90%]" src={SaveMoney}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
