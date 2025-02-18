import { useEffect, useRef, useState } from "react";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { getAllProducts, removeAllProduct } from "../utils";
import DashedCard from "./DashedCard";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const DashboardCards = () => {
  const navigateHome = useNavigate();
  const handleNavigate = () => {
    navigateHome("/");
  };
  const { pathname } = useLocation();
  const { productInCart } = useOutletContext();

  const { type } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const dashed = getAllProducts(type);
    setProducts(dashed);
  }, [type]);
  const [cost, setCost] = useState(0);
  const prevCostRef = useRef(0);

  useEffect(() => {
    prevCostRef.current = cost;
    let total = 0;
    products.forEach((product) => {
      total += parseInt(product.price);
    });
    setCost(total);
  }, [products, cost]);

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
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
    document.getElementById("my_modal_5").showModal();
  };
  const cartItem = productInCart("cart");

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center  px-8 py-2">
        <div>
          <h3 className="text-xl font-bold capitalize">{type}</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <h3>Total Cost: {cost}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleSort()}
              className="btn hover:bg-purple-600 bg-white border-purple-600 hover:text-white text-black px-4  rounded-3xl"
            >
              Sort by Price
            </button>
            <button
              onClick={() => {
                handleRemoveAllProduct("cart");
              }}
              className={`${
                (pathname === "/dashboard/cart" || pathname === "/dashboard") &&
                cartItem !== 0
                  ? "block bg-purple-600 hover:bg-white hover:border-purple-600 hover:text-black py-2 px-4 text-white rounded-3xl"
                  : "hidden"
              }`}
            >
              Purchase
            </button>
          </div>
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
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-2 ">
          <div className="text-3xl text-green-500">
            <IoShieldCheckmarkSharp />
          </div>

          <h3 className="font-bold text-2xl border-b-2 border-gray-300 pb-4">
            Successfully Payment{" "}
          </h3>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="">Thanks for Purchasing</p>
            <p className="">Total: {prevCostRef.current} </p>
          </div>

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => handleNavigate()} className="btn w-full">
              Close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DashboardCards;
