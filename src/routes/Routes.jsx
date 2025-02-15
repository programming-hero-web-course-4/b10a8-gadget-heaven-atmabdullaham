import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Offer from "../pages/Offer";
import ProductCards from "../components/ProductCards";
import Shop from "../pages/Shop";
import Details from "../pages/Details";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
      {
        path: "/product/:id",
        element: <Details></Details>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default routes;
