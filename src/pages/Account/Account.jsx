import React, { useEffect, useRef, useState } from "react";
import styles from "./Account.module.css";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsVimeo,
  BsYoutube,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { login, login2, login3 } from "../../api/firebase";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import scrollLock from "scroll-lock";
import { useNavContext } from "../../context/NavContext";

function Account() {
  const accountRef = useRef();
  const { onSideMenu, onSideBag, navRef } = useNavContext();
  useEffect(() => {
    if (onSideMenu || onSideBag) {
      scrollLock.addScrollableSelector(navRef);
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [onSideMenu, onSideBag]);
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  useEffect(() => {
    if (user) {
      navigate("/user");
    }
  }, [user]);
  return (
    <div className={styles.account} ref={accountRef}>
      <div className={styles.top}>ACCOUNT</div>
      <div className={styles.login}>
        <div className={styles.tango}>로그인</div>
        <div className={styles.google}>
          <FcGoogle size={50} />
        </div>
        <button
          onClick={() => {
            login((currUser) => {
              setUser(currUser);
            });
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Account;
