/** @format */
import { designTypes } from "./data_exports";
import HomeIndex from "./_ui/homeIndex";
import HomeHero from "./_ui/homeHero";

const Home = () => {
  return (
    <>
      <HomeHero
        image="/portfolio/main/featured-hero.jpg"
        alt="Describe what's in the image here"
        eyebrow="Featured Work"
        title="A closer look at recent work"
      />
      <HomeHero
      />
      <section className="flex w-full flex-col items-center px-6 pb-24 pt-14 md:px-10 md:pt-20">
        <div className="w-full max-w-5xl">
          <div className="relative flex w-full flex-col items-start">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full bg-accent-teal/15 blur-2xl md:-left-16 md:-top-24 md:h-72 md:w-72"
            />
            <p className="relative font-display text-2xl italic text-ink-soft sm:text-3xl">
              Hello, I&apos;m
            </p>
            <h1 className="relative font-display text-5xl leading-[0.95] text-ink-soft sm:text-6xl md:text-7xl">
              {" "}
              Lauren Dimberg
            </h1>
            <p className="relative mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              I&apos;m a graphic designer and illustrator with an interest in
              website development. My goal is to use my creative talents and
              technical skills to design visual content that engages users.
            </p>
          </div>

          <div className="mt-16 md:mt-24">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent">
              Work
            </span>
            <div className="mt-4">
              <HomeIndex items={designTypes} />
            </div>
          </div>
        </div>
      </section>
      G
    </>
  );
};

export default Home;
