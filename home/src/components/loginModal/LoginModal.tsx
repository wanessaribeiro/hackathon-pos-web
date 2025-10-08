import "./LoginModal.css";
import Card from "../card/Card";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <div className={isOpen ? "modal-overlay" : ""}>
      <dialog open={isOpen} className="dialog-body">
        <Card title="Entrar" closeButton onClickClose={onClose}>
          <form>
            <p className="label-home">Email:</p>
            <input className="input" placeholder="Email" />
            <p className="label-home">Senha:</p>
            <input className="input" placeholder="Senha" />
            <div className="button-group">
              <button className="tertiary-button" onClick={onClose}>
                Cancelar
              </button>
              <button className="secondary-button">Entrar</button>
            </div>
          </form>
        </Card>
      </dialog>
    </div>
  );
};

export default LoginModal;
