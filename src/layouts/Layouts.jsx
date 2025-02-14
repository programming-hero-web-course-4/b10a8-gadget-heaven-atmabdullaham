import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";
const Layouts = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic Part */}
      <div className="min-h-[calc(100vh-420px)] ">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
