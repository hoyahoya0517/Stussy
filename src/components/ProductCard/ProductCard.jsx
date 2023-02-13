import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const [filterProduct, setFilterProduct] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.image}>
        <img src={product.image[0]} onClick={handleClick} />
      </div>
      <div className={styles.name} onClick={handleClick}>
        {product.name}
      </div>
      <div className={styles.price}>₩{product.price}</div>
    </div>
  );
}

export default ProductCard;
