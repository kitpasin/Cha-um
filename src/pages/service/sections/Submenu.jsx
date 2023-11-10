import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SubmenuData } from "../../../data/service/SubmenuData";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Submenu() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="px-4 py-12">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="max-w-[650px] xl:max-w-[1280px] grid grid-cols-2 xl:grid-cols-4 gap-x-12 xl:gap-x-24 gap-y-8 m-auto text-center"
      >
        {SubmenuData.map((menu) => (
          <div key={menu.id}>
            <Link to={menu.url}>
              <figure className="rounded-full overflow-hidden">
                <img
                  className="rounded-full hover:scale-110 transition-all ease-in-out duration-300"
                  src={menu.image}
                  alt={menu.title}
                  width={"auto"}
                  height={"auto"}
                />
              </figure>
              <p className="mt-2 text-[18px] xl:text-[22px] font-[500] hover:underline leading-5">
                {menu.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
