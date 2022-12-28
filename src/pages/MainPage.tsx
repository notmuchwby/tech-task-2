import React from "react";
import FormSection from "../sections/formSection/FormSection";
import MainSection from "../sections/mainSection/MainSection";
import NavBar from "../sections/navbar/NavBar";

const MainPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <MainSection />
      <FormSection />
    </>
  );
};

export default MainPage;
