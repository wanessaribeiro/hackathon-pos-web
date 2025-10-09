import { useState } from "react";
import "./Products.css";
import Card from "../../components/card/Card";
import { product } from "../../domain/Types";
import TextLabel from "../../components/textLabel/TextLabel";
import AddProductModal from "../../components/addProductModal/AddProductModal";
import DeleteProductModal from "../../components/deleteProductModal/DeleteProductModal";
import EditProductModal from "../../components/editProductModal/EditProductModal";

type ProductsProps = {
  products: product[];
  postProduct: (product: product) => void;
  editProduct: (product: product) => void;
  deleteProduct: (id: string) => void;
};

const Products = ({
  products,
  postProduct,
  editProduct,
  deleteProduct,
}: ProductsProps) => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [itemId, setItemId] = useState("0");
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

  const onClickDeleteProduct = (id: string) => {
    setItemId(id);
    setIsModalDeleteOpen(true);
  };

  const onCloseDeleteProduct = () => {};

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
          {products.map((item, id) => {
            return (
              <Card
                title={item.name}
                key={id}
                editButton
                onClickEdit={() => onClickEditProduct(item)}
                deleteButton
                onClickDelete={() => onClickDeleteProduct(item.id)}
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
        postProduct={postProduct}
      />

      <EditProductModal
        isOpen={isModalEditOpen}
        product={selectedProduct}
        onClose={onCloseEditProduct}
        editProduct={editProduct}
      />

      <DeleteProductModal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        deleteProduct={deleteProduct}
        id={itemId}
      />
    </>
  );
};

export default Products;
