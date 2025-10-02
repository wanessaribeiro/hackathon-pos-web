import "./EditProductModal.css";
import Card from "../card/Card";
import { product } from "../../../../products/src/domain/Types";
import TextLabel from "../textLabel/TextLabel";

type EditProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: product;
};

const EditProductModal = ({
  isOpen,
  onClose,
  product,
}: EditProductModalProps) => {
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Adicionar novo produto" closeButton onClickClose={onClose}>
          <form>
            <TextLabel label="ID: " text={"#" + product.id} />
            <p className="label-big">Nome do produto:</p>
            <input
              className="input"
              placeholder="Nome do produto"
              value={product.name}
            />
            <p className="label-big">Descrição:</p>
            <input
              className="input"
              placeholder="Descrição curta"
              value={product.desc}
            />
            <p className="label-big">Custo de produção:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={product.prodPrice}
            />
            <p className="label-big">Preço de venda:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={product.salePrice}
            />
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

export default EditProductModal;
