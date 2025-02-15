import { useEffect, useState } from "react";
import DashHero from "../components/DashHero";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {}, []);
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
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
