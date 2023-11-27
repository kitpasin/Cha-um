import { useEffect } from "react";
import { BannerData } from "../../../data/product/BannerData";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Banner({ host, productBanner }) {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <figure>
        <img
          className="max-md:h-[160px] object-cover"
          src={`${host}${productBanner?.thumbnail_link}` || BannerData.image}
          alt={productBanner?.thumbnail_alt || ''}
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="bg-[url('/images/product/banner/dec-bg.png')] bg-[#618861] bg-cover bg-center px-4 py-12 text-[#fff] text-center">
        <h1 className="hidden">ชอุ่ม 2021 จำกัด | CHA UM 2021 CO.,LTD</h1>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text-4xl font-[500]">{productBanner?.title}</p>
          <p className="mt-2 text-[18px] xl:text-[22px] font-[300] leading-5">
            {productBanner?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
