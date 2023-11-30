import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner";
import Submenu from "./sections/Submenu";
import Recoment from "./sections/Recoment";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

export default function Product({ host, websiteTitle }) {
  const [loading, setLoading] = useState(true);
  const [productBanner, setProductBanner] = useState([]);
  const [productSubmenu, setProductSubmenu] = useState([]);
  const [productRecoment, setProductRecoment] = useState([]);
  const location = useLocation()
  const filterTitle = websiteTitle.filter((website) => {
    const matchesUrl = location.pathname ? website.cate_url === location.pathname.replace("/", "") : true;
    return matchesUrl
  })

  async function getProduct() {
    const response = await axios.get(`${host}api/backoffice/v1/product/read`);
    const banner = response.data.banner;
    const submenu = response.data.submenu;
    const recoment = response.data.recoment;
    setProductBanner(banner);
    setProductSubmenu(submenu);
    setProductRecoment(recoment);
  }

  useEffect(() => {
    getProduct().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>{filterTitle[0]?.cate_description || "สินค้าของเรา"}</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/product" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} productBanner={productBanner} />
          </section>
          <section id="submenu">
            <Submenu host={host} productSubmenu={productSubmenu} />
          </section>
          <section id="recoment">
            <Recoment host={host} productRecoment={productRecoment} />
          </section>
        </>
      ) : (
        <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
          <PulseLoader color="#004500" />
        </div>
      )}
    </main>
  );
}
