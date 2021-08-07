import React, { useCallback } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Button from "../../assets/button/Button";
import styles from "./DetailedProduct.module.css";
import dummyImg from "../../../public/dummy1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const DetailedProduct = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="container">
      <div className={styles.backButton}>
        <Button type="button" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
      </div>
      <div className={styles.detailedProduct}>
        <div className={styles.product__left}>
          {/* big image */}
          <div className={styles.product__image}>
            <Image
              src={dummyImg}
              alt="product image"
              height="350px"
              width="350px"
            />
          </div>
          {/* other small images */}
          <div className={styles.product__images}>
            <Image
              src={dummyImg}
              alt="product image"
              height="70px"
              width="70px"
            />
            <Image
              src={dummyImg}
              alt="product image"
              height="70px"
              width="70px"
            />
          </div>
        </div>

        <div className={styles.product__right}>
          <p className={styles.product__seller}>William H Brock</p>
          <h2 className={styles.product__name}>Small Classic Chair</h2>
          <p className={styles.product__category}>Furniture</p>
          <p className={styles.product__description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum non
            quas id quis ab porro? Ut soluta accusamus quam? Debitis, assumenda
            nostrum. Quaerat debitis numquam culpa repellat fugiat recusandae
            omnis id, at unde vero similique nostrum obcaecati corporis et
            exercitationem?
          </p>
          <p className={styles.product__price}>500 ₹</p>
          <Button type="button">
            <FontAwesomeIcon icon={faShoppingBag} />
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
