import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeCard.module.css";

function HomeCard({ props }) {
  const navigate = useNavigate();
  const { name, url, cate } = props;
  return (
    <div className={styles.homeCard}>
      <img
        src={url}
        onClick={() => {
          navigate(`collections/${cate}`);
        }}
      />
      <div className={styles.name}>
        <span
          onClick={() => {
            navigate(`collections/${cate}`);
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

export default HomeCard;
