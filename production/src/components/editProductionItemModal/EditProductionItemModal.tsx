import "./EditProductionItemModal.css";
import Card from "../card/Card";
import TextLabel from "../textLabel/TextLabel";
import { prodRequest } from "../../domain/Types";
import Dropdown from "../dropdown/Dropdown";
import { Status } from "../../domain/Enums";
import { useEffect, useState } from "react";

type EditProductionItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  prodRequest: prodRequest;
  editItem: (item: prodRequest) => void;
};

const EditProductionItemModal = ({
  isOpen,
  onClose,
  prodRequest,
  editItem,
}: EditProductionItemModalProps) => {
  const [selectedItem, setSelectedItem] = useState(prodRequest);

  useEffect(() => {
    setSelectedItem(prodRequest);
  }, [prodRequest]);

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
        <Card
          title="Editar status de produção"
          closeButton
          onClickClose={onClose}
        >
          <form onSubmit={editStatus}>
            <TextLabel label="ID: " text={"#" + prodRequest.id} />
            <p className="label-big">Fornecedor:</p>
            <input
              className="input"
              placeholder="Fornecedor"
              value={prodRequest.supplier}
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
              {prodRequest.products.map((product, id) => {
                return (
                  <p className="table-text">
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

export default EditProductionItemModal;
