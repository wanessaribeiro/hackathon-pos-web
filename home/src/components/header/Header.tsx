import pinesImg from "./../../domain/assets/pines.png";
import logoImg from "./../../domain/assets/CooFIAP.png";
import "./Header.css";

type HeaderProps = {
  onClickLogin: () => void;
  onClickCreateAccount: () => void;
};

export default function Header({
  onClickLogin,
  onClickCreateAccount,
}: HeaderProps) {
  return (
    <div className="header">
      <div className="nav-header">
        <div className="logo-container">
          <img src={pinesImg} alt="Pinheiros" className="pine-image" />
          <img src={logoImg} alt="CooFIAP" className="logo-image" />
        </div>
      </div>

      <div className="icons">
        <button onClick={onClickLogin} className="secondary-button">
          Entrar
        </button>

        <button onClick={onClickCreateAccount} className="secondary-button">
          Criar Conta
        </button>
      </div>
    </div>
  );
}
