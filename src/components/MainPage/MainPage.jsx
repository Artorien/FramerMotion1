import { motion } from "framer-motion";
import "./style.scss";

function MainPage() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 1 }}
      dragConstraints={{ left: -100, right: 100 }}
      className="animatedBlock"
    >
      <p>Hello world! I am here</p>
    </motion.div>
  );
}

export default MainPage;
