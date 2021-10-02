import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import InputField from "../../../components/assets/formField/InputField";
import InputText from "../../../components/assets/formField/InputText";
import styles from "../../../styles/Profile.module.css";
import { FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import notFoundImg from "../../../public/notFound.svg";
import Loader from "../../../components/Loader/Loader";
import Decrypt from "../../../hooks/Decrypt";
import useSession from "../../../hooks/useSession";

const MyProfilePage = () => {
  useSession();
  // redux
  const { isValid, data } = useSelector((state) => state.auth);

  const [loader, setLoaderState] = useState(null);
  const [userData, setUserData] = useState(data);

  useEffect(() => {
    const loadData = async () => {
      setLoaderState(true);

      const res = await fetch(
        `https://bechdal-api.herokuapp.com/api/v1/users/${data}`
      );

      const resData = await res.json();
      console.log({ resData });
      if (resData) {
        setUserData(resData);
        setLoaderState(false);
      }
    };
    loadData();
  }, [data]);

  return (
    <Layout>
      <Head>
        <title>My Profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="layout">
        {!isValid && (
          <div
            className="layout"
            style={{ minHeight: "100vh", padding: "0 1rem" }}
          >
            <Image
              alt="not found image"
              src={notFoundImg}
              width="200"
              height="200"
            />
            <h1 className="error_heading">
              Oops !! You are not logged in as a user
            </h1>
            <p className="error_info">
              Please login with correct account to view this page. If you are
              viewing this error page after logging in, please contact us right
              away.
            </p>
          </div>
        )}
        {loader && (
          <div className="layout" style={{ minHeight: "100vh" }}>
            <Loader text="Getting your profile please wait..." />
          </div>
        )}
        {isValid && !loader && (
          <div className={styles.user_container}>
            <div className={styles.user_img}>
              <h2>View Profile</h2>
              <FaUserAlt fontSize="100px" />
              <p>
                Your Personal information won&apos;t be disclosed to all the
                users, thus helping you from spam calls
              </p>
              <p>Will be shown only to the interested user</p>
            </div>

            <div className={styles.user_form}>
              <h3>Basic Information</h3>
              <InputField
                type="text"
                label="Full name"
                value={userData?.fullName}
              />
              <InputField
                type="text"
                label="Username"
                value={userData?.username}
              />
              <InputField
                type="text"
                label="User Status"
                value={userData?.userStatus}
              />
              <br />
              <hr />
              <br />
              <h3>Contact Information</h3>
              <InputField
                type="text"
                label="Contact No"
                value={Decrypt(userData?.contact)}
              />
              <InputField
                type="text"
                label="Email"
                value={Decrypt(userData?.email)}
              />
              <br />
              <hr />
              <br />
              <h3>User Location</h3>
              <InputText
                type="text"
                label="Address"
                rows="6"
                value={Decrypt(userData?.address)}
              />
              <InputField type="text" label="State" value={userData?.state} />
              <InputField type="text" label="City" value={userData?.city} />
              <InputField
                type="text"
                label="Pin code"
                value={userData?.pinCode}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyProfilePage;
