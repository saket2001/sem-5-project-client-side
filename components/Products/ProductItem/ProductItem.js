import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./product.module.css";

const ProductItem = ({ Data }) => {
  return (
    <Link href={`${Data.category}/${Data._id}`} passHref>
      <div className={styles.productItem}>
        <div className={styles.product__img}>
          <Image
            src="https://images.pexels.com/photos/5490290/pexels-photo-5490290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="product image"
            width="300px"
            height="280px"
          />
        </div>
        <div className={styles.product__info}>
          <h2 className={styles.product__heading}>{Data.title}</h2>
          <p className={styles.product__price}>{Data.price} ₹</p>
          <div className={styles.product__details}>
            <p className={styles.product__country}>
              {Data.state}, {Data.city}
            </p>
          </div>
          <div className={styles.product__details}>
            <p className={styles.product__date}>Posted on {Data.adDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
