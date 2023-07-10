import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

type ButtonProps = {
  text: string;
  color: string;
  classes?: string;
};

export default function Button({ color, text, classes }: ButtonProps) {
  return (
    <button className={`relative text-white ${classes}`}>
      <p className={`bg-[${color}] px-8 py-3 rounded-3xl`}>{text}</p>
      <AiOutlineArrowLeft
        className={`bg-[${color}] fill-white absolute left-[-10%] top-[20%] rounded-full p-4 border-white border-2`}
      />
    </button>
  );
}
