import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import MaterialAndTool from "./pages/product/material&tool/MaterialAndTool";
import Specie from "./pages/product/specie/Specie";
import MaterialAndToolDetail from "./pages/product/material&tool/detail/MaterialAndToolDetail";
import SpecieDetail from "./pages/product/specie/detail/SpecieDetail";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioDetail from "./pages/portfolio/detail/PortfolioDetail";
import Service from "./pages/service/Service";
import Park from "./pages/service/park/Park";
import ParkDetail from "./pages/service/park/detail/ParkDetail";
import AirsideAndLandside from "./pages/service/airside&landside/AirsideAndLandside";
import AirsideAndLandsideDetail from "./pages/service/airside&landside/detail/AirsideAndLandsideDetail";
import Process from "./pages/process/Process";
import Turnkey from "./pages/process/turnkey/Turnkey";
import Landscape from "./pages/process/landscape/Landscape";
import Planting from "./pages/process/planting/Planting";
import Maintenance from "./pages/process/maintenance/Maintenance";
import Design from "./pages/etc/design/Design";
import DesignDetail from "./pages/etc/design/detail/DesignDetail";
import Contact from "./pages/etc/contact/Contact";
import Equipment from "./pages/product/equipment/Equipment";
import EquipmentDetail from "./pages/product/equipment/detail/EquipmentDetail";
import Packaging from "./pages/product/pakaging/Packing";
import PackagingDetail from "./pages/product/pakaging/detail/PackagingDetail";
import Improve from "./pages/service/improve/Improve";
import ImproveDetail from "./pages/service/improve/detail/ImproveDetail";
import Garden from "./pages/service/garden/Garden";
import GardenDetail from "./pages/service/garden/detail/GardenDetail";
import Cleaning from "./pages/service/cleaning/Cleaning";
import CleaningDetail from "./pages/service/cleaning/detail/CleaningDetail";
import Protect from "./pages/service/protect/Protect";
import ProtectDetail from "./pages/service/protect/detail/ProtectDetail";
import Solarcell from "./pages/service/solarcell/Solarcell";
import SolarcellDetail from "./pages/service/solarcell/detail/SolarcellDetail";
import PruningAndCutdown from "./pages/service/pruning&cutdown/PruningAndCutdown";
import PruningAndCutdownDetail from "./pages/service/pruning&cutdown/detail/PruningAndCutdownDetail";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const host = import.meta.env.VITE_API_BASE_URL; 

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
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  return (
    <>
      <Header host={host} windowWidth={windowWidth} />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home host={host} />} />
        {/* Product */}
        <Route path="/product" element={<Product host={host} />} />
        <Route path="/product/material&tool" element={<MaterialAndTool host={host} />} />
        <Route
          path="/product/material&tool/:id"
          element={<MaterialAndToolDetail host={host} />}
        />
        <Route path="/product/equipment" element={<Equipment host={host} />} />
        <Route path="/product/equipment/:id" element={<EquipmentDetail host={host} />} />
        <Route path="/product/specie" element={<Specie host={host} />} />
        <Route path="/product/specie/:id" element={<SpecieDetail host={host} />} />
        <Route path="/product/packaging" element={<Packaging host={host} />} />
        <Route path="/product/packaging/:id" element={<PackagingDetail host={host} />} />
        {/* Portfolio */}
        <Route path="/portfolio" element={<Portfolio host={host} />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail host={host} />} />
        {/* Service */}
        <Route path="/service" element={<Service host={host} />} />
        <Route path="/service/park" element={<Park host={host} />} />
        <Route path="/service/park/:id" element={<ParkDetail host={host} />} />
        <Route
          path="/service/airside&landside"
          element={<AirsideAndLandside host={host} />}
        />
        <Route
          path="/service/airside&landside/:id"
          element={<AirsideAndLandsideDetail host={host} />}
        />
        <Route path="/service/improve" element={<Improve host={host} />} />
        <Route path="/service/improve/:id" element={<ImproveDetail host={host} />} />
        <Route path="/service/garden" element={<Garden host={host} />} />
        <Route path="/service/garden/:id" element={<GardenDetail host={host} />} />
        <Route path="/service/cleaning" element={<Cleaning host={host} />} />
        <Route path="/service/cleaning/:id" element={<CleaningDetail host={host} />} />
        <Route path="/service/protect" element={<Protect host={host} />} />
        <Route path="/service/protect/:id" element={<ProtectDetail host={host} />} />
        <Route path="/service/solarcell" element={<Solarcell host={host} />} />
        <Route path="/service/solarcell/:id" element={<SolarcellDetail host={host} />} />
        <Route
          path="/service/pruning&cutdown"
          element={<PruningAndCutdown host={host} />}
        />
        <Route
          path="/service/pruning&cutdown/:id"
          element={<PruningAndCutdownDetail host={host} />}
        />
        {/* Process */}
        <Route path="/process" element={<Process host={host} />} />
        <Route path="/process/turnkey" element={<Turnkey host={host} />} />
        <Route path="/process/landscape" element={<Landscape host={host} />} />
        <Route path="/process/planting" element={<Planting host={host} />} />
        <Route path="/process/maintenance" element={<Maintenance host={host} />} />
        {/* Design */}
        <Route path="/etc/design" element={<Design host={host} />} />
        <Route path="/etc/design/:id" element={<DesignDetail host={host} />} />
        {/* Contact */}
        <Route path="/etc/contact" element={<Contact />} />
      </Routes>
      <Footer host={host} />
    </>
  );
}
