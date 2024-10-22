
import React from "react";

function Imagem(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ borderRadius: "50%", border: "3px solid #000", width: "100px" }}
    />
  );
}

function ImagemAlt() {
  const fotos = [
    {
      url: "https://m.media-amazon.com/images/M/MV5BOThjMGU2ODgtMzM5NC00MDFjLTlmZTQtMjVkN2Y5YmFjMDg3XkEyXkFqcGdeQXVyOTA1ODU0Mzc@._V1_FMjpg_UX1000_.jpg",
      alt: "pessoas do hanabie",
    },
    {
      url: "https://assets.vg247.com/current/2015/05/Minecraft.jpg",
      alt: "album hanabie",
    },
  ];

  return (
    <div className="fotos">
      {fotos.map((fotos) => (
        <Imagem src={fotos.url} alt={fotos.alt} />
      ))}
    </div>
  );
}

export default ImagemAlt;