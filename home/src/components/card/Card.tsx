import { ReactElement } from "react";
import closeImg from "./../../domain/assets/close.png";
import "./Card.css";

type CardProps = {
  title: string;
  closeButton?: boolean;
  onClickClose?: () => void;
  children: ReactElement;
};

//TODO: colocar link
const Card = ({ title, closeButton, onClickClose, children }: CardProps) => {
  return (
    <div className="card-body">
      <div className="title-card">
        <h3 className="title-text">{title}</h3>
        <div>
          {closeButton && (
            <button onClick={onClickClose} className="icon-button">
              <img src={closeImg} alt="Fechar" className="icon-card" />
            </button>
          )}
        </div>
      </div>
      <div className="card-children">{children}</div>
    </div>
  );
};

export default Card;
