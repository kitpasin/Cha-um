import { useEffect, useState } from "react";
import { ExampleData } from "../../../data/service/ExampleData";
import { Link } from "react-router-dom";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Example({ host, example }) {
  const [hoveredImage, setHoveredImage] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#537A53] max-xl:bg-[#F4FBF4] xl:bg-[url('/images/home/example/dec-bg.png')] bg-cover bg-center relative px-4 py-12">
      <figure className="absolute bottom-0 right-0 max-2xl:opacity-50 max-md:hidden">
        <img
          src="/images/service/example/dec-br.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="max-w-[1280px] m-auto grid grid-cols-1 xl:grid-cols-2 max-xl:justify-center gap-4 xl:gap-12">
        <Link
          onMouseEnter={() => setHoveredImage(true)}
          onMouseLeave={() => setHoveredImage(false)}
          to={`/${example?.slug}/${example?.id}`}
          data-aos="fade-right"
          data-aos-duration="1000"
          className="max-w-[650px] relative m-auto overflow-hidden"
        >
          <div
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgb(161, 196, 78))`,
              opacity: hoveredImage ? "100%" : "0",
              transition: "all ease-in-out 0.3s",
              textShadow: "3px 3px 5px #000",
            }}
            className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-[#fff] text-[22px] font-[300]"
          >
            Detail
            <VisibilityIcon sx={{ fontSize: "30px" }} />
          </div>
          <img
            src={`${host}${example?.thumbnail_link}`}
            alt={example?.thumbnail_alt || ""}
            width={"auto"}
            height={"auto"}
          />
        </Link>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="h-full max-xl:max-w-[650px] flex flex-col justify-between gap-4 m-auto text-[#fff] max-xl:text-[#000] z-10"
        >
          <p className="text-[18px] xl:text-[22px] font-[500] max-xl:hidden">
            ตัวอย่างผลงาน
          </p>
          <p className="max-xl:text-[#537A53] text-4xl font-[500]">
            {example?.title}
          </p>
          <div className="flex items-center gap-12 xl:text-[18px] leading-5">
            <div className="flex flex-col gap-4 flex-none">
              <p className="flex justify-between font-[500]">สถานที่จัด :</p>
              <p className="flex justify-between font-[500]">
                ขนาดพื้นที่จัด :
              </p>
              <p className="flex justify-between font-[500]">สถานะจัด :</p>
              <p className="flex justify-between font-[500]">ประเภท :</p>
            </div>
            <div className="flex flex-col items-start gap-4 font-[300]">
              <p>{example?.address}</p>
              <p>{example?.size}</p>
              <p>{example?.status}</p>
              <p>{example?.type}</p>
            </div>
          </div>
          <p className="xl:text-[18px] font-[300] leading-5">
            {example?.content
              ?.substring(0, 150)
              .replace("<p>", "")
              .replace("</p>", "")
              .replace("<strong>", "")
              .replace("</strong>", "")
              .replace("<em>", "")
              .replace("</em>", "") + "..."}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to={`/${example?.slug}/${example?.id}`}
              className="bg-[#004500] max-xl:bg-[#537A53] hover:scale-110 w-fit flex items-center gap-2 p-2 rounded-[5px] text-[#fff] text-[18px] transition-all ease-in-out duration-300"
            >
              Detail <InsertDriveFileIcon />
            </Link>
            <Link to="#">
              <ShareIcon />
            </Link>
            <Link to="#" className="xl:hidden">
              <TwitterIcon sx={{ color: "#00acee" }} />
            </Link>
            <Link to="#" className="xl:hidden">
              <FacebookRoundedIcon sx={{ color: "#1877F2" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
