import React, { useCallback, useState } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
import Link from "next/link";

import dummyImg from "../../public/dummy1.jpg";
import leftBtn from "../../public/left-arrow.png";
import rightBtn from "../../public/right-arrow.png";

const dummyData = [
  {
    id: 1,
    image: dummyImg,
    content: {
      heading: "Good quality furniture",
      link: "/",
    },
  },
  {
    id: 2,
    image: dummyImg,
    content: {
      heading: "New and serviced smartphones",
      link: "/",
    },
  },
  {
    id: 3,
    image: dummyImg,
    content: {
      heading: "Good condition second hand books",
      link: "/",
    },
  },
  {
    id: 4,
    image: dummyImg,
    content: {
      heading: "Good condition second hand bikes",
      link: "/",
    },
  },
];

const Slider = () => {
  const [sliderState, setSliderState] = useState(0);

  const rightHandler = useCallback(() => {
    if (sliderState === dummyData.length - 1) {
      return setSliderState(0);
    }
    setSliderState((prevState) => prevState + 1);
  }, [sliderState]);

  const leftHandler = useCallback(() => {
    if (sliderState === 0) {
      return setSliderState(dummyData.length - 1);
    }
    if (sliderState > 0) setSliderState((prevState) => prevState - 1);
  }, [sliderState]);

  let sliderContent = dummyData[sliderState];

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.slider__btn} onClick={leftHandler}>
          <Image
            src={leftBtn}
            alt="left button"
            width="30px"
            height="30px"
          ></Image>
        </div>
        <div className={styles.slider__image}>
          <Image src={dummyImg} alt="" width="380px" height="350px"></Image>
        </div>
        <div className={styles.slider__content}>
          <h1 className={styles.slider__heading}>
            {sliderContent.content.heading}
          </h1>
          <Link href={sliderContent.content.link}>Shop now</Link>
        </div>
        <div className={styles.slider__btn} onClick={rightHandler}>
          <Image
            src={rightBtn}
            alt="left button"
            width="30px"
            height="30px"
          ></Image>
        </div>
        <div className={styles.slider__controls}>
          <Image
            src={leftBtn}
            onClick={leftHandler}
            alt="left button"
            width="30px"
            height="30px"
          ></Image>
          <Image
            src={rightBtn}
            onClick={rightHandler}
            alt="left button"
            width="30px"
            height="30px"
          ></Image>
        </div>
      </div>
      <div className={styles.slider__page}>
        <p>
          {sliderState + 1} of {dummyData.length}
        </p>
      </div>
    </>
  );
};

export default Slider;
