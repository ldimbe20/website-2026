/** @format */
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-24 pt-10 text-center md:px-10 md:pt-14">
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent">
        About
      </span>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Hi, I&apos;m Lauren
      </h1>

      {/* swap for a real headshot whenever it's ready */}
      <div className="relative mt-10 h-48 w-48 overflow-hidden rounded-full bg-line/40">
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-sans text-xs uppercase tracking-widest text-ink-soft">
            Headshot
          </span>
        </div>
      </div>

      {/* placeholder bio — replace with your real copy */}
      <p className="mx-auto mt-10 max-w-xl text-left text-sm leading-relaxed text-ink-soft sm:text-base">
        Add a paragraph or two here about your background, how you got into
        design, what you focus on now, and what you&apos;re looking for next.
        Keep it conversational — this is the one page on the site written in
        your own voice rather than a project caption.
      </p>

      <p className="mx-auto mt-4 max-w-xl text-left text-sm leading-relaxed text-ink-soft sm:text-base">
        A second paragraph works well for specifics: tools you use, industries
        you&apos;ve worked in, or a line about what you&apos;re currently
        doing day to day.
      </p>
    </div>
  );
};

export default AboutPage;
