import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = ({ cartItem, wishlistItem }) => {
  const { pathname } = useLocation();
  const navigateDashboardCart = useNavigate();
  const handleNavigateCart = () => {
    navigateDashboardCart("/dashboard/cart");
  };
  const navigateDashboardWishlist = useNavigate();
  const handleNavigateWishlist = () => {
    navigateDashboardWishlist("/dashboard/wishlist");
  };

  return (
    <div
      className={` border-2 sticky top-0 z-50  ${
        pathname == "/" ||
        pathname == "/category/laptops" ||
        pathname == "/category/smartphones" ||
        pathname == "/category/accessories" ||
        pathname == "/category/smartwatch" ||
        pathname == "/category/headphones" ||
        pathname == "/category/camera" ||
        pathname == "/category/smart-tv" ||
        pathname == "/category/gaming-console" ||
        pathname == "/category/mac-book"
          ? " border-white bg-gray-200 border-b-0 rounded-xl rounded-b-none"
          : "border-white bg-base-100"
      }`}
    >
      <div
        className={`navbar  ${
          pathname == "/" ||
          pathname == "/category/laptops" ||
          pathname == "/category/smartphones" ||
          pathname == "/category/accessories" ||
          pathname == "/category/smartwatch" ||
          pathname == "/category/headphones" ||
          pathname == "/category/camera" ||
          pathname == "/category/smart-tv" ||
          pathname == "/category/gaming-console" ||
          pathname == "/category/mac-book"
            ? "bg-purple-600 text-white  rounded-xl rounded-b-none m-3 mb-0  w-auto shadow-sm"
            : "bg-base-100 m-3 mb-0"
        } `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-auto px-10 shadow gap-3 text-base font-semibold  ${
                pathname == "/" ||
                pathname == "/category/laptops" ||
                pathname == "/category/smartphones" ||
                pathname == "/category/accessories" ||
                pathname == "/category/smartwatch" ||
                pathname == "/category/headphones" ||
                pathname == "/category/camera" ||
                pathname == "/category/smart-tv" ||
                pathname == "/category/gaming-console" ||
                pathname == "/category/mac-book"
                  ? "bg-purple-600 text-white  rounded-xl rounded-b-none m-3 mb-0  w-auto shadow-sm"
                  : "bg-base-100 m-3 mb-0"
              } `}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/offer">Offer</NavLink>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Gadget Mart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base font-medium">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "border-b-2" : "hover:border-b-2"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "border-b-2" : "hover:border-b-2"}`
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "border-b-2" : "hover:border-b-2"}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "border-b-2" : "hover:border-b-2"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "border-b-2" : "hover:border-b-2"}`
              }
              to="/offer"
            >
              Offer
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end pr-6">
          {/* Cart */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator text-2xl bg-white rounded-full text-black p-1">
                  <IoCartOutline />
                  {/* cartItem */}
                  <span className="badge badge-sm text-black border-0 bg-white w-4  font-bold rounded-full h-4 indicator-item">
                    {cartItem}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{cartItem} Items</span>

                  <div className="card-actions">
                    <button
                      onClick={() => handleNavigateCart()}
                      className="btn hover:bg-white bg-purple-600 border-purple-600 hover:text-black text-white hover:border-purple-800 px-6  rounded-3xl  btn-block"
                    >
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Wishlist */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator text-xl bg-white rounded-full text-black p-1">
                  <FaRegHeart />
                  {/* wishlistItem */}
                  <span className="badge badge-sm text-black border-0 bg-white w-4  font-bold rounded-full h-4 indicator-item">
                    {wishlistItem}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {wishlistItem} Items
                  </span>
                  <div className="card-actions">
                    <button
                      onClick={() => handleNavigateWishlist()}
                      className="btn hover:bg-white bg-purple-600 border-purple-600 hover:text-black text-white hover:border-purple-800 px-6  rounded-3xl  btn-block"
                    >
                      View Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
