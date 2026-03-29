import { useState, useEffect } from "react";

import {GatoSayContainer} from "../GatoSayContainer/GatoSayContainer"

export function GatoSay() {
  const [foto, setFoto] = useState(null);
  const [frase, setFrase] = useState("Emerson e Daniel, parem de gerar exercícios com ia");

useEffect(() => {
  const carregar = setTimeout(() => {
    if (frase !== "") {
      setFoto(`https://cataas.com/cat/says/${frase}?fit=contain`);
    }    
  }, 100);
  return () => clearTimeout(carregar);
}, [frase]);


  function pegarFrase() {
    setFrase(document.getElementById("inputFrase"));
  }

  return (
    <GatoSayContainer
        setFrase = {setFrase}
        foto = {foto}

    />
  )
}
