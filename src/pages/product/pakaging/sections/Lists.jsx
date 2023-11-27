import { useEffect, useState } from "react";
import { ListsData } from "../../../../data/product/packaging/ListsData";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Lists({ host, products }) {
  const [hoveredImage, setHoveredImage] = useState(null);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const listsToDisplay = products.slice(startIndex, endIndex);

  useEffect(() => {
    Aos.init();
  }, []);

  // scroll to top ถ้าเปลี่ยนหน้า
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [currentPage]);

  return (
    <div className="relative px-4 pt-12 pb-12 md:pb-36 xl:pb-60">
      <figure className="absolute bottom-0 left-0 max-md:hidden">
        <img
          src="/images/product/packaging/lists/dec-b.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="max-w-[650px] xl:max-w-[1280px] m-auto">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-4xl font-[500]">{ListsData.title}</p>
          <p className="text-[18px] xl:text-[22px] leading-5">
            {ListsData.description}
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="grid grid-cols-4 max-xl:grid-cols-2 gap-x-4 xs:gap-x-12 xl:gap-x-24 gap-y-4 xs:gap-y-8 mt-12"
        >
          {listsToDisplay.map((product) => (
            <Link
              onMouseEnter={() => setHoveredImage(product?.id)}
              onMouseLeave={() => setHoveredImage(null)}
              to={`/${product?.cate_url}/${product?.id}`}
              key={product?.id}
            >
              <figure className="relative">
                <div
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgb(161, 196, 78))`,
                    opacity: hoveredImage === product?.id ? "100%" : "0",
                    transition: "all ease-in-out 0.3s",
                    textShadow: "3px 3px 5px #000",
                  }}
                  className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-[#fff] text-[22px] font-[300]"
                >
                  Detail
                  <VisibilityIcon sx={{ fontSize: "30px" }} />
                </div>

                <img
                  className="w-[248px] h-[248px] m-auto object-cover"
                  src={`${host}${product?.thumbnail_link}`}
                  alt={product?.thumbnail_alt || ""}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <div>
                <p className="mt-2 text-[18px] xl:text-[22px] font-[500] leading-5">
                  {product?.title}
                </p>
                <p className="xl:text-[18px] font-[300]">
                  {product?.description}
                </p>
                <p className="text-[#4C873C] xl:text-[18px]">
                  {product?.price == 0 || product?.price == ""
                    ? "ราคาติดต่อเจ้าหน้าที่"
                    : `${product?.price} ฿`}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-end items-center">
          <Pagination
            onChange={(event, newPage) => setCurrentPage(newPage)}
            count={pageCount}
            page={currentPage}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
}
