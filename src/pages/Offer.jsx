import { useEffect } from "react";

const Offer = () => {
  useEffect(() => {
    document.title = "Offer | Gadget Mart";
  }, []);
  return <div>Offer</div>;
};

export default Offer;
