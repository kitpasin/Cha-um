import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Form({
  host,
  company,
  logo,
  facebook,
  line,
  address,
  district,
  subdistrict,
  province,
  zipcode,
  tel,
  email,
  googlemap
}) {
  // state สำหรับเก็บ input ใน form
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [allowSendMessage, setAllowSendMessage] = useState(true);
  const [second, setSecond] = useState(localStorage.getItem("count") || 0);

  // ถ้า count บน localstorage != 0 ให้นับต่อ ถ้าไม่อนุญาตส่ง message
  useEffect(() => {
    if (second !== 0) {
      countdown();
      setAllowSendMessage(false);
    } else {
      setAllowSendMessage(true);
    }
  }, []);

  // format email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // ตัวอย่างการใช้ axios post contact message
  async function handleSendMessage() {
    if (allowSendMessage) {
      const formData = {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      };
      if (nameValue && isValidEmail(emailValue) && subjectValue && messageValue) {
        await axios
          .post(`${host}api/backoffice/v1/message/create`, formData)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "ส่งข้อความสำเร็จ!",
                text: "เราจะทำการติดต่อคุณกลับในภายหลัง",
                showConfirmButton: true,
                confirmButtonColor: "#004500",
              }).then((result) => {
                if (result.isConfirmed) {
                  setAllowSendMessage(false);
                  countdown();
                }
              });
            }
          });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง",
          showConfirmButton: true,
          confirmButtonColor: "#004500",
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "กรุณารอสักครู่ก่อนทำรายการใหม่",
        html: `${second} วินาที`,
        showConfirmButton: true,
        confirmButtonColor: "#004500",
      });
    }
  }

  // counddown แนบเวลาใส่บน localstorage
  function countdown() {
    let count = parseInt(localStorage.getItem("count")) || 60;

    const countdownInterval = setInterval(() => {
      if (count === 0) {
        clearInterval(countdownInterval);
        localStorage.setItem("count", 60);
        setAllowSendMessage(true);
        console.log("Countdown complete!");
      } else {
        localStorage.setItem("count", count);
        setAllowSendMessage(false);
        setSecond(count);
        count--;
      }
    }, 1000);
  }

  return (
    <div className="relative px-4 pt-12 pb-12 md:pb-36 lg:pb-48 xl:pb-60">
      <figure className="absolute bottom-0 left-0 max-md:hidden">
        <img
          src="/images/etc/contact/form/dec-b.png"
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </figure>
      <div className="max-w-[1280px] m-auto">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl font-[500] pb-12"
        >
          กรอกข้อมูลของคุณ
        </p>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col gap-4 xl:text-[18px] font-[500]"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  // ย้าย value ไปเก็บไว่ใน state name
                  onChange={(event) => setNameValue(event.target.value)}
                  type="text"
                  placeholder="Name..."
                  className="h-[40px] border-[#9E9E9E] border-[1px] pl-2 rounded-[5px] font-[300]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="e-mail">E-mail</label>
                <input
                  // ย้าย value ไปเก็บไว่ใน state email
                  onChange={(event) => setEmailValue(event.target.value)}
                  type="text"
                  placeholder="E-mail..."
                  className="h-[40px] border-[#9E9E9E] border-[1px] pl-2 rounded-[5px] font-[300]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                // ย้าย value ไปเก็บไว่ใน state subject
                onChange={(event) => setSubjectValue(event.target.value)}
                type="text"
                placeholder="Subject..."
                className="h-[40px] border-[#9E9E9E] border-[1px] pl-2 rounded-[5px] font-[300]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                // ย้าย value ไปเก็บไว่ใน state message
                onChange={(event) => setMessageValue(event.target.value)}
                cols="30"
                rows="5"
                placeholder="Message..."
                className="border-[#9E9E9E] border-[1px] pl-2 rounded-[5px] font-[300]"
              />
            </div>
            <button
              onClick={handleSendMessage}
              className="w-fit bg-[#004500] m-auto px-8 py-2 text-[#fff] text-[18px] rounded-[5px] hover:scale-110 transition-all ease-in-out duration-300"
            >
              Send
            </button>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <div dangerouslySetInnerHTML={{ __html: googlemap }} />
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 mt-12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <p className="xl:text-[18px] font-[500]">
              Facebook : <span className="font-[300]">{facebook.value}</span>
            </p>
            <p className="xl:text-[18px] font-[500]">
              Line ID : <span className="font-[300]">{line.value}</span>
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="xl:text-[18px]"
          >
            <figure>
              <img
                className="w-[150px]"
                src={`${host}${logo}`}
                alt="Logo"
                width={"auto"}
                height={"auto"}
              />
            </figure>
            <p className="my-4 font-[500]">{company}</p>
            <p className="flex flex-col">
              <span>{address}</span>
              <span>
                {district}{" "}
                {subdistrict}{" "}
                {province}{" "}
                {zipcode}
              </span>
              <span>โทร : {tel}</span>
              <span>อีเมล : {email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
