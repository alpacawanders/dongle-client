import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (isOpen === false) return null;

  return createPortal(
    <ModalContainer onClose={onClose}>{children}</ModalContainer>,
    document.body,
  );
}
