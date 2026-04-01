import { useState } from "react";
import "./GatoSayContainer.css";

export function GatoSayContainer({
  foto,
  setFrase,
  idAnterior,
  proximoId,
  virarGif,
  baixarFoto,
  setFontSize,
  setCor,
}) {
  const [ehGif, setEhGif] = useState(false);

  function mudarTipo() {
    setEhGif((prev) => !prev);
    virarGif();
  }

  return (
    <section>
      <h2>Faça seu próprio gato!</h2>

      {foto && <img src={foto} id="gatoSayImg" alt="Gato meme" />}

      <div className="inputGatoSay">
        {/* FRASE */}
        <input
          type="text"
          placeholder="Digite algo para seu gato falar!"
          onChange={(e) => setFrase(e.target.value)}
        />

        {/* COR */}
        <input
          type="text"
          placeholder="Cor da fonte (ex: ff0000)"
          onChange={(e) => setCor(e.target.value)}
        />

        {/* TAMANHO */}
        <input
          type="number"
          placeholder="Tamanho da fonte"
          onChange={(e) =>
            setFontSize(Number(e.target.value) || 35)
          }
        />

        {/* CONTROLES */}
        <button onClick={idAnterior}>{"<"}</button>
        <button onClick={proximoId}>{">"}</button>
        <button onClick={mudarTipo}>
          {ehGif ? "PNG" : "GIF"}
        </button>
      </div>

      <br />

      {/* DOWNLOAD */}
      <button className="baixar" onClick={baixarFoto}>
        BAIXAR
      </button>
    </section>
  );
}