import React, { useEffect, useState } from "react";
import styles from "./SideBag.module.css";
import { useNavContext } from "../../context/NavContext";
import { BsXLg } from "react-icons/bs";
import CartsCard from "../CartsCard/CartsCard";
import { useUserContext } from "../../context/UserContext";
import { onClickPayment } from "../../api/iAmPort";

function SideBag({ carts }) {
  const { uid } = useUserContext();
  const { setOnSideBag } = useNavContext();
  const [allPrice, setAllPrice] = useState(0);
  useEffect(() => {
    const currentAllPrice =
      carts &&
      carts.reduce((prev, curr) => {
        return prev + Number(curr.price) * curr.quantity;
      }, 0);
    setAllPrice(currentAllPrice);
  }, [carts]);
  const handlePay = () => {
    if (!uid) {
      alert("로그인이 필요합니다");
    } else {
      onClickPayment(allPrice);
    }
  };
  return (
    <div className={styles.sideBag}>
      <div className={styles.top}>
        <p className={styles.tango}>SHOPPING BAG</p>
        <div className={styles.x}>
          <BsXLg
            size={18}
            style={{ color: "rgb(73, 73, 73)" }}
            onClick={() => {
              setOnSideBag(false);
            }}
          />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.cards}>
          <span className={styles.needLogin}>
            {!uid && "로그인이 필요합니다"}
          </span>
          {carts &&
            carts.map((cart) => {
              return (
                <CartsCard key={`${cart.id}+${cart.options}`} cart={cart} />
              );
            })}
        </div>
        <div className={styles.detail}>
          <span className={styles.seven}>
            7만원 이상 무료배송 / 제외가 적용됩니다.
          </span>
          <div className={styles.allPrice}>
            <span>총 상품금액</span>
            <span>₩{allPrice}</span>
          </div>
          <span className={styles.next}>
            배송비는 다음 단계에서 적용됩니다.
          </span>
        </div>
        <button onClick={handlePay}>주문하기</button>
      </div>
    </div>
  );
}

export default SideBag;
