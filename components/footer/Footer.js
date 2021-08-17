import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import instalogo from "../../public/Insta_logo1.png";
import facebooklogo from "../../public/facebook_logo.png";
import twitterlogo from "../../public/twiiter_logo.png";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.Aboutus}>
          <h4>BechDaal</h4>
          <p>4041 Cunningham Court Farmington Hills MI Michigan 48335.</p>
          <a href="/">page link</a>
        </div>
        <div className={styles.featuredpro}>
          <h4>Featured Products</h4>
          <ul>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Bikes</a>
            </li>
            <li>
              <a href="/">Cars</a>
            </li>
            <li>
              <a href="/">Books</a>
            </li>
            <li>
              <a href="/">Furniture</a>
            </li>
          </ul>
        </div>
        <div className={styles.Contactus}>
          <h4>Contact us</h4>
          <ul>
            <li>BechDaal@gmail.com</li>
            <li>Service no: 022-1234567/89</li>
          </ul>
        </div>
        <div className={styles.Social}>
          <Image
            className={styles.img}
            src={instalogo}
            alt="Insta logo"
            width="65x"
            height="65px"
          />
          <Image
            className={styles.img}
            src={facebooklogo}
            alt="facebook logo"
            width="65px"
            height="65px"
          ></Image>
          <Image
            className={styles.img}
            src={twitterlogo}
            alt="twitter logo"
            width="65px"
            height="65px"
          ></Image>
        </div>
      </div>
      <div>
        <div className={styles.copyright}>
          &copy;Copyright 2021.All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
