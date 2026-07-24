import MobileHeader from "./components/MobileHeader";
import PaymentCard from "./components/PaymentCard";
import WelcomeCard from "./components/WelcomeCard";
import WelcomeSection from "./components/WelcomeSection";
import GuideCards from "./components/GuideCards";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="grid lg:grid-cols-12">
      <MobileHeader className="lg:hidden" />

      <Sidebar className="hidden lg:grid lg:col-span-2" />

      <main className="flex flex-col gap-y-16 p-6 lg:col-start-3 lg:col-span-full">
        <WelcomeSection />

        <section className="space-y-8">
          <WelcomeCard className="rotate-2 shadow-xl shadow-terracotta-400/30" />

          <PaymentCard className="-rotate-2 shadow-xl shadow-neutral-600/20" />
        </section>

        <GuideCards className="flex flex-col gap-y-4" />
      </main>
    </div>
  );
}
