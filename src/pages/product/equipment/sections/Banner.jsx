import { useEffect } from "react";
import { BannerData } from "../../../../data/product/equipment/BannerData";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Banner({ host, banner }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="bg-[url('/images/product/equipment/banner/dec-bg.png')] bg-[#618861] bg-cover bg-center px-4 py-12 text-[#fff] text-center">
        <h1 className="hidden">ชอุ่ม 2021 จำกัด | CHA UM 2021 CO.,LTD</h1>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-4xl font-[500]">{banner?.title}</p>
          <p className="mt-2 text-[18px] xl:text-[22px] font-[300] leading-5">
            {banner?.description}
          </p>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1000" className="px-4 -z-10">
        <figure className="max-w-[1280px] m-auto">
          <img
            src={`${host}${banner?.thumbnail_link}`}
            alt={banner?.thumbnail_alt || ''}
            width={"auto"}
            height={"auto"}
          />
        </figure>
      </div>
    </>
  );
}
