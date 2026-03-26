import { useState, useEffect } from "react";
import { Container } from "../Container/Container";

export function Painel() {
  const [gatos, setGatos] = useState([]);
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    fetch(`https://cataas.com/api/cats?limit=5&skip=${skip}`)
      .then((resposta) => resposta.json())
      .then((data) => {
        if(skip === 0){
          return setGatos(data);
        }
        return setGatos((antes)=>[...antes, ...data])
        
      });
  }, [skip]);

  function carregarMais(){
    setSkip((antes)=>antes+5)
  }



  return (
    <>
      <main>
        {gatos.map((gato,index) => {
          const imagem = `https://cataas.com/cat/${gato.id}`;
          return (
            <Container
              key={gato.id}
              id={index+1}
              tagUm={gato.tags[0] || ""}
              tagDois={gato.tags[1] || ""}
              tagTres={gato.tags[2] || ""}
              imagem={imagem}
              carregarMais = {carregarMais}
            />
          );
        })}
        <div className="botao">
          <button onClick={carregarMais}>{"🐱Carregar Mais🐈"}</button>
        </div>
        
      </main>
    </>
  );
}
