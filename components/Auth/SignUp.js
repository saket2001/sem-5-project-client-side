import React, { useReducer } from "react";
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

// reducers
const nameReducer = (state, { type, payload }) => {
  if (type === "name")
    return { name: payload, isValid: payload.length > 8 ? true : false };
};

const usernameReducer = (state, { type, payload }) => {
  if (type === "username") {
    const pattern = /\d{3}/;
    return {
      username: payload,
      isValid: payload.length > 5 && pattern.test(payload) ? true : false,
    };
  }
};

const passwordReducer = (state, { type, payload }) => {
  if (type === "password") {
    const pattern = /\d{3}/;
    return {
      password: payload,
      isValid: payload.length > 8 && pattern.test(payload) ? true : false,
    };
  }
};

const emailReducer = (state, { type, payload }) => {
  if (type === "email") {
    const pattern = /\d{3}@/;
    return {
      email: payload,
      isValid: payload.length > 8 && pattern.test(payload) ? true : false,
    };
  }
};

const contactReducer = (state, { type, payload }) => {
  if (type === "contact") {
    const pattern = /\d{10}/;
    return {
      contact: payload,
      isValid: payload.length >= 10 && pattern.test(payload) ? true : false,
    };
  }
};

export default function SignUp() {
  const inputName = useRef();
  const inputUsername = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();
  const inputContact = useRef();
  const inputAddress = useRef();
  const inputState = useRef();
  const inputCity = useRef();
  const inputCode = useRef();

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    email: null,
    isValid: null,
  });
  const [nameState, nameDispatch] = useReducer(nameReducer, {
    name: null,
    isValid: null,
  });
  const [usernameState, usernameDispatch] = useReducer(usernameReducer, {
    username: null,
    isValid: null,
  });
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    password: null,
    isValid: null,
  });
  const [contactState, contactDispatch] = useReducer(contactReducer, {
    contact: null,
    isValid: null,
  });

  const formHandler = async (e) => {
    e.preventDefault();

    // submit form only if this is true
    if (
      emailState.isValid &&
      nameState.isValid &&
      passwordState.isValid &&
      contactState.isValid &&
      usernameState.isValid
    ) {
      const res = await fetch(
        "https://bechdal-api.herokuapp.com/api/v1/users/sign-up",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fullName: nameState.name,
            username: usernameState.username,
            email: emailState.email,
            password: passwordState.password,
            contact: contactState.contact,
            address: inputAddress.current.value,
            state: inputState.current.value,
            city: inputCity.current.value,
            pinCode: inputCode.current.value,
            userStatus: "unverified",
            createdAds: [],
            savedAds: [],
          }),
        }
      );

      const data = await res.json();

      console.log(data);
    }
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
      <form className={styles.form} onSubmit={formHandler}>
        <div className={styles.form__head}>
          <h1>Welcome Fellow Shopper</h1>
          <p>
            Sign up and get ready to shop many awesome products ar great deals
          </p>
        </div>
        <div className={styles.form__body}>
          <InputField
            label="Full Name"
            for="fullname"
            id="fullname"
            type="text"
            refer={inputName}
            onBlur={() =>
              nameDispatch({ type: "name", payload: inputName.current.value })
            }
          />
          {nameState.isValid === false && (
            <p className={styles.form_error}>
              Please enter a valid name of minimum length 8
            </p>
          )}
          <InputField
            label="Username"
            for="Username"
            id="Username"
            type="text"
            refer={inputUsername}
            onBlur={() =>
              usernameDispatch({
                type: "username",
                payload: inputUsername.current.value,
              })
            }
          />
          {usernameState.isValid === false && (
            <p className={styles.form_error}>
              Please enter a valid username of minimum length 5 and containing
              minimum 3 digits
            </p>
          )}
          <InputField
            label="Password"
            for="Password"
            id="Password"
            type="password"
            refer={inputPassword}
            onBlur={() =>
              passwordDispatch({
                type: "password",
                payload: inputPassword.current.value,
              })
            }
          />
          {passwordState.isValid === false && (
            <p className={styles.form_error}>
              Please enter a valid password of minimum length 8 and containing
              minimum 3 digits
            </p>
          )}
          <InputField
            label="Email"
            for="email"
            id="email"
            type="email"
            refer={inputEmail}
            onBlur={() =>
              emailDispatch({
                type: "email",
                payload: inputEmail.current.value,
              })
            }
          />
          {emailState.isValid === false && (
            <p className={styles.form_error}>
              Please enter a valid email of minimum length 8 and containing
              minimum 3 digits and @ symbol
            </p>
          )}
          <InputField
            label="Contact no"
            for="contact no"
            id="contact no"
            type="numeric"
            refer={inputContact}
            onBlur={() =>
              contactDispatch({
                type: "contact",
                payload: inputContact.current.value,
              })
            }
          />
          {contactState.isValid === false && (
            <p className={styles.form_error}>
              Please enter a valid contact number of minimum length 10
            </p>
          )}
          <InputText
            label="Address"
            for="address"
            id="address"
            rows="7"
            cols="30"
            refer={inputAddress}
          />
          <InputField
            label="State"
            for="State"
            id="State"
            type="text"
            refer={inputState}
          />
          <InputField
            label="City"
            for="City"
            id="City"
            type="text"
            refer={inputCity}
          />
          <InputField
            label="Pin Code"
            for="Pin Code"
            id="Pin Code"
            type="text"
            refer={inputCode}
          />

          <p className={styles.extra__text}>
            Add real and accurate details only as your account will be verified
            based on this details
          </p>

          <div className={styles.form__action}>
            <Button type="submit" onClick={formHandler}>
              Sign Up
            </Button>
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
