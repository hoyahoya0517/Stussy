import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import styles from "./User.module.css";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsVimeo,
  BsYoutube,
} from "react-icons/bs";
import { logout } from "../../api/firebase";
import scrollLock from "scroll-lock";
import { useNavContext } from "../../context/NavContext";

function User() {
  const { onSideMenu, onSideBag } = useNavContext();
  useEffect(() => {
    if (onSideMenu || onSideBag) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [onSideMenu, onSideBag]);
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className={styles.user}>
      <div className={styles.top}>ACCOUNT DASHBOARD</div>
      <div className={styles.menu}>
        <span className={styles.line1}>내 계정</span>
        <span>주소록</span>
        <span>문의</span>
        <span
          className={styles.line2}
          onClick={() => {
            logout();
            setUser(null);
          }}
        >
          로그아웃
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.record}>주문 기록</div>
        <div className={styles.accountInfo}>
          <span>계정 정보</span>
          <div className={styles.name}>
            <div className={styles.nameImg}>
              <img src={user && user.photoURL} />
            </div>
            <span>{user && user.displayName}</span>
          </div>
          <span>{user && user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
