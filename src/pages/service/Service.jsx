import { Helmet } from 'react-helmet-async'
import React from 'react'
import Banner from './sections/Banner'
import Submenu from './sections/Submenu'
import Example from './sections/Example'
import Lists from './sections/Lists'

export default function Service() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | บริการของเรา</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
        />
        <link rel="canonical" href="/service" />
      </Helmet>
      
      <section id="banner">
        <Banner />
      </section>
      <section id="submenu">
        <Submenu />
      </section>
      <section id="example">
        <Example />
      </section>
      <section id="lists">
        <Lists />
      </section>
    </main>
  )
}
