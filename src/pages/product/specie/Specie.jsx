import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner";
import Lists from "./sections/Lists";
import { PulseLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Specie({ host }) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const url = location.pathname.replace("/", "");

  async function getProductByCategory() {
    const formdata = {
      url: url,
    };
    const response = await axios.post(
      `${host}api/backoffice/v1/product/category/read`,
      formdata
    );
    const banner = response.data.banner;
    const products = response.data.product;
    setBanner(banner);
    setProducts(products);
  }

  useEffect(() => {
    getProductByCategory().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | พันธ์ุพืช และ พันธ์ุสัตว์</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/product/specie" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} banner={banner} />
          </section>
          <section id="lists">
            <Lists host={host} products={products} />
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
