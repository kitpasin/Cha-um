import { Link, useLocation } from "react-router-dom";
import { HeaderData } from "../../data/header/HeaderData";
import { useEffect, useState, useRef } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Header({ windowWidth }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isBurgurOpen, setIsBurgurOpen] = useState(false);
  const submenuRef = useRef(null);
  const location = useLocation();

  // ตรวจจับเมาส์ถ้า user คลิกพื้นที่อื่นนอกจากเมนูย่อย ปิดเมนูย่อย
  useEffect(() => {
    function handleClickOutside(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        // ปิดเมนูย่อย
        setActiveSubmenu(null);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // เปิด/ปิดเมนูย่อยโดยการเช็คไอดีของ activeSubmenu กับ menu
  function handleOpenSubmenu(menu) {
    if (activeSubmenu === menu.id) {
      // ปิดเมนูย่อย
      setActiveSubmenu(null);
    } else {
      // เปิดเมนูย่อย
      setActiveSubmenu(menu.id);
    }
  }

  function handleCloseSubMenu() {
    setIsBurgurOpen(!isBurgurOpen)
    setActiveSubmenu(null)
  }

  return (
    <header className="bg-[#fff] sticky top-0 w-full h-[70px] max-w-[1900px] px-4 shadow-md z-50">
      <div className="h-full max-w-[1280px] m-auto flex justify-between items-center">
        <Link to="/" className="max-xl:m-auto flex justify-center">
          <img
            src="/images/header/logo.png"
            alt="ชอุ่ม 2021 จำกัด | CHA UM 2021 CO.,LTD"
            width={"auto"}
            height={"auto"}
          />
        </Link>
        <nav className="h-full text-[20px]">
          {/* ถ้าขนาดจอน้อยกว่า 1280 เปลี่ยนเป็น menu ไปฟิกด้านขวาแบบ column */}
          <ul
            className={`${
              windowWidth < 1280
                ? `${
                    !isBurgurOpen &&
                    "opacity-0 translate-x-1/2 pointer-events-none"
                  }`
                : `${
                    isBurgurOpen &&
                    "opacity-100 translate-x-0 pointer-events-auto"
                  }`
            } bg-[#fff] w-full max-xl:max-w-[50%] max-md:max-w-[100%] h-full max-xl:fixed top-0 max-xl:top-[70px] right-0 flex flex-col xl:flex-row justify-start xl:justify-end items-start xl:items-center gap-0 xl:gap-8 max-xl:border-l-[1px] z-50 max-xl:shadow-md max-xl:overflow-auto max-xl:transition-all ease-in-out duration-300`}
          >
            {HeaderData.map((menu, index, array) => (
              // เช็ค url ทำ active เมนู
              <li
                onClick={(event) => event.stopPropagation()}
                key={menu.id}
                className={`max-xl:w-full max-xl:h-fit ${
                  location.pathname === menu.url && "text-[#004500]"
                } ${
                  location.pathname.includes("/product") &&
                  menu.id === 2 &&
                  "text-[#004500]"
                } ${
                  location.pathname.includes("/service") &&
                  menu.id === 3 &&
                  "text-[#004500]"
                } ${
                  location.pathname.includes("/process") &&
                  menu.id === 4 &&
                  "text-[#004500]"
                } ${
                  location.pathname.includes("/etc") &&
                  menu.id === 5 &&
                  "text-[#004500]"
                }  ${windowWidth < 1280 && index === 0 && "border-y-[1px]"} 
                ${
                  windowWidth < 1280 &&
                  index === array.length - 1 &&
                  "border-b-[1px]"
                } 
                ${
                  windowWidth < 1280 &&
                  index > 0 &&
                  index !== array.length - 1 &&
                  "border-t-0 border-b-[1px]"
                } hover:text-[#004500] h-full relative flex items-center px-1`}
              >
                {/* ปิดเบอร์เกอร์และเมนู หลังจากคลิกเมนูที่ไม่มีเมนูย่อย */}
                <Link
                  onClick={() =>
                    menu.submenu.length > 0
                      ? handleOpenSubmenu(menu)
                      : handleCloseSubMenu()
                  }
                  to={menu.url}
                  className="w-full h-full flex max-xl:justify-between items-center max-xl:p-4"
                >
                  {menu.title}
                  {menu.submenu.length > 0 && (
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        transform:
                          activeSubmenu === menu.id && "rotateX(180deg)",
                        fontSize: "20px",
                        transition: "rotate ease-in-out 0.3s",
                      }}
                    />
                  )}
                </Link>
                {/* ถ้า activeSubmenu === menu.id เปิดเมนูย่อย ถ้าไม่ ปิดเมนูย่อย */}
                <ul
                  ref={submenuRef}
                  className={`w-full xl:w-[300px] ${
                    activeSubmenu === menu.id
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-[-70px] pointer-events-none"
                  } bg-[#fff] absolute top-[56px] xl:top-[70px] left-0 flex flex-col rounded-md shadow-md z-50 transition-all ease-in-out duration-300`}
                >
                  {menu.submenu?.map((submenu, index, array) => (
                    <li
                      key={submenu.id}
                      className={`w-full
                      ${index === 0 && "border-t-[1px]"} 
                      ${
                        index === array.length - 1 &&
                        "border-b-[1px] rounded-b-md"
                      } 
                       border-x-[1px] text-[#000] hover:text-[#D30000] drop-shadow-md`}
                    >
                      {/* ปิดเบอร์เกอร์และเมนูย่อย หลังจากคลิกเมนูย่อย */}
                      <Link
                        onClick={handleCloseSubMenu}
                        to={submenu.url}
                        className="w-full flex justify-start gap-4 px-4 py-2"
                      >
                        <span>{"•"}</span>
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <div className="max-xl:w-full flex items-center gap-4 max-xl:gap-3 max-xl:p-4 max-xl:border-b-[1px]">
              <Link to="#">
                <img
                  src="/icons/line.png"
                  alt="Line icon"
                  width={"auto"}
                  height={"auto"}
                />
              </Link>
              <Link to="#">
                <img
                  src="/icons/facebook.png"
                  alt="Facebook icon"
                  width={"auto"}
                  height={"auto"}
                />
              </Link>
            </div>
          </ul>
          {/* Burgur แสดงผลขนาดจอน้อยกว่า 1280 */}
          {windowWidth < 1280 && (
            <div
              onClick={() => setIsBurgurOpen(!isBurgurOpen)}
              className="h-full flex flex-col gap-1 justify-center cursor-pointer"
            >
              <div
                className={`${
                  isBurgurOpen && "-rotate-45 translate-y-[8px]"
                } bg-[#000] w-[30px] h-[4px] rounded-md transition-all ease-in-out duration-300`}
              />
              <div
                className={`${
                  isBurgurOpen && "opacity-0"
                } bg-[#000] w-[30px] h-[4px] rounded-md transition-all ease-in-out duration-300`}
              />
              <div
                className={`${
                  isBurgurOpen && "rotate-45 -translate-y-[8px]"
                } bg-[#000] w-[30px] h-[4px] rounded-md transition-all ease-in-out duration-300`}
              />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
