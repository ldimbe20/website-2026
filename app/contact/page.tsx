/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "../_ui/contactForm";

export default function ContactPage() {
  return (
    <>
      <div className="container flex h-full flex-col items-center px-10 pt-10">
        <div
        >
          <h3 className="animate-moveUp mb-3 text-center font-sans text-xl text-slate-600 md:mb-0">
            Let&#39;s Talk
          </h3>
          <ContactForm />
        </div>
      </div>
      ;
    </>
  );
}
