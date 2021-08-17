import React from "react";
import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  const [authState, setAuthState] = useState(true);

  return (
    <div className="layout">
      {authState && <Header />}
      {children}
      {authState && <Footer />}
    </div>
  );
};

export default Layout;
