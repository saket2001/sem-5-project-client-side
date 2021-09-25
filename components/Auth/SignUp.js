import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Link from "next/link";
import Button from "../assets/button/Button";
import Image from "next/image";
import signUpLogo from "../../public/signup.svg";
import styles from "./auth.module.css";
import Loader from "../Loader/Loader";
import Modal from "../modal/Modal";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth";

export default function SignUp() {
  // redux
  const dispatch = useDispatch(authActions);
  const router = useRouter();

  const inputName = useRef();
  const inputUsername = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();
  const inputContact = useRef();
  const inputAddress = useRef();
  const inputState = useRef();
  const inputCity = useRef();
  const inputCode = useRef();

  const [loaderState, setLoaderState] = useState(null);
  const [modalData, setModalData] = useState(null);

  const formHandler = async (e) => {
    e.preventDefault();

    setLoaderState(true);
    const userData = {
      fullName: inputName.current.value,
      username: inputUsername.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      contact: inputContact.current.value,
      address: inputAddress.current.value,
      state: inputState.current.value,
      city: inputCity.current.value,
      pinCode: inputCode.current.value,
    };
    console.log(userData);
    // checking if entered email is already entered in db
    const emailRes = await fetch(
      `https://bechdal-api.herokuapp.com/api/v1/check-email/${inputEmail.current.value}`
    );

    const emailData = await emailRes.json();

    // if user exists with mail entered then show error msg
    if (emailData) {
      setLoaderState(false);
      setModalData({
        title: "User Already Exists",
        text: "Entered Email is already in use by another user. Please use another email id.",
        btnText: "close",
      });
      // else if doesn't exists then send to db
    } else {
      const res = await fetch(
        "https://bechdal-api.herokuapp.com/api/v1/user-sign-up",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
      console.log(data);

      if (data) {
        // storing user id in redux
        dispatch(authActions.updateUserData(data._id));
        dispatch(authActions.updateStatus());

        setLoaderState(false);
        setModalData({
          title: "New User Created",
          text: "Your Account will go under inspection for verified status, then only you can shop from another users or sell products. \n Thank You ",
          btnText: "Close",
        });
        // push to home screen
        router.replace("/");
      } else {
        setLoaderState(false);
        setModalData({
          title: "Error in account creation",
          text: "Sorry for inconvenience caused, but Some error occurred while creating your account. \n Please try again later.",
          btnText: "Close",
        });
      }
    }
  };

  return (
    <>
      {!loaderState && modalData && (
        <Modal
          title={modalData?.title}
          body={modalData?.text}
          buttonText={modalData?.btnText}
        />
      )}
      <div className="signIn_container">
        {loaderState && (
          <Loader text="Creating your account..." textColour="#FFf" />
        )}
        {!loaderState && (
          <div className={styles.container}>
            <div className={styles.image}>
              <Image alt="" src={signUpLogo} height="400px" width="400px" />
            </div>
            <form className={styles.form} onSubmit={formHandler}>
              <div className={styles.form__head}>
                <h1>Welcome Fellow Shopper</h1>
                <p>
                  Sign up and get ready to shop many awesome products ar great
                  deals
                </p>
              </div>

              <div className={styles.form__body}>
                <div className={styles.form__item}>
                  <label htmlFor="fullname">Full Name</label>
                  <input id="fullname" type="text" ref={inputName} required />
                </div>
                <div className={styles.form__item}>
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    ref={inputUsername}
                    required
                  />
                </div>
                <div className={styles.form__item}>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    ref={inputPassword}
                    minLength="8"
                    required
                  />
                </div>
                <div className={styles.form__item}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" ref={inputEmail} required />
                </div>

                <div className={styles.form__item}>
                  <label htmlFor="contact">Contact no</label>
                  <input
                    id="contact"
                    type="numeric"
                    ref={inputContact}
                    minLength="10"
                    maxLength="10"
                    required
                  />
                </div>
                <div className={styles.form__item}>
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    ref={inputAddress}
                    rows="7"
                    cols="30"
                    required
                  />
                </div>

                <div className={styles.form__item}>
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    type="text"
                    ref={inputState}
                    minLength="5"
                    required
                  />
                </div>
                <div className={styles.form__item}>
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    type="text"
                    ref={inputCity}
                    minLength="5"
                    required
                  />
                </div>
                <div className={styles.form__item}>
                  <label htmlFor="code">Pin code</label>
                  <input
                    id="code"
                    type="text"
                    ref={inputCode}
                    minLength="4"
                    maxLength="7"
                    required
                  />
                </div>

                <p className={styles.extra__text}>
                  Add real and accurate details only as your account will be
                  verified based on this details
                </p>

                <div className={styles.form__action}>
                  <Button type="submit">Sign Up</Button>
                </div>

                <hr />
                <div className={styles.form__link}>
                  Already have an account ? <Link href="/sign-in">Sign in</Link>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
