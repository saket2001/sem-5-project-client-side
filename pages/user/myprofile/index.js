import React from "react";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import InputField from "../../../components/assets/formField/InputField";
import InputText from "../../../components/assets/formField/InputText";
import styles from "../../../styles/Profile.module.css";
import { FaUserAlt } from "react-icons/fa";

const MyProfilePage = () => {
  return (
    <Layout>
      <Head>
        <title>My Profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="layout">
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
            <InputField type="text" label="Full name" value="John Doe" />
            <InputField type="text" label="Username" value="@JohnD12" />
            <br />
            <hr />
            <br />
            <h3>Contact Information</h3>
            <InputField type="text" label="Contact No" value="+91 0123456789" />
            <InputField type="text" label="Email" value="John123@gmail.com" />
            <br />
            <hr />
            <br />
            <h3>User Location</h3>
            <InputText
              type="text"
              label="Address"
              rows="6"
              value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum hic doloremque, laboriosam, qui autem distinctio obcaecati voluptate eius saepe delectus eveniet, ullam explicabo molestias blanditiis. Dolorem provident beatae reprehenderit?"
            />
            <InputField type="text" label="State" value="Maharashtra" />
            <InputField type="text" label="City" value="Mumbai" />
            <InputField type="text" label="Pin code" value="456987" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProfilePage;
