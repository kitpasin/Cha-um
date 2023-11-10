import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RecomentData } from "../../../data/product/RecomentData";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Recoment() {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#FAFAFA] relative px-4 pt-12 pb-12 md:pb-36 xl:pb-60">
      <figure className="absolute bottom-0 left-0 max-md:hidden">
        <img
          src="/images/product/recoment/dec-b.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="max-w-[650px] xl:max-w-[1280px] m-auto">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-4xl font-[500]">{RecomentData.title}</p>
          <p className="text-[18px] xl:text-[22px] leading-5">
            {RecomentData.description}
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="grid grid-cols-2 xl:grid-cols-4 gap-x-12 xl:gap-x-24 gap-y-8 mt-12 text-center"
        >
          {RecomentData.lists.map((list) => (
            <Link
              onMouseEnter={() => setHoveredImage(list.id)}
              onMouseLeave={() => setHoveredImage(null)}
              to={list.url}
              key={list.id}
            >
              <figure className="relative">
                <div
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgb(161, 196, 78))`,
                    opacity: hoveredImage === list.id ? "100%" : "0",
                    transition: "all ease-in-out 0.3s",
                    textShadow: "3px 3px 5px #000",
                  }}
                  className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center rounded-full text-[#fff] text-[22px] font-[300]"
                >
                  Detail
                  <VisibilityIcon sx={{ fontSize: "30px" }} />
                </div>

                <img
                  src={list.image}
                  alt={list.title}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <p className="mt-2 text-[18px] xl:text-[22px] font-[500] leading-5">
                {list.title}
              </p>
              <p className="text-[#4C873C] xl:text-[18px]">{list.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
