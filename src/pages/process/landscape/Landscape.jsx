import { Helmet } from 'react-helmet-async'
import React from 'react'
import Banner from './sections/Banner'
import Content from './sections/Content'

export default function Landscape() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | LANDSCAPE DESIGN SERVICES</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
        />
        <link rel="canonical" href="/process/landscape" />
      </Helmet>
      
      <section id="banner">
        <Banner />
      </section>
      <section id="content">
        <Content />
      </section>
    </main>
  )
}
