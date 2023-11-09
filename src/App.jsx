import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import MaterialAndTool from "./pages/product/material&tool/MaterialAndTool"
import Specie from "./pages/product/specie/Specie";
import MaterialAndToolDetail from "./pages/product/material&tool/detail/MaterialAndToolDetail";
import SpecieDetail from "./pages/product/specie/detail/SpecieDetail";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioDetail from "./pages/portfolio/detail/PortfolioDetail"

export default function App() {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  // เช็คขนาดหน้าจอแล้วเก็บลง state windowWidth
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <PulseLoader color="#004500" />
        </div>
      ) : (
        <>
          <Header windowWidth={windowWidth} />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            {/* Product */}
            <Route path="/product" element={<Product />} />
            <Route path="/product/material&tool" element={<MaterialAndTool />} />
            <Route path="/product/material&tool/:id" element={<MaterialAndToolDetail />} />
            <Route path="/product/specie" element={<Specie />} />
            <Route path="/product/specie/:id" element={<SpecieDetail />} />
            {/* Portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
