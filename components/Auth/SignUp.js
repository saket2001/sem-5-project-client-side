import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Button from "../assets/button/Button";
import Image from "next/image";
import signUpLogo from "../../public/signup.svg";
import styles from "./auth.module.css";
import Loader from "../Loader/Loader";
import Modal from "../modal/Modal";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth";
import axios from "axios";

export default function SignUp() {
  // redux
  const dispatch = useDispatch(authActions);
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [loaderState, setLoaderState] = useState(null);
  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const formHandler = async (e) => {
    e.preventDefault();

    setLoaderState(true);
    const signUpForm = document.getElementById("sign-up-form");
    const form = new FormData(signUpForm);
    form.append("image", file);

    const { data } = await axios.post(
      "https://bechdal-api.herokuapp.com/api/v1/user-sign-up",
      form,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    console.log(data);

    // checking if entered email is already entered in db
    // if user exists with mail entered then show error msg
    if (!data.type) {
      setLoaderState(false);
      openModal();
      setModalData({
        title: "Error!!",
        text: data.message,
        btnText: "Close",
      });
    } else {
      if (data.type) {
        // storing user id in redux
        dispatch(authActions.updateUserData(data._id));
        dispatch(authActions.updateStatus());

        setLoaderState(false);
        openModal();
        setModalData({
          title: "New User Created",
          text: "Your Account will go under inspection for verified status, then only you can shop from another users or sell products. \n Thank You ",
          btnText: "Close",
        });
        // push to home screen
        setTimeout(() => {
          router.replace("/sign-in");
        }, 4000);
      } else {
        setLoaderState(false);
        openModal();
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
      {!loaderState && modalData && modalState && (
        <Modal
          title={modalData?.title}
          body={modalData?.text}
          buttonText={modalData?.btnText}
          onClick={closeModal}
        />
      )}
      <div className="signIn_container">
        {loaderState && (
          <Loader text="Creating your account..." textColour="#FFf" />
        )}
        {!loaderState && (
          <div className={styles.container}>
            <div className={styles.image}>
              <Image
                alt="Sign in cover image"
                src={signUpLogo}
                height="400px"
                width="400px"
              />
            </div>
            <form
              className={styles.form}
              onSubmit={formHandler}
              id="sign-up-form"
            >
              <div className={styles.form__head}>
                <h1>Welcome Fellow Shopper</h1>
                <p>
                  Sign up and get ready to shop many awesome products at great
                  deals
                </p>
              </div>

              <div className={styles.form__body}>
                <div className={styles.form__row}>
                  <div className="form__item">
                    <label htmlFor="fullname">Full Name</label>
                    <input id="fullname" type="text" name="fullName" required />
                  </div>
                  <div className="form__item">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" name="username" required />
                  </div>
                </div>
                <div className="form__item">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" required />
                </div>

                <div className={styles.form__row}>
                  <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      minLength="8"
                      required
                    />
                  </div>
                  <div className="form__item">
                    <label htmlFor="contact">Contact no</label>
                    <input
                      id="contact"
                      type="number"
                      name="contact"
                      minLength="10"
                      maxLength="10"
                      required
                    />
                  </div>
                </div>

                <div className="form__item">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="5"
                    cols="20"
                    required
                  />
                </div>
                <div className="form__item">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    type="text"
                    name="state"
                    minLength="5"
                    required
                  />
                </div>
                <div className={styles.form__row}>
                  <div className="form__item">
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      minLength="5"
                      required
                    />
                  </div>
                  <div className="form__item">
                    <label htmlFor="code">Pin code</label>
                    <input
                      id="code"
                      type="text"
                      name="pinCode"
                      minLength="4"
                      maxLength="7"
                      required
                    />
                  </div>
                </div>

                <div className="form__item">
                  <label htmlFor="state">Select Your Account Image</label>
                  <input
                    type="file"
                    id="File1"
                    accept=".jpg, .png, .jpeg"
                    required
                    onChange={(e) => {
                      if (e.target.files[0].size <= 160000)
                        setFile(e.target.files[0]);
                      else alert("Upload file smaller then 20kb in size");
                    }}
                  />
                </div>
                <br />
                <p className="form__item_info">
                  Add real and accurate details only as your account will be
                  verified based on this details
                </p>

                <div className={styles.form__action}>
                  <Button type="submit">Sign Up</Button>
                </div>

                <hr />
                <div className="form__link">
                  Already have an account ? <Link href="/sign-in">Sign in</Link>
                </div>
                <div className="form__link">
                  <Link href="/">Go To Homepage</Link>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
