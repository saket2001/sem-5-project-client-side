import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import Slider from "../components/slider/Slider";
import ProductsBanner from "../components/Products/ProductsBanner/ProductsBanner";
import aboutUs from "../public/aboutus.jpg";
import aboutUs1 from "../public/aboutUs1.svg";
import aboutUs2 from "../public/aboutUs2.svg";
import aboutUs3 from "../public/aboutUs3.svg";

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
        </div>
      </div>
      <div className={styles.about__service}>
        {/* card 1 */}
        <div className={styles.card}>
          <Image src={aboutUs1} alt="" width="100px" height="100px" />
          <h2>Verified People</h2>
          <p>
            At our site we only allow users who are verified to post their ads
            which are thoroughly checked in person by our department
          </p>
        </div>
        {/* card 2 */}
        <div className={styles.card}>
          <Image src={aboutUs2} alt="" width="100px" height="100px" />
          <h2>5 days easy return</h2>
          <p>
            If you face any issues with the product you bought you can easily
            contact us and get it returned with your 100% money back
          </p>
        </div>
        {/* card 3 */}
        <div className={styles.card}>
          <Image src={aboutUs3} alt="" width="100px" height="100px" />
          <h2>24/7 customer service</h2>
          <p>
            We always try to offer our best services to each customer in solving
            their issues sas soon as possible
          </p>
        </div>
      </div>
      {/* instructions */}
      <div className={styles.instructions__container}>
        <div className={styles.block}>
          <h1>How Our System Works</h1>
          <p>Knowing this small things will help you shop better</p>
        </div>
        {/* card 1 */}
        <div className={styles.block}>
          <div className={styles.block__no}>1.</div>
          <h2>User account</h2>
          <p>
            Having an account is a must for buying and selling products. Your
            account will get an verified status which will help other users to
            shop securely from you
          </p>
        </div>
        {/* card 2 */}
        <div className={styles.block}>
          <div className={styles.block__no}>2.</div>
          <h2>Selling any product</h2>
          <p>
            When you sell something your product will be revived by our
            department in person and then only it will be made available to
            other users to purchase
          </p>
        </div>
        {/* card 3 */}
        <div className={styles.block}>
          <div className={styles.block__no}>3.</div>
          <h2>While buying</h2>
          <p>
            We only allow verified products for sale but always verify your
            product thoroughly before buying and don&apos;t forget to chat with
            the user first
          </p>
        </div>
      </div>
      {/*  */}
      <ProductsBanner heading="Featured Products" />
      {/* <ProductsBanner heading="On Sale Products" /> */}
    </Layout>
  );
}
