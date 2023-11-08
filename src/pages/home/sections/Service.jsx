import { Link } from "react-router-dom";
import { ServiceData } from "../../../data/home/ServiceData";
import { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Service() {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="xl:bg-[url('/images/home/service/dec-bg.png')] bg-cover bg-center px-4 py-12">
      <div className="max-w-[1280px] max-xl:max-w-[650px] flex flex-col gap-12 m-auto">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-4xl font-[500]">{ServiceData.title}</p>
          <p className="text-[18px] xl:text-[22px]">{ServiceData.description}</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="grid grid-cols-4 max-xl:grid-cols-2 gap-4"
        >
          {ServiceData.lists.map((list) => (
            <Link
              onMouseEnter={() => setHoveredImage(list.id)}
              onMouseLeave={() => setHoveredImage(null)}
              key={list.id}
              to={list.url}
            >
              <figure className="relative">
                <div
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgb(161, 196, 78))`,
                    opacity: hoveredImage === list.id ? "100%" : "0",
                    transition: "all ease-in-out 0.3s",
                    textShadow: "3px 3px 5px #000",
                  }}
                  className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-[#fff] text-[22px] font-[300]"
                >
                  Detail
                  <VisibilityIcon sx={{ fontSize: "30px" }} />
                </div>
                <img
                  className="w-full h-full"
                  src={list.image}
                  alt={list.title}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <div className="mt-2">
                <p className="text-[18px] xl:text-[22px] font-[500] leading-5">{list.title}</p>
                <p className="xl:text-[18px] leading-5">{list.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="#"
          className="bg-[#004500] max-xl:bg-[#537A53] w-fit flex items-center gap-2 m-auto p-2 rounded-[5px] hover:scale-125 text-[#fff] text-[18px] transition-all ease-in-out duration-300"
        >
          More
          <AddRoundedIcon />
        </Link>
      </div>
    </div>
  );
}
