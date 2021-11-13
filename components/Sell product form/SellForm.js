import React, { useState } from "react";
import styles from "./sellProduct.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { Modal, Button, InputCheckbox } from "../export";

const SellForm = ({ categoryState, subCategoryState }) => {
  const router = useRouter();
  const {
    data: loggedInId,
    token,
    location: loggedInLocation,
  } = useSelector((state) => state?.auth);
  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState(false);

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const sellForm = document.getElementById("sellForm");

    let formData = new FormData(sellForm);
    formData.append("images", file1);
    formData.append("images", file2);
    formData.append("images", file3);
    formData.append("images", file4);

    formData.append("category", subCategoryState);
    formData.append("userId", loggedInId);
    formData.append("city", loggedInLocation);

    const res = await axios.post(
      "https://bechdal-api.herokuapp.com/api/v1/post-ad/",
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data.type) {
      openModal();
      setModalData({
        title: "Alert User !!",
        text: res.data.message,
        btnText: "Close",
      });

      setTimeout(() => {
        router.replace("/");
      }, 3000);
    } else {
      openModal();
      setModalData({
        title: "Alert User !!",
        text: "Error in posting your ad. Please try again later in sometime.",
        btnText: "Close",
      });
    }
  };

  return (
    <>
      {modalData && (
        <Modal
          title={modalData?.title}
          body={modalData?.text}
          buttonText={modalData?.btnText}
          onClick={closeModal}
        />
      )}
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
        <hr className="hr" />

        <div className={styles.form__body}>
          <h3>Add Some Details</h3>

          <div className="form__item">
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

          <div className="form__item">
            <label htmlFor="ad_description">AD Description</label>
            <textarea
              id="ad_description"
              rows="7"
              cols="10"
              required
              name="description"
              maxLength="200"
              minLength="20"
            />
          </div>
          <div className="form__item">
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
          <div className="form__item">
            <p className="form__item_info">
              Always add pictures from different angles of your product and four
              images of your product are required
            </p>
          </div>
          <span className="form__warning">
            We accept jpg, png and jpeg only. All your images should be less
            then 1mb in size.
          </span>
          {/* file input */}

          <div className="form__item">
            <input
              type="file"
              id="File1"
              accept=".jpg, .png, .jpeg"
              required
              multiple
              onChange={(e) => {
                if (
                  e.target.files[0].size +
                    e.target.files[1].size +
                    e.target.files[2].size +
                    e.target.files[3].size <=
                  8000000
                ) {
                  setFile1(e.target.files[0]);
                  setFile2(e.target.files[1]);
                  setFile3(e.target.files[2]);
                  setFile4(e.target.files[3]);
                } else alert("Upload file smaller then 1mb in size");
              }}
            />
          </div>
        </div>
        <hr className="hr" />
        <div className={styles.form__body}>
          <h3>Seller Details</h3>

          <div className="form__item">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              required
              name="name"
              maxLength="20"
              minLength="5"
            />
          </div>
          <div className="form__item">
            <label htmlFor="ad_address">Address</label>
            <textarea
              id="ad_address"
              rows="7"
              cols="10"
              maxLength="100"
              minLength="20"
              required
              name="address"
            />
          </div>
          <div className="form__item">
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
          <div className="form__item">
            <label htmlFor="ad_city">City</label>
            <input
              disabled="true"
              placeholder="Will be detected from your IP address."
              type="text"
              id="ad_city"
              required
              maxLength="10"
              minLength="5"
              name="city"
            />
          </div>
          <div className="form__item">
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
        <hr className="hr" />
        <div className={styles.form__body}>
          <h3>Extra Ad Features</h3>
          <label htmlFor="feature-ad">
            <input type="checkbox" name="featured" id="featured" />
            <span className="form__item_info">
              You can list your Ad in our featured section for maximum reach to
              users.
            </span>
            <span className="form__warning">
              (It will cost you only 50.00 र)
            </span>
          </label>
        </div>
        <hr />
        <div className="form__item">
          <p className="form__item_info">
            Your ad will be revived by our team in person by visiting your house
            in next 24hrs <br /> If your ad product passes the inspection your
            ad will be made online to other users
          </p>
        </div>
        <div className={styles.form__action}>
          <Button type="submit" onSubmit={submitForm}>
            Submit Ad
          </Button>
        </div>
      </form>
    </>
  );
};

export default SellForm;
