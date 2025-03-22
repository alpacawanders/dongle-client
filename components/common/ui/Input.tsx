import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export default function Input({
  children,
  className,
  props,
}: {
  children?: React.ReactNode;
  className?: string;
  props: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div
      className={clsx(
        "flex items-center rounded-xl bg-zinc-100 px-6 py-3 font-medium",
        className,
      )}
    >
      <input
        className="w-full bg-zinc-100 outline-none placeholder:text-lg placeholder:text-zinc-300"
        {...props}
      ></input>
      {children}
    </div>
  );
}
