import { Logo } from "@/components/ui/Logo";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return <HeaderNav logo={<Logo variante="entete" className="h-11 w-auto sm:h-12" />} />;
}
