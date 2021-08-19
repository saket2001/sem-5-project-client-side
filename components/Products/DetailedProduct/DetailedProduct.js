import React, { useCallback } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Button from "../../assets/button/Button";
import styles from "./DetailedProduct.module.css";
import dummyImg from "../../../public/dummy1.jpg";
import Link from "next/link";
import VerifiedTag from "../../Verified Tag/VerifiedTag";
import { FaHeart, FaArrowLeft } from "react-icons/fa";

const DetailedProduct = () => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.replace(`/${router.query.productType}`);
  }, [router]);

  return (
    <div className="container">
      <div className={styles.backButton}>
        <Button type="button" onClick={goBack}>
          <FaArrowLeft />
          Go Back
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
            <Image
              src={dummyImg}
              alt="product image"
              height="70px"
              width="70px"
            />
          </div>
        </div>

        <div className={styles.product__right}>
          <VerifiedTag message="Verified Ad" />
          <p className={styles.product__seller}>William H Brock</p>
          <p className={styles.product__address}>Lorem ipsum dolor sit amet.</p>
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
          <div className={styles.product__buttons}>
            <Button type="button">Buy now</Button>
            <Button type="button" styles={styles.saveBtn}>
              <FaHeart style={{ fontSize: "22px" }} />
              Save
            </Button>
          </div>
          <div className={styles.seller__container}>
            <h2>Seller Description</h2>
            <div className={styles.seller__info}>
              <Image
                src={dummyImg}
                alt="User picture"
                height="70px"
                width="70px"
              />
              <p>Seller Name</p>
              <Button type="button">
                <Link href="/user/myprofile">View</Link>
              </Button>
            </div>
            <div className={styles.product__buttons}>
              <Button type="button">Chat with Seller</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
