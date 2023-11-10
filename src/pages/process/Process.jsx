import { Helmet } from 'react-helmet-async'
import React from 'react'
import Banner from './sections/Banner'
import Submenu from './sections/Submenu'

export default function Process() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | ขั้นตอนการทำงาน</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
        />
        <link rel="canonical" href="/process" />
      </Helmet>
      
      <section id="banner">
        <Banner />
      </section>
      <section id="submenu">
        <Submenu />
      </section>
    </main>
  )
}
