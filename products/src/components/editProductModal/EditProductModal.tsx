import "./EditProductModal.css";
import Card from "../card/Card";
import { product } from "../../../../products/src/domain/Types";
import TextLabel from "../textLabel/TextLabel";
import { useEffect, useState } from "react";

type EditProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  editProduct: (product: product) => void;
  product: product;
};

const EditProductModal = ({
  isOpen,
  onClose,
  product,
  editProduct,
}: EditProductModalProps) => {
  const [selectedItem, setSelectedItem] = useState(product);

  useEffect(() => {
    setSelectedItem(product);
  }, [product]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedItem((prev) => ({ ...prev, name: value }));
  };

  const onChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedItem((prev) => ({ ...prev, desc: value }));
  };

  const onChangeProdPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newValue = Number(value);
    setSelectedItem((prev) => ({ ...prev, prodPrice: newValue }));
  };

  const onChangeSalePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newValue = Number(value);
    setSelectedItem((prev) => ({ ...prev, salePrice: newValue }));
  };

  const editItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editProduct(selectedItem);
    setSelectedItem({
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
          <form onSubmit={editItem}>
            <TextLabel label="ID: " text={"#" + selectedItem.id} row />
            <p className="label-big">Nome do produto:</p>
            <input
              className="input"
              placeholder="Nome do produto"
              value={selectedItem.name}
              onChange={onChangeName}
            />
            <p className="label-big">Descrição:</p>
            <input
              className="input"
              placeholder="Descrição curta"
              value={selectedItem.desc}
              onChange={onChangeDesc}
            />
            <p className="label-big">Custo de produção:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={selectedItem.prodPrice}
              onChange={onChangeProdPrice}
            />
            <p className="label-big">Preço de venda:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={selectedItem.salePrice}
              onChange={onChangeSalePrice}
            />
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="primary-button" type="submit">
                Editar
              </button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default EditProductModal;
