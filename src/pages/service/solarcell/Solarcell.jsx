import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import Lists from "./sections/Lists";
import { useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import axios from "axios";

export default function Solarcell({ host }) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const [services, setServices] = useState([]);
  const location = useLocation();
  const url = location.pathname.replace("/", "");

  async function getServiceByCategories() {
    const formdata = {
      url: url,
    };
    const response = await axios.post(
      `${host}api/backoffice/v1/service/category/read`,
      formdata
    );
    const banner = response.data.banner;
    const services = response.data.service;
    setBanner(banner);
    setServices(services);
  }

  useEffect(() => {
    getServiceByCategories().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | บริการติดตั้งระบบโซล่าเซลล์</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/service/solarcell" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} banner={banner} />
          </section>
          <section id="lists">
            <Lists host={host} services={services} />
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
