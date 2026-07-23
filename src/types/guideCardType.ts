export type ThemeColor = "terracotta" | "blue" | "rose";

export interface GuideCardType {
  id: string;
  stepNumber: string;
  category: string;
  title: string;
  subtitle: string;
  theme: ThemeColor;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
