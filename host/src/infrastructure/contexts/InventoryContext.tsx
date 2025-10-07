import React from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useAccountProvider } from "./AccountContext";
import { inventoryMock } from "../mocks/inventoryMock";
import PostCreateInventoryService from "../services/Inventory/PostCreateInventoryService";
import PutEditInventoryService from "../services/Inventory/PutEditInventoryService";
import DeleteInventoryService from "../services/Inventory/DeleteInventoryService";
import { inventoryItem } from "../../domain/Types";

const InventoryContext = createContext<
  | {
      inventory: inventoryItem[];
      selectedInventory: inventoryItem | undefined;
      setSelectedInventory: Dispatch<SetStateAction<inventoryItem>>;
      useGetInventory: (id: string) => inventoryItem | undefined;
      usePostInventory: (inventory: inventoryItem) => void;
      usePatchInventory: (inventory: inventoryItem) => void;
      useDeleteInventory: (id: string) => void;
    }
  | undefined
>(undefined);

export function InventoryProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { account } = useAccountProvider();

  const [inventory, setInventorys] = useState<inventoryItem[]>([]);
  const [selectedInventory, setSelectedInventory] = useState({
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

  const useGetInventory = (id: string) => {
    const inventory = inventoryMock.find((i) => i.id === id);
    return inventory;
  };

  const usePostInventory = (inventory: inventoryItem) => {
    setInventorys((prev) => {
      return [inventory, ...prev];
    });

    PostCreateInventoryService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      inventoryId: inventory.id,
      userId: account.id,
      product: inventory.product,
      amount: inventory.amount,
      prodQuota: inventory.prodQuota,
      saleQuota: inventory.saleQuota,
    });
  };

  const usePatchInventory = (inventory: inventoryItem) => {
    setInventorys((prev) => {
      const editInventory = prev.find((i) => i.id === inventory.id);
      if (editInventory) Object.assign(editInventory, inventory);
      return prev;
    });

    PutEditInventoryService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      inventoryId: inventory.id,
      userId: account.id,
      product: inventory.product,
      amount: inventory.amount,
      prodQuota: inventory.prodQuota,
      saleQuota: inventory.saleQuota,
    });
  };

  const useDeleteInventory = (id: string) => {
    setInventorys((prev) => {
      const updatedInventorys = [...prev];
      const deleteInventory = updatedInventorys.findIndex((i) => i.id === id);
      if (deleteInventory >= 0) updatedInventorys.splice(deleteInventory, 1);
      return updatedInventorys;
    });

    DeleteInventoryService({
      token: localStorage.getItem("cooFIAPToken") ?? "",
      userId: account.id,
      inventoryId: id,
    });
  };

  return (
    <InventoryContext.Provider
      value={{
        selectedInventory,
        setSelectedInventory,
        useGetInventory,
        usePostInventory,
        usePatchInventory,
        useDeleteInventory,
        inventory,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventoryProvider() {
  const context = useContext(InventoryContext);
  if (!context) throw new Error("Invalid InventoryContext");
  return context;
}
