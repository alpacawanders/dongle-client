"use client";

import { useRouter } from "next/navigation";

export default function BackSpaceButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <button
      className="h-14 w-36 rounded-xl bg-zinc-100 p-3 font-semibold text-zinc-400"
      onClick={() => router.back()}
    >
      {children}
    </button>
  );
}
