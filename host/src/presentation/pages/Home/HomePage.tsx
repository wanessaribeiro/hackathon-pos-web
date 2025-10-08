import Home from "home";
import { useAccountProvider } from "../../../infrastructure/contexts/AccountContext";

export default function HomePage() {
  const { loginAction, token } = useAccountProvider();

  return <Home onCreate={loginAction} onLogin={loginAction} token={token} />;
}
