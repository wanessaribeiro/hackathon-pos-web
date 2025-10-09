import "./AddProductionItemModal.css";
import Card from "../card/Card";
import TextLabel from "../textLabel/TextLabel";
import { prodRequest } from "../../domain/Types";
import Dropdown from "../dropdown/Dropdown";
import { Status } from "../../domain/Enums";
import { useState } from "react";
import { itemMock, productMock } from "../../pages/production/Production";

type AddProductionItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddProductionItemModal = ({
  isOpen,
  onClose,
}: AddProductionItemModalProps) => {
  const [newItem, setNewItem] = useState<prodRequest>({
    id: "0",
    status: Status.new,
    products: [],
    supplier: "",
  });

  const onChangeProducts = (value: string) => {
    setNewItem((prev) => {
      const newProduct = itemMock.find((i) => i.product.name === value);
      if (!newProduct) return prev;

      const products = [...prev.products];
      products.push(newProduct);

      return {
        ...prev,
        products,
      };
    });
  };

  const onChangeSuppler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setNewItem((prev) => ({ ...prev, supplier: value }));
  };

  const onChangeAmount = (newAmount: string, id: string) => {
    if (!isNaN(Number(newAmount))) {
      setNewItem((prev) => {
        const productAmount = newItem.products.find((i) => i.product.id === id);
        if (!productAmount) return prev;

        const products = [...prev.products];
        const index = products.findIndex((i) => i.product.id === id);
        products[index].amount = Number(newAmount);
        return {
          ...prev,
          products,
        };
      });
    }
  };

  const createItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newItem.products || newItem.supplier) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
    setNewItem({
      id: "0",
      status: Status.new,
      products: [],
      supplier: "",
    });
  };

  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card
          title="Editar status de produção"
          closeButton
          onClickClose={onClose}
        >
          <form onSubmit={createItem}>
            <p className="label-big">Fornecedor:</p>
            <input
              className="input"
              placeholder="Fornecedor"
              value={newItem.supplier}
              onChange={onChangeSuppler}
            />
            <p className="label-big">Status:</p>
            <input className="input" value={Status.new} disabled />
            <p className="label-big">Produtos:</p>
            <Dropdown
              options={productMock.map((product, id) => {
                return product.name;
              })}
              placeholder="selecione um produto"
              selected=""
              setSelected={onChangeProducts}
            />
            <div className="secondary-card">
              {newItem.products.map((prod, id) => {
                return (
                  <div className="text-row" key={id}>
                    <p className="table-text">
                      {prod.product.name +
                        " - id: #" +
                        prod.product.id +
                        " - Qtd:"}
                    </p>
                    <input
                      className="mini-input"
                      type="number"
                      onChange={(event) =>
                        onChangeAmount(event.target.value, prod.product.id)
                      }
                    />
                    <p className="table-text">Un</p>
                  </div>
                );
              })}
            </div>
            <p className="desc">O ID do pedido será gerado automaticamente.</p>
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

export default AddProductionItemModal;
