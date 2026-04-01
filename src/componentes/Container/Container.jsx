import "./Container.css";

export function Container(props) {
  const { imagem, tagUm, tagDois, tagTres, id} = props;
  return (
    <>
      <div className="card">
        <div className="dentro">
          <div className="frente">
            <img
              src={imagem}
              alt={
                [tagUm, tagDois, tagTres].filter(Boolean).join(", ") + " cat"
              }
              className="cardImagem"
            />
          </div>
          <div className="tras">
            <ol>
              {tagUm && <li><strong>{tagUm.toUpperCase()}</strong></li>}
              {tagDois && <li><strong>{tagDois.toUpperCase()}</strong></li>}
              {tagTres && <li><strong>{tagTres.toUpperCase()}</strong></li>}
              <br />
              <h3>Gatinho No. {id}</h3>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
