// import { useRouter } from "next/router";
import Link from "next/link";
import { useRef, useState } from "react";
import InputField from "../assets/formField/InputField";
import Button from "../assets/button/Button";
import Image from "next/image";
import signInLogo from "../../public/signin.svg";
import styles from "./auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const SignIN = () => {
  const dispatch = useDispatch(authActions);
  // const router = useRouter();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const formHandler = async (e) => {
    setLoaderState(true);
    // get data from form
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // post data via api
    const res = await fetch(
      "https://bechdal-api.herokuapp.com/api/v1/users-sign-in",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const userData = await res.json();
    console.log(userData);

    // check data
    // if (userData.type) {
    //   dispatch(authActions.updateUserData(userData.data));
    //   dispatch(authActions.updateUserStatus());
    // } else {
    //   setLoaderState(false);
    //   setModalState(true);
    //   setModalData(
    //     <Modal
    //       title="Error !!"
    //       message="User login has failed.Please try again with correct details"
    //       closeOnOk={closeModal}
    //       closeModal={closeModal}
    //     />
    //   );
    // }
  };

  // "https://bechdal-api.herokuapp.com/api/v1/users-sign-in";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image alt="" src={signInLogo} height="400px" width="400px" />
        </div>
        <form className={styles.form} onSubmit={formHandler}>
          <div className={styles.form__head}>
            <h1>Welcome Back</h1>
            <p>We love seeing you coming back to our site</p>
          </div>
          <div className={styles.form__body}>
            <div className={styles.form__item}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                minLength="5"
                ref={usernameRef}
                required
              />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                type="text"
                minLength="5"
                ref={emailRef}
                required
              />
            </div>

            <div className={styles.form__item}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                minLength="8"
                autoComplete="off"
                ref={passwordRef}
                required
              />
            </div>

            <div className={styles.form__action}>
              <Button type="submit" onClick={formHandler}>
                Sign In
              </Button>
            </div>
            <hr />
            <div className={styles.form__link}>
              New here ? <Link href="/sign-up">Create a new account</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIN;
