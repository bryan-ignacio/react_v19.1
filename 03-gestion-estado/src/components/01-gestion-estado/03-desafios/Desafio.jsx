import { useState } from "react";

export default function Desafio() {
  const [isDivClick, setIsDivClick] = useState(false);
  const [isImageClick, setIsImageClick] = useState(false);

  function handleDivClick() {
    setIsDivClick(!isDivClick);
    setIsImageClick(false);
  }

  function handleImageClick(event) {
    event.stopPropagation(); // prevent bubble so the image state stays on
    setIsImageClick(!isImageClick);
    setIsDivClick(false);
  }

  return (
    <div
      className={`background ${isImageClick ? "" : "background--active"}`}
      onClick={handleDivClick}
    >
      <img
        className={`picture ${isImageClick ? "picture--active" : ""}`}
        alt="Casas de arcoiris en Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handleImageClick}
      />
    </div>
  );
}
