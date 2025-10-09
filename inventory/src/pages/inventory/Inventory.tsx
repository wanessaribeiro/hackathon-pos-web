import { useState } from "react";
import "./Inventory.css";
import Card from "../../components/card/Card";
import { inventoryItem, product } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import AddItemModal from "../../components/addItemModal/AddItemModal";
import EditItemModal from "../../components/editItemModal/EditItemModal";

type InventoryProps = {
  products: product[];
  inventory: inventoryItem[];
  addItem: (item: inventoryItem) => void;
  editItem: (item: inventoryItem) => void;
  deleteItem: (id: string) => void;
};

const Inventory = ({
  products,
  inventory,
  addItem,
  editItem,
  deleteItem,
}: InventoryProps) => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<inventoryItem>({
    amount: 1,
    id: "",
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

  const onClickAddItem = () => {
    setIsModalAddOpen(true);
  };

  const onClickEditItem = (item: inventoryItem) => {
    setSelectedItem(item);
    setIsModalEditOpen(true);
  };

  const onCloseEditItem = () => {
    setSelectedItem({
      amount: 1,
      id: "",
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
    setIsModalEditOpen(false);
  };

  return (
    <>
      <div className="container-inventory">
        <div className="page-header-inventory">
          <h1>Inventario</h1>
          <button className="primary-button" onClick={onClickAddItem}>
            Adicionar itens
          </button>
        </div>
        <div className="card-grid">
          {inventory.map((item, id) => {
            return (
              <Card
                title={item.product.name}
                key={id}
                editButton
                onClickEdit={() => onClickEditItem(item)}
                deleteButton
                onClickDelete={() => deleteItem(item.id)}
              >
                <div>
                  <TextLabel label="ID: " text={"#" + item.id} row />
                  <TextLabel label="Descrição:" text={item.product.desc} />
                  <TextLabel
                    label="Unidades:"
                    text={"" + item.amount}
                    boldRow
                  />
                  <TextLabel
                    label="Meta de Produção:"
                    text={"" + item.prodQuota}
                    boldRow
                  />
                  <TextLabel
                    label="Meta de venda:"
                    text={"" + item.saleQuota}
                    boldRow
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <AddItemModal
        isOpen={isModalAddOpen}
        onClose={() => setIsModalAddOpen(false)}
        products={products}
        addItem={addItem}
      />

      <EditItemModal
        isOpen={isModalEditOpen}
        item={selectedItem}
        onClose={onCloseEditItem}
        editItem={editItem}
      />
    </>
  );
};

export default Inventory;
