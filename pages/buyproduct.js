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
  const { data, isValid } = useSelector((state) => state?.auth);
  const { cart } = useSelector((state) => state?.cart);

  const [loaderState, setLoaderState] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoaderState(true);
      const res = await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/get-cart/${data}`
      );

      const adIdsArr = res.data;

      if (adIdsArr)
        adIdsArr?.forEach(async (ad) => {
          const res = await axios.get(
            `http://localhost:5000/api/v1/ads/${ad.id}`
          );

          if (res.data) dispatch(cartActions.addItem(res.data));
        });
      setLoaderState(false);
    };
    getData();
  }, [cart, data, dispatch]);

  const buyProduct = async (p_id, u_id, title) => {
    const { data } = await axios.get(
      `https://bechdal-api.herokuapp.com/api/v1/buy-product/${p_id}?u_id=${u_id}&title=${title}`
    );
    if (data) alert(data);

    // removing the add from cart
    await axios.get(
      `https://bechdal-api.herokuapp.com/api/v1/remove-from-cart/${p_id}?u_id=${u_id}`
    );
    dispatch(cartActions.removeItem(p_id));
  };

  return (
    <>
      <Head>
        <title>Buy Product</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
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
                          option2={true}
                          buyProduct={buyProduct}
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
