import React from "react";
import Image from "next/image";

type FlagProps = {
  flag: string;
  text: string;
};
export default function Flag({ flag, text }: FlagProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={flag} alt={text} width={53} height={37} />
      <p className="text-sm">{text}</p>
    </div>
  );
}
