import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { getAllProducts, removeAllProduct } from "../utils";
import DashedCard from "./DashedCard";

const DashboardCards = () => {
  const { pathname } = useLocation();
  const { productInCart, productInWishlist } = useOutletContext();
  // console.log(productInCart, productInWishlist);
  const { type } = useParams();
  // console.log(pathname);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const dashed = getAllProducts(type);
    // console.log(dashed);
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

  useEffect(() => {
    const dashed = getAllProducts("cart");
    if (pathname === "/dashboard") {
      setProducts(dashed);
    }
    // console.log(dashed);
  }, [type, pathname]);
  const handleRemoveAllProduct = (type) => {
    removeAllProduct(type);
    const dashed = getAllProducts(type);
    setProducts(dashed);
    productInCart(type);
  };
  const cartItem = productInCart("cart");
  console.log(cartItem);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>{type}</div>
        <div className="flex gap-4 items-center">
          <h3>Total Cost: {totalCost}</h3>
          <button onClick={() => handleSort()} className="btn">
            Sort by Price
          </button>
          <button
            onClick={() => handleRemoveAllProduct("cart")}
            className={`${
              pathname === "/dashboard/cart" && cartItem !== 0
                ? "block btn"
                : "hidden"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        {products.map((product) => (
          <DashedCard
            key={product.id}
            product={product}
            cartItem={cartItem}
          ></DashedCard>
        ))}
      </div>
    </>
  );
};

export default DashboardCards;
