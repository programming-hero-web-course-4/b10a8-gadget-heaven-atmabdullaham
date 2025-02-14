import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HomeHero from "../components/HomeHero";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <div className="relative">
        {/* Hero */}
        <HomeHero></HomeHero>
        {/* Banner */}
        <Banner></Banner>
      </div>
      <div className="pt-80">
        <h2 className="text-3xl text-center font-bold">
          Explore Cutting-Edge Gadgets
        </h2>
      </div>
      <div className="flex ">
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
