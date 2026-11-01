# Verification, scope and credits

## What is substantiated by the private build record

**The private repository contains dated engineering commits, build notes and regression tests.** The following are selected documented checks, not certifications:

| Date | Recorded evidence | Careful interpretation |
| :--- | :--- | :--- |
| July 2026 | Versioned Company Brain, worker lifecycle and persistent outcome-learning commits | Shows the product moved beyond a static prototype |
| August 23 | Engineering log records 112 Vitest files / 553 tests, 7 adapter tests, 14 integration files / 57 tests and a 37-pass Playwright run with one optional skip | A dated local verification report, not a guarantee that every later revision passed |
| September 8 | Engineering log records a full local suite including 586 Vitest tests and 64 integration tests | Shows growing coverage at that revision; not a claim about the current production release |
| October 16 | Synthetic decision lab with 12 fixtures and three additional properties | Supports correctness and safety checks on controlled examples, **not forecast accuracy in real businesses** |
| November 1 | Tests added for derived metric dependencies and graph cycles | Additional regression coverage; the record explicitly says automated tests were not run in that specific documentation session |

## Visual evidence

The screenshots published here are selected, archived UI captures from the private development repository.

- [Early public presentation](../assets/screenshots/01-public-demo.png)
- [Decision setup](../assets/screenshots/02-decision-setup.png)
- [Structured result](../assets/screenshots/03-decision-result.png)
- [History of decisions](../assets/screenshots/04-run-history.png)

They use synthetic demonstration data. Numbers in screenshots are illustrative, not proof of measured customer ROI or validated predictive accuracy. Screenshots do not establish that the pictured interface is today's deployed version.

## Contribution and collaboration disclosure

**Project owner:** Paulius Pukinskas, solo founder.

My contribution spans the product idea, architecture, substantial backend and algorithm work, testing, integrations, debugging and product decisions. Development tools included AI coding assistants, especially in frontend implementation, styling and repetitive tasks. Models used at runtime are pretrained third-party models accessed through APIs.

No other founder is claimed. This is not a claim that every line was coded manually or that I trained the underlying language models. The private source repository reflects iterative human and tool-assisted work.

## Why the source is not public

I have deliberately not copied private implementation into a showcase repo. In particular, it excludes proprietary decision policies, operational configuration, sensitive provider details, security mechanisms, database internals and any private business records.

**What an evaluator can assess here:** originality of the product problem, progression of the build, architectural tradeoffs, demonstrated interfaces, the author's technical responsibilities and the limitations of existing evaluation.

**What an evaluator cannot independently audit here:** the complete code implementation or internal commit history. Those remain private.

[Overview](../README.md) · [Development history](DEVELOPMENT_HISTORY.md) · [Engineering choices](ENGINEERING.md)
