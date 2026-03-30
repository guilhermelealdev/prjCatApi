export function GatoSayContainer(props) {

    const {foto, setFrase, idAnterior, proximoId, virarGif} = props;


  return (
    <>
      <section>
        <h2>Faça seu próprio gato!</h2>
        <img src={foto}  id="catSayImg"/>
        <div className="inputGatoSay">
            <input
          type="text"
          placeholder="Digite algo para seu gato falar!"
          id="inputFrase"
          onChange={(evento)=>setFrase(evento.target.value)}
        />
        <button onClick={idAnterior}>antes</button>
        <button onClick={proximoId}>depois</button>
        <button onClick={virarGif}>Gif</button>
        
        </div>
        
      </section>
    </>
  );
}
