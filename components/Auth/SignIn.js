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
  const [state, setState] = useState("sign-in");

  const inputName = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();

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
            <InputField
              label="Username"
              for="username"
              id="username"
              type="text"
              ref={inputName}
            />

            <InputField
              label="Password"
              for="Password"
              id="Password"
              type="password"
              ref={inputPassword}
            />

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
