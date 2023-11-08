import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Example from "./sections/Example";
import Service from "./sections/Service";
import Product from "./sections/Product";
import Portfolio from "./sections/Portfolio";

export default function Home() {
  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | หน้าแรก</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <section id="banner">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="example">
        <Example />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="product">
        <Product />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
    </main>
  );
}
