import Products from "products";
import { useProductProvider } from "../../../../infrastructure/contexts/ProductsContext";

export default function ProductsPage() {
  const { products, usePostProduct, useDeleteProduct, setSelectedProduct } =
    useProductProvider();
  return <Products products={products} postProduct={usePostProduct} />;
}
