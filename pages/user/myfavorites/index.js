import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../../styles/user.module.css";
import { Loader, ProductList, Layout } from "../../../components/export";
import { useSession } from "../../../hooks/export";
import { useSelector } from "react-redux";
import axios from "axios";

const MyFavoritesPage = () => {
  useSession();
  const LoggedInId = useSelector((state) => state?.auth?.data);
  const isLoggedIn = useSelector((state) => state?.auth?.isValid);
  const token = useSelector((state) => state?.auth?.token);

  const [isLoading, setLoading] = useState(null);
  const [AdData, setAdData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let adArr = [];
      setLoading(true);
      console.log(LoggedInId);
      // fetching created ad ids
      const res = await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/get-favourites/${LoggedInId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const adIdArr = await res.data.data;

      // if (adIdArr.length === 0) return setAdData([]);

      // fetching ads from gotten ad ids
      for (let i = 0; i < adIdArr.length; i++) {
        axios
          .get(`https://bechdal-api.herokuapp.com/api/v1/ads/${adIdArr[i].id}`)
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
    if (LoggedInId) {
      fetchData();
    }
  }, [LoggedInId, token]);

  return (
    <>
      <Head>
        <title>My Favorites</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {!isLoggedIn && (
        <div className="container">
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
                <h1 className="error_heading">Oops No Ads Found!</h1>
                <p className="error_info">
                  It looks like you haven&apos;t saved any ads yet. What are you
                  waiting for, lets get started.
                </p>
              </div>
            )}
            {!isLoading && AdData?.length > 0 && (
              <>
                <h1 className={styles.heading}>Ads You Saved</h1>

                <ProductList dataList={AdData} option3={true} />
              </>
            )}
          </div>
        </Layout>
      )}
    </>
  );
};

export default MyFavoritesPage;
