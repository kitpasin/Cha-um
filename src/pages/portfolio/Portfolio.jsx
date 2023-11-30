import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import Lists from "./sections/Lists";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

export default function Portfolio({ host, websiteTitle }) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const location = useLocation()
  const filterTitle = websiteTitle.filter((website) => {
    const matchesUrl = location.pathname ? website.cate_url === location.pathname.replace("/", "") : true;
    return matchesUrl
  })

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
        <title>{filterTitle[0]?.cate_description || "ผลงานของเรา"}</title>
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
