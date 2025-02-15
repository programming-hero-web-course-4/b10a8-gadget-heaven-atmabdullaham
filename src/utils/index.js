import toast from "react-hot-toast";


const getAllProducts = (type) => {
 const all = localStorage.getItem(type);
 return all ? JSON.parse(all) : [];
};

// add data to local storage
const addProducts = (product, type) => {

 const products = getAllProducts(type)

 const isExist = products.some((item) => item.product_id === Number(product.product_id));

 if (isExist) {
  return toast.error(`This product already added to the  ${type}`);
 }
 products.push(product);
 localStorage.setItem(type, JSON.stringify(products));
 toast.success(`${product.product_title} Successfully added to ${type}`);
}


export { addProducts }