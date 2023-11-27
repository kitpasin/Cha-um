import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Example from "./sections/Example";
import Service from "./sections/Service";
import Product from "./sections/Product";
import Portfolio from "./sections/Portfolio";
import axios from "axios";
import { PulseLoader } from "react-spinners";

export default function Home({ host }) {
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState([]);
  const [homeExample, setHomeExample] = useState([]);
  const [homeService, setHomeService] = useState([]);
  const [homeProduct, setHomeProduct] = useState([]);
  const [homePortfolio, setHomePortfolio] = useState([]);

  async function getHome() {
    const response = await axios.get(`${host}api/backoffice/v1/home/read`);
    const post = response.data.post;
    const example = response.data.example;
    const service = response.data.service;
    const product = response.data.product;
    const portfolio = response.data.portfolio;
    setHomeData(post);
    setHomeExample(example);
    setHomeService(service);
    setHomeProduct(product);
    setHomePortfolio(portfolio);
  }

  useEffect(() => {
    getHome().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | หน้าแรก</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} homeData={homeData} />
          </section>
          <section id="about">
            <About host={host} homeData={homeData} />
          </section>
          <section id="example">
            <Example host={host} homeExample={homeExample} />
          </section>
          <section id="service">
            <Service host={host} homeService={homeService} />
          </section>
          <section id="product">
            <Product host={host} homeProduct={homeProduct} />
          </section>
          <section id="portfolio">
            <Portfolio host={host} homePortfolio={homePortfolio} />
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
