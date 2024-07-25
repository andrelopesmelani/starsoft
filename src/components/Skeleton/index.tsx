import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Skeleton.module.scss";

const Skeleton = () => {
 

  return (
    <div
      className={styles.pulse}
      style={{ height: "450px", width: "300px", background: "#393939" }}
    >
      <motion.div
        className={styles.motion}
        initial={{ height: "8rem", opacity: 0.5 }}

        animate={{
          height: "auto",
          opacity: 1,
        }}
        transition={{ opacity: { delay: 0.5, duration: 0.4 } }}

      ></motion.div>
    </div>
  );
};

export default Skeleton;
