import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  title: string;
  className: string;
  onClick: () => void;
}

function Button({ title, className, onClick }: ButtonProps) {
  return (
    <button
      className={cn("px-6 py-2 shadow-lg text-white font-medium", className)}
    >
      {title}
    </button>
  );
}

export default Button;
