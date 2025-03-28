"use client";

import { useEffect } from "react";

export default function ModalContainer({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-300/50"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-end overflow-auto rounded-xl border border-zinc-300 bg-white p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="text-xl text-zinc-300">
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
