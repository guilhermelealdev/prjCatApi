import { useState, useEffect } from "react";

import { GatoSayContainer } from "../GatoSayContainer/GatoSayContainer";

export function GatoSay() {
  const [gatos, setGatos] = useState([]);
  const [foto, setFoto] = useState(null);
  const [frase, setFrase] = useState(" ");
  const [skip, setSkip] = useState(0);
  const [skipGif, setSkipGif] = useState(0);
  const [ehGif, setEhGif] = useState(false);
  const [gif, setGif] = useState([]);

  function proximoId() {
    if (skip < 1987 || skipGif < 1987) {
      if (ehGif === false) {
        return setSkip((anterior) => anterior + 1);
      }
      return setSkipGif((anterior) => anterior + 1);
    }
  }

  function idAnterior() {
    if (skip > 0 || skipGif > 0) {
      if (ehGif === false) {
        return setSkip((anterior) => anterior - 1);
      }
      return setSkipGif((anterior) => anterior - 1);
    }
  }

  function virarGif() {
    setEhGif(!ehGif);
  }

  function baixarFoto(){
    fetch(foto).then(resposta => resposta.blob()).then(blob=>{
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url;

      link.download = "gato.png"
      link.click()
      URL.revokeObjectURL(url)
    }).catch(erro => console.error("Ocorreu um erro para baixar a foto: ", erro))
  }

  useEffect(() => {
    const carregar = setTimeout(() => {
      if (ehGif === false) {
        if (skip >= gatos.length) {
          fetch(`https://cataas.com/api/cats?limit=1&skip=${skip}`)
            .then((resposta) => resposta.json())
            .then((data) => {
              if (gatos.length !== 0) {
                setGatos((anterior) => [...anterior, ...data]);
              } else {
                setGatos(data);
              }
            });
        }
      } else {
        if (skipGif >= gif.length) {
          fetch(`https://cataas.com/api/cats?limit=1&skip=${skipGif}&tags=gif&fontSize=35`)
            .then((resposta) => resposta.json())
            .then((data) => {
              if (gif.length !== 0) {
                setGif((anterior) => [...anterior, ...data]);
              } else {
                setGif(data);
              }
            });
        }
      }

      if (frase !== "" && (gatos[skip] || gif[skipGif])) {
        setFoto(
          `https://cataas.com/cat/${ehGif === true && gif[skipGif] ? gif[skipGif].id : gatos[skip].id}/says/${frase}?fit=contain&skip=${ehGif === true ? skipGif : skip}&fontSize=35`,
        );
      }
    }, 10);
    return () => clearTimeout(carregar);
  }, [skip, frase, gatos, ehGif, gif, skipGif]);

  return (
    <GatoSayContainer
      setFrase={setFrase}
      foto={foto}
      proximoId={proximoId}
      idAnterior={idAnterior}
      virarGif={virarGif}
      baixarFoto={baixarFoto}
    />
  );
}
