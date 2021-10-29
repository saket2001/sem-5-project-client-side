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
import Button from "../../../components/assets/button/Button";
import axios from "axios";
import { Modal } from "../../../components/export";
import router from "next/router";
import { useClearSessionStorage } from "react-use-window-sessionstorage";
import { authActions } from "../../../Store/auth";

const MyProfilePage = () => {
  useSession();
  const dispatch = useDispatch(authActions);
  const clearSessionStorage = useClearSessionStorage();
  // redux
  const { isValid, data, token } = useSelector((state) => state.auth);

  const [loader, setLoaderState] = useState(null);
  const [userData, setUserData] = useState(data);
  const [modalState, setModalState] = useState(false);
  const [ModalData, setModalData] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoaderState(true);

      const res = await fetch(
        `https://bechdal-api.herokuapp.com/api/v1/users/${data}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const resData = await res.json();
      if (resData) {
        setUserData(resData);
        setLoaderState(false);
      } else {
      }
    };
    loadData();
  }, [data, token]);

  const deleteAccount = async () => {
    setLoaderState(true);
    const res = await axios.delete(
      `https://bechdal-api.herokuapp.com/api/v1/users/${data}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    if (res.data) {
      setLoaderState(false);
      openModal();
      setModalData({
        title: "User Deleted Successfully",
        text: "On your demand your account has been deleted and all your ads related to it are also deleted.",
        btnText: "Close",
      });

      clearSessionStorage();
      dispatch(authActions.updateStatus());
      dispatch(authActions.updateUserData(null));
      dispatch(authActions.updateToken(null));

      setTimeout(() => {
        router.replace("/");
      }, 4000);
    } else {
      setLoaderState(false);
      openModal();
      setModalData({
        title: "Error!!",
        text: "Some error occurred while deleting your account and ads related to your account.",
        btnText: "Close",
      });
    }
  };

  return (
    <Layout>
      <Head>
        <title>My Profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="layout">
        {ModalData && modalState && (
          <Modal
            title={ModalData?.title}
            body={ModalData?.text}
            buttonText={ModalData?.btnText}
            onClick={closeModal}
          />
        )}
        {!userData && (
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
            <p className="error_info">
              Not able to get your personal information from server right now.
              Please login again or try again later.
            </p>
          </div>
        )}
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
              <Button
                type="button"
                style={{ margin: "0.2rem 0", width: "auto" }}
                onClick={deleteAccount}
              >
                Delete Account
              </Button>
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
              <InputField
                type="text"
                label="State"
                value={Decrypt(userData?.state)}
              />
              <InputField
                type="text"
                label="City"
                value={Decrypt(userData?.city)}
              />
              <InputField
                type="text"
                label="Pin code"
                value={Decrypt(userData?.pinCode)}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyProfilePage;
