import { useMediaQuery } from "./hooks/useMediaQuery";
import MobileHeader from "./components/MobileHeader";
import PaymentCard from "./components/PaymentCard";
import WelcomeCard from "./components/WelcomeCard";
import WelcomeSection from "./components/WelcomeSection";
import GuideCards from "./components/GuideCards";
import Sidebar from "./components/Sidebar";

export default function App() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="grid xl:grid-cols-12">
      {!isDesktop && <MobileHeader />}

      {isDesktop && <Sidebar className="xl:grid xl:col-span-2" />}

      <main className="flex flex-col gap-y-18 p-6 xl:col-start-3 xl:col-span-full xl:py-8">
        <WelcomeSection />

        <section className="space-y-8 lg:space-y-0 lg:flex lg:gap-x-2 lg:max-w-3xl lg:mx-auto xl:max-w-4xl">
          <WelcomeCard className="rotate-2 lg:rotate-4 lg:order-1 lg:flex-1" />

          <PaymentCard className="-rotate-2 lg:-rotate-4 lg:flex-1" />
        </section>

        <GuideCards />
      </main>
    </div>
  );
}
