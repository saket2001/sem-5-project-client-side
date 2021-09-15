import React from "react";
// import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Link from "next/link";
import InputField from "../assets/formField/InputField";
import InputText from "../assets/formField/InputText";
import Button from "../assets/button/Button";
import Image from "next/image";
import signUpLogo from "../../public/signup.svg";
import styles from "./auth.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../../store/auth";

export default function SignUp() {
  // TODO: make go back function complete
  // TODO: user input validation

  const inputName = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();

  const [stepState, setStepState] = useState(0);

  const changeStep = () => {
    setStepState((prevState) => prevState + 1);
  };

  const previousStep = () => {
    setStepState((prevState) => prevState - 1);
  };

  // steps to follow:
  // post user data via inside a function
  // check for error if any and display it
  // have a loading state once user clicks submit button

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image alt="" src={signUpLogo} height="400px" width="400px" />
      </div>
      <form className={styles.form}>
        <div className={styles.form__head}>
          <h1>Welcome Fellow Shopper</h1>
          <p>
            Sign up and get ready to shop many awesome products ar great deals
          </p>
        </div>
        <div className={styles.form__body}>
          {stepState === 0 && (
            <>
              <InputField
                label="Full Name"
                for="fullname"
                id="fullname"
                type="text"
              />
              <InputField
                label="Username"
                for="Username"
                id="Username"
                type="text"
              />

              <InputField
                label="Password"
                for="Password"
                id="Password"
                type="password"
              />
            </>
          )}
          {stepState === 1 && (
            <>
              <InputField label="Email" for="email" id="email" type="email" />
              <InputField
                label="Contact no"
                for="contact no"
                id="contact no"
                type="numeric"
              />
            </>
          )}
          {stepState === 2 && (
            <>
              <InputText
                label="Address"
                for="address"
                id="address"
                rows="7"
                cols="30"
              />
              <InputField label="State" for="State" id="State" type="text" />
              <InputField label="City" for="City" id="City" type="text" />
              <InputField
                label="Pin Code"
                for="Pin Code"
                id="Pin Code"
                type="text"
              />
            </>
          )}

          <p className={styles.extra__text}>
            Add real and accurate details only as your account will be verified
            based on this details
          </p>

          <div className={styles.form__action}>
            {stepState > 0 && <Button onClick={previousStep}>Go Back</Button>}
            {stepState < 2 && (
              <Button onClick={changeStep}>{`Next ( ${
                stepState + 1
              } of 3 )`}</Button>
            )}
            {stepState === 2 && <Button type="submit">Sign Up</Button>}
          </div>

          <hr />
          <div className={styles.form__link}>
            Already have an account ? <Link href="/sign-in">Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
