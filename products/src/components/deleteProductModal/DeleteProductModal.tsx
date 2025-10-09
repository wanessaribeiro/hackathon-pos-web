import "./DeleteProductModal.css";
import Card from "../card/Card";

type DeleteProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  deleteProduct: (id: string) => void;
  id: string;
};

const DeleteProductModal = ({
  isOpen,
  onClose,
  deleteProduct,
  id,
}: DeleteProductModalProps) => {
  console.log(id);
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Confirmar exclusão" closeButton onClickClose={onClose}>
          <form onSubmit={() => deleteProduct(id)}>
            <p className="label-big">
              Você tem certeza de que gostaria de excluir esse produto?
            </p>
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="primary-button" type="submit">
                Deletar
              </button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default DeleteProductModal;
