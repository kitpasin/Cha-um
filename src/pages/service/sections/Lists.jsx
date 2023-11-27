import { useEffect, useState } from "react";
import { ListsData } from "../../../data/service/ListsData";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Lists({ host, services }) {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);

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
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-4xl font-[500]">{ListsData.title}</p>
          <p className="text-[18px] xl:text-[22px]">{ListsData.description}</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="grid grid-cols-4 max-xl:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-8 mt-12"
        >
          {services?.map((service) => (
            <Link
              onMouseEnter={() => setHoveredImage(service?.id)}
              onMouseLeave={() => setHoveredImage(null)}
              to={`/${service?.slug}/${service?.id}`}
              key={service?.id}
            >
              <figure className="relative">
                <div
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgb(161, 196, 78))`,
                    opacity: hoveredImage === service?.id ? "100%" : "0",
                    transition: "all ease-in-out 0.3s",
                    textShadow: "3px 3px 5px #000",
                  }}
                  className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-[#fff] text-[22px] font-[300]"
                >
                  Detail
                  <VisibilityIcon sx={{ fontSize: "30px" }} />
                </div>

                <img
                  className="w-[248px] h-[248px] object-cover"
                  src={`${host}${service?.thumbnail_link}`}
                  alt={service?.thumbnail_alt || ''}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <div>
                <p className="mt-2 text-[18px] xl:text-[22px] font-[500] leading-5">
                  {service?.title}
                </p>
                <p className="xl:text-[18px] font-[300]">{service?.description}</p>
                <p className="text-[#4C873C] xl:text-[18px]">{service?.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
