import React, { useCallback } from "react";
import styles from "./Contactus.module.css";
import InputField from "../assets/formField/InputField";
import InputText from "../assets/formField/InputText";
import Button from "../assets/button/Button";
import Image from "next/image";
import contactimg from "../../public/contactus.jpg";

function ContactForm() {
  return (
    <div className={styles.contactcontainer}>
      <div className={styles.contactimg}>
        <Image src={contactimg} alt="contact img" />
      </div>
      <div className={styles.contactdetails}>
        <h1 align="center">Contact Form</h1>
        <InputField type="text3" label="Username :">
          Username
        </InputField>
        <InputField type="email3" label="Emailid :">
          Email
        </InputField>
        <InputField type="numeric2" label="Contact No :">
          Contact No
        </InputField>
        <InputText label="Ad Description :"></InputText>
        <div className={styles.btn}>
          <Button type="submit">Send</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
