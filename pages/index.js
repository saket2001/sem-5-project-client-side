import Head from "next/head";
import Link from "next/link";
import Slider from "../components/slider/Slider";
import ProductsBanner from "../components/Products/ProductsBanner/ProductsBanner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
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
        <div className={styles.categories}>
          <h2>Categories</h2>
          <ul>
            <Link href="/">
              <li>Smartphones</li>
            </Link>
            <Link href="/">
              <li>Clothes</li>
            </Link>
            <Link href="/">
              <li>Furniture</li>
            </Link>
          </ul>
        </div>
        <ProductsBanner heading="Featured Products" />
        <div></div>
        <ProductsBanner heading="On Sale Products" />
      </main>
    </>
  );
}
