import { useLocation, useOutletContext } from "react-router-dom";
import { addProducts } from "../utils";

const DashedCard = ({ product, cartItem }) => {
  const { productInCart, productInWishlist } = useOutletContext();
  const {
    product_id,
    product_title,
    product_image,
    category,
    slug,
    price,
    description,
    specs,
    available,
    rating,
  } = product || {};
  const { pathname } = useLocation();
  const handleCart = (product, type) => {
    addProducts(product, type);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm border-2 border-t-purple-300 border-b-purple-600 border-l-purple-200 border-r-purple-500">
      <figure className=" mx-2 my-1 h-40 border-b-2 lg:border-b-0 lg:border-r-2 border-purple-200 ">
        <img className="h-full" src={product.product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <div>
          <button
            onClick={() => {
              handleCart(product, "cart"), productInCart("cart");
            }}
            className={`bg-purple-600 hover:bg-white hover:border-purple-600 hover:text-black px-6 text-white rounded-3xl ${
              pathname === "/dashboard/cart" || pathname === "/dashboard"
                ? " hidden"
                : "block btn"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashedCard;
