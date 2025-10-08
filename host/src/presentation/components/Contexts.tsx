import { AccountProvider } from "../../infrastructure/contexts/AccountContext";
import { InventoryProvider } from "../../infrastructure/contexts/InventoryContext";
import { ProductionProvider } from "../../infrastructure/contexts/ProductionContext";
import { ProductProvider } from "../../infrastructure/contexts/ProductsContext";
import { SalesProvider } from "../../infrastructure/contexts/SalesContext";

export default function Contexts({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AccountProvider>
      <ProductProvider>
        <InventoryProvider>
          <ProductionProvider>
            <SalesProvider>{children}</SalesProvider>
          </ProductionProvider>
        </InventoryProvider>
      </ProductProvider>
    </AccountProvider>
  );
}
