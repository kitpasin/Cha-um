import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { ListsData } from "../../../data/portfolio/ListsData";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { PulseLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

export default function PorfolioDetail({ host }) {
  const [loading, setLoading] = useState(true);
  const [portfolioDetail, setPorfolioDetail] = useState([]);
  const [openMainImage, setOpenMainImage] = useState(false);
  const [openSubImage, setOpenSubImage] = useState(false);
  const [currentSubImage, setCurrentSubImage] = useState("");
  const [currentSubImageDescription, setCurrentSubImageDescription] =
    useState("");

  // main image modal
  function handleOpenMainImage() {
    setOpenMainImage(true);
  }
  function handleCloseMainImage() {
    setOpenMainImage(false);
  }

  // sub image modal
  function handleOpenSubImage(subimage) {
    setCurrentSubImage(`${host}${subimage?.image_link}`);
    setCurrentSubImageDescription(subimage?.image_description);
    setOpenSubImage(true);
  }
  function handleCloseSubImage() {
    setOpenSubImage(false);
  }

  // ใช้ useLocation เพื่อเก็บ ไอดีบน url
  const location = useLocation();
  const portfolioId = location.pathname.split("/")[2];

  // ใช้ method filter เพื่อกรอง ListsData ที่มี id = portfolioId
  const filteredPortfolioDetail = ListsData.filter(
    (list) => list.id.toString() === portfolioId
  );

  // ตัวอย่างการใช้ axios รับ portfolio detail จาก api
  async function getPortfolioIdDetail() {
    const response = await axios.get(
      `${host}api/backoffice/v1/portfolio/detail/read/${portfolioId}`
    );
    const data = response.data.data;
    setPorfolioDetail(data);
  }

  useEffect(() => {
    Aos.init();
    getPortfolioIdDetail().then(() => setLoading(false));
  }, []);

  console.log(currentSubImage);

  return (
    <>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>ชอุ่ม 2021 จำกัด | ผลงานของเรา</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      {!loading ? (
        <div className="relative md:pt-12 md:pb-24 lg:pb-36 xl:pb-48 2xl:pb-60">
          <figure className="absolute top-0 right-0 max-md:hidden -z-10">
            <img
              src="/images/portfolio/detail/dec-tr.png"
              alt=""
              width={"auto"}
              height={"auto"}
            />
          </figure>
          <figure className="absolute bottom-0 left-0 max-md:hidden -z-10">
            <img
              src="/images/portfolio/detail/dec-b.png"
              alt=""
              width={"auto"}
              height={"auto"}
            />
          </figure>
          <div className="relative px-4">
            <div className="bg-[#618861] bg-[url('/images/portfolio/detail/dec-bg.png')] bg-cover bg-center w-full xl:w-[49.6%] h-full absolute top-0 left-0 -z-10" />
            <div className="max-w-[1280px] grid xl:grid-cols-2 gap-4 m-auto md:mb-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="max-md:max-w-[650px] flex xl:flex-col max-md:flex-col max-xl:justify-center gap-12 max-md:gap-4 max-md:m-auto py-12 text-[#fff]"
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-[500] w-full">
                    {portfolioDetail[0]?.title}
                  </h1>
                  <figure
                    onClick={handleOpenMainImage}
                    className="max-w-[480px] xl:hidden overflow-hidden cursor-pointer"
                  >
                    <img
                      className="w-full hover:scale-110 transition-all ease-in-out duration-300"
                      src={`${host}${portfolioDetail[0]?.image_link}`}
                      alt={portfolioDetail[0]?.image_description || ""}
                      width={"auto"}
                      height={"auto"}
                    />
                  </figure>
                </div>
                <div className="flex flex-col gap-12 max-md:gap-4 max-xl:mt-14 max-md:mt-0 flex-none">
                  <div className="flex justify-between xs:grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center gap-4 text-[18px] xl:text-[22px]">
                    <div className="col-span-1 xl:col-span-2">
                      <p>สถานที่จัด : </p>
                      <p>ขนาดพื้นที่จัด : </p>
                      <p>สถานะจัด : </p>
                      <p>ประเภท : </p>
                    </div>
                    <div className="col-span-3 xl:col-span-4 font-[300]">
                      <p>{portfolioDetail[0]?.address}</p>
                      <p>{portfolioDetail[0]?.size}</p>
                      <p>{portfolioDetail[0]?.status}</p>
                      <p>{portfolioDetail[0]?.type}</p>
                    </div>
                  </div>
                </div>
              </div>
              <figure
                data-aos="fade-left"
                data-aos-duration="1000"
                onClick={handleOpenMainImage}
                className="max-xl:hidden flex justify-center overflow-hidden cursor-pointer"
              >
                <img
                  className="hover:scale-110 transition-all ease-in-out duration-300"
                  src={`${host}${portfolioDetail[0]?.image_link}`}
                  alt={portfolioDetail[0]?.image_description || ""}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <Modal
                open={openMainImage}
                onClose={handleCloseMainImage}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="bg-[#fff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none">
                  <div className="relative">
                    <div
                      onClick={handleCloseMainImage}
                      className="absolute top-0 -right-12 cursor-pointer"
                    >
                      <HighlightOffRoundedIcon
                        sx={{ color: "#fff", fontSize: "36px" }}
                      />
                    </div>
                    <figure>
                      <img
                        src={`${host}${portfolioDetail[0]?.image_link}`}
                        alt={portfolioDetail[0]?.image_description || ""}
                        width={"auto"}
                        height={"auto"}
                      />
                    </figure>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="px-4 pb-12 max-md:pt-12">
            <div className="max-w-[1280px] m-auto xl:text-[18px]">
              {portfolioDetail[0]?.content
                ?.replace("<p>", "")
                .replace("</p>", "")
                .replace("<strong>", "")
                .replace("</strong>", "")
                .replace("<em>", "")
                .replace("</em>", "")}
            </div>
          </div>
          <div className="px-4 pb-12 max-md:pt-12">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="max-w-[1280px] m-auto grid grid-cols-2 xs:grid-cols-4 gap-4 xl:gap-24"
            >
              {portfolioDetail[0]?.subimages.map((subimage) => (
                <div key={subimage.id}>
                  {/* ส่ง subimage เพื่อนำเอารูปภาพที่คลิกไปเก็บไว้ใน state currentSubImage */}
                  <figure
                    onClick={() => handleOpenSubImage(subimage)}
                    className="overflow-hidden cursor-pointer"
                  >
                    <img
                      className="w-[248px] h-[248px] object-cover hover:scale-110 transition-all ease-in-out duration-300"
                      src={`${host}${subimage?.image_link}`}
                      alt={subimage?.image_description || ""}
                      width={"auto"}
                      height={"auto"}
                    />
                  </figure>
                </div>
              ))}
            </div>
            <Modal
              open={openSubImage}
              onClose={handleCloseSubImage}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="bg-[#fff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none">
                <div className="relative">
                  <div
                    onClick={handleCloseSubImage}
                    className="absolute top-0 -right-12 cursor-pointer"
                  >
                    <HighlightOffRoundedIcon
                      sx={{ color: "#fff", fontSize: "36px" }}
                    />
                  </div>
                  <figure>
                    <img
                      src={currentSubImage}
                      alt={currentSubImageDescription}
                      width={"auto"}
                      height={"auto"}
                    />
                  </figure>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
          <PulseLoader color="#004500" />
        </div>
      )}
    </>
  );
}
