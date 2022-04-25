import { ModalDataProvider } from "../../context/modalContext";
import ModalForm from "./ModalForm";

const Modal = () => {
  return (
    <ModalDataProvider>
      <ModalForm />
    </ModalDataProvider>
  )
}

export default Modal;