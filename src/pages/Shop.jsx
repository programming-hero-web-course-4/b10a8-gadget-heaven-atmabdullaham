import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useEffect } from "react";
import DashHero from "../components/DashHero";

const Shop = () => {
  useEffect(() => {
    document.title = "Shop | Gadget Mart";
  }, []);
  const data = useLoaderData();

  return (
    <div>
      <DashHero
        title={"All Product List"}
        description={"Product glary to visualize all all products at a glance"}
      ></DashHero>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {data.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
