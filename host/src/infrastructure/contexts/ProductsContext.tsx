import React from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { product } from "../../domain/Types";
import { useAccountProvider } from "./AccountContext";
import { productsMock } from "../mocks/productsMock";
import PostCreateProductService from "../services/Products/PostCreateProductService";
import DeleteProductService from "../services/Products/DeleteProductService";
import PutEditProductService from "../services/Products/PutEditProductsService";

const ProductsContext = createContext<
  | {
      products: product[];
      selectedProduct: product | undefined;
      setSelectedProduct: Dispatch<SetStateAction<product>>;
      useGetProduct: (id: string) => product | undefined;
      usePostProduct: (product: product) => void;
      usePatchProduct: (product: product) => void;
      useDeleteProduct: (id: string) => void;
    }
  | undefined
>(undefined);

export function ProductProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { account } = useAccountProvider();

  const [products, setProducts] = useState<product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState({
    id: "0",
    desc: "",
    name: "",
    prodPrice: 0,
    salePrice: 0,
  });

  const useGetProduct = (id: string) => {
    const product = productsMock.find((i) => i.id === id);
    return product;
  };

  const usePostProduct = (product: product) => {
    setProducts((prev) => {
      return [product, ...prev];
    });

    PostCreateProductService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      productId: product.id,
      userId: account.id,
      desc: product.desc,
      name: product.name,
      prodPrice: product.prodPrice,
      salePrice: product.salePrice,
    });
  };

  const usePatchProduct = (product: product) => {
    setProducts((prev) => {
      const editProduct = prev.find((i) => i.id === product.id);
      if (editProduct) Object.assign(editProduct, product);
      return prev;
    });

    PutEditProductService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      productId: product.id,
      userId: account.id,
      desc: product.desc,
      name: product.name,
      prodPrice: product.prodPrice,
      salePrice: product.salePrice,
    });
  };

  const useDeleteProduct = (id: string) => {
    setProducts((prev) => {
      const updatedProducts = [...prev];
      const deleteProduct = updatedProducts.findIndex((i) => i.id === id);
      if (deleteProduct >= 0) updatedProducts.splice(deleteProduct, 1);
      return updatedProducts;
    });

    DeleteProductService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      userId: account.id,
      productId: id,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        useGetProduct,
        usePostProduct,
        usePatchProduct,
        useDeleteProduct,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductProvider() {
  const context = useContext(ProductsContext);
  if (!context) throw new Error("Invalid ProductContext");
  return context;
}
