import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { ListsData } from "../../../../data/product/material&tool/ListsData";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MaterialAndToolDetail() {
  const [productDetail, setProductDetail] = useState([]);

  // image modal
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  // ใช้ useLocation เพื่อเก็บ ไอดีบน url
  const location = useLocation();
  const productId = location.pathname.split("/")[3];

  // ใช้ method filter เพื่อกรอง ListsData ที่มี id = productId
  const filteredProductDetail = ListsData.lists.filter(
    (list) => list.id.toString() === productId
  );
  console.log(filteredProductDetail);

  // ตัวอย่างการใช้ axios รับ product detail จาก api
  // async function getProductDetail() {
  //   const response = await axios.get(`http://localhost:8000/api/product/material&tool/${productId}`);
  //   const data = response.data
  //   setProductDetail(data)
  // }

  // useEffect(() => {
  //   getProductDetail();
  // }, [])

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative md:pt-12 md:pb-24 lg:pb-36 xl:pb-48 2xl:pb-60">
      <figure className="absolute top-0 right-0 max-md:hidden -z-10">
        <img
          src="/images/product/material&tool/detail/dec-tr.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <figure className="absolute bottom-0 left-0 max-md:hidden -z-10">
        <img
          src="/images/product/material&tool/detail/dec-b.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="relative px-4">
        <div className="bg-[#618861] bg-[url('/images/product/material&tool/detail/dec-bg.png')] bg-cover bg-center w-full xl:w-[49.6%] h-full absolute top-0 left-0 -z-10" />
        <div className="max-w-[1280px] grid xl:grid-cols-2 gap-4 m-auto md:mb-12">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-md:max-w-[650px] flex xl:flex-col max-md:flex-col max-xl:justify-center gap-12 max-md:gap-4 max-md:m-auto py-12 text-[#fff]"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-[500]">
                {filteredProductDetail[0].title}
              </h1>
              <figure
                onClick={handleOpen}
                className="max-w-[480px] xl:hidden overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full hover:scale-110 transition-all ease-in-out duration-300"
                  src="/images/product/material&tool/detail/detail-1.png"
                  alt={filteredProductDetail[0].title}
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
                <div className="col-span-3 font-[300]">
                  <p>{filteredProductDetail[0].price}</p>
                  <p>{filteredProductDetail[0].type}</p>
                  <p>{filteredProductDetail[0].tel}</p>
                  <p>{filteredProductDetail[0].line}</p>
                </div>
              </div>
              <button className="bg-[#fff] w-fit px-4 py-2 rounded-[5px] text-[#4C873C] text-[18px] hover:scale-110 transition-all ease-in-out duration-300">
                สนใจสั่งซื้อกดเลย
              </button>
            </div>
          </div>
          <figure
            data-aos="fade-left"
            data-aos-duration="1000"
            onClick={handleOpen}
            className="max-xl:hidden flex justify-center overflow-hidden cursor-pointer"
          >
            <img
              className="hover:scale-110 transition-all ease-in-out duration-300"
              src="/images/product/material&tool/detail/detail-1.png"
              alt={filteredProductDetail[0].title}
              width={"auto"}
              height={"auto"}
            />
          </figure>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="bg-[#fff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-none">
              <div className="relative">
                <div
                  onClick={handleClose}
                  className="absolute top-0 -right-12 cursor-pointer"
                >
                  <HighlightOffRoundedIcon
                    sx={{ color: "#fff", fontSize: "36px" }}
                  />
                </div>
                <figure>
                  <img
                    src="/images/product/material&tool/detail/detail-1.png"
                    alt={filteredProductDetail[0].title}
                    width={"auto"}
                    height={"auto"}
                  />
                </figure>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}