import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import logo from "../../public/main-logo.png";
import menuNav from "../../public/menu-logo.svg";
import SearchBar from "../search bar/SearchBar";
import cartLogo from "../../public/shopping-cart.png";
import userLogo from "../../public/user.png";

const Nav = () => {
  const [menuState, setMenuState] = useState(false);

  const navHandler = useCallback(() => {
    setMenuState((prevState) => !prevState);
  }, []);

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
          <p>BECHDAL.in</p>
        </div>
        {/* search bar */}
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        {/* user logo */}
        <div className={styles.user_logo}>
          <Image src={userLogo} alt="user logo" width="35px" height="35px" />
        </div>
        {/* cart logo */}
        <div className={styles.cart_logo}>
          <Image
            src={cartLogo}
            alt="cart logo"
            width="35px"
            height="35px"
          ></Image>
          <div className={styles.cart__bubble}>
            <p>0</p>
          </div>
        </div>
        {/*  */}
        <div className={styles.nav__menu_logo} onClick={navHandler}>
          <Image
            src={menuNav}
            alt="menu logo"
            width="35px"
            height="35px"
          ></Image>
        </div>
      </nav>
      <div className={styles.menu__searchBar}>
        <SearchBar />
      </div>
      {menuState && (
        <div className={styles.menu__nav__items}>
          <Link href="/" className={styles.nav__item}>
            Home
          </Link>
          <Link href="/" className={styles.nav__item}>
            Category
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
