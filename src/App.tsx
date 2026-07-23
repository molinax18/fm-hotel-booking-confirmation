import MobileHeader from "./components/MobileHeader";
import WelcomeSection from "./components/WelcomeSection";

export default function App() {
  return (
    <>
      <MobileHeader />
      <main className="p-6">
        <WelcomeSection />
      </main>
    </>
  );
}
