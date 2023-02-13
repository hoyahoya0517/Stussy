import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { changeCart, getProduct } from "../../api/firebase";
import styles from "./Products.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductImgCard from "../../components/ProductImgCard/ProductImgCard";
import Options from "../../components/Options/Options";
import { useUserContext } from "../../context/UserContext";
import { useNavContext } from "../../context/NavContext";
import CartHooks from "../../hooks/CartHooks/CartHooks";
import scrollLock from "scroll-lock";

export const OptionContext = createContext();
function Products() {
  const { onSideMenu, onSideBag } = useNavContext();
  useEffect(() => {
    if (onSideMenu || onSideBag) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [onSideMenu, onSideBag]);
  const { id } = useParams();
  const { uid } = useUserContext();
  const { setOnSideBag } = useNavContext();
  const {
    isLoading,
    error,
    data: product,
  } = useQuery(["product", id], () => getProduct(id), {});
  const [selectOption, setSelectOption] = useState();
  const { ChangeCartBag } = CartHooks();
  const handleAddToBag = () => {
    if (!uid) {
      alert("로그인이 필요합니다");
      return;
    }
    const cartImg = product.image[0];
    const cart = {
      id: id,
      image: cartImg,
      name: product.name,
      options: selectOption,
      price: product.price,
      quantity: "1",
    };
    ChangeCartBag.mutate(
      { id, cart, selectOption },
      {
        onSuccess: () => {
          setOnSideBag(true);
        },
      }
    );
  };
  if (isLoading) {
    return <></>;
  }
  return (
    <OptionContext.Provider value={{ selectOption, setSelectOption }}>
      <div className={styles.products}>
        <div className={styles.image}>
          <ProductImgCard images={product.image} />
        </div>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>₩{product.price}</div>
        <div className={styles.options}>
          <Options options={product.options} />
        </div>
        <div className={styles.bag}>
          <button onClick={handleAddToBag}>ADD TO BAG</button>
        </div>
        <div className={styles.detail}>
          <p className={styles.seven}>7만원 이상 구매시 무료배송</p>
          <span>{product.description}</span>
        </div>
      </div>
    </OptionContext.Provider>
  );
}

export default Products;
