/** @format */
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type HomeIndexItem = {
  image: string;
  alt: string;
  link: string;
  text: string;
};

type HomeIndexProps = {
  items: HomeIndexItem[];
};

const HomeIndex: React.FC<HomeIndexProps> = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <ul className="border-t border-line">
          {items.map((item, index) => (
            <li key={item.link} className="border-b border-line">
              <Link
                href={item.link}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="group flex items-center justify-between gap-6 py-6 md:py-8"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-sans text-xs tracking-widest text-ink-soft tabular-nums">
                    0{index + 1}
                  </span>
                  <span className="font-display text-3xl leading-none transition-colors duration-300 group-hover:text-accent sm:text-4xl md:text-5xl">
                    {item.text}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="font-display text-2xl text-ink-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                >
                  &#8594;
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative hidden aspect-[4/5] w-full overflow-hidden bg-line/40 md:block">
          {items.map((item, index) => (
            <Image
              key={item.link}
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 40vw, 0vw"
              className={`object-cover transition-opacity duration-500 ease-out ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
