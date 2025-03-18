import Logo from "@/assets/images/dongleLogo.svg";
import Link from "next/link";
import NavItem from "@/components/common/layout/NavItem";
export default function Header() {
  const items = [
    { name: "공지사항", href: "/" },
    { name: "활동보고서", href: "/" },
  ];
  return (
    <header className="bg-white border-zinc-100 fixed left-0 top-0 z-50 h-20 w-full border-b md:px-0">
      <div className="m-[0_auto] flex h-full max-w-[960px] flex-row items-center justify-between">
        <Link href="/" className="h-7 w-20">
          <Logo />
        </Link>
        <nav className="text-zinc-400 flex flex-row gap-3">
          {items.map((item, i) => (
            <NavItem key={i} href={item.href}>
              {item.name}
            </NavItem>
          ))}
        </nav>
      </div>
    </header>
  );
}
