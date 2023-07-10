import React from "react";
import Flag from "./Flag";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const flags = [
  {
    id: 1,
    flag: "/img/flags/england.svg",
    text: "انگلیسی",
  },
  {
    id: 2,
    flag: "/img/flags/france.svg",
    text: "فرانسوی",
  },
  {
    id: 3,
    flag: "/img/flags/german.svg",
    text: "آلمانی",
  },
  {
    id: 4,
    flag: "/img/flags/turkey.svg",
    text: "ترکی",
  },
  {
    id: 5,
    flag: "/img/flags/spain.svg",
    text: "اسبانیایی",
  },
  {
    id: 6,
    flag: "/img/flags/korea.svg",
    text: "کره ای",
  },
  {
    id: 7,
    flag: "/img/flags/italy.svg",
    text: "ایتالیایی",
  },
  {
    id: 8,
    flag: "/img/flags/china.svg",
    text: "چینی",
  },
];

export default function Flags() {
  return (
    <div className="flex relative">
      <BsArrowRightCircle className="w-10 h-10 absolute top-[40%] right-[-2%] fill-[#4385F6]" />
      <div className="flex justify-between bg-white rounded-3xl py-6 px-12 w-full">
        {flags.map(({ flag, text, id }) => (
          <Flag key={id} flag={flag} text={text} />
        ))}
      </div>
      <BsArrowLeftCircle className="w-10 h-10 absolute top-[40%] left-[-2%] fill-[#4385F6]" />
    </div>
  );
}
