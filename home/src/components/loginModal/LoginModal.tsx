import "./LoginModal.css";
import Card from "../card/Card";
import { useState } from "react";
import { LoginDTO } from "../../domain/dtos/account.dto";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (dto: LoginDTO) => void;
};

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const onSubmitLogin = () => {
    onLogin({ email, password });
    onClose();
  };
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Entrar" closeButton onClickClose={onClose}>
          <form onSubmit={onSubmitLogin}>
            <p className="label-home">Email:</p>
            <input
              className="input"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
              type="email"
            />
            <p className="label-home">Senha:</p>
            <input
              className="input"
              placeholder="Senha"
              value={password}
              onChange={onChangePassword}
              type="password"
            />
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="secondary-button" type="submit">
                Entrar
              </button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default LoginModal;
