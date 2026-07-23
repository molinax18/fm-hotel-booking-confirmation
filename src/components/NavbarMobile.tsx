import { useState } from "react";
import { NAV_LINKS, type NavLinksValueType } from "@/constants/navLinks";

export default function NavbarMobile() {
  const [selectedValue, setSelectedValue] = useState<NavLinksValueType | null>(
    null
  );
  const newSelectedValue = (value: NavLinksValueType) =>
    setSelectedValue(value);

  return (
    <nav className="absolute top-[8%] left-0 min-h-[92%] w-screen">
      <ul className="flex flex-col gap-y-3 p-6">
        {NAV_LINKS.map(({ href, value, icon: Icon }, index) => (
          <li
            onClick={() => newSelectedValue(value)}
            key={index}
            className={`flex items-center gap-x-2 py-3 px-2 rounded-md font-normal ${selectedValue === value ? "bg-white text-black" : "text-neutral-700"}`}
          >
            <Icon className="text-inherit" />
            <a href={href}>{value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
