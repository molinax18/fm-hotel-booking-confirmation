const buttonStyles =
  "py-2 px-4 rounded-full flex-1 cursor-pointer transition hover:opacity-75";

export default function WelcomeSection() {
  return (
    <section className="flex flex-col gap-y-6">
      <header>
        <p className="uppercase tracking-widest text-xs text-neutral-600 mb-1">
          Booking · Confirmed
        </p>
        <h2 className="font-fraunces text-4xl">
          Bienvenue, <span className="italic text-terracotta-600">Lucia.</span>
        </h2>
      </header>

      <div className="flex gap-x-2">
        <button className={`button-fill ${buttonStyles}`}>Print receipt</button>
        <button className={`button-outline ${buttonStyles}`}>
          Add to calendar
        </button>
      </div>
    </section>
  );
}
