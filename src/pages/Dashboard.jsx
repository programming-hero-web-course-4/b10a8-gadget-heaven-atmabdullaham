import { useEffect } from "react";
import DashHero from "../components/DashHero";
import { Outlet, useOutletContext } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget Mart";
  }, []);
  const { productInCart, productInWishlist } = useOutletContext();

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
