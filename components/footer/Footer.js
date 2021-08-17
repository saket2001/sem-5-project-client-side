import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import instalogo from "../../public/Insta_logo1.png";
import facebooklogo from "../../public/facebook_logo.png";
import twitterlogo from "../../public/twiiter_logo.png";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.footer__item}>
          <h4>BechDaal</h4>
          <p>4041 Cunningham Court Farmington Hills MI Michigan 48335.</p>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.footer__item}>
          <h4>Our Services</h4>
          <ul>
            <li>
              <Link href="/category">Shop By Category</Link>
            </li>
            <li>
              <Link href="/sellproduct">Sell product</Link>
            </li>
            <li>
              <Link href="/contactus">Contact us</Link>
            </li>
            <li>
              <Link href="/usersauth">Log in</Link>
            </li>
            <li>
              <Link href="/">Our Policy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h4>Contact us</h4>
          <ul>
            <li>BechDaal@gmail.com</li>
            <li>Service no: 022-1234567/89</li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h4>Follow us</h4>
          <div className={styles.footer__icons}>
            <Image src={instalogo} alt="Insta logo" width="45x" height="45px" />
            <Image
              src={facebooklogo}
              alt="facebook logo"
              width="45px"
              height="45px"
            ></Image>
            <Image
              src={twitterlogo}
              alt="twitter logo"
              width="45px"
              height="45px"
            ></Image>
          </div>
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
