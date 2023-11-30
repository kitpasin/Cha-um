import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SubmenuData } from "../../../data/service/SubmenuData";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Submenu({ host, submenu }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="px-4 py-12">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="max-w-[650px] xl:max-w-[1280px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 xl:gap-x-12 gap-y-8 m-auto text-center"
      >
        {submenu.map((submenu) => (
          <div key={submenu?.id}>
            <Link to={`/${submenu?.cate_url}`}>
              <figure className="m-auto xs:rounded-full overflow-hidden">
                <img
                  className="w-[200px] h-[200px] m-auto object-cover xs:rounded-full hover:scale-110 transition-all ease-in-out duration-300"
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
