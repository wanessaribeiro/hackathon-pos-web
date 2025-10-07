import React from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useAccountProvider } from "./AccountContext";
import { productionMock } from "../mocks/productionMock";
import { prodRequest } from "../../domain/Types";
import PostCreateProductionService from "../services/Production/PostCreateProductionService";
import PutEditProductionService from "../services/Production/PutEditProductionService";
import DeleteProductionService from "../services/Production/DeleteProductionService";
import { Status } from "../../domain/Enums";

const ProductionContext = createContext<
  | {
      production: prodRequest[];
      selectedProduction: prodRequest | undefined;
      setSelectedProduction: Dispatch<SetStateAction<prodRequest>>;
      useGetProduction: (id: string) => prodRequest | undefined;
      usePostProduction: (production: prodRequest) => void;
      usePatchProduction: (production: prodRequest) => void;
      useDeleteProduction: (id: string) => void;
    }
  | undefined
>(undefined);

export function ProductionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { account } = useAccountProvider();

  const [production, setProduction] = useState<prodRequest[]>([]);
  const [selectedProduction, setSelectedProduction] = useState<prodRequest>({
    id: "0",
    status: Status.new,
    products: [],
    supplier: "",
  });

  const useGetProduction = (id: string) => {
    const production = productionMock.find((i) => i.id === id);
    return production;
  };

  const usePostProduction = (production: prodRequest) => {
    setProduction((prev) => {
      return [production, ...prev];
    });

    PostCreateProductionService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      productionId: production.id,
      userId: account.id,
      products: production.products,
      status: production.status,
      supplier: production.supplier,
    });
  };

  const usePatchProduction = (production: prodRequest) => {
    setProduction((prev) => {
      const editProduction = prev.find((i) => i.id === production.id);
      if (editProduction) Object.assign(editProduction, production);
      return prev;
    });

    PutEditProductionService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      productionId: production.id,
      userId: account.id,
      status: production.status,
    });
  };

  const useDeleteProduction = (id: string) => {
    setProduction((prev) => {
      const updatedProductions = [...prev];
      const deleteProduction = updatedProductions.findIndex((i) => i.id === id);
      if (deleteProduction >= 0) updatedProductions.splice(deleteProduction, 1);
      return updatedProductions;
    });

    DeleteProductionService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      userId: account.id,
      productionId: id,
    });
  };

  return (
    <ProductionContext.Provider
      value={{
        selectedProduction,
        setSelectedProduction,
        useGetProduction,
        usePostProduction,
        usePatchProduction,
        useDeleteProduction,
        production,
      }}
    >
      {children}
    </ProductionContext.Provider>
  );
}

export function useProductionProvider() {
  const context = useContext(ProductionContext);
  if (!context) throw new Error("Invalid ProductionContext");
  return context;
}
