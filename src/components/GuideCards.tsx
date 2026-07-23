import type { ComponentPropsWithoutRef } from "react";
import GuideCard from "./GuideCard";
import WifiField from "./WiFiField";

import KeyIcon from "@/assets/icon-key.svg?react";
import WifiIcon from "@/assets/icon-wifi.svg?react";
import BreakfastIcon from "@/assets/icon-breakfast.svg?react";

export default function GuideCards({
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <section {...props}>
      <GuideCard
        data={{
          id: "1",
          stepNumber: "01",
          category: "Arrival",
          title: "Check-in from 15:00",
          subtitle: "Sat, 25 April",
          theme: "terracotta",
          icon: KeyIcon,
        }}
      >
        <p className="text-sm text-stone-600 leading-relaxed">
          Ring the brass bell by the blue door. If we're at the market, the key
          is in the terracotta pot by the olive tree.
        </p>
      </GuideCard>

      <GuideCard
        data={{
          id: "2",
          stepNumber: "02",
          category: "Wifi",
          title: "Le Soleil · Guest",
          subtitle: "Password below",
          theme: "blue",
          icon: WifiIcon,
        }}
      >
        <div className="flex flex-col gap-2">
          <WifiField label="Network" value="Le Soleil · Guest" />

          <WifiField
            label="Password"
            value="soleil-2026"
            onCopy={() => navigator.clipboard.writeText("soleil-2026")}
          />
        </div>
      </GuideCard>

      <GuideCard
        data={{
          id: "3",
          stepNumber: "03",
          category: "Breakfast",
          title: "Served 8 – 10:30",
          subtitle: "On the terrace",
          theme: "rose",
          icon: BreakfastIcon,
        }}
      >
        <p className="text-sm text-stone-600 leading-relaxed">
          Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free
          option? Leave a note the night before.
        </p>
      </GuideCard>
    </section>
  );
}
