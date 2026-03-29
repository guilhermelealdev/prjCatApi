import { useState, useEffect } from "react";

import { GatoSayContainer } from "../GatoSayContainer/GatoSayContainer";

export function GatoSay() {
  const [gatos, setGatos] = useState([]);
  const [foto, setFoto] = useState(null);
  const [frase, setFrase] = useState(
    "Emerson e Daniel, parem de gerar exercícios com ia",
  );
  const [skip, setSkip] = useState(0);

  function proximoId() {
    if (skip < 1987) {
      setSkip((anterior) => anterior + 1);
    }
  }

  function idAnterior() {
    if (skip > 0) {
      return setSkip((anterior) => anterior - 1);
    }
  }

  useEffect(() => {
    const carregar = setTimeout(() => {
      if (skip >= gatos.length) {
        fetch(`https://cataas.com/api/cats?limit=5&skip=${skip}`)
          .then((resposta) => resposta.json())
          .then((data) => {
            if (gatos.length !== 0) {
              setGatos((anterior) => [...anterior, ...data]);
            } else {
              setGatos(data);
            }
          });
      }

      if (frase !== "" && gatos[skip]) {
        setFoto(
          `https://cataas.com/cat/${gatos[skip].id}/says/${frase}?fit=contain&skip=${skip}`,
        );
      }
    }, 250);
    return () => clearTimeout(carregar);
  }, [skip, setSkip, frase, gatos]);

  return (
    <GatoSayContainer
      setFrase={setFrase}
      foto={foto}
      proximoId={proximoId}
      idAnterior={idAnterior}
    />
  );
}
