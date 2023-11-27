import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Form() {
  // state สำหรับเก็บ input ใน form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // ตัวอย่างการใช้ axios post contact message
  async function handleSendMessage() {
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    if (name && email && subject && message) {
      await axios
        .post(
          `http://localhost:8000/api/backoffice/v1/message/create`,
          formData
        )
        .then((response) => {
          if (response.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "ส่งข้อความสำเร็จ!",
              text: "เราจะทำการติดต่อคุณกลับในภายหลัง",
              showConfirmButton: true,
              confirmButtonColor: "#004500",
            });
          }
        });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        showConfirmButton: true,
        confirmButtonColor: "#004500",
      });
    }
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
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Name..."
                  className="h-[40px] border-[#9E9E9E] border-[1px] pl-2 rounded-[5px] font-[300]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="e-mail">E-mail</label>
                <input
                  // ย้าย value ไปเก็บไว่ใน state email
                  onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setSubject(event.target.value)}
                type="text"
                placeholder="Subject..."
                className="h-[40px] border-[#9E9E9E] border-[1px] pl-2 rounded-[5px] font-[300]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                // ย้าย value ไปเก็บไว่ใน state message
                onChange={(event) => setMessage(event.target.value)}
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.754934224148!2d102.82887257602582!3d16.38644163086605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3122896c82686f57%3A0x6ef7a4a270a11279!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4iuC4reC4uOC5iOC4oSAyMDIxIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sth!2sth!4v1699608835588!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              className="max-md:h-[320px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 mt-12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <p className="xl:text-[18px] font-[500]">
              Facebook : <span className="font-[300]">Nosara, Guanacaste</span>
            </p>
            <p className="xl:text-[18px] font-[500]">
              Line ID : <span className="font-[300]">Residential</span>
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="xl:text-[18px]"
          >
            <figure>
              <img
                src="/images/etc/contact/form/logo.png"
                alt="Logo"
                width={"auto"}
                height={"auto"}
              />
            </figure>
            <p className="my-4 font-[500]">Cha Um 2021 CO.,LTD</p>
            <p className="flex flex-col">
              <span>ตึกเจติยา ไพรเวทพูลวิลล่าเรสซิเดนท์</span>
              <span>
                998/6-7 หมู่ที่ 7 Mueang Khon Kaen District,Khon Kaen 40000
              </span>
              <span>โทร: 095 169 7508 , อีเมล์: chaum2021ltd@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
