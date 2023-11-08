import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BannerData } from "../../../data/home/BannerData";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="px-4 py-12">
        <div className="w-full max-w-[1280px] flex max-xl:flex-col justify-between items-center gap-4 m-auto">
          <figure
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full xl:w-1/2 flex max-xl:justify-center"
          >
            <img
              src={BannerData.logo}
              alt={BannerData.h1}
              width={"auto"}
              height={"auto"}
            />
          </figure>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="xl:w-1/2 flex flex-col gap-4 max-xl:text-center"
          >
            <h1 className="hidden">ชอุ่ม 2021 จำกัด | CHA UM 2021 CO.,LTD</h1>
            <p className="max-xl:text-[#537A53] text-6xl max-xl:text-4xl font-[700] leading-[55px]">
              {BannerData.title}
            </p>
            <p className="text-[18px] leading-5">{BannerData.description}</p>
          </div>
        </div>
      </div>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        speed={1000}
        loop={true}
        draggable={true}
        modules={[Navigation]}
      >
        {BannerData.lists.map((list) => (
          <SwiperSlide key={list.id}>
            <figure>
              <img
                className="w-full max-md:h-[280px] max-md:object-cover"
                src={list.image}
                alt={BannerData.h1}
                width={"auto"}
                height={"auto"}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
