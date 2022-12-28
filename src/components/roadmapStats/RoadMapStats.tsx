import React from "react";
import styles from "./RoadMapStats.module.scss";

const RoadMapStats: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>ROADMAP STATS</p>
      <div className={styles.stats}>
        <div>
          <p className={styles.numberInfo}>12,345</p>
          <p className={styles.someInfo}>LOREM IPSUM DOLOR</p>
        </div>
        <div>
          <p className={styles.numberInfo}>12,345</p>
          <p className={styles.someInfo}>LOREM IPSUM DOLOR</p>
        </div>
        <div>
          <p className={styles.numberInfo}>12,345</p>
          <p className={styles.someInfo}>LOREM IPSUM DOLOR</p>
        </div>
      </div>
    </div>
  );
};

export default RoadMapStats;
