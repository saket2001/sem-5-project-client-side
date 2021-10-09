import React from "react";
import styles from "./sellProduct.module.css";

const CategoryForm = ({ onClickCate, onClickCateSub }) => {
  const categoryHandler = (e) => {
    onClickCate(e.target.innerHTML);
  };
  const subCategoryHandler = (e) => {
    onClickCateSub(e.target.getAttribute("data-value"));
  };

  return (
    <div className={styles.category_container}>
      <h3>Choose A Category</h3>
      <details className={styles.categoryForm}>
        <summary onClick={categoryHandler}>Vehicles</summary>
        <p onClick={subCategoryHandler} data-value="Cars">
          Cars
        </p>
        <p onClick={subCategoryHandler} data-value="Bikes">
          Bikes
        </p>
        <p onClick={subCategoryHandler} data-value="Scooters">
          Scooters
        </p>
        <p onClick={subCategoryHandler} data-value="Vehicles-Accessories">
          Accessories
        </p>
      </details>
      <details className={styles.categoryForm}>
        <summary onClick={categoryHandler}>Mobiles</summary>
        <p onClick={subCategoryHandler} data-value="Smartphones">
          Smartphones
        </p>
        <p onClick={subCategoryHandler} data-value="Tablets">
          Tablets
        </p>
        <p onClick={subCategoryHandler} data-value="Keypad-Phone">
          Keypad Phones
        </p>
        <p onClick={subCategoryHandler} data-value="Mobile-Accessories">
          Accessories
        </p>
      </details>
      <details className={styles.categoryForm}>
        <summary onClick={categoryHandler}>Furniture</summary>
        <p onClick={subCategoryHandler} data-value="Sofa-and-Dining">
          Sofa and Dining
        </p>
        <p onClick={subCategoryHandler} data-value="Beds-and-Wardrobes">
          Beds and Wardrobes
        </p>
        <p onClick={subCategoryHandler} data-value="Home-Decor">
          Home Decor
        </p>
        <p onClick={subCategoryHandler} data-value="Kids-Furniture">
          Kids Furniture
        </p>
        <p onClick={subCategoryHandler} data-value="Other-Household-Items">
          Other Household Items
        </p>
      </details>
      <details className={styles.categoryForm}>
        <summary onClick={categoryHandler}>Fashion</summary>
        <p onClick={subCategoryHandler} data-value="Mens-Clothing">
          Men
        </p>
        <p onClick={subCategoryHandler} data-value="Womens-Clothing">
          Women
        </p>
        <p onClick={subCategoryHandler} data-value="Kids-Clothing">
          Kids
        </p>
      </details>
      <details className={styles.categoryForm}>
        <summary onClick={categoryHandler}>Electronics</summary>
        <p onClick={subCategoryHandler} data-value="Tvs-Video-and-Audio">
          Tvs Video and Audio
        </p>
        <p onClick={subCategoryHandler} data-value="Computers-and-Laptops">
          Computers and Laptops
        </p>
        <p onClick={subCategoryHandler} data-value="Computers-Accessories">
          Computers Accessories
        </p>
        <p onClick={subCategoryHandler} data-value="Camera-and-Lenses">
          Camera and Lenses
        </p>
        <p onClick={subCategoryHandler} data-value="Washing-Machines">
          Washing Machines
        </p>
        <p onClick={subCategoryHandler} data-value="Fridge">
          Fridges
        </p>
        <p onClick={subCategoryHandler} data-value="Ac-and-Coolers">
          Ac and Cooler
        </p>
      </details>
      <details className={styles.categoryForm}>
        <summary onClick={categoryHandler}>Books and Hobbies</summary>
        <p
          onClick={subCategoryHandler}
          data-value="Textbooks-and-Reference-Books"
        >
          Textbooks and Reference Books
        </p>
        <p onClick={subCategoryHandler} data-value="Reading-Books">
          Reading Books
        </p>
        <p onClick={subCategoryHandler} data-value="Gym-Equipments">
          Gym Equipments
        </p>
        <p onClick={subCategoryHandler} data-value="Music-Equipments">
          Music Equipments
        </p>
        <p onClick={subCategoryHandler} data-value="Sport-Equipments">
          Sport Equipments
        </p>
      </details>
      <details className={styles.categoryForm}>
        <summary onClick={categoryHandler}>Toy Section</summary>
        <p onClick={subCategoryHandler} data-value="Boys-Section">
          Boys section
        </p>
        <p onClick={subCategoryHandler} data-value="Girls-Section">
          Girls section
        </p>
      </details>
    </div>
  );
};

export default CategoryForm;
