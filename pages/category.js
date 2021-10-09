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
        <title>Categories</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <main className={styles.section}>
          <div className={styles.section__item}>
            <h2>Vehicles</h2>
            <Link href="/Cars">Cars</Link>
            <Link href="/Bikes">Bikes</Link>
            <Link href="/Scooters">Scooters</Link>
            <Link href="/Vehicles-Accessories">Accessories</Link>

            <br />
            <h2>Mobiles</h2>
            <Link href="/Smartphones">Smartphones</Link>
            <Link href="/Tablets">Tablets</Link>
            <Link href="/Keypad-Phone">Keypad phones</Link>
            <Link href="/Mobile-Accessories">Accessories</Link>
          </div>

          <div className={styles.section__item}>
            <h2>Furniture</h2>
            <Link href="/Sofa-and-Dining">Sofa and Dining</Link>
            <Link href="/Beds-and-Wardrobes">Beds and Wardrobes</Link>
            <Link href="/Home-Decor">Home decor</Link>
            <Link href="/Kids-Furniture">Kids furniture</Link>
            <Link href="/Other-Household-Items">Other household items</Link>
          </div>
          <div className={styles.section__item}>
            <h2>Electronics</h2>
            <Link href="/Tvs-Videos-and-Audio">Tvs, Videos and Audio</Link>
            <Link href="/Computer-and-Laptops">Computer and Laptops</Link>
            <Link href="/Computer-Accessories">Computer accessories</Link>
            <Link href="/Camera-and-Lenses">Camera and Lenses</Link>
            <Link href="/Washing-Machines">Washing machines</Link>
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
            <Link href="/Mens-Clothing">Men</Link>
            <Link href="/Womans-Clothing">Woman</Link>
            <Link href="/Kids-Clothing">Kids</Link>

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
