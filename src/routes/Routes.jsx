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
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            index: true, // This makes it the default child when visiting "/"
            element: <ProductCards />,
            loader: () => fetch("/products.json"),
          },
          {
            path: "category/:category", // No leading "/"
            element: <ProductCards />,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "shop",
        element: <Shop />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: () => fetch("/barchart.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <DashboardCards />,
          },
          {
            path: ":type",
            element: <DashboardCards />,
          },
        ],
      },
      {
        path: "offer",
        element: <Offer />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "product/:id",
        element: <Details />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "offer/product/:id",
        element: <Details />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "category/:category/:product/:id",
        element: <Details />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "shop/product/:id",
        element: <Details />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "category/:category",
        element: <ProductCards />,
        loader: () => fetch("/products.json"),
      },
    ],
  },
]);

export default routes;
