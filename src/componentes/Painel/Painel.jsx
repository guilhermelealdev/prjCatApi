import { useState, useEffect } from "react";
import { Container } from "../Container/Container";

export function Painel() {
  const [gatos, setGatos] = useState([]);

  useEffect(() => {
    fetch("https://cataas.com/api/cats?limit=10")
      .then((resposta) => resposta.json())
      .then((data) => {
        setGatos(data);
      });
  }, []);
  let contador = 0;

  return (
    <>
      <main>
        {gatos.map((gato) => {
          const imagem = `https://cataas.com/cat/${gato.id}`;
          contador+=1
          return (
            <Container
              key={gato.id}
              id={contador}
              tagUm={gato.tags[0] || ""}
              tagDois={gato.tags[1] || ""}
              tagTres={gato.tags[2] || ""}
              imagem={imagem}
            />
          );
        })}
      </main>
    </>
  );
}
