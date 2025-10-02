import { ReactElement } from "react";
import editImg from "./../../domain/assests/edit.png";
import trashImg from "./../../domain/assests/trash.png";
import closeImg from "./../../domain/assests/close.png";
import "./Card.css";

type CardProps = {
  title: string;
  editButton?: boolean;
  deleteButton?: boolean;
  closeButton?: boolean;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onClickClose?: () => void;
  children: ReactElement;
};

//TODO: colocar link
const Card = ({
  title,
  editButton,
  deleteButton,
  onClickEdit,
  onClickDelete,
  closeButton,
  onClickClose,
  children,
}: CardProps) => {
  return (
    <div className="card-body">
      <div className="title-card">
        <h3 className="title">{title}</h3>
        <div>
          {editButton && (
            <button onClick={onClickEdit} className="icon-button">
              <img src={editImg} alt="Editar" />
            </button>
          )}
          {deleteButton && (
            <button onClick={onClickDelete} className="icon-button">
              <img src={trashImg} alt="Apagar" />
            </button>
          )}
          {closeButton && (
            <button onClick={onClickClose} className="icon-button">
              <img src={closeImg} alt="Fechar" />
            </button>
          )}
        </div>
      </div>
      <div className="card-children">{children}</div>
    </div>
  );
};

export default Card;
