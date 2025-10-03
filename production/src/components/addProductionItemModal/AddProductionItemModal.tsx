import "./AddProductModal.css";
import Card from "../card/Card";

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddProductModal = ({ isOpen, onClose }: AddProductModalProps) => {
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Adicionar novo produto" closeButton onClickClose={onClose}>
          <form>
            <p className="label-big">Nome do produto:</p>
            <input className="input" placeholder="Nome do produto" />
            <p className="label-big">Descrição:</p>
            <input className="input" placeholder="Descrição curta" />
            <p className="label-big">Custo de produção:</p>
            <input className="input" type="number" placeholder="0" />
            <p className="label-big">Preço de venda:</p>
            <input className="input" type="number" placeholder="0" />
            <p className="desc">O ID do produto será gerado automaticamente.</p>
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="primary-button">Adicionar</button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default AddProductModal;
