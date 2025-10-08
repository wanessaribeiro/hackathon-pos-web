import { Outlet, useNavigate } from "react-router";
import NavBar from "navbar/navigation-bar";
import Header from "navbar/header-bar";
import { useAccountProvider } from "../../../infrastructure/contexts/AccountContext";
import { useEffect } from "react";

export default function DashboardPage() {
  const { account, token, logOut } = useAccountProvider();

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  return (
    <div>
      <Header
        account={{
          id: account.id,
          name: account.name,
          email: account.email,
          password: "",
        }}
        onClickLogout={logOut}
        onClickAccount={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="nav-dash-body">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
