//Exercício09

import React from "react";

function Elementos() {
  const itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <>
      <h2>Título</h2>
      <ul>
        {itens.map((itens) => (
          <li>{itens}</li>
        ))}
      </ul>
      <p>Parágrafo da lista.</p>
    </>
  );
}

export default Elementos;