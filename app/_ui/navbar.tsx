/** @format */
"use client";
import NavLinks from "./navlinks";
import { useEffect, useState } from "react";
import DropDownMenu from "./dropdownMenu";
import { DropdownMenuDetails } from "../data_exports";

const Navbar = () => {
  const [rotate, setRotate] = useState(false);
  const [hideRectangle, setHideRectangle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleAnimation = () => {
    setRotate(!rotate);
    setHideRectangle(!hideRectangle);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        scrolled ? "px-3 pt-3 md:px-4 md:pt-4" : ""
      }`}
    >
      <div
        className={`mx-auto flex w-full items-center justify-between backdrop-blur transition-all duration-300 ${
          scrolled
            ? "max-w-4xl rounded-full bg-ink/95 px-6 py-3 text-paper shadow-lg md:px-8"
            : "max-w-6xl border-b border-line bg-paper/95 px-6 py-4 text-ink md:px-10"
        }`}
      >
        {/* regular menu to display on larger screens */}
        <div className="hidden md:flex md:w-full md:items-center md:justify-between">
          <a
            href="/"
            className={`font-display text-xl font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-paper" : "text-ink"
            }`}
          >
            Lauren Dimberg
          </a>
          <NavLinks theme={scrolled ? "dark" : "light"} />
        </div>

        {/* brand name on small screens */}
        <a
          href="/"
          className={`font-display text-lg font-semibold transition-colors duration-300 md:hidden ${
            scrolled ? "text-paper" : "text-ink"
          }`}
        >
          Lauren Dimberg
        </a>

        {/* hamburger menu to display on small screens */}
        <div
          className={`flex cursor-pointer items-center transition-colors duration-300 md:hidden ${
            scrolled ? "text-paper" : "text-ink"
          }`}
        >
          <div onClick={toggleAnimation}>
            <DropDownMenu DropdownContent={DropdownMenuDetails}>
              <button aria-label="Toggle menu">
                {/* hamburger icon and X animation */}
                <svg viewBox="0 0 100 100" className="h-8 w-8 p-1">
                  {/* top rectangle */}
                  {!hideRectangle && (
                    <rect
                      className="rounded-lg fill-current"
                      width="80"
                      height="5"
                      x="10"
                      y="20"
                      rx="5"
                      ry="5"
                    />
                  )}
                  {/* middle rectangles */}
                  <rect
                    className="fill-current transition-transform duration-300"
                    width="80"
                    height="5"
                    x="10"
                    y="50"
                    rx="5"
                    ry="5"
                    transform={rotate ? "rotate(45 50 55)" : ""}
                  />
                  <rect
                    className="fill-current transition-transform duration-300"
                    width="80"
                    height="5"
                    x="10"
                    y="50"
                    rx="5"
                    ry="5"
                    transform={rotate ? "rotate(-45 50 55)" : ""}
                  />
                  {/* bottom rectangle */}
                  {!hideRectangle && (
                    <rect
                      className="fill-current"
                      width="80"
                      height="5"
                      x="10"
                      y="80"
                      rx="5"
                      ry="5"
                    />
                  )}
                </svg>
              </button>
            </DropDownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
