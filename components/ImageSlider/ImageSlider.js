import { useState } from "react";
import styles from "./ImageSlider.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const ImageSlider = ({ Data }) => {
  const [sliderState, setSliderState] = useState(0);

  const rightHandler = () => {
    if (sliderState === Data.length - 1) {
      return setSliderState(0);
    }
    if (sliderState < 3) setSliderState((prevState) => prevState + 1);
  };

  const leftHandler = () => {
    if (sliderState === 0) {
      return setSliderState(Data.length - 1);
    }
    if (sliderState > 0) setSliderState((prevState) => prevState - 1);
  };

  let sliderContent = Data[sliderState];

  return (
    <div className={styles.slider}>
      <div className={styles.slider__btn} onClick={leftHandler}>
        <FaChevronCircleLeft style={{ fontSize: "30px" }} />
      </div>
      <div className={styles.slider__content}>{sliderContent}</div>
      <div className={styles.slider__btn} onClick={rightHandler}>
        <FaChevronCircleRight style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
};

export default ImageSlider;
