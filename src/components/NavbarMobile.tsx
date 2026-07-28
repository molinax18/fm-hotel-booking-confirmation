import WeatherCard from "./WeatherCard";
import LocationDetails from "./LocationDetails";
import NavList from "./NavList";

export default function NavbarMobile() {
  return (
    <nav className="fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col gap-y-6 justify-between overflow-y-auto overscroll-contain py-4 px-6 bg-neutral-100">
      <NavList />

      <div className="flex flex-col gap-y-10 pb-4">
        <WeatherCard />

        <LocationDetails />
      </div>
    </nav>
  );
}
