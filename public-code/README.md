# Inspectable B4Math source evidence

This folder contains **two small, genuine TypeScript modules copied from the private B4Math application**, along with a new, dependency-free public smoke test. They expose generic arithmetic and validation behavior only. They are **not the complete B4Math codebase** and do not reveal proprietary decision policies, customer data, secrets, or server routes.

## Provenance

| Public file | Original private source path | What it demonstrates |
| --- | --- | --- |
| [pricing-break-even.ts](pricing-break-even.ts) | `packages/domain/src/pricing-break-even.ts` | Restrict revenue break-even arithmetic to explicit quoted prices, reject contradictory inputs and avoid pretending to forecast demand |
| [company-improvement.ts](company-improvement.ts) | `packages/domain/src/company-improvement.ts` | Distinguish unknown implementation costs from zero and avoid deriving returns when necessary facts are missing |
| [smoke.test.mjs](smoke.test.mjs) | Newly written for this showcase | Independently runnable public tests of the extracted source |

The two TypeScript files were taken from the original project's **main branch on November 2, 2026** (Git blob hashes `bdb3c53b571bdc601c0af9a9f0a6ebdeb6380d13` and `baf81de068d63a325886d4ac9a622bc58c6efda9`). The source repository remains private. This is retrospective disclosure, not a claim that the public repo contains historical app commits. The app also contains many more modules and integration tests that are not published.

## Run the public evidence

Requires Node 22.16 or newer. No API key, environment variables, npm installation, or network access is required.

```bash
cd public-code
npm test
```

The tests show a real design choice: **unknown values remain unknown**, and simple price arithmetic is explicitly not a demand forecast.

These modules are a small inspectable sample. They do **not** establish real-world prediction accuracy, full application reliability, or compliance with an institution's requirement to see a complete codebase. See the [live synthetic B4Math demonstration](https://b4math.com/demo) for the user-visible workflow and [development history](../docs/DEVELOPMENT_HISTORY.md) for retrospective milestones.
