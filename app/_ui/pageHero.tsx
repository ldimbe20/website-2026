/** @format */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./modal";

type PageHeroProps = {
  projectHeader: string;
  description: string;
  image: string;
  alt: string;
};

const PageHero: React.FC<PageHeroProps> = ({
  projectHeader,
  description,
  image,
  alt,
}) => {
  const [imageIn, setImageIn] = useState(false);
  const [textIn, setTextIn] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  useEffect(() => {
    // Image moves first
    const imageTimer = setTimeout(() => setImageIn(true), 100);

    // Text appears after image begins settling
    const textTimer = setTimeout(() => setTextIn(true), 650);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {" "}
        {/* IMAGE WITH HOVER OVERLAY + MODAL */}
        <div
          className={`group relative aspect-[4/3] overflow-hidden transition-all duration-700 ease-out ${
            imageIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setClickedImg(image)}
            aria-label={`View ${alt}`}
            className="relative block h-full w-full cursor-pointer overflow-hidden"
          >
            <Image
              src={image}
              alt={alt}
              fill
              priority
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* SAME HOVER OVERLAY AS IMAGECARD */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 bg-paper/85 px-6 text-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              <h5 className="font-display text-lg font-semibold text-ink">
                {projectHeader}
              </h5>
            </div>
          </button>
        </div>
        {/* ORIGINAL ANIMATED TEXT */}
        <div
          className={`flex flex-col items-center justify-center px-6 py-10 text-center transition-all ease-out sm:px-10 ${
            textIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDuration: "1100ms" }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent">
            Portfolio
          </span>

          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {projectHeader}
          </h1>

          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-ink-soft sm:max-w-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* SAME MODAL AS IMAGECARD */}
      {clickedImg && (
        <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
      )}
    </>
  );
};

export default PageHero;
