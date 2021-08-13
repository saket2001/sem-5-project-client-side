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
import contentLogo from "../../public/content.png";
import saveLogo from "../../public/save.png";
import lockLogo from "../../public/lock.png";

const Nav = () => {
  const [menuState, setMenuState] = useState(false);
  const [userMenuState, setUserMenuState] = useState(false);

  const navHandler = useCallback(() => {
    setUserMenuState(false);
    setMenuState((prevState) => !prevState);
  }, []);

  const UserMenuHandler = useCallback(() => {
    setUserMenuState((prevState) => !prevState);
    setMenuState(false);
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
          {/* user logo */}
          <div className={styles.user_logo} onClick={UserMenuHandler}>
            <Image src={userLogo} alt="user logo" width="30px" height="30px" />
          </div>
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
          <div className={styles.cart_logo}>
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

      {userMenuState && (
        <div className={styles.menu__nav__items}>
          <Link href="/user/myprofile" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={userLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              My Profile
            </a>
          </Link>
          <Link href="/user/myads" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={contentLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              My Ads
            </a>
          </Link>
          <Link href="/user/myfavorites" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={saveLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              My Favorites
            </a>
          </Link>
          <Link href="/" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <Image
                  src={lockLogo}
                  alt="user logo"
                  width="28px"
                  height="28px"
                />
              </div>
              Logout
            </a>
          </Link>
        </div>
      )}

      {menuState && (
        <div className={styles.menu__nav__items}>
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
          <Link href="/cars" className={styles.nav__item} onClick={navHandler}>
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
    </>
  );
};

export default Nav;
