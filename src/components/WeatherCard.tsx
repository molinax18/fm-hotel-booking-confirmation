import weatherIcon from "@/assets/icon-weather.svg";

export default function WeatherCard() {
  return (
    <div className="relative overflow-hidden flex flex-col gap-y-2 bg-sun-300 px-3 py-4 rounded-2xl">
      <span className="uppercase tracking-widest text-xs">Today in cassis</span>

      <strong className="font-fraunces font-normal text-5xl">27°</strong>

      <p className=" text-sm">Sunny · light breeze</p>

      <img
        src={weatherIcon}
        alt=""
        aria-hidden="true"
        className="absolute -top-10 -right-5 size-26"
      />
    </div>
  );
}
