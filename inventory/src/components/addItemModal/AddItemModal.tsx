import "./AddItemModal.css";
import Card from "../card/Card";
import Dropdown from "../dropdown/Dropdown";
import { inventoryItem, product } from "../../domain/Types";
import { useState } from "react";

type AddItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  products: product[];
  addItem: (item: inventoryItem) => void;
};

const AddItemModal = ({
  isOpen,
  onClose,
  products,
  addItem,
}: AddItemModalProps) => {
  const [newItem, setNewItem] = useState({
    amount: 1,
    id: String(Math.random() * 100000),
    prodQuota: 0,
    saleQuota: 0,
    product: {
      id: "0",
      desc: "",
      name: "",
      prodPrice: 0,
      salePrice: 0,
    },
  });

  const onChangeProduct = (value: string) => {
    setNewItem((prev) => {
      const newProduct = products.find((i) => i.name === value);
      if (!newProduct) return prev;
      return {
        ...prev,
        product: newProduct,
      };
    });
  };

  const onChangeProdQuota = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setNewItem((prev) => ({ ...prev, prodQuota: Number(value) }));
    }
  };

  const onChangeSaleQuota = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setNewItem((prev) => ({ ...prev, saleQuota: Number(value) }));
    }
  };

  const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setNewItem((prev) => ({ ...prev, amount: Number(value) }));
    }
  };

  const createItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newItem.product || newItem.amount === 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
    addItem(newItem);
    setNewItem({
      amount: 1,
      id: "",
      prodQuota: 23,
      saleQuota: 23,
      product: {
        id: "0",
        desc: "",
        name: "",
        prodPrice: 0,
        salePrice: 0,
      },
    });
    onClose();
  };
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Adicionar novo produto" closeButton onClickClose={onClose}>
          <form onSubmit={createItem}>
            <p className="label-big">Produto:</p>
            <Dropdown
              options={products.map((item) => {
                return item.name;
              })}
              selected={newItem.product.name}
              setSelected={onChangeProduct}
              placeholder="Selecione um produto"
            />
            <p className="label-big">Unidades:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={newItem.amount}
              onChange={onChangeAmount}
            />
            <p className="label-big">Cota de produção:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={newItem.prodQuota}
              onChange={onChangeProdQuota}
            />
            <p className="label-big">Cota de venda:</p>
            <input
              className="input"
              type="number"
              placeholder="0"
              value={newItem.saleQuota}
              onChange={onChangeSaleQuota}
            />
            <p className="desc">O ID do produto será gerado automaticamente.</p>
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

export default AddItemModal;
