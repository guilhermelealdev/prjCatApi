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

      {foto && <img src={foto} id="gatoSayImg" alt="gato" />}

      <div className="inputGatoSay">
        {/* FRASE */}
        <input
          type="text"
          placeholder="Frase"
          onChange={(evento) => setFrase(evento.target.value)}
          className="inputInfo"
        />

        {/* COR */}
        <input
          type="text"
          placeholder="Cor da fonte (ex: ff0000)"
          onChange={(evento) => setCor(evento.target.value)}
          className="inputInfo"
        />

        {/* TAMANHO */}
        <input
          type="number"
          placeholder="Tamanho da fonte"
          onChange={(evento) => setFontSize(Number(evento.target.value) || 35)}
          className="inputInfo"
        />

        {/* CONTROLES */}
      </div>
      <br />
      <div id="controles">
        <button onClick={idAnterior}>{"<"}</button>
        <button onClick={proximoId}>{">"}</button>
        <button onClick={mudarTipo}>{ehGif ? "PNG" : "GIF"}</button>
      </div>

      <br />

      {/* DOWNLOAD */}
      <button className="baixar" onClick={baixarFoto}>
        BAIXAR
      </button>
    </section>
  );
}
