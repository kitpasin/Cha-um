import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { ListsData } from "../../../../data/product/packaging/ListsData";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { PulseLoader } from "react-spinners";

export default function PackagingDetail({ host }) {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState([]);
  const [openMainImage, setOpenMainImage] = useState(false);
  const [openSubImage, setOpenSubImage] = useState(false);
  const [currentSubImage, setCurrentSubImage] = useState("");
  const [currentSubImageDescription, setCurrentSubImageDescription] =
    useState("");
  // ใช้ useLocation เพื่อเก็บ ไอดีบน url
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const productId = pathname[pathname.length - 1];

  // ตัวอย่างการใช้ axios รับ product detail จาก api
  async function getProductDetail(productId) {
    const response = await axios.get(
      `${host}api/backoffice/v1/product/detail/read/${productId}`
    );
    const data = response.data.data;
    setProductDetail(data);
  }

  useEffect(() => {
    Aos.init();
    getProductDetail(productId).then(() => setLoading(false));
  }, []);

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

  // ใช้ method filter เพื่อกรอง ListsData ที่มี id = productId
  const filteredProductDetail = ListsData.lists.filter(
    (list) => list.id.toString() === productId
  );

  return (
    <>
      {/* ทำ seo หน้าหลักใน helmet นี้ */}
      <Helmet>
        <title>{productDetail[0]?.title || "ออกแบบและจำหน่ายบรรจุภัณฑ์ทางการเกษตร"}</title>
        <meta
          name="description"
          content="เรามุ่งมั่นสร้างสรรค์ผลงานที่เป็นเลิศ"
          data-rh="true"
        />
        <link rel="canonical" href={`/product/packaging/${productDetail[0]?.id}`} />
      </Helmet>
      {!loading ? (
        <div className="relative md:pt-12 md:pb-24 lg:pb-36 xl:pb-48 2xl:pb-60">
          <figure className="absolute top-0 right-0 max-md:hidden -z-10">
            <img
              src="/images/product/packaging/detail/dec-tr.png"
              alt=""
              width={"auto"}
              height={"auto"}
            />
          </figure>
          <figure className="absolute bottom-0 left-0 max-md:hidden -z-10">
            <img
              src="/images/product/packaging/detail/dec-b.png"
              alt=""
              width={"auto"}
              height={"auto"}
            />
          </figure>
          <div className="relative px-4">
            <div className="bg-[#618861] bg-[url('/images/product/packaging/detail/dec-bg.png')] bg-cover bg-center w-full xl:w-[49.6%] h-full absolute top-0 left-0 -z-10" />
            <div className="max-w-[1280px] grid xl:grid-cols-2 gap-4 m-auto md:mb-12">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="max-md:max-w-[650px] flex xl:flex-col max-md:flex-col max-xl:justify-center gap-12 max-md:gap-4 max-md:m-auto py-12 text-[#fff]"
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-[500]">
                    {productDetail[0]?.title}
                  </h1>
                  <figure
                    onClick={handleOpenMainImage}
                    className="max-w-[480px] xl:hidden overflow-hidden cursor-pointer"
                  >
                    <img
                      className="w-full hover:scale-110 transition-all ease-in-out duration-300"
                      src={`${host}${productDetail[0]?.thumbnail_link}`}
                      alt={productDetail[0]?.thumbnail_alt || ""}
                      width={"auto"}
                      height={"auto"}
                    />
                  </figure>
                </div>
                <div className="flex flex-col gap-12 max-md:gap-4 max-xl:mt-14 max-md:mt-0 flex-none">
                  <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center gap-4 text-[18px] xl:text-[22px]">
                    <div>
                      <p>ราคา : </p>
                      <p>ประเภท : </p>
                      <p>โทร : </p>
                      <p>ไลน์ไอดี : </p>
                    </div>
                    <div className="col-span-3 xs:col-span-4 font-[300]">
                      <p>
                        {productDetail[0]?.price == 0 ||
                        productDetail[0]?.price == ""
                          ? "ราคาติดต่อเจ้าหน้าที่"
                          : `${productDetail[0]?.price} ฿`}
                      </p>
                      <p>{productDetail[0]?.type}</p>
                      <p>{productDetail[0]?.tel}</p>
                      <p>{productDetail[0]?.line_id}</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/rachane999/",
                        "_blank"
                      )
                    }
                    className="bg-[#fff] w-fit px-4 py-2 rounded-[5px] text-[#4C873C] text-[18px] hover:scale-110 transition-all ease-in-out duration-300"
                  >
                    สนใจสั่งซื้อกดเลย
                  </button>
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
                  src={`${host}${productDetail[0]?.thumbnail_link}`}
                  alt={productDetail[0]?.thumbnail_alt}
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
                        src={`${host}${productDetail[0]?.thumbnail_link}`}
                        alt={productDetail[0]?.thumbnail_alt || ""}
                        width={"auto"}
                        height={"auto"}
                      />
                    </figure>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="mx-4 mb-12 max-md:mt-12">
            <div className="max-w-[1280px] m-auto xl:text-[18px]">
              {productDetail[0]?.content
                ?.replace("<p>", "")
                .replace("</p>", "")
                .replace("<strong>", "")
                .replace("</strong>", "")
                .replace("<em>", "")
                .replace("</em>", "")}
            </div>
          </div>
          <div className="mx-4 mb-12 max-md:mt-12">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="max-w-[1280px] m-auto grid grid-cols-2 xs:grid-cols-4 gap-4 xl:gap-24"
            >
              {productDetail[0]?.subimages.map((subimage) => (
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
