import Inventory from "inventory";
import { useProductProvider } from "../../../../infrastructure/contexts/ProductsContext";
import { useInventoryProvider } from "../../../../infrastructure/contexts/InventoryContext";

export default function InventoryPage() {
  const { inventory, usePostInventory, usePatchInventory, useDeleteInventory } =
    useInventoryProvider();
  const { products } = useProductProvider();
  return (
    <Inventory
      products={products}
      inventory={inventory}
      addItem={usePostInventory}
      editItem={usePatchInventory}
      deleteItem={useDeleteInventory}
    />
  );
}
