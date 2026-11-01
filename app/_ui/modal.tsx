/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type ModalProps = {
  clickedImg: string;
  setClickedImg: React.Dispatch<React.SetStateAction<string>>;
};

const Modal: React.FC<ModalProps> = ({ clickedImg, setClickedImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setClickedImg("");
    }, 700);
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    if (clickedImg) {
      setIsOpen(true);
    }
  }, [clickedImg]);

  if (!clickedImg && !isClosing) return null;

  return (
    <div
      className={`duration-700'} fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity ${isOpen && !isClosing ? "opacity-100" : "opacity-0"}`}
      onClick={handleOverlayClick}
    >
      <div className="relative">
        {/* <Image
          src={clickedImg}
          alt="Enlarged"
          className="w-[400px] h-auto"
          style={{ maxWidth: "80vw", maxHeight: "80vh" }}
          width="400"
          height="400"
        /> */}
        <img
          src={clickedImg}
          alt="Enlarged"
          className={`max-h-full max-w-full`}
          style={{ maxWidth: "80vw", maxHeight: "80vh" }}
        />
        {isOpen && !isClosing && (
          <button
            onClick={handleClose}
            className="absolute right-2 top-1 text-slate-500 transition-opacity delay-700"
          >
            <FontAwesomeIcon icon={faXmark} size="1x" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
