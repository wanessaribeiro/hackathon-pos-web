import React, { useState } from "react";
import "./Products.css";
import Card from "../../components/card/Card";
import { product } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import AddProductModal from "../../components/addProductModal/AddProductModal";
import DeleteProductModal from "../../components/deleteProductModal/DeleteProductModal";
import EditProductModal from "../../components/editProductModal/EditProductModal";

const productMock: product[] = [
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto",
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
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto",
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
  {
    id: "123",
    desc: "descricao do meu produto",
    name: "produto",
    prodPrice: 23,
    salePrice: 34,
  },
];

const Products: React.FC = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<product>({
    id: "0",
    desc: "",
    name: "",
    prodPrice: 0,
    salePrice: 0,
  });

  const onClickAddProduct = () => {
    setIsModalAddOpen(true);
  };

  const onClickEditProduct = (item: product) => {
    setSelectedProduct(item);
    setIsModalEditOpen(true);
  };

  const onCloseEditProduct = () => {
    setSelectedProduct({
      id: "0",
      desc: "",
      name: "",
      prodPrice: 0,
      salePrice: 0,
    });
    setIsModalEditOpen(false);
  };

  const onClickDeleteProduct = () => {
    setIsModalDeleteOpen(true);
  };

  return (
    <>
      <div className="container-products">
        <div className="page-header-products">
          <h1>Produtos</h1>
          <button className="primary-button" onClick={onClickAddProduct}>
            Adicionar produto
          </button>
        </div>
        <div className="card-grid">
          {productMock.map((item, id) => {
            return (
              <Card
                title={item.name}
                key={id}
                editButton
                onClickEdit={() => onClickEditProduct(item)}
                deleteButton
                onClickDelete={onClickDeleteProduct}
              >
                <div>
                  <TextLabel label="ID: " text={"#" + item.id} row />
                  <TextLabel label="Descrição:" text={item.desc} />
                  <TextLabel
                    label="Custo de Produção:"
                    text={"R$" + item.prodPrice}
                    boldRow
                  />
                  <TextLabel
                    label="Preço de venda:"
                    text={"R$" + item.salePrice}
                    boldRow
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <AddProductModal
        isOpen={isModalAddOpen}
        onClose={() => setIsModalAddOpen(false)}
      />

      <EditProductModal
        isOpen={isModalEditOpen}
        product={selectedProduct}
        onClose={onCloseEditProduct}
      />

      <DeleteProductModal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
      />
    </>
  );
};

export default Products;
