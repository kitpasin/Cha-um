import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import Lists from "./sections/Lists";
import axios from "axios";
import { PulseLoader } from "react-spinners";

export default function Design({ host, websiteTitle }) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const [designs, setDesigns] = useState([]);
  const url = location.pathname.replace("/", "");
  const filterTitle = websiteTitle.filter((website) => {
    const matchesUrl = url ? website.cate_url === url : true;
    return matchesUrl
  })


  async function getDesign() {
    const response = await axios.get(`${host}api/backoffice/v1/design/read`);
    const banner = response.data.banner;
    const designs = response.data.designs;
    setBanner(banner);
    setDesigns(designs);
  }

  useEffect(() => {
    getDesign().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>{filterTitle[0]?.cate_description || "Design"}</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/etc/design" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} banner={banner} />
          </section>
          <section id="lists">
            <Lists host={host} designs={designs} />
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
