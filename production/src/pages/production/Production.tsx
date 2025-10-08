import React, { useState } from "react";
import "./Production.css";
import Card from "../../components/card/Card";
import { inventoryItem, prodRequest, product } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import EditProductionItemModal from "../../components/editProductionItemModal/EditProductionItemModal";
import DeleteProductionItemModal from "../../components/deleteProductionItemModal/DeleteProductionItemModal";
import AddProductionItemModal from "../../components/addProductionItemModal/AddProductionItemModal";
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

const productionMock: prodRequest[] = [
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
    supplier: "fulano",
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
    supplier: "fulano",
  },
];

const Production: React.FC = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
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

  const onClickDeleteProductionItem = () => {
    setIsModalDeleteOpen(true);
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
          {productionMock.map((item, id) => {
            return (
              <Card
                title={"Pedido #" + id}
                key={id}
                editButton
                onClickEdit={() => onClickEditProductionItem(item)}
                deleteButton
                onClickDelete={onClickDeleteProductionItem}
              >
                <div>
                  <TextLabel label="ID: " text={"#" + item.id} row />
                  <TextLabel label="Fornecedor:" text={item.supplier} />
                  <TextLabel label="Status: " text={item.status} boldRow />
                  <div className="secondary-card">
                    {item.products.map((product, id) => {
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
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <AddProductionItemModal
        isOpen={isModalAddOpen}
        onClose={() => setIsModalAddOpen(false)}
      />

      <EditProductionItemModal
        isOpen={isModalEditOpen}
        prodRequest={selectedProductionItem}
        onClose={onCloseEditProductionItem}
      />

      <DeleteProductionItemModal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
      />
    </>
  );
};

export default Production;
