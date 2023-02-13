import React, { useEffect } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import styles from "./Home.module.css";
import { useNavContext } from "../../context/NavContext";
import scrollLock from "scroll-lock";
function Home() {
  const { onSideMenu, onSideBag } = useNavContext();
  useEffect(() => {
    if (onSideMenu || onSideBag) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [onSideMenu, onSideBag]);
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        {cardArray.map((card) => {
          return <HomeCard key={card.name} props={card} />;
        })}
      </div>
    </div>
  );
}

const cardArray = [
  {
    name: "NEW ARRIVALS",
    url: "https://res.cloudinary.com/hoyahoya/image/upload/v1675772371/StussyClone/new_oybsdc.webp",
    cate: "new",
  },
  {
    name: "STÜSSY & NIKE AIR PENNY",
    url: "https://res.cloudinary.com/hoyahoya/image/upload/v1675772370/StussyClone/nike_eqtthm.webp",
    cate: "nike",
  },
  {
    name: "PANTS",
    url: "https://res.cloudinary.com/hoyahoya/image/upload/v1675772372/StussyClone/pants_q43xq7.webp",
    cate: "pants",
  },
  {
    name: "ACCESSORIES",
    url: "https://res.cloudinary.com/hoyahoya/image/upload/v1675772371/StussyClone/acce_c53cj4.webp",
    cate: "accessories",
  },
  {
    name: "SWEATS",
    url: "https://res.cloudinary.com/hoyahoya/image/upload/v1675772371/StussyClone/sweats_eo2axi.webp",
    cate: "sweats",
  },
  {
    name: "TOPS & SHIRTS",
    url: "https://res.cloudinary.com/hoyahoya/image/upload/v1675772371/StussyClone/tops_tv6zss.webp",
    cate: "tops",
  },
];

export default Home;
