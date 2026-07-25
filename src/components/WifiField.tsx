interface WifiFieldProps {
  label: string;
  value: string;
  onCopy?: () => void;
}

export default function WifiField({ label, value, onCopy }: WifiFieldProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border border-neutral-400 rounded-xl text-xs bg-neutral-100">
      <span className="uppercase tracking-widest text-md">{label}</span>
      <div className="flex items-center gap-2">
        <span>{value}</span>
        {onCopy && (
          <button
            onClick={onCopy}
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase cursor-pointer border border-neutral-400 text-stone-600 transition hover:opacity-80 active:opacity-60 focus:outline-2 focus:outline-offset-2 focus:outline-terracotta-600"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}
