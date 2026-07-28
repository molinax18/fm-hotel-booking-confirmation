import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import MenuIcon from "@/assets/icon-menu.svg?react";
import CloseMenu from "@/assets/icon-close.svg?react";
import NavbarMobile from "@/components/NavbarMobile";

import maisonLogo from "@/assets/logo.svg";

export default function MobileHeader({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`relative flex items-center justify-between overflow-visible p-4 border-b border-b-neutral-400 ${className}`}
      {...props}
    >
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
