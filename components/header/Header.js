import Image from "next/image";
import React from "react";
import Nav from "../nav/Nav";

import dummyImg from "../../public/dummy1.jpg";
import Slider from "../slider/Slider";

const Header = () => {
  return (
    <div className="layout-header">
      <Nav />
      <Slider />
      {/* <Image src={dummyImg} alt="" width="300px" height="400px"></Image> */}
    </div>
  );
};

export default Header;
