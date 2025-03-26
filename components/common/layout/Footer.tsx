import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 bottom-0 flex h-[120px] w-full items-center justify-center">
      <div className="text-zinc-300 flex h-full w-[min(960px,100%)] flex-col items-start justify-center text-[12px]">
        <p>Copyright by alpacawanders.</p>
        <p>All Right Reserved.</p>
        <p>
          Contact:{" "}
          <Link href="mailto:alpacawanders@gmail.com">
            alpacawanders@gmail.com
          </Link>
        </p>
      </div>
      <Link href="/" className="text-zinc-500 text-xs font-semibold">
        개인정보 처리방침
      </Link>
    </footer>
  );
}
