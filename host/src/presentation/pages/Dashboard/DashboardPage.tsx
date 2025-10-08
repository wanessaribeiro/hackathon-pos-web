import { Outlet } from "react-router";
import NavBar from "navbar/navigation-bar";
import Header from "navbar/header-bar";
import ProductsPage from "./content/ProductsPage";

export default function DashboardPage() {
  return (
    <div>
      <Header
        account={{
          id: "",
          name: "teste",
          email: "",
          password: "",
        }}
        onClickLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
        onClickAccount={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="nav-dash-body">
        <NavBar />
        <ProductsPage />
      </div>
    </div>
  );
}
