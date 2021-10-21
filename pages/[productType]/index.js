import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import notFoundImg from "../../public/notFound.svg";
import {
  Layout,
  ProductList,
  Button,
  InputCheckbox,
  Loader,
} from "../../components/export";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "../../styles/product.module.css";
import menuNav from "../../public/menu-logo-black.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import useSession from "../../hooks/useSession";

const ProductPage = () => {
  useSession();
  const router = useRouter();
  const productCategoryTitle = router.query.productType;
  const ipLocation = useSelector((state) => state?.auth?.location);

  const [LoaderState, setLoaderState] = useState(null);
  const [DataState, setDataState] = useState(null);
  const [filterDiv, showFilterDiv] = useState(false);
  const [location, setLocation] = useState("");

  const toggleFilters = () => {
    showFilterDiv((prevState) => !prevState);
  };

  const handleFilterValue = async (value) => {
    // turn on loader
    setLoaderState(true);

    const data = await axios.get(
      `https://bechdal-api.herokuapp.com/api/v1/ad-by-state/${value}`
    );

    if (data.status === 200) {
      setDataState(data.data);
      setLoaderState(false);
      if (filterDiv) toggleFilters();
    }
  };

  useEffect(() => {
    const getData = async () => {
      // turn on loader
      setLoaderState(true);

      const data = await axios.get(
        `https://bechdal-api.herokuapp.com/api/v1/ad/${productCategoryTitle}?location=${ipLocation}`
      );

      if (data.status === 200) {
        setDataState(data.data);
        setLoaderState(false);
      }
      setLoaderState(false);
    };

    getData();
  }, [location, productCategoryTitle, ipLocation]);

  return (
    <>
      <Head>
        <title>Shop By Category</title>
      </Head>
      <Layout>
        <div className={styles.info__block}>
          <p>
            <Link href="/" passHref>
              Home
            </Link>{" "}
            &gt;{" "}
            <Link href="/category" passHref>
              Categories
            </Link>{" "}
            &gt; {productCategoryTitle}
          </p>
        </div>

        <main className={styles.main}>
          {!LoaderState && (
            <div className={styles.filter_container}>
              <div className={styles.info__block}>
                <p>
                  {DataState?.length > 1
                    ? `${DataState?.length} Ads Found`
                    : `${DataState?.length} Ad Found`}
                </p>
                {/* <Button>Sort Date By- Asc </Button> */}
                <h2>
                  Filters
                  <Image
                    src={menuNav}
                    onClick={toggleFilters}
                    alt="menu logo"
                    width="30px"
                    height="30px"
                  ></Image>
                </h2>
              </div>
              {filterDiv && (
                <div className={styles.filter__value}>
                  <p>By Location</p>
                  <InputCheckbox
                    label="Maharashtra"
                    onClick={() => handleFilterValue("Maharashtra")}
                  />
                  <InputCheckbox
                    label="Kerala"
                    onClick={() => handleFilterValue("Kerala")}
                  />
                  <InputCheckbox
                    label="Delhi"
                    onClick={() => handleFilterValue("Delhi")}
                  />
                  <InputCheckbox
                    label="Jammu Khashmir"
                    onClick={() => handleFilterValue("Jammu Khashmir")}
                  />
                  <InputCheckbox
                    label="Rajasthan"
                    onClick={() => handleFilterValue("Rajasthan")}
                  />
                  <InputCheckbox
                    label="Gujarat"
                    onClick={() => handleFilterValue("Gujarat")}
                  />
                  <InputCheckbox
                    label="Bangalore"
                    onClick={() => handleFilterValue("Bangalore")}
                  />
                  <InputCheckbox
                    label="Kolkata"
                    onClick={() => handleFilterValue("Kolkata")}
                  />
                  <InputCheckbox
                    label="Madhya Pradesh"
                    onClick={() => handleFilterValue("Madhya Pradesh")}
                  />
                </div>
              )}
            </div>
          )}
          {LoaderState && <Loader text="Getting Ads For You.." />}
          {!LoaderState && DataState?.length === 0 && (
            <div className="layout">
              <Image
                alt="not found image"
                src={notFoundImg}
                width="200"
                height="200"
              />
              <h1 className="error_heading">
                Oops !! No ads found for following category
              </h1>
              <p className="error_info">
                Don&apos;t worry, as new ads of this category arrives, they will
                be shown here.
              </p>
              <Button
                type="button"
                className={styles.reset_filter_button}
                onClick={() => {
                  setLocation(ipLocation + "");
                }}
              >
                Reset IP Location
              </Button>
            </div>
          )}
          {!LoaderState && DataState?.length > 0 && (
            <div className={styles.products__container}>
              {!filterDiv && <ProductList dataList={DataState} />}
            </div>
          )}
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
