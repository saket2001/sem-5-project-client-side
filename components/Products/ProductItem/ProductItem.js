import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import btoa from "btoa";
import MoneyFormatter from "../../../hooks/MoneyFormatter";
import VerifiedTag from "../../Verified Tag/VerifiedTag";
import { FaTrash, FaEyeSlash } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import Modal from "../../modal/Modal";
import { useRouter } from "next/dist/client/router";
import Decrypt from "../../../hooks/Decrypt";

const ProductItem = ({ Data, option = false }) => {
  const router = useRouter();
  const [modalData, setModalData] = useState(false);

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
    }, 3500);
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
    }, 3500);
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
        </div>
      </div>
    </>
  );
};

export default ProductItem;
// "https://images.pexels.com/photos/5490290/pexels-photo-5490290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
