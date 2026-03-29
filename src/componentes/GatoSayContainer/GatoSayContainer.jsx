export function GatoSayContainer(props) {

    const {foto, setFrase} = props;


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
        
        </div>
        
      </section>
    </>
  );
}
