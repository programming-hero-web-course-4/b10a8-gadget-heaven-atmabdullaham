import { useLocation, useNavigate } from "react-router-dom";

const HomeHero = ({ title, description, btn_1, btn_2 }) => {
  const navigateDashboard = useNavigate();
  const handleNavigate = () => {
    navigateDashboard("/dashboard");
  };
  const { pathname } = useLocation();
  return (
    <div
      className={`${
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
          ? "border-2 border-t-0 border-white bg-gray-200  rounded-xl rounded-t-none"
          : ""
      }`}
    >
      <div
        className={`hero bg-purple-600 text-white ${
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
            ? "  rounded-xl rounded-t-none m-3 mt-0  w-auto pb-20 md:pb-64"
            : "pb-16 md:pb-60"
        } shadow-sm`}
      >
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {title}
            </h1>
            <p className="py-6">{description}</p>
            <div
              className={`${
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
                  ? "block"
                  : "hidden"
              }`}
            >
              <button onClick={() => handleNavigate()} className="btn">
                {btn_1}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
