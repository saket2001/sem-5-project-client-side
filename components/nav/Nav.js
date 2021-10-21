import React, { useCallback, useEffect, useState } from "react";
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
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Store/auth";
import { useClearSessionStorage } from "react-use-window-sessionstorage";
import Modal from "../modal/Modal";
import { useRouter } from "next/dist/client/router";

const Nav = () => {
  const router = useRouter();
  const clearSessionStorage = useClearSessionStorage();

  // redux logic
  const dispatch = useDispatch(authActions);
  const isLoggedIn = useSelector((state) => state?.auth?.isValid);
  const userLocation = useSelector((state) => state?.auth?.location);
  const { cart } = useSelector((state) => state?.cart);
  //
  const [menuState, setMenuState] = useState(false);
  const [userMenuState, setUserMenuState] = useState(false);
  const [modalState, setModalState] = useState(null);

  // for logging out after session ends
  useEffect(() => {
    setTimeout(() => {
      LogoutHandler();
    }, 1000 * 60 * 20);
  }, []);

  const navHandler = useCallback(() => {
    setUserMenuState(false);
    setMenuState((prevState) => !prevState);
  }, []);

  const UserMenuHandler = useCallback(() => {
    setUserMenuState((prevState) => !prevState);
    setMenuState(false);
  }, []);

  const LogoutHandler = () => {
    clearSessionStorage();
    dispatch(authActions.updateStatus());
    dispatch(authActions.updateUserData(null));
    dispatch(authActions.updateToken(null));
    setModalState(true);
  };
  const goToCart = () => {
    router.push("/buyproduct");
  };

  return (
    <>
      {modalState && (
        <Modal
          title="Success"
          body="You logged out of your account successfully"
          buttonText="Close"
          onClick={() => {
            setModalState(false);
          }}
        />
      )}
      <nav className={styles.navbar}>
        <div className={styles.nav__logo}>
          <Image
            src={logo}
            alt="company logo"
            width="40px"
            height="40px"
          ></Image>
          <p>
            <Link href="/">BECHDAAL</Link>
          </p>
        </div>
        <div className={styles.nav__location}>
          <div className={styles.location_logo}>
            <FaMapMarkerAlt style={{ fontSize: "26px", marginRight: "2px" }} />
            <p>{userLocation ? userLocation : "Location unable"}</p>
          </div>
        </div>

        <div className={styles.nav__items}>
          <Link href="/">
            <a className={styles.nav__item}>Home</a>
          </Link>
          <Link href="/category">
            <a className={styles.nav__item}>Categories</a>
          </Link>
          {isLoggedIn && (
            <Link href="/sellproduct">
              <a className={styles.nav__item}>Sell</a>
            </Link>
          )}
          <Link href="/contactus">
            <a className={styles.nav__item}>Contact us</a>
          </Link>
          {!isLoggedIn && (
            <Link href="/sign-in">
              <a className={styles.nav__item}>Login</a>
            </Link>
          )}
        </div>
        <div className={styles.nav__logos}>
          {/* user logo */}
          {isLoggedIn && (
            <div className={styles.user_logo} onClick={UserMenuHandler}>
              <FaUser style={{ fontSize: "26px" }} />
            </div>
          )}
          {/* search logo */}
          {/* <div className={styles.cart_logo}>
            <Link href="/search" passHref>
              <FaSearch style={{ fontSize: "26px" }} />
            </Link>
          </div> */}
          {/* cart logo */}
          {isLoggedIn && (
            <div className={styles.cart_logo} onClick={goToCart}>
              <FaCartPlus style={{ fontSize: "26px" }} />
              {cart?.length > 0 && (
                <div className={styles.cart__bubble}>
                  <p>{cart?.length}</p>
                </div>
              )}
            </div>
          )}
          {/*  */}
          <div className={styles.nav__menu_logo} onClick={navHandler}>
            <FaBars style={{ fontSize: "26px" }} />
          </div>
        </div>
      </nav>

      {userMenuState && isLoggedIn && (
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
            <a onClick={LogoutHandler}>
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
          <div
            className={styles.nav__item}
            style={{ background: "#cacacab0", borderRadius: "10px" }}
          >
            <div className={styles.location_logo}>
              <FaMapMarkerAlt
                style={{ fontSize: "26px", marginRight: "2px" }}
              />
              <p>{userLocation ? userLocation : "Location unable"}</p>
            </div>
          </div>
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
          {isLoggedIn && (
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
          )}
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
          {!isLoggedIn && (
            <Link
              href="/sign-in"
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
          )}
        </div>
      )}
    </>
  );
};

export default Nav;
