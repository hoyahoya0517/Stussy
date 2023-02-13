import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsVimeo,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.footer}>
      <div className={styles.detail}>
        <div className={styles.top}>
          <span
            onClick={() => {
              navigate("/account");
            }}
          >
            ACCOUNT
          </span>
          <span>CONTACT</span>
          <span>CHAPTERS</span>
          <span>FEATURES</span>
          <span className={styles.news}>NEWSLETTER</span>
        </div>
        <div className={styles.bottom}>
          <input type="text" placeholder="E-MAIL" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className={styles.detail2}>
        <div className={styles.icon}>
          <BsInstagram size={13} />
          <BsTwitter size={13} />
          <BsFacebook size={13} />
          <BsVimeo size={13} />
          <BsYoutube size={13} />
        </div>
        <div className={styles.copy}>
          <span>© 2023 STÜSSY</span>
        </div>
        <div className={styles.company}>
          <span>
            상호: KOREA TRIBE, INC. | 대표: GEONHO LEE | 사업자등록번호:
            561-87-00715 | 주소: 서울특별시 강남구 대치동 942 해성빌딩 |
            통신판매신고번호: 제 2018 - 서울서초 - 0860 호 [사업자정보확인] |
            전화: 00-30832-10322 | 문의: hoyahoya0517@naver.com |
            개인정보관리책임자: KOREA TRIBE, INC. | 개인정보취급방침
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
