/** @format */
"use client";

import Link from "next/link";
import { useState } from "react";

export type ImageCardProps = {
  text: string;
  href: string;
  isHeader: boolean;
};

const DropdownMenuLink: React.FC<ImageCardProps> = ({ text, href, isHeader }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      {isHeader ? (
        <Link href={href}>
          <h3
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative z-30 mr-5 block w-full px-4 py-2 text-base font-medium text-slate-600 transition-colors duration-300 md:ml-0 ${
              open && "bg-slate-300"
            }`}
          >
            {text}
          </h3>
        </Link>
      ) : (
        <Link href={href}>
          <h3
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative z-30 mr-5 block w-full px-4 py-2 text-sm italic text-slate-500 transition-colors duration-300 md:ml-0 ${
              open && "bg-slate-300"
            }`}
          >
            {text}
          </h3>
        </Link>
      )}
    </>
  );
};

export default DropdownMenuLink;
