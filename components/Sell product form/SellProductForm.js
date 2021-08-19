import React, { useCallback, useState } from "react";
import styles from "./sellProduct.module.css";
import Button from "../assets/button/Button";
import InputField from "../assets/formField/InputField";
import InputText from "../assets/formField/InputText";
import { useRouter } from "next/dist/client/router";
import { FaArrowLeft } from "react-icons/fa";

const SellProductForm = () => {
  const router = useRouter();
  const [categoryState, setCategoryState] = useState(false);
  const [subCategoryState, setSubCategoryState] = useState(false);

  const categoryHandler = useCallback((e) => {
    console.log(e.target.innerHTML);
    setCategoryState(e.target.innerHTML);
  }, []);

  const subCategoryHandler = useCallback((e) => {
    console.log(e.target.innerHTML);
    setSubCategoryState(e.target.innerHTML);
  }, []);

  const backHandler = useCallback(() => {
    setCategoryState(false);
    setSubCategoryState(false);
    router.replace("/sellproduct");
  }, [router]);

  return (
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
        <div className={styles.category_container}>
          <h3>Choose A Category</h3>
          <details className={styles.categoryForm}>
            <summary onClick={categoryHandler}>Vehicles</summary>
            <p onClick={subCategoryHandler}>Car</p>
            <p onClick={subCategoryHandler}>Bike</p>
            <p onClick={subCategoryHandler}>Scooters</p>
            <p onClick={subCategoryHandler}>Accessories</p>
          </details>
          <details className={styles.categoryForm}>
            <summary onClick={categoryHandler}>Mobiles</summary>
            <p onClick={subCategoryHandler}>Mobile Phones</p>
            <p onClick={subCategoryHandler}>Tables</p>
            <p onClick={subCategoryHandler}>Accessories</p>
          </details>
          <details className={styles.categoryForm}>
            <summary onClick={categoryHandler}>Furniture</summary>
            <p onClick={subCategoryHandler}>Sofa and Dining</p>
            <p onClick={subCategoryHandler}>Beds and Wardrobes</p>
            <p onClick={subCategoryHandler}>Home Decor</p>
            <p onClick={subCategoryHandler}>Kids Furniture</p>
            <p onClick={subCategoryHandler}>Other Household Items</p>
          </details>
          <details className={styles.categoryForm}>
            <summary onClick={categoryHandler}>Fashion</summary>
            <p onClick={subCategoryHandler}>Men</p>
            <p onClick={subCategoryHandler}>Women</p>
            <p onClick={subCategoryHandler}>Kids</p>
          </details>
          <details className={styles.categoryForm}>
            <summary onClick={categoryHandler}>Electronics</summary>
            <p onClick={subCategoryHandler}>Tvs, Video and Audio</p>
            <p onClick={subCategoryHandler}>Computers and Laptops</p>
            <p onClick={subCategoryHandler}>Computers Accessories</p>
            <p onClick={subCategoryHandler}>Camera and Lenses</p>
            <p onClick={subCategoryHandler}>Washing Machines</p>
            <p onClick={subCategoryHandler}>Fridges</p>
            <p onClick={subCategoryHandler}>Acs</p>
          </details>
        </div>
      )}
      {/* form */}
      {subCategoryState && (
        <form className={styles.form}>
          <div className={styles.form__head}>
            <h3>Selected Category</h3>
            <p>
              {categoryState} / {subCategoryState}
            </p>
          </div>
          <hr />
          <div className={styles.form__body}>
            <h3>Add Some Details</h3>
            <InputField type="text" label="Ad Title" />
            <InputText label="Ad Description" rows="7" cols="10" />
            <p>Always add pictures from different angles of your product</p>
            <InputField type="file" label="Ad image 1" />
            <InputField type="file" label="Ad image 2" />
            <InputField type="file" label="Ad image 3" />
            <InputField type="file" label="Ad image 4" />
          </div>
          <hr />
          <div className={styles.form__body}>
            <h3>Set Price</h3>
            <InputField type="numeric" label="Product Price" />
            {/* upload file */}
          </div>
          <hr />
          <div className={styles.form__body}>
            <h3>Confirm Location</h3>
            <InputField type="text" label="Country" />
            <InputField type="text" label="State" />
            <InputText label="Your Address" rows="5" cols="10" />
          </div>
          <hr />
          <p>
            Your ad will be revived by our team in person by visiting your house
            in next 24hrs <br /> If your ad product passes the inspection your
            ad will be made online to other users
          </p>
          <div className={styles.form__action}>
            <Button type="submit" onClick={backHandler}>
              Submit Ad
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SellProductForm;
