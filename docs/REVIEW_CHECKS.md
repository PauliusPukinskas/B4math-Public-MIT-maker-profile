# Verification record

Updated **November 8, 2026**. Public checks use **Node v24.22.1**.

## Public checks executed locally

```bash
cd public-code
npm test
```

**5 tests passed, 0 failed.** They check explicit compatible pricing inputs, revenue break even, unknown costs, known cost/payback arithmetic and missing annual impact.

The public TypeScript modules remain unchanged. Their Git blobs match the original application source:

| Module | Matching original Git blob |
| :--- | :--- |
| `pricing-break-even.ts` | `bdb3c53b571bdc601c0af9a9f0a6ebdeb6380d13` |
| `company-improvement.ts` | `baf81de068d63a325886d4ac9a622bc58c6efda9` |

## Original private CI inspected

The successful November 1 run **41340055654**, at source commit `126079d231ab1886bd027c980efc2ccf51b6dead`, was inspected on November 8.

| Recorded check | Result |
| :--- | :--- |
| Derived metric graph | 11 tests passed |
| Company Brain readiness | 3 tests passed |
| Full Vitest unit run | 981 passed; 1 skipped |
| Integration run | 84 passed across 17 files |
| Validation, public layouts, browser smoke | Successful jobs |
| Separate manual browser job | Skipped |

These are transcribed historical results. The private suite was not rerun locally for this documentation change. The [backend cases](BACKEND_CASE_STUDIES.md) identify source artifacts and explain the particular safeguards inspected. Private CI counts are not independently reproducible from this public repository.

## Product evidence

The November 7 anonymous demo review inspected Company Brain, ran the prepared analysis to completion, expanded evidence assessment and opened outcome learning. Its [six direct captures](PRODUCT_WALKTHROUGH.md) retain URLs, times and image hashes in the [capture record](../assets/live-screenshots/2026-11-07/CAPTURE_INFO.json). No private Company Brain record was changed.

The documentation update retains those captures and checks local links and image references against repository inventories. Tests of synthetic behavior and an accessible demo do not establish real outcome calibration.

[Overview](../README.md) · [Backend cases](BACKEND_CASE_STUDIES.md) · [Source provenance](../public-code/README.md)
