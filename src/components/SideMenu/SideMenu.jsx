import React from "react";
import { useNavContext } from "../../context/NavContext";
import styles from "./SideMenu.module.css";
import { BsXLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  const { setOnSideMenu } = useNavContext();
  return (
    <div className={styles.sideMenu}>
      <div className={styles.x}>
        <BsXLg
          size={18}
          style={{ color: "rgb(73, 73, 73)" }}
          onClick={() => {
            setOnSideMenu(false);
          }}
        />
      </div>
      <div className={styles.middle}>
        <span>SHOP</span>
        <div className={styles.shopWrap}>
          <span
            onClick={() => {
              navigate("collections/new");
              setOnSideMenu(false);
            }}
          >
            NEW
          </span>
          <span
            onClick={() => {
              navigate("collections/tees");
              setOnSideMenu(false);
            }}
          >
            TEES
          </span>
          <span
            onClick={() => {
              navigate("collections/sweats");
              setOnSideMenu(false);
            }}
          >
            SWEATS
          </span>
          <span
            onClick={() => {
              navigate("collections/overdyed");
              setOnSideMenu(false);
            }}
          >
            OVERDYED
          </span>
          <span
            onClick={() => {
              navigate("collections/outerwear");
              setOnSideMenu(false);
            }}
          >
            OUTERWEAR
          </span>
          <span
            onClick={() => {
              navigate("collections/tops");
              setOnSideMenu(false);
            }}
          >
            TOPS & SHIRTS
          </span>
          <span
            onClick={() => {
              navigate("collections/knits");
              setOnSideMenu(false);
            }}
          >
            KNITS
          </span>
          <span
            onClick={() => {
              navigate("collections/pants");
              setOnSideMenu(false);
            }}
          >
            PANTS
          </span>
          <span
            onClick={() => {
              navigate("collections/shorts");
              setOnSideMenu(false);
            }}
          >
            SHORTS
          </span>
          <span
            onClick={() => {
              navigate("collections/headwear");
              setOnSideMenu(false);
            }}
          >
            HEADWEAR
          </span>
          <span
            onClick={() => {
              navigate("collections/accessories");
              setOnSideMenu(false);
            }}
          >
            ACCESSORIES
          </span>
          <span
            onClick={() => {
              navigate("collections/eyewear");
              setOnSideMenu(false);
            }}
          >
            EYEWEAR
          </span>
          <span
            onClick={() => {
              navigate("collections/all");
              setOnSideMenu(false);
            }}
          >
            ALL
          </span>
        </div>
      </div>
      <div className={styles.middle2}>
        <span>COUNTRY</span>
        <span
          onClick={() => {
            setOnSideMenu(false);
            navigate("account");
          }}
        >
          ACCOUNT
        </span>
        <span>CONTACT</span>
        <span>FEATURES</span>
        <span>CHAPTERS</span>
        <span className={styles.news}>NEWSLETTER</span>
      </div>
      <div className={styles.bottom}>
        <input type="text" placeholder="E-MAIL" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default SideMenu;
