import type { ComponentPropsWithoutRef } from "react";

import sun from "@/assets/icon-sun.svg";

export default function WelcomeCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <article
      className={`flex flex-col gap-y-4 p-6 rounded-2xl bg-linear-to-bl from-terracotta-400 to-terracotta-700 text-neutral-400 ${className ?? ""}`}
      {...props}
    >
      <header className="flex justify-between pt-6 border-t border-dashed border-white/25">
        <span className="uppercase tracking-widest text-xs">Welcome card</span>

        <img src={sun} alt="" aria-hidden="true" />
      </header>

      <h2 className="font-fraunces text-xl text-sun-200 leading-10">
        A note from your host, <br />
        <span className="text-neutral-50 text-4xl italic">Margaux.</span>
      </h2>

      <p>
        We're so glad you're coming. The shutters will be open, the lemonade
        cold, and the cat - Poivre - pretending not to notice you.
      </p>

      <footer className="flex flex-col gap-y-2 mt-16">
        <span className="uppercase tracking-widest text-xs">Room</span>

        <h3 className="font-fraunces text-xl text-neutral-50">La Garrigue</h3>
      </footer>
    </article>
  );
}
