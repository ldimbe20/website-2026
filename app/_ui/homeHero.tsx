/** @format */
"use client";
import Image from "next/image";

type HomeHeroProps = {
  // pass a real image once it's ready — leave empty for a placeholder
  image?: string;
  alt?: string;
  eyebrow?: string;
  title?: string;
};

const HomeHero: React.FC<HomeHeroProps> = ({
  image,
  alt = "",
  eyebrow = "Featured Work",
  title = "A closer look at recent work",
}) => {
  return (
    <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-ink text-paper">
      {image ? (
        <Image src={image} alt={alt} fill priority className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink via-ink to-accent-teal/25">
          <span className="font-sans text-sm uppercase tracking-[0.2em] text-paper/40">
            Placeholder image
          </span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-6 pb-8 pt-24 md:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-paper/60">
            {eyebrow}
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
