import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import ProductList from "../../../components/Products/ProductList/ProductList";
import styles from "../../../styles/user.module.css";
import Loader from "../../../components/Loader/Loader";
import axios from "axios";
import useSession from "../../../hooks/useSession";
import { useSelector } from "react-redux";

const MyAdPage = () => {
  useSession();
  const LoggedInId = useSelector((state) => state?.auth?.data);
  const isLoggedIn = useSelector((state) => state?.auth?.isValid);

  const [isLoading, setLoading] = useState(null);
  const [AdData, setAdData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let adArr = [];
      setLoading(true);
      // fetching created ad ids
      const res = await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/user-ads/${LoggedInId}`
      );
      const adIdArr = await res.data;

      // if (adIdArr.length === 0) return setAdData([]);

      // fetching ads from gotten ad ids
      for (let i = 0; i < adIdArr.length; i++) {
        axios
          .get(`https://bechdal-api.herokuapp.com/api/v1/ads/${adIdArr[i]}`)
          .then((adData) => {
            if (adData.data)
              setAdData((prevState) => {
                if (prevState) return [...prevState, adData.data];
              });
          })
          .catch((err) => console.log(err));
      }

      if (adArr) setAdData(adArr);
      setLoading(false);
    };
    fetchData();
  }, [LoggedInId]);

  return (
    <>
      <Head>
        <title>My Ads</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {!isLoggedIn && (
        <div className="error_box">
          <h2 className="error_heading">Permission Denied!!</h2>
          <p className="error_info">
            You need to login into your account to view this page.Please try
            again after login.
          </p>
        </div>
      )}
      {isLoggedIn && (
        <Layout>
          <div className={styles.container}>
            {isLoading && <Loader text="Getting your posted ads" />}
            {/* when nothing to show */}
            {!isLoading && AdData?.length < 1 && (
              <div className="error_box">
                <h1 className="error_heading">Oops No Ads Found !</h1>
                <p className="error_info">
                  It looks like you haven&apos;t posted any ads yet. What are
                  you waiting for, lets get started.
                </p>
              </div>
            )}
            {!isLoading && AdData?.length > 0 && (
              <>
                <h1 className={styles.heading}>Ads You Posted</h1>

                <ProductList dataList={AdData} option={true} option2={true} />
              </>
            )}
          </div>
        </Layout>
      )}
    </>
  );
};

export default MyAdPage;
