import { Helmet } from 'react-helmet-async'
import React, { useEffect, useState } from 'react'
import Banner from './sections/Banner'
import Lists from './sections/Lists'
import axios from 'axios';

export default function Design({ host }) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const [designs, setDesigns] = useState([]);

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

  console.log(designs);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | Design</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/etc/design" />
      </Helmet>
      
      <section id="banner">
        <Banner host={host} banner={banner} />
      </section>
      <section id="lists">
        <Lists host={host} designs={designs}/>
      </section>
    </main>
  )
}
