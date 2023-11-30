import { Helmet } from 'react-helmet-async'
import React, { useEffect, useState } from 'react'
import Banner from './sections/Banner'
import Content from './sections/Content'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';

export default function Landscape({ host, websiteTitle }) {
  const [loading, setLoading] = useState(true);
  const [process, setProcess] = useState([]);
  const location = useLocation();
  const url = location.pathname.replace("/", "");
  const filterTitle = websiteTitle.filter((website) => {
    const matchesUrl = url ? website.cate_url === url : true;
    return matchesUrl
  })

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
        <title>{filterTitle[0]?.cate_description || "LANDSCAPE DESIGN SERVICES"}</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/process/landscape" />
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
  )
}
