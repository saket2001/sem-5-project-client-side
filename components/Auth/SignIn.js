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
