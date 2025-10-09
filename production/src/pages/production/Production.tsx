import { useState } from "react";
import "./Production.css";
import Card from "../../components/card/Card";
import { inventoryItem, prodRequest } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import EditProductionItemModal from "../../components/editProductionItemModal/EditProductionItemModal";
import AddProductionItemModal from "../../components/addProductionItemModal/AddProductionItemModal";
import { Status } from "../../domain/Enums";

type ProductionProps = {
  inventory: inventoryItem[];
  production: prodRequest[];
  addItem: (item: prodRequest) => void;
  editItem: (item: prodRequest) => void;
  deleteItem: (id: string) => void;
};

const Production = ({
  addItem,
  deleteItem,
  editItem,
  inventory,
  production,
}: ProductionProps) => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedProductionItem, setSelectedProductionItem] =
    useState<prodRequest>({
      id: "0",
      status: Status.new,
      products: [],
      supplier: "",
    });

  const onClickAddProductionItem = () => {
    setIsModalAddOpen(true);
  };

  const onClickEditProductionItem = (item: prodRequest) => {
    setSelectedProductionItem(item);
    setIsModalEditOpen(true);
  };

  const onCloseEditProductionItem = () => {
    setSelectedProductionItem({
      id: "0",
      status: Status.new,
      products: [],
      supplier: "",
    });
    setIsModalEditOpen(false);
  };

  return (
    <>
      <div className="container-production">
        <div className="page-header-production">
          <h1>Produtos</h1>
          <button className="primary-button" onClick={onClickAddProductionItem}>
            Adicionar produto
          </button>
        </div>
        <div className="card-grid">
          {production.map((item, id) => {
            return (
              <Card
                title={"Pedido #" + item.id}
                key={id}
                editButton
                onClickEdit={() => onClickEditProductionItem(item)}
                deleteButton
                onClickDelete={() => deleteItem(item.id)}
              >
                <div>
                  <TextLabel label="ID: " text={"#" + item.id} row />
                  <TextLabel label="Fornecedor:" text={item.supplier} />
                  <TextLabel label="Status: " text={item.status} boldRow />
                  <div className="secondary-card">
                    {item.products.map((product, id) => {
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
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <AddProductionItemModal
        isOpen={isModalAddOpen}
        onClose={() => setIsModalAddOpen(false)}
        inventory={inventory}
        addItem={addItem}
      />

      <EditProductionItemModal
        isOpen={isModalEditOpen}
        prodRequest={selectedProductionItem}
        onClose={onCloseEditProductionItem}
        editItem={editItem}
      />
    </>
  );
};

export default Production;
