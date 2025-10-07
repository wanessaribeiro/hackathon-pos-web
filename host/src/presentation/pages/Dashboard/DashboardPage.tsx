import { Outlet } from "react-router-dom";
import NavBar from "navigation/navbar";

export default function DashboardPage() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
