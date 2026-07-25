import WeatherCard from "./WeatherCard";
import LocationDetails from "./LocationDetails";
import NavList from "./NavList";

export default function NavbarMobile() {
  return (
    <nav className="absolute z-50 top-[9%] left-0 min-h-[91%] w-screen flex flex-col justify-between py-4 px-6 bg-neutral-100">
      <NavList />

      <div className="flex flex-col gap-y-10">
        <WeatherCard />

        <LocationDetails />
      </div>
    </nav>
  );
}
