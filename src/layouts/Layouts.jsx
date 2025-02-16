import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";
import { Toaster } from "react-hot-toast";
import { getAllProducts } from "../utils";
import { useEffect, useState } from "react";
const Layouts = () => {
  const [cartItem, setCartItem] = useState(0);
  const [wishlistItem, setWishlistItem] = useState(0);
  const productInCart = (type) => {
    const getProductsArray = getAllProducts(type);
    const length = getProductsArray.length;
    // if (length) {
    setCartItem(length);
    return length;
    // } else {
    // setCartItem(0);
    // }

    // console.log(length);
  };
  useEffect(() => {
    productInCart("cart");
    productInWishlist("wishlist");
  }, []);
  const productInWishlist = (type) => {
    const getProductsArray = getAllProducts(type);
    const length = getProductsArray.length;
    setWishlistItem(length);
    // console.log(length);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Navbar */}
      <Toaster />
      <Navbar cartItem={cartItem} wishlistItem={wishlistItem}></Navbar>
      {/* Dynamic Part */}
      <div className="min-h-[calc(100vh-420px)] ">
        <Outlet context={{ productInCart, productInWishlist }}></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
