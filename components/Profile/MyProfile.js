import React from "react";
import styles from "./Profile.module.css";
import Image from "next/dist/client/image";
import Userlogo from "../../public/Userlogo.png";
import InputField from "../assets/formField/InputField";

function Profilepage() {
  return (
    <div className={styles.usercontainer}>
      <div className={styles.userimg}>
        <Image src={Userlogo} alt="user img" />
      </div>
      <div className={styles.userdetails}>
        <InputField type="text1" label="Fullname :" value="Jhon Doe">
          Name
        </InputField>
        <InputField type="text1" label="Username :" value="JhonD12">
          Username
        </InputField>
        <InputField type="text1" label="Contact No :" value="+91 0123456789">
          Contact No
        </InputField>
        <InputField type="text1" label="Emailid :" value="Jhon123@gmail.com">
          Email
        </InputField>
        <InputField
          type="text1"
          label="Address :"
          value="xyz bldg queen road New Panvel"
        >
          Address
        </InputField>
        <InputField type="text1" label="State :" value="Maharashtra">
          State
        </InputField>
        <InputField type="text1" label="City :" value="Navi Mumbai">
          City
        </InputField>
        <InputField type="text1" label="Pincode :" value="456987">
          Pincode
        </InputField>
      </div>
    </div>
  );
}

export default Profilepage;
