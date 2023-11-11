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
import Equipment from "./pages/product/equipment/Equipment";
import EquipmentDetail from "./pages/product/equipment/detail/EquipmentDetail";
import Packaging from "./pages/product/pakaging/Packing";
import PackagingDetail from "./pages/product/pakaging/detail/PackagingDetail";
import Improve from "./pages/service/improve/Improve";
import ImproveDetail from "./pages/service/improve/detail/ImproveDetail";
import Garden from "./pages/service/garden/Garden"
import GardenDetail from "./pages/service/garden/detail/GardenDetail";
import Cleaning from "./pages/service/cleaning/Cleaning"
import CleaningDetail from "./pages/service/cleaning/detail/CleaningDetail";
import Protect from "./pages/service/protect/Protect"
import ProtectDetail from "./pages/service/protect/detail/ProtectDetail";
import Solarcell from "./pages/service/solarcell/Solarcell"
import SolarcellDetail from "./pages/service/solarcell/detail/SolarcellDetail";
import PruningAndCutdown from "./pages/service/pruning&cutdown/PruningAndCutdown"
import PruningAndCutdownDetail from "./pages/service/pruning&cutdown/detail/PruningAndCutdownDetail"

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
            <Route path="/product/equipment" element={<Equipment />} />
            <Route path="/product/equipment/:id" element={<EquipmentDetail />} />
            <Route path="/product/specie" element={<Specie />} />
            <Route path="/product/specie/:id" element={<SpecieDetail />} />
            <Route path="/product/packaging" element={<Packaging />} />
            <Route path="/product/packaging/:id" element={<PackagingDetail />} />
            {/* Portfolio */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            {/* Service */}
            <Route path="/service" element={<Service />} />
            <Route path="/service/park" element={<Park />} />
            <Route path="/service/park/:id" element={<ParkDetail />} />
            <Route path="/service/airside&landside" element={<AirsideAndLandside />} />
            <Route path="/service/airside&landside/:id" element={<AirsideAndLandsideDetail />} />
            <Route path="/service/improve" element={<Improve />} />
            <Route path="/service/improve/:id" element={<ImproveDetail />} />
            <Route path="/service/garden" element={<Garden />} />
            <Route path="/service/garden/:id" element={<GardenDetail />} />
            <Route path="/service/cleaning" element={<Cleaning />} />
            <Route path="/service/cleaning/:id" element={<CleaningDetail />} />
            <Route path="/service/protect" element={<Protect />} />
            <Route path="/service/protect/:id" element={<ProtectDetail />} />
            <Route path="/service/solarcell" element={<Solarcell />} />
            <Route path="/service/solarcell/:id" element={<SolarcellDetail />} />
            <Route path="/service/pruning&cutdown" element={<PruningAndCutdown />} />
            <Route path="/service/pruning&cutdown/:id" element={<PruningAndCutdownDetail />} />
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
