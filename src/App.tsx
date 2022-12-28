import React, { useState } from "react";
import "./App.scss";
import "./assets/BebasNeue-Regular.ttf";
import Modal from "./components/modal/Modal";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PersonalInfoPage from "./pages/personalInfo/PersonalInfoPage";

function App() {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<PersonalInfoPage />} />
      </Routes>

      {active ? <Modal active={active} setActive={setActive} /> : null}
    </div>
  );
}

export default App;
