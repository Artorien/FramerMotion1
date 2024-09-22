import { motion, useMotionValue, useTransform } from "framer-motion";
import "./style.scss";
import Tesla from "../Images/Tesla.png";
import Globe from "../Globe/Globe";

function MainPage() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [-100, 100], ["#ff008c", "#7700ff"]);

  return (
    <>
      <div className="grid grid-cols-[1fr_4fr_1fr] justify-center pt-40">
        <motion.div
          className="hWrapper col-start-2 h-full h-96 flex justify-between items-center"
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
          className="col-start-2 h-96 py-8 aboutUsContainer mt-28 rounded-xl pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-[1fr_1fr] border-dotted border-b-2 pb-20">
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
          <div>
            <p>hjjwhbcbwjhbce</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default MainPage;
