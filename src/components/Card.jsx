import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    slug,
    price,
    desc,
    specs,
    available,
    rating,
  } = product || {};
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-semibold text-red-500">
          No Data Available
        </h2>
        <p className="text-gray-600 mt-2">
          The requested product details are not available at the moment.
        </p>
      </div>
    );
  }
  return (
    <div className="card bg-base-100  border-1 border-t-purple-300 border-b-purple-600 border-l-purple-200 border-r-purple-500">
      <figure className=" mx-2 mt-2">
        <img className="h-60" src={product.product_image} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-col justify-center items-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}</p>
        <Link to={`product/${product_id}`}>
          <div className="card-actions">
            <button className="btn hover:bg-purple-600 bg-white border-purple-600 hover:text-white text-black px-6  rounded-3xl">
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
