import { useMediaQuery } from "@/hooks/useMediaQuery";
import PaymentCard from "@/components/PaymentCard";
import WelcomeCard from "@/components/sections/WelcomeCard";

import sparkleIcon from "@/assets/icon-sparkle.svg";
import illustrationSun from "@/assets/illustration-sun.svg";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <section className="flex flex-col gap-y-4 group lg:max-w-3xl lg:mx-auto xl:max-w-4xl">
      <div className="space-y-8 lg:relative lg:space-y-0 lg:flex lg:gap-x-2">
        <WelcomeCard className="rotate-2 lg:rotate-4 lg:order-1 lg:flex-1 xl:group-hover:translate-x-24 xl:group-hover:-rotate-4 lg:transition-transform duration-300" />

        {isDesktop && (
          <img
            src={illustrationSun}
            alt="A illustration sun image"
            className="absolute right-[41%] top-[60%] size-40 -z-10 xl:group-hover:-translate-y-40 lg:transition-transform duration-300"
          />
        )}

        <PaymentCard className="-rotate-4 lg:-rotate-4 lg:flex-1 xl:group-hover:-translate-x-24 xl:group-hover:rotate-4 lg:transition-transform duration-300" />
      </div>

      <span className="hidden lg:flex items-center gap-x-2 self-center uppercase tracking-widest text-xs text-neutral-600">
        <img src={sparkleIcon} alt="" aria-hidden="true" className="w-3 h-3" />
        Hover to fan
        <img src={sparkleIcon} alt="" aria-hidden="true" className="w-3 h-3" />
      </span>
    </section>
  );
}
