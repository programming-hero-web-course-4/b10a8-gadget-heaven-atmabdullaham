import { useEffect, useState } from "react";
import DashHero from "../components/DashHero";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget Mart";
  }, []);
  const { productInCart, productInWishlist } = useOutletContext();
  const pathname = useLocation();
  console.log(pathname);
  return (
    <>
      <DashHero
        title={"Dashboard"}
        description={
          "This is dashboard. You see here your cart and wishlist. So look at this."
        }
        btn_1={"Cart"}
        btn_2={"Wishlist"}
      ></DashHero>
      <Outlet context={{ productInCart, productInWishlist }}></Outlet>
    </>
  );
};

export default Dashboard;
