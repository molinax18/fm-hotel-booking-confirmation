import MobileHeader from "./components/MobileHeader";
import PaymentCard from "./components/PaymentCard";
import WelcomeCard from "./components/WelcomeCard";
import WelcomeSection from "./components/WelcomeSection";

export default function App() {
  return (
    <>
      <MobileHeader />

      <main className="flex flex-col gap-y-16 p-6">
        <WelcomeSection />

        <section className="space-y-8">
          <WelcomeCard className="rotate-2 shadow-xl shadow-terracotta-400/30" />

          <PaymentCard className="-rotate-2 shadow-xl shadow-neutral-600/20" />
        </section>
      </main>
    </>
  );
}
