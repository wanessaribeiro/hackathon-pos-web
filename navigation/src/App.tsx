import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="content">
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
      <NavBar />
    </div>
  );
};

export default App;
