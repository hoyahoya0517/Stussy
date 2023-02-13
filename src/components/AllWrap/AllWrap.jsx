import React from "react";
import { useNavContext } from "../../context/NavContext";
import styles from "./AllWrap.module.css";

function AllWrap({ children }) {
  const { onSideMenu, setOnSideMenu, onSideBag, setOnSideBag } =
    useNavContext();
  return (
    <div
      className={styles.allWrap}
      onClick={() => {
        console.log("전체클릭");
        setOnSideMenu(false);
        setOnSideBag(false);
      }}
    >
      {children}
    </div>
  );
}

export default AllWrap;
