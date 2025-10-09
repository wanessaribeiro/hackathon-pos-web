import "./EditSalesItemModal.css";
import Card from "../card/Card";
import TextLabel from "../textLabel/TextLabel";
import Dropdown from "../dropdown/Dropdown";
import { Status } from "../../domain/Enums";
import { useEffect, useState } from "react";
import { saleItem } from "../../domain/Types";

type EditSalesItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  saleRequest: saleItem;
  editItem: (item: saleItem) => void;
};

const EditSalesItemModal = ({
  isOpen,
  onClose,
  saleRequest,
  editItem,
}: EditSalesItemModalProps) => {
  const [selectedItem, setSelectedItem] = useState(saleRequest);

  useEffect(() => {
    setSelectedItem(saleRequest);
  }, [saleRequest]);

  const onChangeStatus = (value: string) => {
    setSelectedItem((prev) => ({ ...prev, status: value }));
  };

  const editStatus = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editItem(selectedItem);
    onClose();
  };

  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Editar status de venda" closeButton onClickClose={onClose}>
          <form onSubmit={editStatus}>
            <TextLabel label="ID: " text={"#" + saleRequest.id} />
            <p className="label-big">Cliente:</p>
            <input
              className="input"
              placeholder="Cliente"
              value={saleRequest.buyer}
              disabled
            />
            <p className="label-big">Vendedor:</p>
            <input
              className="input"
              placeholder="Vendedor"
              value={saleRequest.seller}
              disabled
            />
            <p className="label-big">Status:</p>
            <Dropdown
              options={[
                Status.active,
                Status.canceled,
                Status.done,
                Status.done,
              ]}
              placeholder="status"
              selected={selectedItem.status}
              setSelected={onChangeStatus}
            />
            <p className="label-big">Produtos:</p>
            <div className="secondary-card">
              {saleRequest.products.map((product, id) => {
                return (
                  <p className="table-text" key={id}>
                    {product.product.name +
                      " - id: #" +
                      product.product.id +
                      " - " +
                      product.amount +
                      "Un"}
                  </p>
                );
              })}
            </div>
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

export default EditSalesItemModal;
