export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* FR Icon SVG */}
      <div className="relative flex items-center justify-center">
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* F Part (Green) */}
          <path d="M12 24L18 0H0L4 0H24" stroke="var(--color-brand-500)" strokeWidth="4" strokeLinecap="square" fill="none" />
          <path d="M8 12H20" stroke="var(--color-brand-500)" strokeWidth="4" strokeLinecap="square" fill="none" />
          {/* R Part (White) */}
          <path d="M22 0H32C36 0 38 2 38 6C38 10 36 12 32 12H20" stroke="white" strokeWidth="4" strokeLinecap="square" fill="none" />
          <path d="M28 12L34 24" stroke="white" strokeWidth="4" strokeLinecap="square" fill="none" />
        </svg>
      </div>
      <span className="font-display font-medium text-2xl tracking-normal text-white">
        Future <span className="text-brand-500">Ranks</span>
      </span>
    </div>
  );
}
