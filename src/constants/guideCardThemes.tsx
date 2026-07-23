import { type ThemeColor } from "@/types/guideCardType";

export const THEME_STYLES: Record<
  ThemeColor,
  { iconBg: string; text: string }
> = {
  terracotta: {
    iconBg: "bg-color-terracotta-700",
    text: "text-terracotta-700",
  },
  blue: {
    iconBg: "bg-blue-500",
    text: "text-blue-500",
  },
  rose: {
    iconBg: "bg-rose-500",
    text: "text-rose-500",
  },
};
