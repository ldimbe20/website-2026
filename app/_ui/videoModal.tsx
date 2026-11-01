import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

type VideoModalProps = {
  clickedImg: string;
  setClickedImg: React.Dispatch<React.SetStateAction<string>>;
};

const VideoModal: React.FC<VideoModalProps> = ({
  clickedImg,
  setClickedImg,
}) => {
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-700 ${
        isOpen && !isClosing ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div className="relative h-[160vw] max-h-[640px] w-[90vw] max-w-[360px] bg-black">
        <video
          className="h-full w-full object-cover"
          controls // Include default controls (play, pause, etc.)
          preload="none"
          autoPlay
        >
          <source src={clickedImg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isOpen && !isClosing && (
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 text-slate-500 transition-opacity delay-700"
          >
            <FontAwesomeIcon icon={faXmark} size="1x" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
