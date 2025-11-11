import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/SharedComponents/Header/Navbar";
import Footer from "../Components/SharedComponents/Footer/Footer";
import TopHeader from "../Components/SharedComponents/Header/TopHeader";

function Root() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Root;
