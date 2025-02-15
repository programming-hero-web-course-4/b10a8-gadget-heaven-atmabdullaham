const DashedCard = ({ product }) => {
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
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm border-2">
      <figure className="bg-gray-200 mx-3 my-3 h-40">
        <img className="h-14" src={product.product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default DashedCard;
