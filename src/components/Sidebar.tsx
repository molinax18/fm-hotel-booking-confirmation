import { useState, type ComponentPropsWithoutRef } from "react";
import { NAV_LINKS, type NavLinksValueType } from "@/constants/navLinks";
import WeatherCard from "./WeatherCard";
import LocationDetails from "./LocationDetails";

import maisonLogo from "@/assets/logo.svg";

export default function Sidebar({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const [selectedValue, setSelectedValue] = useState<NavLinksValueType | null>(
    null
  );
  const newSelectedValue = (value: NavLinksValueType) =>
    setSelectedValue(value);

  return (
    <aside
      className={`grid grid-rows-[min-content_1fr_min-content] gap-y-4 py-6 px-4 border-r border-neutral-400 ${className ?? ""}`}
      {...props}
    >
      <header className="border-b border-neutral-400 pb-4">
        <img src={maisonLogo} alt="Maison Soleil Logo" />
      </header>

      <nav>
        <ul className="flex flex-col gap-y-3">
          {NAV_LINKS.map(({ href, value, icon: Icon }, index) => (
            <li
              key={index}
              className={`flex items-center gap-x-2 py-3 px-2 rounded-md font-normal ${selectedValue === value ? "bg-neutral-50 text-black outline-2 outline-offset-2 outline-terracotta-600" : "text-neutral-700"}`}
            >
              <Icon className="text-inherit" />

              <a href={href} onClick={() => newSelectedValue(value)}>
                {value}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="flex flex-col gap-y-10">
        <WeatherCard />

        <LocationDetails />
      </footer>
    </aside>
  );
}
