import { useState } from "react";
/*
Borrar una imagen mientras se carga 
Al pulsar “Siguiente”, el navegador comienza a cargar la siguiente imagen. 
Sin embargo, como se muestra en la misma etiqueta <img>,
por defecto se seguiría viendo la imagen anterior hasta que se cargue la siguiente. 
Esto puede ser indeseable si es importante que el texto coincida siempre con la imagen.
Cámbialo para que en el momento en que pulses “Siguiente”, la imagen anterior se borre inmediatamente.
*/

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>Siguiente</button>
      <h3>
        Imagen {index + 1} de {images.length}
      </h3>
      <img
        key={image.src}
        src={image.src}
        style={{ width: "350px", height: "350px" }}
      />
      <p>{image.place}</p>
    </>
  );
}

let images = [
  {
    place: "Penang, Malasia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisboa, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, España",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Suiza",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Praga, Chequia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Liubliana, Eslovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
];
