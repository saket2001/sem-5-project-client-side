import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import ProductsBanner from "../components/Products/ProductsBanner/ProductsBanner";
import aboutUs from "../public/aboutus.jpg";
import useSession from "../hooks/useSession";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";

export default function Home({ ads }) {
  useSession();
  const dispatch = useDispatch(authActions);
  const [AdData, setAdData] = useState("");

  // getting user location
  useLocation().then((data) => {
    dispatch(authActions.updateUserLocation(data?.city?.name));
  });
  const userLocation = useSelector((state) => state.auth.location);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/ad-near-by/${userLocation}`
      );
      setAdData(res.data);
    };
    fetchData();
  }, [userLocation]);

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Buy and sell second hand used products for great deals"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.cover}>
        <div className={styles.cover__content}>
          <h2 className={styles.content__title}>
            Buying & Selling Just Got Easier
          </h2>
          <p className={styles.content__small}>
            Explore Wide Range Of Products{" "}
          </p>
        </div>
      </div>
      {/* about us info */}
      <div className={styles.about__us}>
        <Image src={aboutUs} alt="" width="350px" height="300px" />
        <div className={styles.about__content}>
          <h1>About Us</h1>
          <p>
            Bechdal is an online platform for selling and buying used products
            from another people at affordable and cheap price.You can buy and
            sell all kinds of product here. Our departments provides services
            like verifying all product before making them available for buying,
            verifying new users, assistance in buying process and always active
            customer service
          </p>
          <Link href="/about">
            <a className="link" style={{ color: "red" }}>
              Read more
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.products__banner}>
        <div className={styles.product__banner1} id="banner1">
          <div className={styles.banner__content}>
            <h2 className={styles.banner__title}>Good quality furniture</h2>
            <Link href="/category">
              <a>Shop now</a>
            </Link>
          </div>
        </div>
        <div className={styles.product__banner2} id="banner2">
          <div className={styles.banner__content}>
            <h2 className={styles.banner__title}>New and Serviced Bikes</h2>
            <Link href="/category">
              <a>Shop now</a>
            </Link>
          </div>
        </div>
        <div className={styles.product__banner3} id="banner3">
          <div className={styles.banner__content}>
            <h2 className={styles.banner__title}>Latest Electronics</h2>
            <Link href="/category">
              <a>Shop now</a>
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <ProductsBanner heading="Featured Ads" dataList={ads} />
      <ProductsBanner heading="Ads From Your City" dataList={AdData} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://bechdal-api.herokuapp.com/api/v1/featured-ads"
  );

  const data = await res.json();

  return {
    props: {
      ads: data,
    },
  };
}
