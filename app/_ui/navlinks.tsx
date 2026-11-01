/** @format */
"use client";
import { usePathname } from "next/navigation";
import { NavigationLinks } from "../data_exports";
import { useState } from "react";

const links = NavigationLinks;

type NavLinksProps = {
  theme?: "light" | "dark";
};

const NavLinks: React.FC<NavLinksProps> = ({ theme = "light" }) => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-8">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <div key={link.href} className="relative">
            <a
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`font-sans text-sm tracking-wide transition-colors duration-300 ${
                isActive
                  ? isDark
                    ? "font-semibold text-paper"
                    : "font-semibold text-ink"
                  : isDark
                  ? "text-paper/60 hover:text-paper"
                  : "text-ink-soft hover:text-ink"
              }`}
              href={link.href}
            >
              {link.navlinkName}
            </a>
            <span
              style={{
                transform:
                  hoveredLink === link.href || isActive
                    ? "scaleX(1)"
                    : "scaleX(0)",
              }}
              className="absolute -bottom-1.5 left-0 right-0 h-px origin-left bg-accent transition-transform duration-300 ease-out"
            />
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
