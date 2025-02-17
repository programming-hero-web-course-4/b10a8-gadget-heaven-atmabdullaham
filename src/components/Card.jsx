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

  return (
    <div className="card bg-base-100    border-1 border-t-purple-300 border-b-purple-600 border-l-purple-200 border-r-purple-500">
      <figure className=" mx-2 mt-2">
        <img className="h-60" src={product.product_image} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-col justify-center items-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}</p>
        <Link to={`product/${product_id}`}>
          <div className="card-actions">
            <button className="btn bg-white hover:bg-white rounded-2xl border-2 border-t-purple-300 border-b-purple-700 border-l-purple-200 border-r-purple-500">
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
