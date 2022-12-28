import React from "react";
import styles from "./Modal.module.scss";
interface IModalInterface {
  active: boolean;
  setActive: (value: boolean) => void;
}

const Modal: React.FC<IModalInterface> = ({ active, setActive }) => {
  return (
    <div className={styles.container} onClick={() => setActive(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h1>METAMASK EXTENSION</h1>
        <p>
          To work with our application, you have <br />
          to install the{" "}
          <a
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
            rel="noreferrer"
          >
            Metamask browser extension
          </a>
        </p>
        <button onClick={() => setActive(false)}>SKIP THIS STEP</button>
      </div>
    </div>
  );
};

export default Modal;
