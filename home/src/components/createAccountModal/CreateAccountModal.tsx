import "./CreateAccountModal.css";
import Card from "../card/Card";
import { useState } from "react";
import { LoginDTO } from "../../domain/dtos/account.dto";

type CreateAccountModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (dto: LoginDTO) => void;
};

const CreateAccountModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateAccountModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const onSubmiCreate = () => {
    onCreate({ email, password });
    onClose();
  };

  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Criar conta" closeButton onClickClose={onClose}>
          <form onSubmit={onSubmiCreate}>
            <p className="label-home">Nome:</p>
            <input
              className="input"
              placeholder="Nome"
              value={name}
              onChange={onChangeName}
            />
            <p className="label-home">Email:</p>
            <input
              className="input"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
            <p className="label-home">Senha:</p>
            <input
              className="input"
              placeholder="Senha"
              value={password}
              onChange={onChangePassword}
            />
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="secondary-button" type="submit">
                Criar
              </button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default CreateAccountModal;
