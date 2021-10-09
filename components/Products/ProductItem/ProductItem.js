import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import btoa from "btoa";
import MoneyFormatter from "../../../hooks/MoneyFormatter";
import VerifiedTag from "../../Verified Tag/VerifiedTag";

const ProductItem = ({ Data }) => {
  let imagesArr = [];
  if (Data.images)
    imagesArr = Data?.images?.map((img, i) => (
      <Image
        key={i}
        src={`data:${img?.contentType};base64,${btoa(
          String.fromCharCode(...new Uint8Array(img?.data.data))
        )}`}
        alt="product cover image"
        width="300px"
        height="280px"
        layout="responsive"
        loading="lazy"
      />
    ));

  return (
    <Link href={`/${Data.category}/${Data._id}`} passHref>
      <div className={styles.productItem}>
        <div className={styles.product__img}>{imagesArr[0]}</div>
        <div className={styles.product__info}>
          <h2 className={styles.product__heading}>
            {Data.title}
            <VerifiedTag
              message={""}
              status={Data.adStatus === "verified" ? true : false}
            />
          </h2>
          <p className={styles.product__price}>{MoneyFormatter(Data.price)}</p>
          <div className={styles.product__details}>
            <p className={styles.product__country}>
              {Data.state}, {Data.city}
            </p>
          </div>
          <div className={styles.product__details}>
            <p className={styles.product__date}>
              Posted on <b>{new Date(Data.adDate).toDateString()}</b>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
// "https://images.pexels.com/photos/5490290/pexels-photo-5490290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
