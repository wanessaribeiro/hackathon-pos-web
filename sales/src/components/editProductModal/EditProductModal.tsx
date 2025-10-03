import "./EditProductModal.css";
import Card from "../card/Card";
import { product } from "../../../../products/src/domain/Types";
import TextLabel from "../textLabel/TextLabel";
import { useState } from "react";

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
  const [selectedProduct, setSelectedProduct] = useState(product);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedProduct((prev) => ({ ...prev, name: value }));
  };

  const onChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedProduct((prev) => ({ ...prev, desc: value }));
  };

  const onChangeProdPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setSelectedProduct((prev) => ({ ...prev, prodPrice: Number(value) }));
    }
  };

  const onChangeSalePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setSelectedProduct((prev) => ({ ...prev, salePrice: Number(value) }));
    }
  };

  const editProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSelectedProduct({
      id: "0",
      desc: "",
      name: "",
      prodPrice: 0,
      salePrice: 0,
    });
  };
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Adicionar novo produto" closeButton onClickClose={onClose}>
          <form onSubmit={editProduct}>
            <TextLabel label="ID: " text={"#" + product.id} />
            <p className="label-big">Nome do produto:</p>
            <input
              className="input"
              placeholder="Nome do produto"
              value={selectedProduct.name}
              onChange={onChangeName}
            />
            <p className="label-big">Descrição:</p>
            <input
              className="input"
              placeholder="Descrição curta"
              value={selectedProduct.desc}
              onChange={onChangeDesc}
            />
            <p className="label-big">Custo de produção:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={selectedProduct.prodPrice}
              onChange={onChangeProdPrice}
            />
            <p className="label-big">Preço de venda:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={selectedProduct.salePrice}
              onChange={onChangeSalePrice}
            />
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="primary-button" type="submit">
                Adicionar
              </button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default EditProductModal;
