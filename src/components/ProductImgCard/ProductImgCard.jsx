import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./ProductImgCard.module.css";

function ProductImgCard({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className={styles.ProductImgCard}>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div key={image} className={styles.slider}>
              <img src={image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductImgCard;
