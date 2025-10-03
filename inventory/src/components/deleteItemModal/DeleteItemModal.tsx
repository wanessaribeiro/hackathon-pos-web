import "./DeleteItemModal.css";
import Card from "../card/Card";

type DeleteItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DeleteItemModal = ({ isOpen, onClose }: DeleteItemModalProps) => {
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Confirmar exclusão" closeButton onClickClose={onClose}>
          <form>
            <p className="label-big">
              Você tem certeza de que gostaria de excluir esse item do
              inventario?
            </p>
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="primary-button">Deletar</button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default DeleteItemModal;
