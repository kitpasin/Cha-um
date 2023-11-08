import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner"
import Submenu from "./sections/Submenu";
import Recoment from "./sections/Recoment";

export default function Product() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | สินค้าของเรา</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
        />
        <link rel="canonical" href="/product" />
      </Helmet>
      
      <section id="banner">
        <Banner />
      </section>
      <section id="submenu">
        <Submenu />
      </section>
      <section id="recoment">
        <Recoment />
      </section>
    </main>
  );
}
