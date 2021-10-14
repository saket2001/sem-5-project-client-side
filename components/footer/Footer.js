import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.footer__item}>
          <h4>Bechdaal</h4>
          <ul>
            <li>
              <p>4041 Cunningham Court Farmington Hills, Mumbai, India</p>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
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
              <Link href="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link href="/sign-up">Sign up</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__item}>
          <h4>Contact us</h4>
          <ul>
            <li>
              <a href="mailto:bechdaal@gmail.com">bechdaal@gmail.com</a>
            </li>
            <li>Contact no: 022-123456789</li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.copyright}>
          &copy;Copyright 2021. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
