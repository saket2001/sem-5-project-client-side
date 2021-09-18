import Head from "next/head";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import contactImg from "../public/contactUs.svg";
import styles from "../styles/Contact.module.css";
import InputField from "../components/assets/formField/InputField";
import InputText from "../components/assets/formField/InputText";
import Button from "../components/assets/button/Button";

const contactUs = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="layout">
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
          <form className={styles.contact_form}>
            <InputField type="text" placeholder="Full Name">
              Username
            </InputField>
            <InputField type="email" placeholder="Email">
              Email
            </InputField>
            <InputField type="numeric" placeholder="Contact no">
              Contact No
            </InputField>
            <InputText
              placeholder="Write your issue here.."
              rows={10}
            ></InputText>
            <div className={styles.btn}>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default contactUs;
