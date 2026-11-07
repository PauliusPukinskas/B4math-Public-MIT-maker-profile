# Public evidence checks

Checked on **November 7, 2026**, using **Node v24.22.1**.

## Original source comparison

The two public TypeScript modules were compared with the current private application's `main` branch through GitHub. Both contents match their original Git blob hashes:

| Public module | Original path | Matching Git blob |
| :--- | :--- | :--- |
| `public-code/pricing-break-even.ts` | `packages/domain/src/pricing-break-even.ts` | `bdb3c53b571bdc601c0af9a9f0a6ebdeb6380d13` |
| `public-code/company-improvement.ts` | `packages/domain/src/company-improvement.ts` | `baf81de068d63a325886d4ac9a622bc58c6efda9` |

This establishes that the excerpts are unchanged copies of the current application modules. It does not establish individual line authorship. [Contribution account](MY_BACKEND_AND_ALGORITHM_WORK.md).

## Executed public tests

```bash
cd public-code
npm test
```

**5 tests passed, 0 failed.** The suite checks revenue break even, ambiguous or contradictory price inputs, unknown costs, known cost and payback calculations, and unknown annual impact.

These are focused synthetic correctness checks on the published modules. The private application suite and real business forecast performance were not evaluated in this refresh.

## Live product check

Opened the anonymous public sample, inspected Company Brain, ran the prepared analysis to completion, expanded the evidence assessment and opened outcome learning. The [six direct captures](PRODUCT_WALKTHROUGH.md) preserve these states, with exact times and image hashes in the [capture record](../assets/live-screenshots/2026-11-07/CAPTURE_INFO.json).

The sample exposes its synthetic context and states that no Company Brain record changed. This check exercised the public demonstration only; it did not apply a private workspace update.

[Overview](../README.md) · [Source provenance](../public-code/README.md) · [Scope and credits](VERIFICATION_AND_CREDITS.md)
