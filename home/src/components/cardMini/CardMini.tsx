import "./CardMini.css";

type CardMiniProps = {
  title: string;
  subtitle: string;
  onClick?: () => void;
};

//TODO: colocar link
const CardMini = ({ title, subtitle, onClick }: CardMiniProps) => {
  return (
    <div className="card-body-home">
      <h3 className="title-card-home">{title}</h3>
      <p className="subtitle-home">{subtitle}</p>
      <a className="link-home" onClick={onClick}>
        Ver no Mapa
      </a>
    </div>
  );
};

export default CardMini;
