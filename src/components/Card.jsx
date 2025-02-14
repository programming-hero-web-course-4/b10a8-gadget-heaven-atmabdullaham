import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const {
    id,
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
    <div className="card bg-base-100  shadow-sm border-1 border-t-purple-300 border-b-purple-700 border-l-purple-200 border-r-purple-500">
      <figure className="bg-gray-200 mx-8 mt-8">
        <img className="h-52" src={product.product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}</p>
        <Link>
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
