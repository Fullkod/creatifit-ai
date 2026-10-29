// "Desarrollado por Fullkod" (CREA0004): mismo crédito en todas las pantallas.
// tone="auto" sigue al tema (.dark); tone="onDark" para fondos oscuros o de color fijos.
export function FullkodCredit({
  tone = "auto",
  className = "",
}: {
  tone?: "auto" | "onDark";
  className?: string;
}) {
  const onDark = tone === "onDark";
  return (
    <a
      href="https://fullkod.com/?ref=creatifit-ai"
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-1.5 text-[12px] transition-colors ${
        onDark ? "text-white/60 hover:text-white" : "text-muted hover:text-txt"
      } ${className}`}
    >
      Desarrollado por
      {!onDark && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/brand/fullkod-symbol.svg" alt="" className="h-3.5 w-3.5 dark:hidden" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/fullkod-symbol-reversed.svg"
        alt=""
        className={`h-3.5 w-3.5 ${onDark ? "" : "hidden dark:block"}`}
      />
      <span className={`font-semibold ${onDark ? "text-white/85" : "text-txt"}`}>Fullkod</span>
    </a>
  );
}
