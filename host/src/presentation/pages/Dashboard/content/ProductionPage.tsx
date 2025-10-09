import Production from "production";
import { useInventoryProvider } from "../../../../infrastructure/contexts/InventoryContext";
import { useProductionProvider } from "../../../../infrastructure/contexts/ProductionContext";

export default function ProductionPage() {
  const { inventory } = useInventoryProvider();
  const {
    production,
    useDeleteProduction,
    usePatchProduction,
    usePostProduction,
  } = useProductionProvider();
  return (
    <Production
      inventory={inventory}
      production={production}
      addItem={usePostProduction}
      editItem={usePatchProduction}
      deleteItem={useDeleteProduction}
    />
  );
}
