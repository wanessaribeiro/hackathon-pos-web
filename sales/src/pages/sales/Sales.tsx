import React, { useState } from "react";
import "./Sales.css";
import Card from "../../components/card/Card";
import { inventoryItem, saleItem, product } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import EditSalesItemModal from "../../components/editSalesItemModal/EditSalesItemModal";
import DeleteSalesItemModal from "../../components/deleteSalesItemModal/DeleteSalesItemModal";
import AddSalesItemModal from "../../components/addSalesItemModal/AddSalesItemModal";
import { Status } from "../../domain/Enums";

export const itemMock: inventoryItem[] = [
  {
    amount: 1,
    id: "12333",
    prodQuota: 23,
    saleQuota: 233,
    product: {
      id: "1233",
      desc: "descricao do meu produto",
      name: "produto 1",
      prodPrice: 23,
      salePrice: 34,
    },
  },
  {
    amount: 1,
    id: "12343",
    prodQuota: 23,
    saleQuota: 233,
    product: {
      id: "1235",
      desc: "descricao do meu produto",
      name: "produto 2",
      prodPrice: 23,
      salePrice: 34,
    },
  },
  {
    amount: 1,
    id: "12343",
    prodQuota: 23,
    saleQuota: 233,
    product: {
      id: "1237",
      desc: "descricao do meu produto",
      name: "produto 3",
      prodPrice: 23,
      salePrice: 34,
    },
  },
];

export const productMock: product[] = [
  {
    id: "1233",
    desc: "descricao do meu produto",
    name: "produto 1",
    prodPrice: 23,
    salePrice: 34,
  },
  {
    id: "1235",
    desc: "descricao do meu produto",
    name: "produto 2",
    prodPrice: 23,
    salePrice: 34,
  },
  {
    id: "1237",
    desc: "descricao do meu produto",
    name: "produto 3",
    prodPrice: 23,
    salePrice: 34,
  },
];

const productionMock: saleItem[] = [
  {
    id: "123456",
    products: [
      {
        amount: 1,
        id: "12333",
        prodQuota: 23,
        saleQuota: 233,
        product: {
          id: "1237",
          desc: "descricao do meu produto",
          name: "produto56",
          prodPrice: 23,
          salePrice: 34,
        },
      },
      {
        amount: 1,
        id: "12343",
        prodQuota: 23,
        saleQuota: 233,
        product: {
          id: "1233",
          desc: "descricao do meu produto",
          name: "produto12",
          prodPrice: 23,
          salePrice: 34,
        },
      },
    ],
    status: Status.active,
    buyer: "fulano",
    seller: "beltrano",
  },
  {
    id: "123676",
    products: [
      {
        amount: 1,
        id: "12333",
        prodQuota: 23,
        saleQuota: 233,
        product: {
          id: "1237",
          desc: "descricao do meu produto",
          name: "produto12",
          prodPrice: 23,
          salePrice: 34,
        },
      },
      {
        amount: 1,
        id: "12343",
        prodQuota: 23,
        saleQuota: 233,
        product: {
          id: "1233",
          desc: "descricao do meu produto",
          name: "produto34",
          prodPrice: 23,
          salePrice: 34,
        },
      },
    ],
    status: Status.active,
    buyer: "fulano",
    seller: "beltrano",
  },
];

const Sales: React.FC = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
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

  const onClickDeleteSalesItem = () => {
    setIsModalDeleteOpen(true);
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
          {productionMock.map((item, id) => {
            return (
              <Card
                title={"Pedido #" + item.id}
                key={id}
                editButton
                onClickEdit={() => onClickEditSalesItem(item)}
                deleteButton
                onClickDelete={onClickDeleteSalesItem}
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
      />

      <EditSalesItemModal
        isOpen={isModalEditOpen}
        saleRequest={selectedSalesItem}
        onClose={onCloseEditSalesItem}
      />

      <DeleteSalesItemModal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
      />
    </>
  );
};

export default Sales;
