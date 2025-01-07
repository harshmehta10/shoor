import React from "react";
import Footer from "./Footer/Footer";
import { Outlet, useLocation } from "react-router";
import Header from "./Header/Header";
import BlackHeader from "./Header/BlackHeader";
import Pdp from "../Pages/Pdp/Pdp";

const Layout = () => {
  const location = useLocation();
  const ispdp = location.pathname === "/Pdp";
  const isEliteApparel = location.pathname === "/elite";
  const isClassicFootwear = location.pathname === "/classic";
  const isOrganicGrooming = location.pathname === "/organic";
  const shouldApplyBlackHeader =
    ispdp || isEliteApparel || isClassicFootwear || isOrganicGrooming;
  return (
    <>
      {shouldApplyBlackHeader ? <BlackHeader /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
