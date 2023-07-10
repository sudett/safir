import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../general/Button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <Image src="/img/logo.svg" alt="logo" width={46} height={50} />
        <div className="">
          <p className="font-bold text-lg">موسسه سفیر</p>
          <p className="text-xs">آموزش زبان های خارجی</p>
        </div>
      </div>
      <ul className="flex gap-8 text-sm">
        <li>دوره های خودآموز</li>
        <li>آیلتس</li>
        <li>سطح بندی</li>
        <li>کلاس های خصوصی</li>
        <li>همکاری با ما</li>
        <li>بلاگ</li>
      </ul>
      <Button color="#4385F6" text="ورود و ثبت نام" />
    </div>
  );
}
