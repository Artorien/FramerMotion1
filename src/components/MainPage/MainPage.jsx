import { motion, useMotionValue, useTransform } from "framer-motion";
import "./style.scss";
import Tesla from "../Images/Tesla.png";
import WhyUs from "../Images/whyUs.jpg";
import Globe from "../Globe/Globe";
import GoodReviews from "../Images/goodReviews.jpg";
import ExtendedContracts from "../Images/extended.jpg";
import { createContext, useEffect, useState } from "react";
import SaveMoney from "../Images/saveMoney.jpg";
import Card from "../Card/Card";

export const IsVisibleContext = createContext();

function MainPage() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [-100, 100], ["#ff008c", "#7700ff"]);
  const [reviews, setReviews] = useState(0);
  const [extendedContracts, setExtendedContracts] = useState(0);
  const [offset, setOffset] = useState(472);
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  useEffect(() => {
    if (isVisible) {
      if (reviews < 45638) {
        const interval = setInterval(() => {
          setReviews((prevReview) => Math.min(prevReview + 100, 45638));
        }, 1);

        return () => clearInterval(interval);
      }
    }
  }, [reviews, isVisible]);

  useEffect(() => {
    if (isVisible) {
      if (extendedContracts < 93) {
        const interval = setInterval(() => {
          setExtendedContracts((prevContracts) => prevContracts + 1);
          setOffset((prevOffset) => Math.max(prevOffset - 4, 80));
        }, 12);

        return () => clearInterval(interval);
      }
    }
  }, [extendedContracts, isVisible]);

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
          <IsVisibleContext.Provider value={{ isVisible, setIsVisible }}>
            <Card
              delay={0}
              image={GoodReviews}
              type={"number"}
              text1={"We received"}
              text2={"positive reviews"}
              data={reviews}
            />
            <Card
              delay={0.5}
              image={ExtendedContracts}
              type={"circle"}
              text1={"We extended"}
              text2={"of our contracts"}
              offset={offset}
              data={extendedContracts}
            />
            <Card
              delay={1}
              image={SaveMoney}
              type={"discount"}
              text1={"We give You"}
              text2={"Discount on first payment"}
            />
          </IsVisibleContext.Provider>
        </div>
      </div>
    </>
  );
}

export default MainPage;
