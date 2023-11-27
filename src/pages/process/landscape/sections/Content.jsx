import { useEffect } from "react";
import { ContentData } from "../../../../data/process/landscape/ContentData";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Content({ process }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative px-4 pt-12 pb-12 md:pb-36 lg:pb-48 xl:pb-60">
      <figure className="absolute bottom-0 left-0 max-md:hidden">
        <img
          src="/images/process/landscape/content/dec-b.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="max-w-[1280px] m-auto xl:text-[18px]"
        // render ckeditor in backoffice
        dangerouslySetInnerHTML={{ __html: process?.content }}
      />
    </div>
  );
}
