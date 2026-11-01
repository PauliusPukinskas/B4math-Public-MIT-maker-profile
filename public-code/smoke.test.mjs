import test from "node:test";
import assert from "node:assert/strict";
import { pricingBreakEvenFromQuestion, pricingBreakEvenMessage } from "./pricing-break-even.ts";
import { calculateCompanyImprovementEconomics } from "./company-improvement.ts";

test("revenue identity: higher price requires 88.2% of the old paid volume", () => {
  const value = pricingBreakEvenFromQuestion("Raise subscription price from $149 to $169?");
  assert.equal(value?.basis, "quoted_prices_only");
  assert.ok(Math.abs(value.requiredVolumeRatio - 149 / 169) < 1e-12);
  assert.match(pricingBreakEvenMessage(value), /not a demand or profit forecast/);
});

test("missing currency or conflicting billing periods must not yield a number", () => {
  assert.equal(pricingBreakEvenFromQuestion("Raise price from 149 to 169?"), null);
  assert.equal(pricingBreakEvenFromQuestion("Change monthly price from $149 to annual $169?"), null);
  assert.equal(pricingBreakEvenFromQuestion("Raise price from $149 to €169?"), null);
});

test("unknown implementation cost must remain unknown", () => {
  assert.deepEqual(
    calculateCompanyImprovementEconomics({ likelyAnnualImpactMinor: 1200, implementationCostMinor: null }),
    { likelyAnnualImpactMinor: 1200, firstYearNetImpactMinor: null, likelyMonthlyImpactMinor: 100, paybackMonths: null }
  );
});

test("known inputs allow deterministic net impact and payback", () => {
  assert.deepEqual(
    calculateCompanyImprovementEconomics({ likelyAnnualImpactMinor: 120000, implementationCostMinor: 30000 }),
    { likelyAnnualImpactMinor: 120000, firstYearNetImpactMinor: 90000, likelyMonthlyImpactMinor: 10000, paybackMonths: 3 }
  );
});

test("unknown annual impact never implies a fabricated economic return", () => {
  assert.equal(calculateCompanyImprovementEconomics({likelyAnnualImpactMinor:null,implementationCostMinor:0}),null);
});
