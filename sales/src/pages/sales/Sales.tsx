import { useState } from "react";
import "./Sales.css";
import Card from "../../components/card/Card";
import { inventoryItem, saleItem } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import EditSalesItemModal from "../../components/editSalesItemModal/EditSalesItemModal";
import AddSalesItemModal from "../../components/addSalesItemModal/AddSalesItemModal";
import { Status } from "../../domain/Enums";

type SalesProps = {
  inventory: inventoryItem[];
  sales: saleItem[];
  addItem: (item: saleItem) => void;
  editItem: (item: saleItem) => void;
  deleteItem: (id: string) => void;
};

const Sales = ({
  addItem,
  deleteItem,
  editItem,
  inventory,
  sales,
}: SalesProps) => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedSalesItem, setSelectedSalesItem] = useState<saleItem>({
    id: "0",
    status: Status.new,
    products: [],
    buyer: "",
    seller: "",
  });

  const onClickAddSalesItem = () => {
    setIsModalAddOpen(true);
  };

  const onClickEditSalesItem = (item: saleItem) => {
    setSelectedSalesItem(item);
    setIsModalEditOpen(true);
  };

  const onCloseEditSalesItem = () => {
    setSelectedSalesItem({
      id: "0",
      status: Status.new,
      products: [],
      buyer: "",
      seller: "",
    });
    setIsModalEditOpen(false);
  };

  return (
    <>
      <div className="container-sales">
        <div className="page-header-sales">
          <h1>Vendas</h1>
          <button className="primary-button" onClick={onClickAddSalesItem}>
            Adicionar pedido
          </button>
        </div>
        <div className="card-grid">
          {sales.map((item, id) => {
            return (
              <Card
                title={"Pedido #" + item.id}
                key={id}
                editButton
                onClickEdit={() => onClickEditSalesItem(item)}
                deleteButton
                onClickDelete={() => deleteItem(item.id)}
              >
                <div>
                  <TextLabel label="ID: " text={"#" + item.id} row />
                  <TextLabel label="Cliente:" text={item.buyer} />
                  <TextLabel label="Vendedor:" text={item.seller} />
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

      <AddSalesItemModal
        isOpen={isModalAddOpen}
        onClose={() => setIsModalAddOpen(false)}
        inventory={inventory}
        addItem={addItem}
      />

      <EditSalesItemModal
        isOpen={isModalEditOpen}
        saleRequest={selectedSalesItem}
        onClose={onCloseEditSalesItem}
        editItem={editItem}
      />
    </>
  );
};

export default Sales;
