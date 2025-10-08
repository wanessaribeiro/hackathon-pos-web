import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Dashboard/content/ProductsPage";
import InventoryPage from "./pages/Dashboard/content/InventoryPage";
import ProductionPage from "./pages/Dashboard/content/ProductionPage";
import SalesPage from "./pages/Dashboard/content/SalesPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Contexts from "./components/Contexts";

const App = () => {
  return (
    <BrowserRouter>
      <Contexts>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<ProductsPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="production" element={<ProductionPage />} />
            <Route path="sales" element={<SalesPage />} />
          </Route>
        </Routes>
      </Contexts>
    </BrowserRouter>
  );
};

export default App;
