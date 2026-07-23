import { useState } from "react";
import MenuIcon from "@/assets/icon-menu.svg?react";
import CloseMenu from "@/assets/icon-close.svg?react";
import NavbarMobile from "./NavbarMobile";

import maisonLogo from "@/assets/logo.svg";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex items-center justify-between p-4 border-b border-b-neutral-400">
      <img src={maisonLogo} alt="Maison Soleil Logo" />

      <button
        className="py-0.5 px-1 border border-neutral-400"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        {isOpen ? <CloseMenu /> : <MenuIcon />}
      </button>

      {isOpen && <NavbarMobile />}
    </header>
  );
}
