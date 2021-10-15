import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import btoa from "btoa";
import { VerifiedTag, Modal } from "../../export";
import { FaTrash, FaEyeSlash } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";
import { Decrypt, MoneyFormatter } from "../../../hooks/export";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../Store/cart";

const ProductItem = ({ Data, option = false, option2 = false, buyProduct }) => {
  const router = useRouter();
  const dispatch = useDispatch(cartActions);
  const [modalData, setModalData] = useState(false);
  const { data } = useSelector((state) => state?.auth);

  let imagesArr = [];

  if (Data.images)
    imagesArr = (
      <Image
        src={`data:${Data?.images[0].contentType};base64,${btoa(
          String.fromCharCode(...new Uint8Array(Data?.images[0]?.data.data))
        )}`}
        alt="product cover image"
        width="300px"
        height="280px"
        layout="responsive"
        loading="lazy"
      />
    );

  const callAPi = async (url, method, data) => {
    const res = await fetch(url, {
      method: method || "GET",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const message = await res.json();

    return message;
  };

  const updateState = async () => {
    const newValue = !Data.adActive;

    const message = await callAPi(
      `https://bechdal-api.herokuapp.com/api/v1/update-state-ad/${Data._id}`,
      "POST",
      { state: newValue }
    );
    setModalData({
      title: "Ad Update!",
      text: message,
      btnText: "Close",
    });
    setTimeout(() => {
      router.reload();
    }, 3000);
  };

  const deleteAd = async () => {
    const message = await callAPi(
      `https://bechdal-api.herokuapp.com/api/v1/ads/${Data._id}?id=${Decrypt(
        Data.userId
      )}`,
      "DELETE"
    );
    setModalData({
      title: "Ad Update!",
      text: message,
      btnText: "Close",
    });
    setTimeout(() => {
      router.reload();
    }, 3000);
  };

  const removeItem = async () => {
    const message = await callAPi(
      `https://bechdal-api.herokuapp.com/api/v1/remove-from-cart/${Data._id}?u_id=${data}`
    );
    if (message) alert("Product removed from cart successfully");
    dispatch(cartActions.removeItem(Data._id));
  };

  const handleBuy = () => {
    buyProduct(Data._id, data, Data.title);
  };

  return (
    <>
      {modalData && (
        <Modal
          title={modalData?.title}
          body={modalData?.text}
          buttonText={modalData?.btnText}
        />
      )}
      <div
        className={styles.productItem}
        style={{
          opacity: Data.adActive ? "1" : "0.5",
        }}
      >
        <>
          <div className={styles.product__img}>{imagesArr}</div>
          <div className={styles.product__info}>
            <h2 className={styles.product__heading}>
              {Data.title}
              <VerifiedTag
                message={""}
                status={Data.adStatus === "verified" ? true : false}
              />
            </h2>
            <p className={styles.product__price}>
              {MoneyFormatter(Data.price)}
            </p>
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
        </>
        <div className={styles.product__options}>
          <button type="button" className={styles.btn}>
            <Link href={`/${Data.category}/${Data._id}`} passHref>
              View
            </Link>
          </button>
          {option && (
            <>
              <button type="button" className={styles.btn}>
                <FiEdit2 style={{ color: "#b82f10" }} />
              </button>
              <button type="button" className={styles.btn} onClick={deleteAd}>
                <FaTrash style={{ color: "#b82f10" }} />
              </button>
              <button
                type="button"
                className={styles.btn}
                onClick={updateState}
              >
                <FaEyeSlash style={{ color: "#b82f10" }} />
              </button>
            </>
          )}
          {option2 && (
            <>
              <button type="button" className={styles.btn} onClick={handleBuy}>
                Buy
              </button>
              <button type="button" className={styles.btn} onClick={removeItem}>
                <FaTrash style={{ color: "#b82f10" }} />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
