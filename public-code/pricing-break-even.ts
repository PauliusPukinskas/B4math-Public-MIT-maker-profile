/** A revenue identity from explicitly quoted prices, never a demand forecast. */
export function pricingBreakEvenFromQuestion(question: string) {
  if (!question || question.length > 8_000) return null;
  if (!/\b(price|pricing|subscription|plan|arpu)\b/i.test(question)) return null;
  if (/\b(budget|spend|spending|salary|salaries|wages|funding)\b/i.test(question)) return null;
  const monthly = /\b(monthly|month|months|mo)\b/i.test(question);
  const annual = /\b(annual|annually|year|yearly|years|yr)\b/i.test(question);
  if (monthly && annual) return null;

  // Require exactly two explicit, consistent currency labels and an unambiguous
  // from/to statement. A dollar sign stays "$"; no national currency is guessed.
  const money =
    /(?:\b(USD|EUR|GBP)|([$€£]))\s*((?:[0-9]{1,3}(?:,[0-9]{3})+|[0-9]+)(?:\.[0-9]{1,2})?)(?![0-9]|[.,][0-9])/gi;
  const quotes = [...question.matchAll(money)];
  if (quotes.length !== 2) return null;
  const [original, proposed] = quotes;
  if (!original || !proposed) return null;
  if (!/\bfrom\s*$/i.test(question.slice(0, original.index))) return null;
  const between = question.slice(original.index! + original[0].length, proposed.index);
  if (
    !/^(?:\s*(?:\/|per\s+)\s*(?:month|mo|year|yr)|\s+(?:monthly|annually|yearly))?\s*(?:to|→)\s*$/i.test(
      between
    )
  )
    return null;
  const currencyLabel = (original[1] ?? original[2])!.toUpperCase();
  if (currencyLabel !== (proposed[1] ?? proposed[2])!.toUpperCase()) return null;
  const originalPrice = Number(original[3]!.replaceAll(",", ""));
  const proposedPrice = Number(proposed[3]!.replaceAll(",", ""));
  if (
    ![originalPrice, proposedPrice].every(
      (value) => Number.isFinite(value) && value > 0 && value < Number.MAX_SAFE_INTEGER
    )
  )
    return null;
  const requiredVolumeRatio = originalPrice / proposedPrice;
  if (!Number.isFinite(requiredVolumeRatio) || requiredVolumeRatio <= 0) return null;
  return {
    calculationVersion: "pricing-revenue-break-even-v1" as const,
    basis: "quoted_prices_only" as const,
    originalPrice,
    proposedPrice,
    currencyLabel,
    requiredVolumeRatio,
    volumeChangeToBreakEven: requiredVolumeRatio - 1,
    sourceText: question,
    assumptions: [
      "Both prices apply to the same unit and billing period, tax treatment and comparable customer mix.",
      "This compares revenue only; costs, demand, churn and profit are not estimated."
    ]
  };
}

export type PricingBreakEven = NonNullable<ReturnType<typeof pricingBreakEvenFromQuestion>>;

/** Keep the same meaning in the executive view, copied summary and exported brief. */
export function pricingBreakEvenMessage(value: PricingBreakEven) {
  const percent = value.requiredVolumeRatio * 100;
  const label =
    percent < 0.1
      ? "under 0.1%"
      : `about ${new Intl.NumberFormat("en", { maximumFractionDigits: 1 }).format(percent)}%`;
  return `At matching billing periods and customer mix, revenue breaks even at ${label} of the original paid volume. This is a condition to test, not a demand or profit forecast.`;
}
