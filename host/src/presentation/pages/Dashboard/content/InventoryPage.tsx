import Inventory from "inventory";
import { useProductProvider } from "../../../../infrastructure/contexts/ProductsContext";

export default function InventoryPage() {
  const { products } = useProductProvider();
  return <Inventory />;
}
