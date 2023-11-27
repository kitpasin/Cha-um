import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SubmenuData } from "../../../data/product/SubmenuData";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Submenu({ host, productSubmenu }) {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="px-4 py-12">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="max-w-[650px] xl:max-w-[1280px] grid grid-cols-2 xl:grid-cols-4 gap-x-4 xs:gap-x-12 xl:gap-x-24 gap-y-4 xs:gap-y-8 m-auto text-center"
      >
        {productSubmenu?.map((submenu) => (
          <div key={submenu?.id}>
            <Link to={`/${submenu?.cate_url}`}>
              <figure className="rounded-full max-xs:rounded-none overflow-hidden">
                <img
                  className="w-[248px] h-[248px] m-auto object-cover xs:rounded-full hover:scale-110 transition-all ease-in-out duration-300"
                  src={`${host}${submenu?.thumbnail_link}`}
                  alt={submenu?.thumbnail_alt || ''}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <p className="mt-2 text-[18px] xl:text-[22px] font-[500] hover:underline leading-5">
                {submenu?.cate_title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
