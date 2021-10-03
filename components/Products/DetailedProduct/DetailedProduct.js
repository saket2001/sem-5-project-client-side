import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Button from "../../assets/button/Button";
import styles from "./DetailedProduct.module.css";
import VerifiedTag from "../../Verified Tag/VerifiedTag";
import { FaHeart, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Decrypt from "../../../hooks/Decrypt";
import Loader from "../../Loader/Loader";
import MoneyFormatter from "../../../hooks/MoneyFormatter";

const DetailedProduct = () => {
  const router = useRouter();
  const p_id = router.query.productID;

  const [loaderState, setLoaderState] = useState("");
  const [dataSet, setDataSet] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoaderState(true);
      const { data } = await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/ads/${p_id}`
      );

      if (data) {
        setDataSet(data);
        setLoaderState(false);
      }
    };
    getData();
  }, [p_id]);

  const goBack = useCallback(() => {
    router.replace(`/${router.query.productType}`);
  }, [router]);

  let images = [];
  if (dataSet.images)
    images = dataSet?.images?.map((img, i) => (
      <Image
        key={i}
        src={`data:${img?.contentType};base64,${btoa(
          String.fromCharCode(...new Uint8Array(img?.data.data))
        )}`}
        alt="product image"
        height="500px"
        width="400px"
        layout="responsive"
        loading="lazy"
      />
    ));

  return (
    <div className="container">
      <div className={styles.backButton}>
        <Button type="button" onClick={goBack}>
          <FaArrowLeft />
          Go Back
        </Button>
      </div>
      {loaderState && <Loader text="Getting Ad for you..." />}
      {!loaderState && (
        <div className={styles.detailedProduct}>
          <div className={styles.product__left}>
            <div>{images[0]}</div>
            <div>{images[1]}</div>
            <div>{images[2]}</div>
            <div>{images[3]}</div>
          </div>

          <div className={styles.product__right}>
            <VerifiedTag
              message={dataSet.adStatus + " Ad"}
              status={dataSet.adStatus === "verified" ? true : false}
            />
            <p className={styles.product__category}>{dataSet.category}</p>

            <h2 className={styles.product__name}>{dataSet.title}</h2>
            <p className={styles.product__description}>{dataSet.description}</p>
            <p className={styles.product__price}>
              {MoneyFormatter(dataSet.price)}
            </p>
            <div className={styles.product__buttons}>
              <Button type="button">Buy now</Button>
              <Button type="button" styles={styles.saveBtn}>
                <FaHeart style={{ fontSize: "22px" }} />
                Save
              </Button>
            </div>
            <div className={styles.seller__container}>
              <p>Posted By</p>
              <h2>
                {Decrypt(dataSet.Username?.toString()) ||
                  "Seller Name Not Available"}
              </h2>
              <p>Posted On</p>
              <h2>{new Date(dataSet.adDate).toDateString()}</h2>
              <p>AD Address</p>
              <h2>{dataSet.state}</h2>
              <h2>{dataSet.city}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedProduct;
