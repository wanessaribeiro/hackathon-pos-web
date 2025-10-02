import "./Card.css";

type CardProps = {
  title: string;
  subtitle: string;
  onClick?: () => void;
};

//TODO: colocar link
const Card = ({ title, subtitle, onClick }: CardProps) => {
  return (
    <div className="card-body">
      <h3 className="title-card">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <a className="link">Ver no Mapa</a>
    </div>
  );
};

export default Card;
