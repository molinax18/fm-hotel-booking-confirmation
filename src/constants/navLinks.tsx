import BedIcon from "@/assets/icon-bed.svg?react";
import HouseIcon from "@/assets/icon-house.svg?react";
import PinIcon from "@/assets/icon-pin.svg?react";
import BreakfastOutlineIcon from "@/assets/icon-breakfast-outline.svg?react";
import MailIcon from "@/assets/icon-mail.svg?react";

export const NAV_LINKS = [
  {
    href: "#",
    value: "Your stay",
    icon: BedIcon,
  },
  {
    href: "#",
    value: "The house",
    icon: HouseIcon,
  },
  {
    href: "#",
    value: "Around town",
    icon: PinIcon,
  },
  {
    href: "#",
    value: "Breakfast",
    icon: BreakfastOutlineIcon,
  },
  {
    href: "#",
    value: "Messages",
    icon: MailIcon,
  },
] as const;

export type NavLinksValueType = (typeof NAV_LINKS)[number]["value"];
