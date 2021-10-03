import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import styles from "../styles/category.module.css";
import useSession from "../hooks/useSession";

const CategoryPage = () => {
  useSession();
  return (
    <>
      <Head>
        <title>Search here</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Head>
          <title>Categories</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.section}>
          <div className={styles.section__item}>
            <h2>Vehicles</h2>
            <Link href="/Cars">Cars</Link>
            <Link href="/Bikes">Bikes</Link>
            <Link href="/Scooters">Scooters</Link>
            <Link href="/vehiclesAccessories">Accessories</Link>

            <br />
            <h2>Mobiles</h2>
            <Link href="/Smartphones">Smartphones</Link>
            <Link href="/Tablets">Tablets</Link>
            <Link href="/Keypad-phones">Keypad phones</Link>
            <Link href="/mobilesAccessories">Accessories</Link>
          </div>

          <div className={styles.section__item}>
            <h2>Furniture</h2>
            <Link href="/Sofa-and-Dining">Sofa and Dining</Link>
            <Link href="/Beds-and-Wardrobes">Beds and Wardrobes</Link>
            <Link href="/Home-decor">Home decor</Link>
            <Link href="/Kids-furniture">Kids furniture</Link>
            <Link href="/Other-household-items">Other household items</Link>
          </div>
          <div className={styles.section__item}>
            <h2>Electronics</h2>
            <Link href="/Tvs-Videos-and-Audio">Tvs, Videos and Audio</Link>
            <Link href="/Computer-and-Laptops">Computer and Laptops</Link>
            <Link href="/Computer-accessories">Computer accessories</Link>
            <Link href="/Washing-machines">Washing machines</Link>
            <Link href="/Fridge">Fridge</Link>
            <Link href="/Ac-and-Coolers">Ac and Coolers</Link>
          </div>
          <div className={styles.section__item}>
            <h2>Books and Hobbies</h2>
            <Link href="/Textbooks-and-Reference-books">
              Textbooks and Reference books
            </Link>
            <Link href="/Reading-books">Reading books</Link>
            <Link href="/Gym-Equipments">Gym Equipments</Link>
            <Link href="/Musical-Equipments">Musical Equipments</Link>
            <Link href="/Sports-Accessories">Sports Accessories</Link>
          </div>
          <div className={styles.section__item}>
            <h2>Fashion</h2>
            <Link href="/Men">Men</Link>
            <Link href="/Woman">Woman</Link>
            <Link href="/Kids">Kids</Link>

            <br />
            <h2>Toys</h2>
            <Link href="/Boys-section">Boys section</Link>
            <Link href="/Girls-section">Girls section</Link>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default CategoryPage;
