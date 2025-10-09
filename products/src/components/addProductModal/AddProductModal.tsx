import "./AddProductModal.css";
import Card from "../card/Card";
import { useState } from "react";
import { product } from "../../domain/Types";

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  postProduct: (product: product) => void;
};

const AddProductModal = ({
  isOpen,
  onClose,
  postProduct,
}: AddProductModalProps) => {
  const [newProduct, setNewProduct] = useState({
    id: String(Math.floor(Math.random() * 100000)),
    desc: "",
    name: "",
    prodPrice: 0,
    salePrice: 0,
  });

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewProduct((prev) => ({ ...prev, name: value }));
  };

  const onChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewProduct((prev) => ({ ...prev, desc: value }));
  };

  const onChangeProdPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newValue = Number(value);
    setNewProduct((prev) => ({ ...prev, prodPrice: newValue }));
  };

  const onChangeSalePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newValue = Number(value);
    setNewProduct((prev) => ({ ...prev, salePrice: newValue }));
  };

  const createProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newProduct.name) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
    postProduct(newProduct);
    setNewProduct({
      id: "0",
      desc: "",
      name: "",
      prodPrice: 0,
      salePrice: 0,
    });
    onClose();
  };

  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Adicionar novo produto" closeButton onClickClose={onClose}>
          <form onSubmit={createProduct}>
            <p className="label-big">Nome do produto:</p>
            <input
              className="input"
              placeholder="Nome do produto"
              value={newProduct.name}
              onChange={onChangeName}
            />
            <p className="label-big">Descrição:</p>
            <input
              className="input"
              placeholder="Descrição curta"
              value={newProduct.desc}
              onChange={onChangeDesc}
            />
            <p className="label-big">Custo de produção:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={newProduct.prodPrice}
              onChange={onChangeProdPrice}
            />
            <p className="label-big">Preço de venda:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={newProduct.salePrice}
              onChange={onChangeSalePrice}
            />
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
