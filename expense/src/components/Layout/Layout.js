import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({Children}) => {
  return (
    <>
      <Header />
      <div className="content">
     {Children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
