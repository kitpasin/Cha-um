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
import Service from "./pages/service/Service"
import Park from "./pages/service/park/Park"
import ParkDetail from "./pages/service/park/detail/ParkDetail";
import AirsideAndLandside from "./pages/service/airside&landside/AirsideAndLandside"
import AirsideAndLandsideDetail from "./pages/service/airside&landside/detail/AirsideAndLandsideDetail";
import Process from "./pages/process/Process"
import Turnkey from "./pages/process/turnkey/Turnkey"
import Landscape from "./pages/process/landscape/Landscape"
import Planting from "./pages/process/planting/Planting";
import Maintenance from "./pages/process/maintenance/Maintenance";
import Design from "./pages/etc/design/Design"
import DesignDetail from "./pages/etc/design/detail/DesignDetail";
import Contact from "./pages/etc/contact/Contact";

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
            {/* Service */}
            <Route path="/service" element={<Service />} />
            <Route path="/service/park" element={<Park />} />
            <Route path="/service/park/:id" element={<ParkDetail />} />
            <Route path="/service/airside&landside/" element={<AirsideAndLandside />} />
            <Route path="/service/airside&landside/:id" element={<AirsideAndLandsideDetail />} />
            {/* Process */}
            <Route path="/process" element={<Process />} />
            <Route path="/process/turnkey" element={<Turnkey />} />
            <Route path="/process/landscape" element={<Landscape />} />
            <Route path="/process/planting" element={<Planting />} />
            <Route path="/process/maintenance" element={<Maintenance />} />
            {/* Design */}
            <Route path="/etc/design" element={<Design />} />
            <Route path="/etc/design/:id" element={<DesignDetail />} />
            {/* Contact */}
            <Route path="/etc/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
