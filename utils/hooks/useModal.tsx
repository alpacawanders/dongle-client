import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return { isOpen, setIsOpen, toggleModal, openModal, closeModal };
}
