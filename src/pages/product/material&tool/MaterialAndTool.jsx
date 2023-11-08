import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner";
import Lists from "./sections/Lists";

export default function Product() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | วัสดุ และอุปกรณ์การเกษตร</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
        />
        <link rel="canonical" href="/product/material&tool" />
      </Helmet>
      
     <section id="banner">
        <Banner />
     </section>
     <section id="lists">
        <Lists />
     </section>
    </main>
  );
}
