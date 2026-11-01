/** @format */
"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export type ShowcaseItem = {
  image: string;
  alt: string;
  text: string;
};

type ShowcaseGalleryProps = {
  items: ShowcaseItem[];
};

const ShowcaseGallery: React.FC<ShowcaseGalleryProps> = ({ items }) => {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  if (!items || items.length === 0) return null;

  const current = items[active];

  const scrollThumbnails = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* caption — changes based on which thumbnail is selected */}
      <p className="mb-6 text-center font-sans text-sm text-ink-soft transition-opacity duration-300 sm:text-base">
        {current.text}
      </p>

      {/* showcase image — all items stacked and crossfaded so switching is smooth */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-line/30 sm:aspect-[16/10]">
        {items.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={item.alt}
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            priority={index === 0}
            className={`object-cover transition-opacity duration-500 ease-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* thumbnail carousel */}
      <div className="relative mt-6">
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${item.alt}`}
              aria-current={index === active}
              className={`relative h-24 w-24 shrink-0 overflow-hidden border transition-all duration-300 sm:h-28 sm:w-28 ${
                index === active
                  ? "border-accent opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={item.image} alt={item.alt} fill className="object-cover" />
            </button>
          ))}
        </div>

        {items.length > 4 && (
          <>
            <button
              type="button"
              onClick={() => scrollThumbnails(-1)}
              aria-label="Scroll thumbnails left"
              className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper p-2 shadow-sm transition-colors hover:border-accent sm:flex"
            >
              <span aria-hidden className="font-display text-lg leading-none text-ink-soft">
                &#8592;
              </span>
            </button>
            <button
              type="button"
              onClick={() => scrollThumbnails(1)}
              aria-label="Scroll thumbnails right"
              className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper p-2 shadow-sm transition-colors hover:border-accent sm:flex"
            >
              <span aria-hidden className="font-display text-lg leading-none text-ink-soft">
                &#8594;
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowcaseGallery;
