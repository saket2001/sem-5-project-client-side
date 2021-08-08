// import { useRouter } from "next/router";
import { useRef, useState } from "react";
import InputField from "../assets/formField/InputField";
import InputText from "../assets/formField/InputText";
import Button from "../assets/button/Button";
import Image from "next/image";
import signInLogo from "../../public/signin.svg";
import signUpLogo from "../../public/signup.svg";
import styles from "./auth.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../../store/auth";

const SignIN = (props) => {
  const [state, setState] = useState("sign-in");

  const inputName = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();

  const changeLink = () => {
    if (state === "sign-in") setState("sign-up");
    else setState("sign-in");
  };

  let MainImage = (
    <Image alt="" src={signInLogo} height="400px" width="400px" />
  );

  if (state === "sign-up")
    MainImage = <Image alt="" src={signUpLogo} height="400px" width="400px" />;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>{MainImage}</div>
        <form className={styles.form}>
          <div className={styles.form__head}>
            <h1>
              {state === "sign-in" ? "Welcome Back" : "Welcome Fellow Shopper"}
            </h1>
            <p>
              {" "}
              {state === "sign-in"
                ? "We love seeing you coming back to our site "
                : "Sign up and get ready to shop many awesome products ar great deals"}
            </p>
          </div>
          <div className={styles.form__body}>
            {state === "sign-in" ? (
              <InputField
                label="Username"
                for="username"
                id="username"
                type="text"
                ref={inputName}
              />
            ) : (
              <InputField
                label="Full Name"
                for="fullname"
                id="fullname"
                type="text"
                ref={inputName}
              />
            )}
            {state === "sign-in" ? (
              <InputField
                label="Password"
                for="Password"
                id="Password"
                type="password"
                ref={inputPassword}
              />
            ) : (
              <InputField
                label="Username"
                for="Username"
                id="Username"
                type="text"
                ref={inputName}
              />
            )}
            {state === "sign-in" ? (
              ""
            ) : (
              <InputField
                label="Email"
                for="Email"
                id="Email"
                type="email"
                ref={inputPassword}
              />
            )}
            {state === "sign-in" ? (
              ""
            ) : (
              <InputField
                label="Password"
                for="Password"
                id="Password"
                type="password"
                ref={inputPassword}
              />
            )}
            {state === "sign-in" ? (
              ""
            ) : (
              <InputField
                label="Contact no"
                for="contact no"
                id="contact no"
                type="numeric"
                ref={inputPassword}
              />
            )}
            {state === "sign-in" ? (
              ""
            ) : (
              <InputText
                label="Address"
                for="address"
                id="address"
                rows="7"
                cols="30"
              />
            )}
            <div className={styles.form__action}>
              <Button type="submit">
                {state === "sign-in" ? "Sign In" : "Sign Up"}
              </Button>
            </div>
            {state === "sign-in" ? (
              <p>
                New here ?{" "}
                <a className={styles.form__link} onClick={changeLink}>
                  Create a new account
                </a>{" "}
              </p>
            ) : (
              <p>
                Already a user here?{" "}
                <a className={styles.form__link} onClick={changeLink}>
                  Sign in
                </a>{" "}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIN;

// const [isLoading, setIsLoading] = useState(false);
// const router = useRouter();
// const dispatch = useDispatch();
// const authState = useSelector((state) => state.auth);
// // sign in or sign up
// const [state, setState] = useState(authState.authState);

// const submitHandler = async (e) => {
//   e.preventDefault();
//   // start loader
//   setIsLoading((prevState) => !prevState);
//   //check inputs
//   const email = inputEmail.current.value;
//   const password = inputPassword.current.value;

//   if (state === "sign-up") {
//     const name = inputName.current.value;
//     // sign up
//     const res = await fetch(
//       "https://micro-blog-api.herokuapp.com/user/usersignup",
//       {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           username: name,
//           password: password,
//           email: email,
//         }),
//       }
//     );
//     const data = await res.json();

//     alert(data.message);

//     if (data.type) {
//       dispatch(
//         authActions.login({
//           id: data.id,
//         })
//       );
//       router.replace("/");
//     }
//   }

//   // sign in
//   if (state === "sign-in") {
//     const res = await fetch(
//       "https://micro-blog-api.herokuapp.com/user/usersignin",
//       {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       }
//     );
//     const data = await res.json();
//     console.log(data);
//     // if user found
//     // if success route to home
//     // else error modal
//     if (data.type) {
//       //
//       dispatch(
//         authActions.login({
//           id: data.id,
//         })
//       );
//       router.replace("/");
//     } else {
//       alert(data.message);
//     }
//   }
// };
