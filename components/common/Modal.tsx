import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-300/50"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-end rounded-xl border border-zinc-300 bg-white p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="text-xl text-zinc-300">
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
