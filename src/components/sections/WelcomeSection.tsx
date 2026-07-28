const buttonStyles =
  "py-2 px-4 rounded-full cursor-pointer transition hover:opacity-75";

export default function WelcomeSection() {
  return (
    <section className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
      <header>
        <p className="uppercase tracking-widest mb-1 text-xs text-neutral-600">
          Booking · Confirmed
        </p>

        <h2 className="font-fraunces text-4xl">
          Bienvenue, <span className="italic text-terracotta-600">Lucia.</span>
        </h2>
      </header>

      <div className="flex gap-x-2 lg:items-end lg:gap-x-6">
        <button className={`button-outline ${buttonStyles}`}>
          Add to calendar
        </button>

        <button className={`button-fill ${buttonStyles}`}>Print receipt</button>
      </div>
    </section>
  );
}
