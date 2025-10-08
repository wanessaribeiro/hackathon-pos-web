import React, { useState } from "react";
import "./Inventory.css";
import Card from "../../components/card/Card";
import { inventoryItem, product } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import AddItemModal from "../../components/addItemModal/AddItemModal";
import DeleteItemModal from "../../components/deleteItemModal/DeleteItemModal";
import EditItemModal from "../../components/editItemModal/EditItemModal";

const itemMock: inventoryItem[] = [
  {
    amount: 1,
    id: "1233",
    prodQuota: 23,
    saleQuota: 233,
    product: {
      id: "123",
      desc: "descricao do meu produto",
      name: "produto",
      prodPrice: 23,
      salePrice: 34,
    },
  },
  {
    amount: 1,
    id: "1233",
    prodQuota: 23,
    saleQuota: 233,
    product: {
      id: "123",
      desc: "descricao do meu produto",
      name: "produto",
      prodPrice: 23,
      salePrice: 34,
    },
  },
];

const productMock: product[] = [
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto 1",
    prodPrice: 23,
    salePrice: 34,
  },
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto 2",
    prodPrice: 23,
    salePrice: 34,
  },
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto 3",
    prodPrice: 23,
    salePrice: 34,
  },
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto 4",
    prodPrice: 23,
    salePrice: 34,
  },
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto",
    prodPrice: 23,
    salePrice: 34,
  },
];

const Inventory: React.FC = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
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

  const onClickDeleteItem = () => {
    setIsModalDeleteOpen(true);
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
          {itemMock.map((item, id) => {
            return (
              <Card
                title={item.product.name}
                key={id}
                editButton
                onClickEdit={() => onClickEditItem(item)}
                deleteButton
                onClickDelete={onClickDeleteItem}
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
        products={productMock}
      />

      <EditItemModal
        isOpen={isModalEditOpen}
        item={selectedItem}
        onClose={onCloseEditItem}
      />

      <DeleteItemModal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
      />
    </>
  );
};

export default Inventory;
