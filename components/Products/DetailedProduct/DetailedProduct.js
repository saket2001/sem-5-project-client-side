import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import styles from "./DetailedProduct.module.css";
import { FaHeart, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { MoneyFormatter, useSession } from "../../../hooks/export";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Loader, VerifiedTag, Button, ImageSlider } from "../../export";

const DetailedProduct = () => {
  useSession();
  const router = useRouter();
  const p_id = router.query.productID;

  const { isValid: isLoggedIn, data: id } = useSelector((state) => state?.auth);

  const [loaderState, setLoaderState] = useState("");
  const [dataSet, setDataSet] = useState("");
  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState(false);

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
    router.back();
  }, [router]);

  let images = [];
  if (dataSet?.images)
    images = dataSet?.images?.map((img, i) => (
      <Image
        key={i}
        src={`data:${img?.contentType};base64,${btoa(
          String.fromCharCode(...new Uint8Array(img?.data.data))
        )}`}
        alt="product image"
        height="400px"
        width="400px"
        layout="responsive"
        loading="lazy"
      />
    ));

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const addToCart = async () => {
    if (!isLoggedIn) {
      openModal();
      return setModalData({
        title: "Error!",
        body: "Please log in your account to add this product to cart.",
        buttonText: "Close",
      });
    }

    const res = await axios.get(
      `https://bechdal-api.herokuapp.com/api/v1/add-to-cart/${dataSet._id}?u_id=${id}`
    );

    const { data } = res;

    console.log(data);

    if (data) {
      openModal();
      setModalData({
        title: "Success!",
        body: "Added product to your cart. Taking you to your cart once you close this message.",
        buttonText: "Close",
      });

      router.push("/buyproduct");
    }
  };

  return (
    <>
      {modalState && (
        <Modal
          title={modalData?.title}
          body={modalData?.body}
          buttonText={modalData?.buttonText}
          onClick={closeModal}
        />
      )}
      <div className="container">
        <div className={styles.backButton}>
          <Button type="button" onClick={goBack}>
            <FaArrowLeft />
            Go Back
          </Button>
        </div>
        {loaderState && (
          <div className="layout">
            <Loader text="Getting Ad for you..." />{" "}
          </div>
        )}
        {!loaderState && (
          <div className={styles.detailedProduct}>
            <div className={styles.product__left}>
              <ImageSlider Data={images} />
            </div>

            <div className={styles.product__right}>
              <VerifiedTag
                message={dataSet.adStatus + " Ad"}
                status={dataSet.adStatus === "verified" ? true : false}
              />
              <p className={styles.product__category}>{dataSet.category}</p>

              <h2 className={styles.product__name}>{dataSet.title}</h2>
              <p className={styles.product__description}>
                {dataSet.description}
              </p>
              <p className={styles.product__price}>
                {MoneyFormatter(dataSet.price)}
              </p>
              <div className={styles.product__buttons}>
                <Button type="button" onClick={addToCart}>
                  Add To Cart
                </Button>
                <Button type="button" styles={styles.saveBtn}>
                  <FaHeart style={{ fontSize: "22px" }} />
                  Save
                </Button>
              </div>
              <div className={styles.seller__container}>
                <p>Posted By</p>
                <h2>{dataSet?.fullName || "Seller Name Not Available"}</h2>
                <p>Posted On</p>
                <h2>{new Date(dataSet.adDate).toDateString()}</h2>
                <p>AD Address</p>
                <h2>
                  {dataSet.state}, {dataSet.city}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailedProduct;
