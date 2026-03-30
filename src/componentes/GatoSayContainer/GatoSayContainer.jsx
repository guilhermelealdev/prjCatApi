import { useState } from "react";
import "./GatoSayContainer.css"

export function GatoSayContainer(props) {

    const {foto, setFrase, idAnterior, proximoId, virarGif, baixarFoto} = props;
    const [estado, setEstado] = useState(true)

    function mudarTipo(){
      setEstado(!estado)
      virarGif();
    }

  return (
    <>
      <section>
        <h2>Faça seu próprio gato!</h2>
        <img src={foto}  id="gatoSayImg"/>
        <div className="inputGatoSay">
            <input
          type="text"
          placeholder="Digite algo para seu gato falar!"
          id="inputFrase"
          onChange={(evento)=>setFrase(evento.target.value)}
        />
        <button onClick={idAnterior}>{"<"}</button>
        <button onClick={proximoId}>{">"}</button>
        <button onClick={mudarTipo}>{estado ? "GIF" :"PNG"}</button>
        </div>
        <br />
            <button className="baixar" onClick={baixarFoto}>BAIXAR</button>
        
        
      </section>
    </>
  );
}
