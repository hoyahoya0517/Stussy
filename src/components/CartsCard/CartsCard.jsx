import React, { useEffect, useState } from "react";
import CartHooks from "../../hooks/CartHooks/CartHooks";
import styles from "./CartsCard.module.css";

function CartsCard({ cart }) {
  const { ChangeCartBag, DeleteCartBag } = CartHooks();
  const [currentPrice, setCurrentPrice] = useState(
    Number(cart.price) * Number(cart.quantity)
  );
  useEffect(() => {
    setCurrentPrice(Number(cart.price) * Number(cart.quantity));
  }, [cart]);
  const handleMinus = () => {
    if (Number(cart.quantity) === 1) {
      const id = cart.id;
      const selectOption = cart.options;
      DeleteCartBag.mutate({ id, selectOption });
    } else {
      const newQuantity = Number(cart.quantity) + -1;
      const id = cart.id;
      const newCart = { ...cart, quantity: newQuantity };
      const selectOption = cart.options;
      ChangeCartBag.mutate({ id, cart: newCart, selectOption });
    }
  };
  const handlePlus = () => {
    const newQuantity = Number(cart.quantity) + 1;
    const id = cart.id;
    const newCart = { ...cart, quantity: newQuantity };
    const selectOption = cart.options;
    ChangeCartBag.mutate({ id, cart: newCart, selectOption });
  };
  return (
    <div className={styles.cart}>
      <div className={styles.image}>
        <img src={cart.image} />
      </div>
      <div className={styles.detail}>
        <div className={styles.name}>{cart.name}</div>
        <div className={styles.option}>{cart.options}</div>
        <div className={styles.bottom}>
          <div className={styles.quantity}>
            <div className={styles.minus} onClick={handleMinus}>
              -
            </div>
            <div className={styles.current}>{cart.quantity}</div>
            <div className={styles.plus} onClick={handlePlus}>
              +
            </div>
          </div>
          <div className={styles.price}>₩{currentPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default CartsCard;
