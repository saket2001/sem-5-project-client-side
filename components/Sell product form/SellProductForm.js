import React, { useCallback, useState } from "react";
import styles from "./sellProduct.module.css";

const SellProductForm = () => {
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

  return (
    <div className={styles.container}>
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
            <p onClick={subCategoryHandler}>Sofa & Dining</p>
            <p onClick={subCategoryHandler}>Beds & Wardrobes</p>
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
            <p onClick={subCategoryHandler}>Tvs, Video & Audio</p>
            <p onClick={subCategoryHandler}>Computers & Laptops</p>
            <p onClick={subCategoryHandler}>Computers Accessories</p>
            <p onClick={subCategoryHandler}>Camera & Lenses</p>
            <p onClick={subCategoryHandler}>Washing Machines</p>
            <p onClick={subCategoryHandler}>Fridges</p>
            <p onClick={subCategoryHandler}>Acs</p>
          </details>
        </div>
      )}
      {/* form */}
      <form>
        {categoryState}
        {subCategoryState}
      </form>
    </div>
  );
};

export default SellProductForm;
