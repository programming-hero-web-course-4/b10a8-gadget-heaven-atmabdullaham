import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HomeHero from "../components/HomeHero";
import Categories from "../components/Categories";
import { useEffect } from "react";

const Home = () => {
  const categories = useLoaderData();
  useEffect(() => {
    document.title = "Gadget Mart";
  }, []);
  return (
    <div>
      <div className="relative">
        {/* Hero */}
        <HomeHero
          title={"Upgrade Your Tech Accessorize"}
          description={
            "Explore latest gadget for boosting up your productivity.  The productivity comply with latest gadget."
          }
          btn_1={"Shop Now"}
        ></HomeHero>
        {/* Banner */}
        <Banner></Banner>
      </div>
      <div className="pt-80">
        <h2 className="text-3xl text-center font-bold">
          Explore Cutting-Edge Gadgets
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/4 border-2">
          <Categories categories={categories}></Categories>
        </div>
        <div className="w-3/4 border-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
