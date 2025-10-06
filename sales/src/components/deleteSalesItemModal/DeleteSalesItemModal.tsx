import "./DeleteSalesItemModal.css";
import Card from "../card/Card";

type DeleteSalesItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DeleteSalesItemModal = ({
  isOpen,
  onClose,
}: DeleteSalesItemModalProps) => {
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Confirmar exclusão" closeButton onClickClose={onClose}>
          <form>
            <p className="label-big">
              Você tem certeza de que gostaria de excluir esse pedido?
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

export default DeleteSalesItemModal;
