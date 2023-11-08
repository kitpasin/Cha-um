import { useEffect } from "react";
import { AboutData } from "../../../data/home/AboutData";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full relative px-4 py-12 xl:py-24">
      <figure className="absolute top-0 right-0 max-2xl:opacity-50 max-md:hidden -z-10">
        <img
          src="/images/home/about/dec-tr.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <figure className="absolute bottom-0 left-0 max-2xl:opacity-50 max-md:hidden -z-10">
        <img
          src="/images/home/about/dec-bl.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="max-w-[1280px] m-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center"
        >
          <p className="max-xl:text-[#618861] text-4xl font-[700]">
            {AboutData.title}
          </p>
          <p className="text-[18px] xl:text-[22px]">{AboutData.description}</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="max-xl:max-w-[650px] grid grid-cols-1 xl:grid-cols-3 gap-4 mt-12 m-auto"
        >
          {AboutData.lists.map((list) => (
            <div
              key={list.id}
              className="flex flex-col items-center text-center gap-4"
            >
              <figure className="w-[48px] h-[48px]">
                <img
                  className="w-full h-full"
                  src={list.icon}
                  alt={list.title}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <p className="text-[#4C873C] text-[18px] xl:text-[22px] font-[700]">
                {list.title}
              </p>
              <p className="xl:text-[18px] leading-5">{list.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
