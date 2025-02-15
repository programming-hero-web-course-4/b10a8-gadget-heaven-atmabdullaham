import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../utils";
import DashedCard from "./DashedCard";

const DashboardCards = () => {
  const { type } = useParams();
  console.log(type);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const dashed = getAllProducts(type);
    console.log(dashed);
    setProducts(dashed);
  }, [type]);
  const [cost, setCost] = useState([]);
  useEffect(() => {
    setCost(products.map((product) => parseInt(product.price)));
  }, [products]);
  const totalCost = cost.reduce((a, b) => a + b, 0);
  const handleSort = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>{type}</div>
        <div className="flex gap-4 items-center">
          <h3>Total Cost: {totalCost}</h3>
          <button onClick={() => handleSort()} className="btn">
            Sort by Price
          </button>
          <button className="btn">Purchase</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        {products.map((product) => (
          <DashedCard key={product.id} product={product}></DashedCard>
        ))}
      </div>
    </>
  );
};

export default DashboardCards;
