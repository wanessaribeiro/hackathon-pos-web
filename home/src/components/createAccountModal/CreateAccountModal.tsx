import "./CreateAccountModal.css";
import Card from "../card/Card";

type CreateAccountModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateAccountModal = ({ isOpen, onClose }: CreateAccountModalProps) => {
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Criar conta" closeButton onClickClose={onClose}>
          <form>
            <p className="label-home">Nome:</p>
            <input className="input" placeholder="Nome" />
            <p className="label-home">Email:</p>
            <input className="input" placeholder="Email" />
            <p className="label-home">Senha:</p>
            <input className="input" placeholder="Senha" />
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="secondary-button">Criar</button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default CreateAccountModal;
