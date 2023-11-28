import { Link } from "react-router-dom";
import { FooterData } from "../../data/footer/FooterData";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer({ host }) {
  const [footer, setFooter] = useState([])

  async function getFooter() {
    const response = await axios.get(`${host}api/backoffice/v1/footer/read`);
    const menu = response.data.menu
    setFooter(menu)
  }

  useEffect(() => {
    getFooter();
  }, [])

  return (
    <footer>
      <div className="bg-[url('/images/footer/dec-bg-2.png')] xs:bg-[url('/images/footer/dec-bg-1.png')] bg-cover bg-center relative p-4">
        <div
          className="xs:hidden z-0"
          style={{
            background: `linear-gradient(0deg, transparent 0%, #000), linear-gradient(180deg, transparent 0%, #000)`,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: "50%"
          }}
        />
        <div className="max-w-[650px] xl:max-w-[1280px] grid grid-cols-1 xl:grid-cols-3 items-center gap-4 m-auto">
          <div className="z-10">
            <figure className="flex max-xl:justify-center max-xs:hidden">
              <img
                src={FooterData.logo}
                alt="Logo"
                width={"auto"}
                height={"auto"}
              />
            </figure>
            <figure className="flex max-xl:justify-center xs:hidden">
              <img
                src={FooterData.logo_white}
                alt="Logo"
                width={"auto"}
                height={"auto"}
              />
            </figure>
            <p className="mt-4 text-[#004500] xl:text-[18px] max-xs:text-[#fff] max-xl:text-center">
              {FooterData.address}
            </p>
          </div>
          <div className="w-full flex max-xs:flex-col max-xs:items-center xl:flex-col max-xl:justify-between max-xs:justify-center items-center max-xl:items-start gap-4 xl:gap-1 max-xs:gap-12 m-auto z-10">
            <div className="w-full">
              <p className="text-white xs:text-[#4C873C] text-[18px] xl:text-[22px] font-[500]">
                บริการของเรา
              </p>
              {footer.map((footer) => (
                <Link
                  key={footer?.id}
                  to={"/" + footer.slug}
                  className="w-full flex justify-start gap-4 max-xs:text-white hover:text-[#D30000] xl:text-[18px]"
                >
                  <span>{"•"}</span>
                  {footer?.title}
                </Link>
              ))}
            </div>
            <div className="xs:w-full xl:hidden max-md:flex-col flex max-xs:flex-col justify-between items-center gap-4 leading-4">
              <figure className="max-xs:hidden">
                <img
                  src={FooterData.cer_1}
                  alt="Certificate"
                  width={"auto"}
                  height={"auto"}
                  className="mb-2"
                />
                <Link
                  to="#"
                  className="flex justify-center items-center text-center text-[#4C873C] text-[12px] underline"
                >
                  Certified of Registration
                </Link>
              </figure>
              <figure className="max-xs:hidden">
                <img
                  src={FooterData.cer_2}
                  alt="Certificate"
                  width={"auto"}
                  height={"auto"}
                  className="mb-2"
                />
                <Link
                  to="#"
                  className="flex justify-center items-center text-center text-[#4C873C] text-[12px] underline"
                >
                  Certified of Registration
                </Link>
              </figure>
              <figure className="max-xs:m-auto">
                <img
                  className="max-xs:hidden"
                  src={FooterData.qrcode}
                  alt="QRCode"
                  width={"auto"}
                  height={"auto"}
                />
                <img
                  className="xs:hidden"
                  src={FooterData.qrcode_white}
                  alt="QRCode"
                  width={"auto"}
                  height={"auto"}
                />
                <figure className="flex gap-4 items-center mt-2">
                  <img
                    className="max-xs:hidden"
                    src={FooterData.line}
                    alt="Line"
                    width={"auto"}
                    height={"auto"}
                  />
                  <img
                    className="max-xs:hidden"
                    src={FooterData.fb}
                    alt="Facebook"
                    width={"auto"}
                    height={"auto"}
                  />
                  <img
                    className="xs:hidden"
                    src={FooterData.line_white}
                    alt="Line"
                    width={"auto"}
                    height={"auto"}
                  />
                  <img
                    className="xs:hidden"
                    src={FooterData.fb_white}
                    alt="Facebook"
                    width={"auto"}
                    height={"auto"}
                  />
                </figure>
              </figure>
            </div>
          </div>
          <div className="max-xl:hidden">
            <div className="flex max-xs:flex-col justify-between items-center gap-4 leading-4">
              <figure className="max-xs:hidden">
                <img
                  src={FooterData.cer_1}
                  alt="Certificate"
                  width={"auto"}
                  height={"auto"}
                  className="mb-2"
                />
                <Link to="#" className="text-[#4C873C] text-[12px] underline">
                  Certified of Registration
                </Link>
              </figure>
              <figure className="max-xs:hidden">
                <img
                  src={FooterData.cer_2}
                  alt="Certificate"
                  width={"auto"}
                  height={"auto"}
                  className="mb-2"
                />
                <Link to="#" className="text-[#4C873C] text-[12px] underline">
                  Certified of Registration
                </Link>
              </figure>
              <figure className="max-xs:m-auto">
                <img
                  className="max-xs:hidden"
                  src={FooterData.qrcode}
                  alt="QRCode"
                  width={"auto"}
                  height={"auto"}
                />
                <figure className="flex gap-4 items-center mt-2">
                  <img
                    className="max-xs:hidden cursor-pointer"
                    src={FooterData.line}
                    alt="Line"
                    width={"auto"}
                    height={"auto"}
                  />
                  <img
                    onClick={() => window.open("https://www.facebook.com/rachane999/", "_blank")}
                    className="max-xs:hidden cursor-pointer"
                    src={FooterData.fb}
                    alt="Facebook"
                    width={"auto"}
                    height={"auto"}
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#618861] xl:bg-[#4C873C] text-[#fff] xl:text-[18px] text-center px-4 py-2">
        <p>&copy; Copyright 2013-2023</p>
      </div>
    </footer>
  );
}
