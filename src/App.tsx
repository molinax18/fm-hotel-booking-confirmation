import { useMediaQuery } from "./hooks/useMediaQuery";
import MobileHeader from "./components/sections/MobileHeader";
import WelcomeSection from "./components/sections/WelcomeSection";
import GuideCards from "./components/sections/GuideCards";
import Sidebar from "./components/sections/Sidebar";
import Hero from "./components/sections/Hero";

export default function App() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="grid xl:grid-cols-12">
      {!isDesktop && <MobileHeader />}

      {isDesktop && <Sidebar className="xl:grid xl:col-span-2" />}

      <main className="flex flex-col gap-y-18 p-6 xl:col-start-3 xl:col-span-full xl:py-8">
        <WelcomeSection />

        <Hero />

        <GuideCards />
      </main>
    </div>
  );
}
