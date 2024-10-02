import { motion, AnimatePresence } from "framer-motion";
import { items } from "../DataSets/Data";
import { useState } from "react";
import "./style.scss";

function ReviewSection() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div className="review-section">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className="review-card"
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div layoutId={selectedId} className="review-card-selected">
            <motion.h5>{selectedItem.subtitle}</motion.h5>
            <motion.h2>{selectedItem.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ReviewSection;
