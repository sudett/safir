import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-4xl mx-auto h-10 text-base">
      <div className="flex items-center gap-4">
        <AiOutlineFacebook className="fill-[#4385F6]" />
        <AiOutlineWhatsApp className="fill-[#4385F6]" />
        <AiOutlineLinkedin className="fill-[#4385F6]" />
        <AiOutlineInstagram className="fill-[#4385F6]" />
      </div>

      <div className="flex items-center gap-12">
        <div className="flex gap-2 items-center">
          <p>info@Academy.com</p>
          <AiOutlineMail className="fill-[#4385F6]" />
        </div>
        <div className="flex gap-2 items-center">
          <p>021-2222222</p>
          <BsTelephone className="fill-[#4385F6]" />
        </div>
      </div>
    </div>
  );
}
