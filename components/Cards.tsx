import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Button from "./Button";

interface HomeCardProps {
  className: string;
  img: string;
  description: string;
  title: string;
  handleClick: () => void;
  buttonClassName: string;
  descriptionClassName: string;
}

function Cards({
  img,
  title,
  description,
  className,
  handleClick,
  buttonClassName,
  descriptionClassName,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-center items-center w-full xl:max-w-[323px] min-h-[360px] rounded-[14px]",
        className
      )}
    >
      <div className="flex-center glassmorphism rounded-[10px]">
        <Image src={img} alt="cards" width={193} height={178} />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-[28px] text-center font-bold">{title}</h1>
        <p
          className={cn(
            "text-sm text-center font-normal",
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
      <Button
        title="Visit Page"
        className={cn("mt-5", buttonClassName)}
        onClick={handleClick}
      />
    </div>
  );
}

export default Cards;
