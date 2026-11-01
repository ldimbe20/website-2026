/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ImageGallery from "../_ui/imageGallery";
import ShowcaseGallery from "../_ui/showcaseGallery";
import PageHero from "../_ui/pageHero";
import Image from "next/image";

type PageLayoutProps = {
  projectHeader: string;
  description: string;
  items?: any;
  logos?: string[];
  // "grid" = existing masonry grid, "showcase" = large image + thumbnail carousel
  gallery?: "grid" | "showcase";
};

const PageLayout: React.FC<PageLayoutProps> = ({
  projectHeader,
  description,
  items,
  logos,
  gallery = "grid",
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const hasItems = Array.isArray(items) && items.length > 0;
  // in "grid" mode, the first item doubles as the hero image beside the
  // title/description, so the grid below only needs the remaining items
  const useHero = gallery === "grid" && hasItems;
  const heroItem = useHero ? items[0] : null;
  const galleryItems = useHero ? items.slice(1) : items;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-20 pt-4 md:px-10 md:pt-6">
      {useHero ? (
        <PageHero
          projectHeader={projectHeader}
          description={description}
          image={heroItem.image}
          alt={heroItem.alt}
        />
      ) : (
        <div
          className={`w-full max-w-2xl text-center transition-all duration-700 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent">
            Portfolio
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {projectHeader}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {description}
          </p>
        </div>
      )}

      <div className={useHero ? "mt-2 w-full sm:mt-3" : "mt-12 w-full border-t border-line pt-12 md:mt-16 md:pt-16"}>
        {gallery === "showcase" ? (
          <ShowcaseGallery items={items} />
        ) : (
          <ImageGallery items={galleryItems} />
        )}
      </div>

      {logos && logos.length > 0 ? (
        <>
          <h4
            className={`mt-16 font-display text-2xl font-semibold text-ink transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Technologies
          </h4>
          <div className="mt-6 flex justify-center">
            <div
              className={`flex flex-wrap justify-center gap-2 transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              {logos.map((logoItem, index) => (
                <div
                  key={index}
                  className="p-2 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <Image src={logoItem} width={44} height={44} alt="logo" />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PageLayout;
