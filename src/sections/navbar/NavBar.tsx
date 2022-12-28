import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { useEthers } from "@usedapp/core";

const NavBar: React.FC = () => {
  const { activateBrowserWallet, account } = useEthers();
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo}>
          <img src="#" alt="LOGO" />
        </div>
      </Link>
      {account ? (
        <div className={styles.address}>{account}</div>
      ) : (
        <button onClick={() => activateBrowserWallet()}>
          CONNECT METAMASK
        </button>
      )}
    </div>
  );
};

export default NavBar;
