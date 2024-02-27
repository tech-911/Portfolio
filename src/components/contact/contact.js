import React, { useRef, useState } from "react";
import ContactInfo from "../contact-info/contact-info";
import contactInfoData from "./data";
import emailjs from "emailjs-com";
import "./contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5zos22h",
        "template_krq5ren",
        form.current,
        "Q3OFy0JqRzQo2xoMx"
      )
      .then(
        (result) => {
          setLoading(false);
          toast.success(`Success: ${result.text}`);
          console.log(form.current[0], form.current[0].value);
        },
        (error) => {
          setLoading(false);
          toast.error(`Error: ${error.text}`);
        }
      );
    e.target.reset();
    // form.current.e = "";
    // form.current.onreset;
    // console.log([form.current.value]);
  };
  const form = useRef();
  console.log(form.current);
  return (
    <div className="font-[inter] mb-10 container mx-auto contact" id="contact">
      <div className="flex items-start justify-between mb-10">
        <h1 className="col-span-2 text-[25px] font-bold w-[60%] form-text-res">
          Leave Us Your Info
        </h1>
        <h1 className="text-[25px] font-bold w-[37%] first-item-res">
          Contact Information
        </h1>
      </div>
      <div className="flex items-start justify-between contact-content-reponsive">
        <form
          onSubmit={handleForm}
          ref={form}
          className="col-span-3 w-[60%] contact-item-1"
        >
          <div className="bg-white p-6">
            <div className="flex flex-col items-start mb-4 ">
              <label htmlFor="name" className="text-[#767676] text-[18px] mb-2">
                Your Full Name (Required)
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <label
                htmlFor="email"
                className="text-[#767676] text-[18px] mb-2"
              >
                Your Email (Required)
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <label
                htmlFor="heading"
                className="text-[#767676] text-[18px] mb-2"
              >
                Subject
              </label>
              <input
                id="heading"
                name="subject"
                type="text"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <label
                htmlFor="message"
                className="text-[#767676] text-[18px] mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="px-4 py-2 text-[#3d3d3d] bg-[#F0F0F6] w-full outline-[#dedee2]"
              ></textarea>
            </div>

            <button
              disabled={loading}
              className="bg-[#FFB400] text-[14px] text-[2B2B2B] py-3 px-5 font-bold"
              type="submit"
              //   onClick={handleForm}
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>

        <div className="flex flex-col justify-center w-[37%] contact-item-2">
          <h1 className="text-[25px] font-bold w-[37%] second-item-res hidden">
            Contact Information
          </h1>

          {contactInfoData.map((value, id) => {
            return <ContactInfo data={value} id={id} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
