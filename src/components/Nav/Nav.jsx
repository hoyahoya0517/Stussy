import React from "react";
import Stussy from "../../svg/Stussy/Stussy";
import styles from "./Nav.module.css";
import { BsList, BsSearch, BsBag } from "react-icons/bs";
import { useNavContext } from "../../context/NavContext";
import SideMenu from "../SideMenu/SideMenu";
import SideBag from "../SideBag/SideBag";
import CartHooks from "../../hooks/CartHooks/CartHooks";

function Nav() {
  const { onSideMenu, setOnSideMenu, onSideBag, setOnSideBag } =
    useNavContext();
  const {
    cartQuery: { isLoading, error, data: carts },
  } = CartHooks();
  if (isLoading) {
    return <></>;
  }
  return (
    <nav
      className={
        onSideMenu || onSideBag ? `${styles.modalOn}` : `${styles.navbar}`
      }
    >
      <div className={styles.menu}>
        <BsList
          size={22}
          onClick={() => {
            setOnSideMenu(true);
          }}
        />
        <div
          className={onSideMenu ? `${styles.sideMenuOn}` : `${styles.hidden}`}
        >
          <SideMenu />
        </div>
      </div>
      <div className={styles.logo}>
        <Stussy />
      </div>
      <div className={styles.right}>
        {/* <div className={styles.search}>
          <BsSearch size={18} />
        </div> */}
        <div className={styles.bag}>
          <BsBag
            size={18}
            onClick={() => {
              setOnSideBag(true);
            }}
            className={styles.bagIcon}
          />
          <span className={styles.cartLength}>{carts && carts.length}</span>
          <div
            className={onSideBag ? `${styles.sideBagOn}` : `${styles.hidden}`}
          >
            <SideBag carts={carts && carts} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
