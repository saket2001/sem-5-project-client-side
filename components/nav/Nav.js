import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import logo from "../../public/main-logo.png";
import {
  FaUser,
  FaSearch,
  FaBars,
  FaCartPlus,
  FaHome,
  FaRegEdit,
  FaList,
  FaHeadset,
  FaLock,
  FaSave,
} from "react-icons/fa";

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
          <p>
            <Link href="/">BECHDAL</Link>
          </p>
        </div>
        <div className={styles.nav__items}>
          <Link href="/">
            <a className={styles.nav__item}>Home</a>
          </Link>
          <Link href="/category">
            <a className={styles.nav__item}>Categories</a>
          </Link>
          <Link href="/sellproduct">
            <a className={styles.nav__item}>Sell</a>
          </Link>
          <Link href="/contactus">
            <a className={styles.nav__item}>Contact us</a>
          </Link>
          <Link href="/usersauth">
            <a className={styles.nav__item}>Login</a>
          </Link>
        </div>
        <div className={styles.nav__logos}>
          {/* user logo */}
          <div className={styles.user_logo} onClick={UserMenuHandler}>
            <FaUser style={{ fontSize: "26px" }} />
          </div>
          {/* search logo */}
          <div className={styles.cart_logo}>
            <Link href="/search" passHref>
              <FaSearch style={{ fontSize: "26px" }} />
            </Link>
          </div>
          {/* cart logo */}
          <div className={styles.cart_logo}>
            <FaCartPlus style={{ fontSize: "26px" }} />
            <div className={styles.cart__bubble}>
              <p>0</p>
            </div>
          </div>
          {/*  */}
          <div className={styles.nav__menu_logo} onClick={navHandler}>
            <FaBars style={{ fontSize: "26px" }} />
          </div>
        </div>
      </nav>

      {userMenuState && (
        <div className={styles.menu__nav__items}>
          <Link href="/user/myprofile" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <FaUser style={{ fontSize: "26px" }} />
              </div>
              My Profile
            </a>
          </Link>
          <Link href="/user/myads" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <FaList style={{ fontSize: "26px" }} />
              </div>
              My Ads
            </a>
          </Link>
          <Link href="/user/myfavorites" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <FaSave style={{ fontSize: "26px" }} />
              </div>
              My Favorites
            </a>
          </Link>
          <Link href="/" className={styles.nav__item}>
            <a onClick={UserMenuHandler}>
              <div className={styles.user_logo}>
                <FaLock style={{ fontSize: "26px" }} />
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
                <FaHome style={{ fontSize: "26px" }} />
              </div>
              Home
            </a>
          </Link>
          <Link
            href="/category"
            className={styles.nav__item}
            onClick={navHandler}
          >
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <FaList style={{ fontSize: "26px" }} />
              </div>
              Shop By Category
            </a>
          </Link>
          <Link
            href="/sellproduct"
            className={styles.nav__item}
            onClick={navHandler}
          >
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <FaRegEdit style={{ fontSize: "26px" }} />
              </div>
              Sell
            </a>
          </Link>
          <Link
            href="/contactus"
            className={styles.nav__item}
            onClick={navHandler}
          >
            <a onClick={navHandler}>
              <div className={styles.user_logo}>
                <FaHeadset style={{ fontSize: "26px" }} />
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
                <FaUser style={{ fontSize: "26px" }} />
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
