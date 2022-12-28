import React from "react";
import NavBar from "../../sections/navbar/NavBar";
import styles from "./PersonalInfoPage.module.scss";
import image from "../../assets/planet.png";
import { useParams } from "react-router-dom";
import { useGetPersonalInfoQuery } from "../../features/api/dataApi";

const PersonalInfoPage: React.FC = () => {
  let { id } = useParams();
  const { data } = useGetPersonalInfoQuery(id);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>PERSONAL DATA</h1>
          <p>NAME</p>
          <p className={styles.info}>{data?.username.toUpperCase()}</p>
          <p>EMAIL</p>
          <p className={styles.info}>{data?.email.toUpperCase()}</p>
          <p>WALLET</p>
          <p className={styles.info}>{data?.address?.toUpperCase()}</p>
        </div>
        <div>
          <img src={image} alt="planet" />
        </div>
      </div>
    </>
  );
};

export default PersonalInfoPage;
