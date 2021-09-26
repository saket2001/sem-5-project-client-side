import React, { useCallback, useState } from "react";
import styles from "./sellProduct.module.css";
import Button from "../assets/button/Button";

import { useRouter } from "next/dist/client/router";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import CategoryForm from "./CategoryForm";
import SellForm from "./SellForm";

const SellProductForm = () => {
  const isLoggedIn = useSelector((state) => state.auth.isValid);

  const router = useRouter();
  const [categoryState, setCategoryState] = useState(false);
  const [subCategoryState, setSubCategoryState] = useState(false);

  const categoryHandler = useCallback((type) => {
    setCategoryState(type);
  }, []);

  const subCategoryHandler = useCallback((type) => {
    setSubCategoryState(type);
  }, []);

  const backHandler = useCallback(() => {
    setCategoryState(false);
    setSubCategoryState(false);
    router.replace("/sellproduct");
  }, [router]);

  return (
    <>
      {!isLoggedIn && (
        <div className="layout">
          <h1 className="error-heading">
            Oops! You cannot sell any product if you aren&apos;t logged in
          </h1>
          <p className="error-info">
            Please log in to your account to sell products to other users.
          </p>
        </div>
      )}
      {isLoggedIn && (
        <div className={styles.container}>
          {subCategoryState && (
            <div className={styles.form__button}>
              <Button type="button" onClick={backHandler}>
                <FaArrowLeft />
                Go Back
              </Button>
            </div>
          )}
          <h2>Post Your Ad</h2>
          {/* category form */}
          {!subCategoryState && (
            <CategoryForm
              onClickCate={categoryHandler}
              onClickCateSub={subCategoryHandler}
            />
          )}
          {/* form */}
          {subCategoryState && (
            <SellForm
              categoryState={categoryState}
              subCategoryState={subCategoryState}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SellProductForm;
