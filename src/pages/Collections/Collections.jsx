import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api/firebase";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Collections.module.css";
import scrollLock from "scroll-lock";
import { useNavContext } from "../../context/NavContext";

function Collections() {
  const { onSideMenu, onSideBag } = useNavContext();
  useEffect(() => {
    if (onSideMenu || onSideBag) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [onSideMenu, onSideBag]);
  const { cate } = useParams();
  const [topCate, setTopCate] = useState(cate);

  useEffect(() => {
    getProducts();
    if (cate === "new") {
      setTopCate("NEW ARRIVALS");
    } else {
      setTopCate(cate.toUpperCase());
    }
  }, [cate]);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["collections"], () => getProducts(), {});
  if (isLoading) {
    return <></>;
  }
  return (
    <div className={styles.collections}>
      <span className={styles.top}>{topCate}</span>
      <div className={styles.main}>
        {products.map((product) => {
          if (cate === "new" || cate === "all") {
            return <ProductCard key={product.id} product={product} />;
          } else {
            if (cate === product.category) {
              return <ProductCard key={product.id} product={product} />;
            } else {
              return;
            }
          }
        })}
      </div>
    </div>
  );
}

export default Collections;
