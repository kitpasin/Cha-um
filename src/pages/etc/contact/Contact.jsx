import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import Form from "./sections/Form";
import axios from "axios";
import { PulseLoader } from "react-spinners";

export default function Contact({
  host,
  websiteTitle,
  company,
  logo,
  facebook,
  line,
  address,
  district,
  subdistrict,
  province,
  zipcode,
  tel,
  email,
  googlemap
}) {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const url = location.pathname.replace("/", "");
  const filterTitle = websiteTitle.filter((website) => {
    const matchesUrl = url ? website.cate_url === url : true;
    return matchesUrl
  })

  async function getContactBanner() {
    const response = await axios.get(`${host}api/backoffice/v1/contact/read`);
    const banner = response.data.banner;
    setBanner(banner);
  }

  useEffect(() => {
    getContactBanner().then(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>{filterTitle[0]?.cate_description || "Contact us"}</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/etc/contact" />
      </Helmet>
      {!loading ? (
        <>
          <section id="banner">
            <Banner host={host} banner={banner} />
          </section>
          <section id="form">
            <Form
              host={host}
              company={company}
              logo={logo}
              facebook={facebook}
              line={line}
              address={address}
              district={district}
              subdistrict={subdistrict}
              province={province}
              zipcode={zipcode}
              tel={tel}
              email={email}
              googlemap={googlemap}
            />
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
