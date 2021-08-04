import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import logo from "../../public/main-logo.png";
import menuNav from "../../public/menu-logo.svg";

const Nav = () => {
  const [menuState, setMenuState] = useState(false);

  const navHandler = useCallback(() => {
    setMenuState((prevState) => !prevState);
  });

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav__logo}>
          <Image
            src={logo}
            alt="company logo"
            width="50px"
            height="50px"
          ></Image>
          <p>BECHDAL</p>
        </div>
        <div className={styles.nav__items}>
          <Link href="/" className={styles.nav__item}>
            Home
          </Link>
          <Link href="/sell" className={styles.nav__item}>
            Sell
          </Link>
          <Link href="/" className={styles.nav__item}>
            Contact us
          </Link>
          <Link href="/" className={styles.nav__item}>
            Sign in
          </Link>
          <Link href="/" className={styles.nav__item}>
            Sign up
          </Link>
        </div>
        <div className={styles.nav__menu_logo} onClick={navHandler}>
          <Image
            src={menuNav}
            alt="menu logo"
            width="30px"
            height="30px"
          ></Image>
        </div>
      </nav>
      {menuState && (
        <div className={styles.menu__nav__items}>
          <Link href="/" className={styles.nav__item}>
            Home
          </Link>
          <Link href="/sell" className={styles.nav__item}>
            Sell
          </Link>
          <Link href="/" className={styles.nav__item}>
            Contact us
          </Link>
          <Link href="/" className={styles.nav__item}>
            Sign in
          </Link>
          <Link href="/" className={styles.nav__item}>
            Sign up
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
