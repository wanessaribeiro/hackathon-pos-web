import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useAccountProvider } from "./AccountContext";
import { productionMock } from "../mocks/productionMock";
import { prodRequest } from "../../domain/Types";
import PostCreateProductionService from "../services/Production/PostCreateProductionService";
import PutEditProductionService from "../services/Production/PutEditProductionService";
import DeleteProductionService from "../services/Production/DeleteProductionService";
import GetProductionService from "../services/Production/GetProductionService";

const ProductionContext = createContext<
  | {
      production: prodRequest[];
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

  useEffect(() => {
    const token = localStorage.getItem("cooFIAPToken");

    if (token) {
      const productsLogged = GetProductionService();
      setProduction(productsLogged);
    }
  }, [account]);

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
