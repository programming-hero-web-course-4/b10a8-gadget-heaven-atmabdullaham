import {
  useNavigate,
  useLoaderData,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const byCategory = [...data].filter(
        (product) => product.slug === category
      );
      setProducts(byCategory);
    } else {
      setProducts(data.slice(0, 10));
    }
  }, [data, category]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>

      <p className="cursor-pointer" onClick={() => navigate("/shop")}>
        See All Products
      </p>
    </>
  );
};

export default ProductCards;
