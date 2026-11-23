export default function BrandLogo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="JMM Labs">
      <svg
        aria-hidden="true"
        viewBox="0 0 44 44"
        className="h-10 w-10 shrink-0"
        fill="none"
      >
        <rect x="1" y="1" width="42" height="42" rx="14" fill="#10213D" />
        <path d="M11 29V15h4l7 8 7-8h4v14h-4v-8l-7 7-7-7v8h-4Z" fill="#F8FAFC" />
        <circle cx="34" cy="11" r="4" fill="#56D6B1" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-extrabold tracking-[-0.04em] text-slate-950">
            JMM<span className="text-teal-600">.</span>
          </span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Labs
          </span>
        </span>
      )}
    </span>
  );
}
