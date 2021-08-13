import Head from "next/head";
import Link from "next/link";
import Slider from "../components/slider/Slider";
import ProductsBanner from "../components/Products/ProductsBanner/ProductsBanner";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";

export default function Home() {
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
      <Slider />
      <main className={styles.main}>
        <ProductsBanner heading="Featured Products" />
        <div></div>
        <ProductsBanner heading="On Sale Products" />
      </main>
    </Layout>
  );
}
