import { Link, NavLink } from "react-router-dom";
const Categories = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs flex flex-col tabs-box bg-purple-50 shadow-sm mr-2 ml-0.5 py-4 sticky"
    >
      <NavLink
        to={`/`}
        role="tab"
        className={({ isActive }) =>
          `tab${
            isActive
              ? "tab-active bg-purple-600 text-white flex justify-center p-2 md:p-1 lg:p-2 lg:text-lg lg:font-semibold rounded-2xl mx-8"
              : ""
          }`
        }
      >
        All Product
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.slug}
          to={`/category/${category.slug}`}
          role="tab"
          className={({ isActive }) =>
            `tab${
              isActive
                ? "tab-active  bg-purple-600 text-white flex justify-center p-2 lg:text-lg lg:font-semibold rounded-2xl mx-8"
                : ""
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
