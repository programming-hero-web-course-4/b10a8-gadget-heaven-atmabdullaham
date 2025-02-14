import { useLocation } from "react-router-dom";

const HomeHero = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        pathname == "/"
          ? "border-2 border-t-0 border-white bg-gray-200  rounded-xl rounded-t-none"
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
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
