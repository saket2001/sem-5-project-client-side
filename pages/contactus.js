import Head from "next/head";
import Image from "next/image";
import contactImg from "../public/contactUs.svg";
import styles from "../styles/Contact.module.css";
import useSession from "../hooks/useSession";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import {
  Button,
  InputField,
  InputText,
  Layout,
  Modal,
} from "../components/export";

const ContactUs = () => {
  useSession();
  const [Loader, setLoader] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [ModalData, setModalData] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const messageRef = useRef();

  const { data: id, token } = useSelector((state) => state?.auth);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let formData = {
      userId: id,
      fullName: nameRef.current?.value,
      email: emailRef.current?.value,
      contact: contactRef.current?.value,
      message: messageRef.current?.value,
    };

    const { data } = await axios.post(
      "https://bechdal-api.herokuapp.com/api/v1/post-contact-form",
      formData,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    if (data.type) {
      openModal();
      setModalData({
        title: "Alert User !!",
        text: data.message,
        btnText: "Close",
      });
    } else {
      openModal();
      setModalData({
        title: "Alert User !!",
        text: data.data.message,
        btnText: "Close",
      });
    }

    console.log(data);
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
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
        <div className={styles.contact_container}>
          <div className={styles.left_container}>
            <div>
              <h2>Have Some Questions?</h2>
              <p>Fill up the form and get contacted by us in 24 hours</p>
            </div>
            <Image
              src={contactImg}
              alt="contact img"
              width="400"
              height="400"
            />
          </div>
          <form className={styles.contact_form} id="sellForm">
            <InputField
              type="text"
              placeholder="Full Name"
              name="fullName"
              innerRef={nameRef}
            >
              Full Name
            </InputField>
            <InputField
              type="email"
              placeholder="Email"
              name="email"
              innerRef={emailRef}
            >
              Email
            </InputField>
            <InputField
              type="numeric"
              placeholder="Contact no"
              name="contact"
              innerRef={contactRef}
            >
              Contact No
            </InputField>
            <InputText
              placeholder="Write your issue here.."
              rows={10}
              name="message"
              refer={messageRef}
            ></InputText>
            <div className={styles.btn}>
              <Button type="submit" onClick={submitForm}>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
