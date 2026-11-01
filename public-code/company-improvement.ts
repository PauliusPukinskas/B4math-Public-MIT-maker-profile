export type CompanyImprovementEconomicsInput = {
  likelyAnnualImpactMinor: number | null;
  implementationCostMinor: number | null;
};

export type CompanyImprovementEconomics = {
  likelyAnnualImpactMinor: number | null;
  firstYearNetImpactMinor: number | null;
  likelyMonthlyImpactMinor: number;
  paybackMonths: number | null;
};

export function calculateCompanyImprovementEconomics(
  input: CompanyImprovementEconomicsInput
): CompanyImprovementEconomics | null {
  if (input.likelyAnnualImpactMinor === null) return null;
  if (!Number.isSafeInteger(input.likelyAnnualImpactMinor) || input.likelyAnnualImpactMinor < 0) {
    throw new Error("likelyAnnualImpactMinor must be a non-negative safe integer");
  }
  if (
    input.implementationCostMinor !== null &&
    (!Number.isSafeInteger(input.implementationCostMinor) || input.implementationCostMinor < 0)
  ) {
    throw new Error("implementationCostMinor must be a non-negative safe integer");
  }

  const likelyMonthlyImpactMinor = Math.floor(input.likelyAnnualImpactMinor / 12);
  const firstYearNetImpactMinor =
    input.implementationCostMinor === null
      ? null
      : input.likelyAnnualImpactMinor - input.implementationCostMinor;
  const paybackMonths =
    input.implementationCostMinor === null
      ? null
      : input.implementationCostMinor === 0
        ? 0
        : input.likelyAnnualImpactMinor === 0
          ? null
          : (input.implementationCostMinor * 12) / input.likelyAnnualImpactMinor;

  return {
    likelyAnnualImpactMinor: input.likelyAnnualImpactMinor,
    firstYearNetImpactMinor,
    likelyMonthlyImpactMinor,
    paybackMonths
  };
}
