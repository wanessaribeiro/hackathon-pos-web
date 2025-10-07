import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Dashboard/content/ProductsPage";
import InventoryPage from "./pages/Dashboard/content/InventoryPage";
import ProductionPage from "./pages/Dashboard/content/ProductionPage";
import SalesPage from "./pages/Dashboard/content/SalesPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/" element={<DashboardPage />}>
          <Route path="products" element={<ProductsPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="production" element={<ProductionPage />} />
          <Route path="sales" element={<SalesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
