import { NavLink, useLocation } from "react-router-dom";

const DashHero = ({ title, description, btn_1, btn_2 }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        pathname == "/"
          ? " border-2 border-t-0 border-white bg-gray-200  rounded-xl rounded-t-none"
          : ""
      }`}
    >
      <div
        className={`hero bg-purple-600 text-white ${
          pathname == "/"
            ? "  rounded-xl rounded-t-none m-3 mt-0  w-auto pb-64"
            : "pb-10"
        } shadow-sm`}
      >
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div
              className={`${pathname === "/dashboard" ? "block" : "hidden"}`}
            >
              <NavLink to={`/dashboard/cart`}>
                <button className="btn">{btn_1}</button>
              </NavLink>
              <NavLink to={`/dashboard/wishlist`}>
                <button className="btn">{btn_2}</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHero;
