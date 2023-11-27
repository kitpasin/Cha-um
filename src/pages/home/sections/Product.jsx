import { useEffect, useState } from "react";
import { ProductData } from "../../../data/home/ProductData";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Product({ host, homeProduct }) {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#537A53] max-xl:bg-[#F4FBF4] xl:bg-[url('/images/home/product/dec-bg.png')] bg-cover bg-center relative px-4 py-12">
      <figure className="absolute bottom-0 left-0 max-2xl:opacity-50 max-md:hidden">
        <img
          src="/images/home/product/dec-bl.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="max-w-[1280px] max-xl:max-w-[650px] relative m-auto xl:text-[#fff] text-center leading-5">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="max-xl:text-[#537A53] text-4xl font-[500]">
            {ProductData.title}
          </p>
          <p className="mt-4 text-[18px] xl:text-[22px]">{ProductData.description}</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="grid grid-cols-4 max-xl:grid-cols-2 gap-4 mt-12"
        >
          {homeProduct?.map((product) => (
            <Link
              onMouseEnter={() => setHoveredImage(product?.id)}
              onMouseLeave={() => setHoveredImage(null)}
              to={`${product?.slug}/${product?.id}`}
              key={product?.id}
            >
              <figure className="max-w-[248px] h-[248px] m-auto bg-[#fff] relative xs:rounded-full">
                <div
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgb(161, 196, 78))`,
                    opacity: hoveredImage === product.id ? "100%" : "0",
                    transition: "all ease-in-out 0.3s",
                    textShadow: "3px 3px 5px #000",
                  }}
                  className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center xs:rounded-full text-[#fff] text-[20px] font-[300]"
                >
                  Detail
                  <VisibilityIcon sx={{ fontSize: "30px" }} />
                </div>
                <img
                  className="w-full h-full object-cover xs:rounded-full p-1"
                  src={`${host}${product?.thumbnail_link}`}
                  alt={product?.thumbnail_alt || ''}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <p className="mt-2 text-[18px] xl:text-[22px] font-[500]">{product?.title}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/product"
          className="bg-[#004500] max-xl:bg-[#537A53] w-fit flex items-center gap-2 m-auto mt-12 p-2 rounded-[5px] hover:scale-110 text-[#fff] text-[18px] transition-all ease-in-out duration-300"
        >
          More
          <AddRoundedIcon />
        </Link>
      </div>
    </div>
  );
}
