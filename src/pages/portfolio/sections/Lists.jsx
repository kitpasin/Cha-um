import { useEffect, useState } from "react";
import { ListsData } from "../../../data/portfolio/ListsData";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Lists({ host, portfolios }) {
  const [hoveredImage, setHoveredImage] = useState(null);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const pageCount = Math.ceil(portfolios.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const listsToDisplay = portfolios.slice(startIndex, endIndex);

  useEffect(() => {
    Aos.init();
  }, []);

  // scroll to top ถ้าเปลี่ยนหน้า
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [currentPage]);

  console.log(portfolios);

  return (
    <div className="relative px-4 pt-12 pb-12 md:pb-36 xl:pb-60">
      <figure className="absolute bottom-0 left-0 max-md:hidden">
        <img
          src="/images/product/material&tool/lists/dec-b.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="max-w-[650px] xl:max-w-[1280px] m-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="grid grid-cols-4 max-xl:grid-cols-2 gap-x-4 xs:gap-x-12 xl:gap-x-24 gap-y-4 xs:gap-y-8"
        >
          {listsToDisplay.map((portfolios) => (
            <Link
              onMouseEnter={() => setHoveredImage(portfolios?.id)}
              onMouseLeave={() => setHoveredImage(null)}
              to={`/${portfolios?.slug}/${portfolios?.id}`}
              key={portfolios?.id}
            >
              <figure className="relative">
                <div
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgb(161, 196, 78))`,
                    opacity: hoveredImage === portfolios?.id ? "100%" : "0",
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
                  src={`${host}${portfolios?.thumbnail_link}`}
                  alt={portfolios?.thumbnail_alt || ''}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <div>
                <p className="mt-2 text-[18px] xl:text-[22px] font-[500] leading-5">
                  {portfolios?.title}
                </p>
                <p className="xl:text-[18px] font-[300]">{portfolios?.type}</p>
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
