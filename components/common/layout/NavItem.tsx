import Link from "next/link";

export default function NavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className="text-zinc-400 md:hover:bg-zinc-100 flex h-16 w-16 items-center justify-center rounded-lg text-sm font-medium transition-all md:w-28 md:text-base"
      href={href}
    >
      {children}
    </Link>
  );
}
