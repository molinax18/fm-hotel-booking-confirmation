import type { ComponentPropsWithoutRef } from "react";

import barCode from "@/assets/icon-barcode.svg";

export default function PaymentCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <article
      className={`flex flex-col gap-y-6 p-6 rounded-2xl bg-white ${className ?? ""}`}
      {...props}
    >
      <header className="flex justify-between">
        <div>
          <span className="uppercase tracking-widest text-xs">Receipt</span>

          <h3 className="font-fraunces text-xl">Your stay</h3>
        </div>

        <p className="uppercase tracking-widest text-xs">
          № MS-2026 <br />
          0421-AH
        </p>
      </header>

      <hr className="text-neutral-400" />

      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2 items-center">
          <span className="uppercase tracking-widest text-xs">Check in</span>

          <strong className="font-fraunces text-3xl font-medium">25 Apr</strong>

          <p className="text-sm">Saturday · 15:00</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
          <span className="uppercase tracking-widest text-xs">Check in</span>

          <strong className="font-fraunces text-3xl font-medium">29 Apr</strong>

          <p className="text-sm">Wednesday · 11:00</p>
        </div>
      </section>

      <hr className="text-neutral-400" />

      <section className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <p>Room · La Garrigue · 4 nights</p>

          <span className="text-xs">€ 620.00</span>
        </div>

        <div className="flex items-center justify-between">
          <p>Breakfast · 2 guests</p>

          <span className="text-xs">€ 96.00</span>
        </div>

        <div className="flex items-center justify-between">
          <p>Tourist tax</p>

          <span className="text-xs">€ 14.40</span>
        </div>
      </section>

      <hr className="text-neutral-600" />

      <footer className="flex flex-col gap-y-8">
        <div className="flex items-center justify-between">
          <span className="uppercase tracking-widest text-md">Total paid</span>

          <strong className="font-fraunces text-3xl font-medium">
            € 730.40
          </strong>
        </div>

        <div className="flex items-center justify-between">
          <span className="uppercase tracking-widest text-xs">
            Paid · Wise · GBP
          </span>

          <img src={barCode} alt="Bar Code" />
        </div>
      </footer>
    </article>
  );
}
