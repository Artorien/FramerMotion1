import { motion, useMotionValue, useTransform } from "framer-motion";
import "./style.scss";

function MainPage() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [-100, 100], ["#ff008c", "#7700ff"]);

  return (
    <>
      <div className="hWrapper">
        <h2>
          This text is
          <div className="wrapper">
            <div className="container">
              <div className="item item1">amazing</div>
              <div className="item item2">stunning</div>
              <div className="item item3">fantastic</div>
              <div className="item item4">amazing</div>
            </div>
          </div>
          and this is why You will like it!
        </h2>
      </div>
    </>
  );
}

export default MainPage;
