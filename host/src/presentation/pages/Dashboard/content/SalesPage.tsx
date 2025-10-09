import Sales from "sales";
import { useInventoryProvider } from "../../../../infrastructure/contexts/InventoryContext";
import { useSalesProvider } from "../../../../infrastructure/contexts/SalesContext";

export default function SalesPage() {
  const { inventory } = useInventoryProvider();
  const { sales, useDeleteSales, usePatchSales, usePostSales } =
    useSalesProvider();
  return (
    <Sales
      inventory={inventory}
      sales={sales}
      addItem={usePostSales}
      editItem={usePatchSales}
      deleteItem={useDeleteSales}
    />
  );
}
