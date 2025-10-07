import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { PostLoginAccountDTO } from "../../domain/dtos/account.dto";
import GetAccountService from "../services/Account/GetAccountService";
import PostLoginAccountService from "../services/Account/PostLoginAccountService";
import { user } from "../../domain/Types";

const AccountContext = createContext<
  | {
      token: string;
      loginAction: ({ email, password }: PostLoginAccountDTO) => void;
      logOut: () => void;
      account: user;
    }
  | undefined
>(undefined);

export function AccountProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [account, setAccount] = useState({
    id: "0",
    email: "",
    type: "",
    name: "",
  });
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState("");

  const fetchAccount = async (token: string) => {
    const responseUser = await GetAccountService({
      token: token,
    });

    setAccount({
      id: responseUser.id,
      email: responseUser.email,
      type: responseUser.type,
      name: responseUser.name,
    });
    setToken(token);
  };

  useEffect(() => {
    const token = localStorage.getItem("cooFIAPToken");

    if (token) fetchAccount(token);
  }, []);

  const loginAction = async ({ email, password }: PostLoginAccountDTO) => {
    const response = await PostLoginAccountService({ email, password });
    if (response.message === "Credenciais inválidas") {
      alert("Email ou senha incorretos, tente novamente.");
      return;
    }
    localStorage.setItem("cooFIAPToken", response.token);

    fetchAccount(response.token);
    return;
  };

  const logOut = () => {
    setAccount({
      id: "0",
      email: "",
      type: "",
      name: "",
    });
    setToken("");
    localStorage.removeItem("cooFIAPToken");
  };

  return (
    <AccountContext.Provider
      value={{
        token,
        loginAction,
        logOut,
        account,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountProvider() {
  const context = useContext(AccountContext);
  if (!context) throw new Error("Invalid AccountContext");
  return context;
}
