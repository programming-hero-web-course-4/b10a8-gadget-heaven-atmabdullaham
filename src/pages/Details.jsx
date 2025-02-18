import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import { addProducts, getAllProducts } from "../utils";
import { Rating } from "react-simple-star-rating";

const Details = () => {
  useEffect(() => {
    document.title = "Details | Gadget Mart";
  }, []);
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [inTheCart, setInTheCart] = useState(false);
  useEffect(() => {
    const oneProduct = data.find(
      (product) => product.product_id === parseInt(id)
    );
    setProduct(oneProduct);
    const fullWishList = getAllProducts("wishlist");
    const isExist = fullWishList.find(
      (item) => item.product_id == oneProduct.product_id
    );
    if (isExist) {
      setInTheCart(true);
    }
  }, [data, id]);
  const {
    product_id,
    product_title,
    product_image,
    category,
    slug,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};
  const { productInCart, productInWishlist } = useOutletContext();

  const handleWishlist = (product, type) => {
    addProducts(product, type);
    setInTheCart(true);
  };

  const handleCart = (product, type) => {
    addProducts(product, type);
  };
  return (
    <div className="pb-80">
      <HomeHero
        title={"Explore the Ultimate Product Details"}
        description={
          "Get in-depth insights, features, and specifications at a glance!"
        }
      ></HomeHero>
      <div className="min-h-[calc(100vh-50px)] lg:min-h-0"></div>
      <div className="card top-64 absolute w-full h-full">
        <div className=" mx-auto rounded-2xl   w-10/12 md:w-7/12  border-2 border-white bg-gray-200/20 backface-visible">
          <div className="w-auto h-full md:h-11/12  m-3 ">
            <div className="flex  flex-col lg:flex-row">
              <div className="bg-gray-200 lg:w-1/2 rounded-xl md:rounded-r-none">
                <img
                  className="object-cover w-full h-full rounded-2xl"
                  src={product_image}
                  alt=""
                />
              </div>
              <div className="card-body bg-white rounded-r-xl">
                <h2 className="card-title text-xl md:text-2xl">
                  {product_title}
                </h2>
                <p className="text-lg font-semibold">Price: {price}</p>
                <div
                  className={`badge border-gray-500 text-base p-2 font-semibold ${
                    availability ? " text-green-600 " : "text-red-600 "
                  }`}
                >
                  {availability ? "In Stock" : "Out of Stock"}
                </div>
                <p className="text-base font-medium text-gray-600">
                  {description}
                </p>
                <h4 className="text-base font-semibold">Specification:</h4>
                {specification?.length > 0 && (
                  <ol className="list-decimal list-inside mt-2 space-y-1 ">
                    {specification.map((spe, i) => (
                      <li
                        key={i}
                        className="ml-4 text-base font-medium text-gray-600"
                      >
                        {spe}
                      </li>
                    ))}
                  </ol>
                )}
                <h4 className="text-base font-semibold">Rating: {rating}</h4>
                <span className="text-gray-500 text-sm"></span>
                <div className="flex ml-16 -my-10 -mt-14 ">
                  <span className="flex  rotate-90">
                    <Rating
                      initialValue={rating}
                      readonly
                      size={20}
                      allowFraction
                    />
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      handleCart(product, "cart"), productInCart("cart");
                    }}
                    className="btn hover:bg-white bg-purple-600 border-purple-600 hover:text-black text-white hover:border-purple-800 px-6  rounded-3xl"
                  >
                    Add to Cart
                    <span className="text-2xl ">
                      <IoCartOutline />
                    </span>
                  </button>
                  <button
                    disabled={inTheCart}
                    onClick={() => {
                      handleWishlist(product, "wishlist"),
                        productInWishlist("wishlist");
                    }}
                    className="btn border-1 p-2  text-xl bg-white border-purple-600 rounded-full text-black"
                  >
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
