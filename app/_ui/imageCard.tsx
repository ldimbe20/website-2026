/** @format */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Modal from "./modal";
import VideoModal from "./videoModal";

export type ImageCardProps = {
  image: string;
  alt: string;
  link: string;
  text: string;
  // optional second line shown in the hover overlay under the title
  description?: string;
  openNewTab?: boolean;
  usesModal: boolean;
  isVideo?: boolean;
  video?: string;
  isMotionGraphic?: boolean;
  index?: number;
  // spans both grid columns — a full-width "featured" tile
  featured?: boolean;
};

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  alt,
  link,
  text,
  description,
  openNewTab,
  usesModal,
  isVideo,
  video,
  isMotionGraphic,
  index = 0,
  featured = false,
}) => {
  const [clickedImg, setClickedImg] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (item: string) => setClickedImg(item);

  // reveal each card as it scrolls into view, rather than all at once on mount
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const caption = (text || description) && (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 bg-paper/85 px-6 text-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
      <h5 className="font-display text-lg font-semibold text-ink">{text}</h5>
      {description && (
        <p className="max-w-[85%] font-sans text-xs text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );

  return (
    <>
      <div
        ref={cardRef}
        className={`group relative overflow-hidden transition-all duration-700 ease-out ${
          featured ? "sm:col-span-2" : ""
        } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
      >
        {usesModal ? (
          <div
            className="relative aspect-[4/3] cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() =>
              isVideo && video ? handleClick(video) : handleClick(image)
            }
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {caption}
            {isMotionGraphic && isHovered && (
              <div className="absolute inset-x-0 bottom-0 z-20 h-10 bg-ink/80 text-paper">
                <div className="flex h-full items-center justify-center font-sans text-xs uppercase tracking-widest">
                  Motion Graphic
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            target={openNewTab ? "_blank" : undefined}
            rel={openNewTab ? "noopener noreferrer" : undefined}
            href={link}
            className="relative block aspect-[4/3] cursor-pointer overflow-hidden"
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {caption}
          </Link>
        )}
      </div>
      {usesModal &&
        clickedImg &&
        (isVideo ? (
          <VideoModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        ) : (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        ))}
    </>
  );
};

export default ImageCard;
