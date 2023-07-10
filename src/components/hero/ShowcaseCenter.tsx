import React from "react";
import Button from "@/components/general/Button";
import Image from "next/image";

export default function ShowcaseCenter() {
  return (
    <div className="grid grid-cols-2 h-2/5">
      <div className="flex flex-col justify-between">
        <h1 className="flex flex-col text-2xl leading-10">
          <span>آموزش آنلاین زبان</span>
          <span>همیشه و همه‌جا با استادی که دوست داری</span>
        </h1>
        <p className="leading-7">
          همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده،
          انتخاب کن و در زمان‌های دلخواه، در کلاس زبان آنلاین شرکت کن
        </p>
        <Button
          classes={"self-start"}
          color="#4385F6"
          text="همین حالا شروع کن"
        />
      </div>
      <Image src="/img/user.png" alt="user" width={400} height={300} />
    </div>
  );
}
