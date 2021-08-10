import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import logo from "../../public/main-logo.png";
import menuNav from "../../public/menu-logo.svg";
import cartLogo from "../../public/shopping-cart.png";
import userLogo from "../../public/user.png";
import categoryLogo from "../../public/category.png";
import sellLogo from "../../public/sell.png";
import homeLogo from "../../public/home.svg";
import contactLogo from "../../public/contact.png";
import loginLogo from "../../public/signin.png";
import searchLogo from "../../public/search.svg";
import Modal from "../modal/Modal";

const Nav = () => {
  const [menuState, setMenuState] = useState(false);
  const [modalState, setModalState] = useState(false);

  const showModal = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);

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
            width="40px"
            height="40px"
          ></Image>
          <p>BECHDAL</p>
        </div>
        <div className={styles.nav__items}>
          {/* search logo */}
          <div className={styles.cart_logo}>
            <Link href="/search" passHref>
              <Image
                src={searchLogo}
                alt="menu logo"
                width="30px"
                height="30px"
              ></Image>
            </Link>
          </div>
          {/* cart logo */}
          <div className={styles.cart_logo} onClick={showModal}>
            <Image
              src={cartLogo}
              alt="cart logo"
              width="30px"
              height="30px"
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
              width="30px"
              height="30px"
            ></Image>
          </div>
        </div>
      </nav>

      {menuState && (
        <div className={styles.menu__nav__items}>
          <Link href="/" className={styles.nav__item}>
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={userLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              Welcome, User
            </a>
          </Link>
          <Link href="/" className={styles.nav__item}>
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={homeLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              Home
            </a>
          </Link>
          <Link
            href="/contactus"
            className={styles.nav__item}
            onClick={navHandler}
          >
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={categoryLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              Category
            </a>
          </Link>
          <Link
            href="/sellproduct"
            className={styles.nav__item}
            onClick={navHandler}
          >
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={sellLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              Sell
            </a>
          </Link>
          <Link href="/" className={styles.nav__item} onClick={navHandler}>
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={contactLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              Contact us
            </a>
          </Link>
          <Link
            href="/usersauth"
            className={styles.nav__item}
            onClick={navHandler}
          >
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={loginLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              Log in
            </a>
          </Link>
        </div>
      )}
      {modalState && (
        <Modal
          title="Your Cart"
          body="No items in cart yet"
          buttonText="Close"
        />
      )}
    </>
  );
};

export default Nav;
