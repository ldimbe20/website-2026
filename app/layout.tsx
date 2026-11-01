/** @format */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_ui/navbar";
import Footer from "./_ui/footer";

export const metadata: Metadata = {
  title: "Lauren Dimberg | Designer",
  description: "Portfolio of my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      {/* overflow-x-hidden guards against the full-bleed sections causing
          a horizontal scrollbar; flex-col ensures sections always stack,
          even when a page returns a full-width hero alongside constrained
          content below it */}
      <body className="m-0 flex min-h-screen flex-col overflow-x-hidden p-0">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
