import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { type GuideCardType } from "@/types/guideCardType";
import { THEME_STYLES } from "@/constants/guideCardThemes";

interface GuideCardProps extends ComponentPropsWithoutRef<"div"> {
  data: GuideCardType;
  children?: ReactNode;
}

export default function GuideCard({
  data,
  children,
  className = "",
  ...props
}: GuideCardProps) {
  const { category, stepNumber, subtitle, icon: Icon, theme, title } = data;
  const styles = THEME_STYLES[theme];

  return (
    <article
      className={`rounded-2xl bg-neutral-50 p-6 shadow-sm border border-neutral-200 flex flex-col gap-4 ${className}`}
      {...props}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl text-neutral-50 ${styles.iconBg}`}>
            <Icon className="w-5 h-5" />
          </div>

          <span
            className={`uppercase tracking-widest text-md font-semibold ${styles.text}`}
          >
            {category}
          </span>
        </div>

        <span className={`font-fraunces text-2xl font-medium ${styles.text}`}>
          {stepNumber}
        </span>
      </header>

      <div>
        <h3 className="font-fraunces text-2xl font-medium text-stone-900">
          {title}
        </h3>

        <p className="text-xs text-stone-500 mt-1">{subtitle}</p>
      </div>

      {children && <div className="mt-1">{children}</div>}
    </article>
  );
}
