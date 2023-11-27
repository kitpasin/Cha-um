import { Helmet } from "react-helmet-async";
import React from "react";
import Banner from "./sections/Banner";
import Form from "./sections/Form";

export default function Contact() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | Contact us</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/etc/contact" />
      </Helmet>

      <section id="banner">
        <Banner />
      </section>
      <section id="form">
        <Form />
      </section>
    </main>
  );
}
