// import { useRouter } from "next/router";
import Link from "next/link";
import { useRef, useState } from "react";
import InputField from "../assets/formField/InputField";
import Button from "../assets/button/Button";
import Image from "next/image";
import signInLogo from "../../public/signin.svg";
import styles from "./auth.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../../store/auth";

const SignIN = () => {
  const UsernameRef = useRef();
  const PasswordRef = useRef();
  const EmailRef = useRef();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image alt="" src={signInLogo} height="400px" width="400px" />
        </div>
        <form className={styles.form}>
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
                ref={UsernameRef}
                onChange={() => console.log(UsernameRef.current.value)}
                required
              />
            </div>
            <div className={styles.form__item}>
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                type="text"
                minLength="5"
                ref={EmailRef}
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
                ref={PasswordRef}
                required
              />
            </div>

            <div className={styles.form__action}>
              <Button type="submit">Sign In</Button>
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
