/** @format */
"use client";
import Image from "next/image";

type MarqueeImage = {
  src: string;
  alt: string;
};

type ImageMarqueeProps = {
  // pass real images once they're resized — leave empty for now and
  // placeholder blocks will show instead
  images?: MarqueeImage[];
};

const PLACEHOLDER_COUNT = 7;

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
  const hasImages = Boolean(images && images.length > 0);
  const baseItems = hasImages
    ? (images as MarqueeImage[])
    : Array.from({ length: PLACEHOLDER_COUNT });
  // duplicate the track so the loop feels seamless
  const track = [...baseItems, ...baseItems];

  return (
    <div className="group relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
        {track.map((item, index) =>
          hasImages ? (
            <div
              key={index}
              className="relative h-48 w-72 shrink-0 overflow-hidden sm:h-56 sm:w-80"
            >
              <Image
                src={(item as MarqueeImage).src}
                alt={(item as MarqueeImage).alt}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div
              key={index}
              className="flex h-48 w-72 shrink-0 items-center justify-center border border-paper/15 bg-paper/5 font-display text-lg italic text-paper/50 sm:h-56 sm:w-80"
            >
              Project 0{(index % PLACEHOLDER_COUNT) + 1}
            </div>
          )
        )}
      </div>
      {/* edge fades so the loop doesn't look like it's cutting off */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
};

export default ImageMarquee;
