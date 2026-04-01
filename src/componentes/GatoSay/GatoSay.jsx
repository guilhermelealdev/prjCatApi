import { useState, useEffect } from "react";
import { GatoSayContainer } from "../GatoSayContainer/GatoSayContainer";

export function GatoSay() {
  const [gatos, setGatos] = useState([]);
  const [foto, setFoto] = useState(null);
  const [frase, setFrase] = useState("");
  const [skip, setSkip] = useState(0);
  const [skipGif, setSkipGif] = useState(0);
  const [ehGif, setEhGif] = useState(false);
  const [gif, setGif] = useState([]);
  const [corTexto, setCorTexto] = useState("ffffff");
  const [fontSize, setFontSize] = useState(35);

  function setCorSegura(valor) {
    if (!valor) return setCorTexto("ffffff");

    const corLimpa = valor.replace("#", "").trim();
    setCorTexto(corLimpa);
  }

  function proximoId() {
    if (skip < 1987 || skipGif < 1987) {
      if (!ehGif) {
        return setSkip((anterior) => anterior + 1);
      }
      return setSkipGif((anterior) => anterior + 1);
    }
  }

  function idAnterior() {
    if (skip > 0 || skipGif > 0) {
      if (!ehGif) {
        return setSkip((anterior) => anterior - 1);
      }
      return setSkipGif((anterior) => anterior - 1);
    }
  }

  function virarGif() {
    setEhGif(!ehGif);
  }

  function baixarFoto() {
    fetch(foto)
      .then((resposta) => resposta.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "gato.png";
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch((erro) =>
        console.error("Ocorreu um erro para baixar a foto: ", erro)
      );
  }

  useEffect(() => {
    const carregar = setTimeout(() => {
      if (!ehGif) {
        if (skip >= gatos.length) {
          fetch(`https://cataas.com/api/cats?limit=1&skip=${skip}`)
            .then((resposta) => resposta.json())
            .then((data) => {
              setGatos((prev) => [...prev, ...data]);
            });
        }
      } else {
        if (skipGif >= gif.length) {
          fetch(
            `https://cataas.com/api/cats?limit=1&skip=${skipGif}&tags=gif`
          )
            .then((resposta) => resposta.json())
            .then((data) => {
              setGif((prev) => [...prev, ...data]);
            });
        }
      }

      if (frase && (gatos[skip] || gif[skipGif])) {
        const id = ehGif
          ? gif[skipGif]?.id
          : gatos[skip]?.id;

        const url = `https://cataas.com/cat/${id}/says/${frase}?fit=contain&skip=${
          ehGif ? skipGif : skip
        }&fontSize=${fontSize}&fontColor=%23${corTexto}`;

        console.log(url); // 🔎 debug

        setFoto(url);
      }
    }, 10);

    return () => clearTimeout(carregar);
  }, [skip, frase, gatos, ehGif, gif, skipGif, corTexto, fontSize]);

  return (
    <GatoSayContainer
      setFrase={setFrase}
      setCor={setCorSegura} // ✅ usa a versão segura
      setFontSize={setFontSize}
      foto={foto}
      proximoId={proximoId}
      idAnterior={idAnterior}
      virarGif={virarGif}
      baixarFoto={baixarFoto}
    />
  );
}