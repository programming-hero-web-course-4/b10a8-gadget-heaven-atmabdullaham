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
    document.getElementById("my_modal_5").showModal();
  };
  const cartItem = productInCart("cart");
  const totalCost = cost;
  console.log(totalCost);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>{type}</div>
        <div className="flex gap-4 items-center">
          <h3>Total Cost: {cost}</h3>
          <button onClick={() => handleSort()} className="btn">
            Sort by Price
          </button>
          <button
            onClick={() => {
              handleRemoveAllProduct("cart");
            }}
            className={`${
              (pathname === "/dashboard/cart" || pathname === "/dashboard") &&
              cartItem !== 0
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
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-3">
          <IoShieldCheckmarkSharp />
          <h3 className="font-bold text-2xl border-b-2 border-gray-300 pb-4">
            Successfully Payment{" "}
          </h3>
          <p className="py-4">Thanks for Purchasing</p>
          <p className="py-4">Total: {prevCostRef.current} </p>

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
