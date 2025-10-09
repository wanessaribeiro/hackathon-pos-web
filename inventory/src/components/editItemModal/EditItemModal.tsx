import "./EditItemModal.css";
import Card from "../card/Card";
import { inventoryItem } from "./../../domain/Types";
import TextLabel from "../textLabel/TextLabel";
import { useEffect, useState } from "react";

type EditItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: inventoryItem;
  editItem: (item: inventoryItem) => void;
};

const EditItemModal = ({
  isOpen,
  onClose,
  item,
  editItem,
}: EditItemModalProps) => {
  const [selectedItem, setSelectedItem] = useState(item);

  useEffect(() => {
    setSelectedItem(item);
  }, [item]);

  const onChangeProdQuota = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setSelectedItem((prev) => ({ ...prev, prodQuota: Number(value) }));
    }
  };

  const onChangeSaleQuota = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setSelectedItem((prev) => ({ ...prev, saleQuota: Number(value) }));
    }
  };

  const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setSelectedItem((prev) => ({ ...prev, amount: Number(value) }));
    }
  };

  const editSelectedItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editItem(selectedItem);
    setSelectedItem({
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
        <Card title="Editar produto" closeButton onClickClose={onClose}>
          <form onSubmit={editSelectedItem}>
            <TextLabel label="ID: " text={"#" + item.id} />
            <TextLabel label="Nome do produto:" text={item.product.name} />
            <TextLabel label="Descrição:" text={item.product.desc} />
            <p className="label-big">Unidades:</p>
            <input
              className="input"
              placeholder=""
              value={selectedItem.amount}
              onChange={onChangeAmount}
            />
            <p className="label-big">Cota de produção:</p>
            <input
              className="input"
              placeholder=""
              value={selectedItem.prodQuota}
              onChange={onChangeProdQuota}
            />
            <p className="label-big">Cota de vendas:</p>
            <input
              className="input"
              placeholder=""
              value={selectedItem.saleQuota}
              onChange={onChangeSaleQuota}
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

export default EditItemModal;
