import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import HomeHero from "../components/HomeHero";

const Shop = () => {
  const data = useLoaderData();
  return (
    <div>
      <HomeHero></HomeHero>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {data.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
