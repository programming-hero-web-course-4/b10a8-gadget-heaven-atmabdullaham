import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import { addProducts } from "../utils";

const Details = () => {
  useEffect(() => {
    document.title = "Details | Gadget Mart";
  }, []);
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const oneProduct = data.find(
      (product) => product.product_id === parseInt(id)
    );
    setProduct(oneProduct);
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
    available,
    rating,
  } = product || {};
  const { productInCart, productInWishlist } = useOutletContext();

  const handleWishlist = (product, type) => {
    addProducts(product, type);
  };

  const handleCart = (product, type) => {
    addProducts(product, type);
  };
  return (
    <div className="pb-80">
      <HomeHero></HomeHero>
      <div className="card top-64 absolute w-full h-full">
        <div className=" mx-auto rounded-2xl w-7/12  border-2 border-white bg-gray-200/20 backface-visible">
          <div className="w-auto h-11/12  m-3 ">
            <div className="flex ">
              <div className="bg-gray-200 w-1/2 rounded-l-xl">
                <img
                  className="object-cover w-full h-full rounded-2xl"
                  src={product_image}
                  alt=""
                />
              </div>
              <div className="card-body bg-white rounded-r-xl">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="badge badge-outline">Fashion</div>
                <p>{description}</p>
                <h4>Specification:</h4>
                {specification?.length > 0 && (
                  <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-700">
                    {specification.map((spe, i) => (
                      <li key={i} className="ml-4">
                        {spe}
                      </li>
                    ))}
                  </ol>
                )}
                <h4>Rating:</h4>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      handleCart(product, "cart"), productInCart("cart");
                    }}
                    className="btn bg-purple-600 text-white rounded-3xl text-base font-semibold"
                  >
                    Add to Cart
                    <span className="text-2xl ">
                      <IoCartOutline />
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      handleWishlist(product, "wishlist"),
                        productInWishlist("wishlist");
                    }}
                    className="btn border-1 p-2 rounded-full"
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
