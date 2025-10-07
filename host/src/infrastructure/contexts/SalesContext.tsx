import React from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useAccountProvider } from "./AccountContext";
import { salesMock } from "../mocks/salesMock";
import { Status } from "../../domain/Enums";
import PostCreateSaleService from "../services/Sales/PostCreateSaleService";
import PutEditSaleService from "../services/Sales/PutEditSaleService";
import DeleteSaleService from "../services/Sales/DeleteSaleService";
import { saleItem } from "../../domain/Types";

const SalesContext = createContext<
  | {
      sales: saleItem[];
      selectedSales: saleItem | undefined;
      setSelectedSales: Dispatch<SetStateAction<saleItem>>;
      useGetSales: (id: string) => saleItem | undefined;
      usePostSales: (sales: saleItem) => void;
      usePatchSales: (sales: saleItem) => void;
      useDeleteSales: (id: string) => void;
    }
  | undefined
>(undefined);

export function SalesProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { account } = useAccountProvider();

  const [sales, setSales] = useState<saleItem[]>([]);
  const [selectedSales, setSelectedSales] = useState<saleItem>({
    id: "0",
    status: Status.new,
    products: [],
    buyer: "",
    seller: "",
  });

  const useGetSales = (id: string) => {
    const sales = salesMock.find((i) => i.id === id);
    return sales;
  };

  const usePostSales = (sales: saleItem) => {
    setSales((prev) => {
      return [sales, ...prev];
    });

    PostCreateSaleService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      salesId: sales.id,
      userId: account.id,
      products: sales.products,
      status: sales.status,
      seller: sales.seller,
      buyer: sales.buyer,
    });
  };

  const usePatchSales = (sales: saleItem) => {
    setSales((prev) => {
      const editSales = prev.find((i) => i.id === sales.id);
      if (editSales) Object.assign(editSales, sales);
      return prev;
    });

    PutEditSaleService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      salesId: sales.id,
      userId: account.id,
      status: sales.status,
    });
  };

  const useDeleteSales = (id: string) => {
    setSales((prev) => {
      const updatedSaless = [...prev];
      const deleteSales = updatedSaless.findIndex((i) => i.id === id);
      if (deleteSales >= 0) updatedSaless.splice(deleteSales, 1);
      return updatedSaless;
    });

    DeleteSaleService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      userId: account.id,
      salesId: id,
    });
  };

  return (
    <SalesContext.Provider
      value={{
        selectedSales,
        setSelectedSales,
        useGetSales,
        usePostSales,
        usePatchSales,
        useDeleteSales,
        sales,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}

export function useSalesProvider() {
  const context = useContext(SalesContext);
  if (!context) throw new Error("Invalid SalesContext");
  return context;
}
