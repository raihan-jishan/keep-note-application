import React from "react";
import Navbar from "../components/Navbar.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}

      <footer />
    </div>
  );
};

export default Layout;
