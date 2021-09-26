import React, { useState } from "react";
import Button from "../assets/button/Button";
import styles from "./sellProduct.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

const SellForm = ({ categoryState, subCategoryState }) => {
  const loggedInId = useSelector((state) => state.auth.data);
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const sellForm = document.getElementById("sellForm");

    let formData = new FormData(sellForm);
    formData.append("images", file1);
    formData.append("images", file2);
    formData.append("images", file3);
    formData.append("images", file4);
    formData.append("category", `${categoryState}-${subCategoryState}`);
    formData.append("userId", loggedInId);

    console.log(formData);

    const res = await axios.post(
      "http://localhost:5000/api/v1/post-ad",
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    console.log(res.data);
    alert(res.data.message);
  };

  return (
    <form
      className={styles.form}
      onSubmit={submitForm}
      id="sellForm"
      name="sellForm"
    >
      <div className={styles.form__head}>
        <h3>Selected Category</h3>
        <p>
          {categoryState} / {subCategoryState}
        </p>
      </div>
      <hr className="mx-4 border bg-black" />

      <div className={styles.form__body}>
        <h3>Add Some Details</h3>

        <div className={styles.form__item}>
          <label htmlFor="ad_title">AD Title</label>
          <input
            type="text"
            id="ad_title"
            required
            name="title"
            maxLength="20"
            minLength="8"
          />
        </div>

        <div className={styles.form__item}>
          <label htmlFor="ad_description">AD Description</label>
          <textarea
            id="ad_description"
            rows="7"
            cols="10"
            required
            name="description"
            maxLength="50"
            minLength="20"
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="ad_price">Ad Price</label>
          <input
            type="number"
            id="ad_price"
            name="price"
            required
            maxLength="10"
            minLength="2"
          />
        </div>
        <p className="m-1 font-normal text-red-600 text-lg ">
          Always add pictures from different angles of your product and four
          images of your product are required
        </p>
        <span className="mx-1 mb-2 text-sm text-red-600">
          We accept jpg, png and jpeg only.
        </span>
        {/* file input */}
        <div className="m-1">
          <input
            type="file"
            id="File1"
            required
            onChange={(e) => setFile1(e.target.files[0])}
          />
        </div>
        <div className="m-1">
          <input
            type="file"
            id="File2"
            required
            onChange={(e) => setFile2(e.target.files[0])}
          />
        </div>
        <div className="m-1">
          <input
            type="file"
            id="File3"
            required
            onChange={(e) => setFile3(e.target.files[0])}
          />
        </div>
        <div className="m-1">
          <input
            type="file"
            id="File4"
            required
            onChange={(e) => setFile4(e.target.files[0])}
          />
        </div>
      </div>
      <hr className="mx-4 border bg-black" />
      <div className={styles.form__body}>
        <h3>Seller Details</h3>

        <div className={styles.form__item}>
          <label htmlFor="ad_name">Full name</label>
          <input
            type="text"
            id="ad_name"
            required
            name="Username"
            maxLength="20"
            minLength="5"
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="ad_email">Email</label>
          <input
            type="email"
            id="ad_email"
            required
            name="email"
            maxLength="40"
            minLength="10"
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="ad_contact">Contact no</label>
          <input
            type="number"
            id="ad_contact"
            required
            name="contact"
            maxLength="10"
            size="10"
          />
        </div>

        <div className={styles.form__item}>
          <label htmlFor="ad_address">Address</label>
          <textarea
            id="ad_address"
            rows="7"
            cols="10"
            maxLength="50"
            minLength="20"
            required
            name="address"
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="ad_state">State</label>
          <input
            type="text"
            id="ad_state"
            required
            maxLength="20"
            minLength="5"
            name="state"
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="ad_city">City</label>
          <input
            type="text"
            id="ad_city"
            required
            maxLength="10"
            minLength="5"
            name="city"
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="ad_pincode">Pin code</label>
          <input
            type="number"
            id="ad_pincode"
            maxLength="10"
            minLength="6"
            size="6"
            required
            name="pinCode"
          />
        </div>
      </div>
      <hr className="mx-4 border bg-black" />
      <div className={styles.form__body}>
        <h3>Extra Ad Features</h3>
        <label
          htmlFor="feature-ad"
          className="flex flex-wrap items-center text-md"
        >
          <input
            type="checkbox"
            className="mr-2 text-red-600"
            name="featured"
            id="featured"
          />
          Do you want to put your ad into features section ?
          <span className="text-sm mx-1 text-red-600">
            (it will reach maximum users & cost extra 50rs)
          </span>
        </label>
      </div>
      <hr className="mx-4 border bg-black" />

      <p className="m-1 font-normal text-red-600 text-lg ">
        Your ad will be revived by our team in person by visiting your house in
        next 24hrs <br /> If your ad product passes the inspection your ad will
        be made online to other users
      </p>
      <div className={styles.form__action}>
        <Button type="submit" onSubmit={submitForm}>
          Submit Ad
        </Button>
      </div>
    </form>
  );
};

export default SellForm;
