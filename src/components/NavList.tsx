import { NAV_LINKS, type NavLinksValueType } from "@/constants/navLinks";

import sparkleIcon from "@/assets/icon-sparkle.svg";

export default function NavList() {
  const selectedValue: NavLinksValueType = "Your stay";

  return (
    <ul className="flex flex-col gap-y-3">
      {NAV_LINKS.map(({ href, value, icon: Icon }, index) => (
        <li
          key={index}
          className={`flex items-center gap-x-2 py-3 px-2 rounded-md transition focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-terracotta-600 focus-within:bg-neutral-50 hover:bg-white ${selectedValue === value ? "bg-white shadow-xs text-black" : "text-neutral-700"}`}
        >
          <Icon />

          <a href={href}>{value}</a>

          {selectedValue === value && (
            <img
              src={sparkleIcon}
              alt=""
              aria-hidden="true"
              className="w-3 h-3 ml-auto"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
