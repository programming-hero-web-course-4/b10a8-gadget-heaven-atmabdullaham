import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Offer from "../pages/Offer";
import ProductCards from "../components/ProductCards";
import Shop from "../pages/Shop";
import Details from "../pages/Details";
import DashboardCards from "../components/DashboardCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("/public/products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("/public/products.json"),
          },
        ],
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("/public/products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/public/barChart.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <DashboardCards></DashboardCards>,
          },
          {
            path: "/dashboard/:type",
            element: <DashboardCards></DashboardCards>,
          },
        ],
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
      {
        path: "/product/:id",
        element: <Details></Details>,
        loader: () => fetch("/public/products.json"),
      },
      {
        path: "/category/:category/:product/:id",
        element: <Details></Details>,
        loader: () => fetch("/public/products.json"),
      },
      {
        path: "/shop/product/:id",
        element: <Details></Details>,
        loader: () => fetch("/public/products.json"),
      },
    ],
  },
]);

export default routes;
