import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import Lists from "./sections/Lists";
import axios from "axios";
import { PulseLoader } from "react-spinners";

export default function Portfolio({ host }) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  async function getPortfolio() {
    const response = await axios.get(`${host}api/backoffice/v1/portfolio/read`);
    const banner = response.data.banner;
    const list = response.data.list;
    setBanner(banner);
    setPortfolios(list);
  }

  useEffect(() => {
    getPortfolio().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | ผลงานของเรา</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} banner={banner} />
          </section>
          <section id="lists">
            <Lists host={host} portfolios={portfolios} />
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
