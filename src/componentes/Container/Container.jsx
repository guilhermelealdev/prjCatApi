import "./Container.css";

export function Container(props) {
  const { imagem, tagUm, tagDois, tagTres, key } = props;
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
            />
          </div>
          <div className="tras">
            <ul></ul>
            <ul></ul>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  );
}
