import React from "react";
import styles from "./sellProduct.module.css";

const CategoryForm = ({ onClickCate, onClickCateSub }) => {
  const categoryHandler = (e) => {
    onClickCate(e.target.innerHTML);
  };
  const subCategoryHandler = (e) => {
    onClickCateSub(e.target.innerHTML);
  };

  return (
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
  );
};

export default CategoryForm;
