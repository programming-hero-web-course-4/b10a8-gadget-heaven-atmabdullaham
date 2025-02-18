import { useEffect, useState } from "react";
import DashHero from "../components/DashHero";
import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Offer = () => {
  const navigateToLaptops = useNavigate();
  const handleNavigateWishlist = () => {
    navigateToLaptops("/dashboard/cart");
  };
  const data = useLoaderData();
  const [offerProduct, setOfferProduct] = useState([]);
  useEffect(() => {
    const laptops = data.filter((product) => product.category === "Laptops");
    setOfferProduct(laptops);
  }, [data]);

  useEffect(() => {
    document.title = "Offer | Gadget Mart";
  }, []);
  return (
    <div>
      {" "}
      <DashHero
        title={"Exclusive Offer Here"}
        description={
          "Here all available offer on specific product or category visible here."
        }
        btn_1={"Cart"}
        btn_2={"Wishlist"}
      ></DashHero>
      <div className="flex flex-col items-center justify-center bg-purple-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Special Offer on Laptops!
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Get an exclusive
          <span className="text-3xl md:text-5xl lg:text-8xl font-bold text-red-500">
            {" "}
            27%{" "}
          </span>
          discount on all laptops.
        </p>
        <p className="text-xl font-semibold text-green-500 mb-6">
          Hurry, Offer Ends Soon!!!
        </p>
        <button
          onClick={() => handleNavigateWishlist()}
          className="btn hover:bg-white bg-purple-600 border-purple-600 hover:text-black text-white hover:border-purple-800 px-6  rounded-3xl"
        >
          Shop Now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-purple-50">
        {offerProduct.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Offer;
