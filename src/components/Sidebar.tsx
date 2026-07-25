import type { ComponentPropsWithoutRef } from "react";
import WeatherCard from "./WeatherCard";
import LocationDetails from "./LocationDetails";
import NavList from "./NavList";

import maisonLogo from "@/assets/logo.svg";

export default function Sidebar({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <aside
      className={`grid grid-rows-[min-content_1fr_min-content] gap-y-4 py-6 px-4 border-r border-neutral-400 ${className}`}
      {...props}
    >
      <header className="border-b border-neutral-400 pb-4">
        <img src={maisonLogo} alt="Maison Soleil Logo" />
      </header>

      <nav>
        <NavList />
      </nav>
      <footer className="flex flex-col gap-y-10">
        <WeatherCard />

        <LocationDetails />
      </footer>
    </aside>
  );
}
