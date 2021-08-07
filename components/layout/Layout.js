import React from "react";
import { useState } from "react";
import Header from "../header/Header";

const Layout = ({ children }) => {
  const [authState, setAuthState] = useState(true);

  return (
    <div className="layout">
      {authState && <Header />}
      {children}
    </div>
  );
};

export default Layout;
