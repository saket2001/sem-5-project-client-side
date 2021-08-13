import React, { useCallback, useState } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
import Link from "next/link";

import leftBtn from "../../public/left-arrow.png";
import rightBtn from "../../public/right-arrow.png";

const dummyData = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    content: {
      heading: "Good quality furniture",
      link: "/",
    },
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?cs=srgb&dl=pexels-pixabay-4158.jpg&fm=jpg",
    content: {
      heading: "New and serviced Electronics",
      link: "/",
    },
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content: {
      heading: "Good condition second hand books",
      link: "/",
    },
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/2747539/pexels-photo-2747539.jpeg?cs=srgb&dl=pexels-sourav-mishra-2747539.jpg&fm=jpg",
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
      <div
        className={(styles.slider, styles.slider__image)}
        style={{
          backgroundImage: `url(${sliderContent.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(10px)",
        }}
      ></div>
      <div className={styles.slider}>
        <div className={styles.slider__btn} onClick={leftHandler}>
          <Image
            src={leftBtn}
            alt="left button"
            width="40px"
            height="40px"
          ></Image>
        </div>
        {/* <div className={styles.slider__image}>
          <Image src={dummyImg} alt="" width="380px" height="350px"></Image>
        </div> */}
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
            width="40px"
            height="40px"
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
      {/* <div className={styles.slider__page}>
        <p>
          {sliderState + 1} of {dummyData.length}
        </p>
      </div> */}
    </>
  );
};

export default Slider;
