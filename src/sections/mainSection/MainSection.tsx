import React from "react";
import RoadMapStats from "../../components/roadmapStats/RoadMapStats";
import styles from "./MainSection.module.scss";
import image from "../../assets/planet.png";

const MainSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_text}>
        <div>
          <img src={image} alt="planet" />
          <h1>EXPLORE YOUR OWN PLANET IN OUR NEW METAVERSE</h1>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui harum
          voluptas iusto modi nemo perferendis a sed, pariatur culpa ipsa
          aspernatur, odio alias. Cum, culpa nisi hic expedita asperiores
          atque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          harum voluptas iusto modi nemo perferendis a sed, pariatur culpa ipsa
          aspernatur, odio alias. Cum, culpa nisi hic expedita asperiores atque?
        </p>
      </div>
      <RoadMapStats />
    </div>
  );
};

export default MainSection;
