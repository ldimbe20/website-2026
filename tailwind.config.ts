/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "#ECEAE4", // warm grey-beige background, not stark white
                ink: "#1E1D1B", // near-black body/heading text
                "ink-soft": "#6E6B64", // secondary text, replaces slate-600
                accent: "#B98B2A", // muted gold/ochre — used sparingly (labels, hovers, underline)
                "accent-teal": "#3F6E68", // rare secondary accent (blobs, small details only)
                line: "#D4D1C9", // hairline dividers
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                display: ["Archivo", "sans-serif"],
                sans: ["Archivo", "sans-serif"],
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                moveUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 1s ease-in-out",
                moveUp: "moveUp 1s ease-in-out forwards",
                marquee: "marquee 32s linear infinite",
            },
            spacing: {
                "15": "60px",
                "0.25": "0.0625rem",
                "0.375": "0.09375rem",
                "0.3125": "0.078125rem",
                "8.5": "2.125rem",
            },
        },
    },
    plugins: [],
};

export default config;
