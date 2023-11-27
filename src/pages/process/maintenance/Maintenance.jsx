import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import Content from "./sections/Content";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";

export default function Maintenance({ host }) {
  const [loading, setLoading] = useState(true);
  const [process, setProcess] = useState([]);
  const location = useLocation();
  const url = location.pathname.replace("/", "");

  async function getProcessByCategories() {
    const formdata = {
      url: url,
    };
    const response = await axios.post(
      `${host}api/backoffice/v1/process/category/read`,
      formdata
    );
    const process = response.data.process;
    setProcess(process);
  }

  useEffect(() => {
    getProcessByCategories().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | MAINTENANCE SERVICES</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/process/maintenance" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} process={process} />
          </section>
          <section id="content">
            <Content process={process} />
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
