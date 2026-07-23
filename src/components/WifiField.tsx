interface WifiFieldProps {
  label: string;
  value: string;
  onCopy?: () => void;
}

export default function WifiField({ label, value, onCopy }: WifiFieldProps) {
  return (
    <div className="flex items-center justify-between bg-neutral-100 px-4 py-2.5 border border-neutral-400 rounded-xl text-xs">
      <span className="uppercase tracking-widest text-md">{label}</span>
      <div className="flex items-center gap-2">
        <span>{value}</span>
        {onCopy && (
          <button
            onClick={onCopy}
            className="rounded-full px-2.5 py-0.5 text-[10px] border border-neutral-400 font-bold tracking-wider text-stone-600 hover:opacity-80 transition-colors uppercase"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}
