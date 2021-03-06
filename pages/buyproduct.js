import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import ProductItem from "../components/Products/ProductItem/ProductItem";
import { Loader, Modal } from "../components/export";
import styles from "../styles/buyproduct.module.css";
import Head from "next/head";
import useSession from "../hooks/useSession";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Store/cart";
import axios from "axios";

export default function Buyproduct() {
  useSession();
  const dispatch = useDispatch(cartActions);
  const { data, isValid, token } = useSelector((state) => state?.auth);
  const { cart } = useSelector((state) => state?.cart);

  const [loaderState, setLoaderState] = useState(null);
  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoaderState(true);
      const res = await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/get-cart/${data}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const adIdsArr = res.data;

      if (adIdsArr)
        adIdsArr?.forEach(async (ad) => {
          const res = await axios.get(
            `https://bechdal-api.herokuapp.com/api/v1/ads/${ad.id}`
          );

          if (res.data) dispatch(cartActions.addItem(res.data));
        });
      setLoaderState(false);
    };
    getData();
  }, [cart, data, dispatch, token]);

  const buyProduct = async (p_id, u_id, title) => {
    const { data } = await axios.get(
      `https://bechdal-api.herokuapp.com/api/v1/buy-product/${p_id}?u_id=${u_id}&title=${title}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data) {
      openModal();
      setModalData({
        title: "Ad Update!",
        text: data,
        btnText: "Close",
      });
      // removing the add from cart
      await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/remove-from-cart/${p_id}?u_id=${u_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(cartActions.removeItem(p_id));
    } else {
      openModal();
      setModalData({
        title: "Error!",
        text: "Something went wrong while buying this ad. Please try again later.",
        btnText: "Close",
      });
    }
  };

  const removeItem = async (p_id, u_id) => {
    const { data } = await axios.get(
      `https://bechdal-api.herokuapp.com/api/v1/remove-from-cart/${p_id}?u_id=${u_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (data) {
      openModal();
      setModalData({
        title: "Ad Update!",
        text: "Product Removed from cart successfully.",
        btnText: "Close",
      });
      dispatch(cartActions.removeItem(p_id));
    }
  };

  return (
    <>
      <Head>
        <title>Buy Product</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        {modalData && modalState && (
          <Modal
            title={modalData?.title}
            body={modalData?.text}
            buttonText={modalData?.btnText}
            onClick={closeModal}
          />
        )}
        <main className="container">
          {!isValid && (
            <div className="layout">
              <h2 className="error_heading">Permission Denied!!</h2>
              <p className="error_info">
                You need to login into your account to view this page. Please
                try again after login.
              </p>
            </div>
          )}
          {loaderState && (
            <div className="layout">
              <Loader text="Loading Your Cart..." />{" "}
            </div>
          )}
          {!loaderState && cart.length === 0 && (
            <div className="layout">
              <h2 className="error_heading">Cart Empty!</h2>
              <p className="error_info">Looks like your cart is empty</p>
            </div>
          )}
          <div className={styles.container}>
            <div className={styles.cart_container}>
              {!loaderState && cart.length > 0 && (
                <>
                  <div className={styles.container__title}>
                    <h1>Your Cart</h1>
                    <p>{`[${cart.length} items]`}</p>
                  </div>
                  <div className={styles.cart}>
                    {cart.length > 0 &&
                      cart.map((item) => (
                        <ProductItem
                          key={item._id}
                          Data={item}
                          option3={true}
                          buyProduct={buyProduct}
                          removeItem={removeItem}
                        />
                      ))}
                  </div>
                </>
              )}
            </div>
            {!loaderState && cart.length > 0 && (
              <div className={styles.info_container}>
                <div className={styles.container__title}>
                  <h1>How Buying Works?</h1>
                </div>
                <ul>
                  <li>
                    Once you click on buy button, your product buying process
                    will begin.
                  </li>
                  <li>
                    Later your data like, profile picture, full name, contact
                    no, city location will be shared with the seller, so that
                    seller can decide whether to sell the Ad to you.
                  </li>
                  <li>
                    The seller will contact you if he wishes to sell you the
                    product.
                  </li>
                  <li>
                    The buyer and seller need to complete the buying selling
                    process on their own.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </main>
      </Layout>
    </>
  );
}
