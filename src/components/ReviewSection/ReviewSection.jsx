import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { items } from "../DataSets/Data";
import { useState } from "react";
import "./style.scss";
import { div } from "framer-motion/client";

function ReviewSection() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <LayoutGroup>
      <div className="flex flex-wrap gap-5 px-[30px]">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            className={`review-card ${item.idForCss}`}
            onClick={() => setSelectedId(item.id)}
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            layoutId={selectedId}
            className="review-card-selected absolute left-[35%] top-[50px] overflow-hidden"
          >
            <motion.h5>{selectedItem.subtitle}</motion.h5>
            <motion.h2>{selectedItem.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default ReviewSection;
