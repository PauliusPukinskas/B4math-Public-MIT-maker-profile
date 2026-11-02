# My backend and algorithm work in B4Math

**My role:** solo founder, product architect and hands-on backend/decision-logic developer. AI coding assistants helped me ship portions of the implementation, especially UI iteration and repetitive tasks; they were tools, not a substitute for system design, testing and engineering decisions.

I did not train the external foundation models used through APIs. B4Math is a decision-rehearsal application, not a claim that I can perfectly forecast business markets.

## What I built and why

| Backend problem | My engineering responsibility | Supporting evidence |
| --- | --- | --- |
| A company cannot be reduced to a single prompt | Design and development of the persistent, versioned Company Brain and review state | Private repository history and [engineering notes](ENGINEERING.md) |
| AI prose must not become invented accounting | Decision calculation contracts, guardrails and explicit missing-input behavior | [Actual pricing arithmetic module](../public-code/pricing-break-even.ts) and [original validation/test context](../public-code/README.md) |
| Unknown implementation costs are not zero | Deterministic economics calculation and null-safe output contract | [Actual domain module](../public-code/company-improvement.ts) |
| Background execution must preserve results | Backend workflows, durable jobs, database state, retry/failure boundaries | [Dated engineering history](DEVELOPMENT_HISTORY.md) |
| Decisions must remain auditable | Frozen context, versioned inputs, stored outputs and outcome tracking | [Engineering](ENGINEERING.md) and [verification](VERIFICATION_AND_CREDITS.md) |
| Learning cannot silently rewrite company facts | Human review and explicit approval before long-term state changes | [Development history](DEVELOPMENT_HISTORY.md) |
| Calculations need regression protection | Correctness testing, boundary cases, synthetic fixtures and deterministic checks | [Source excerpts and public smoke tests](../public-code/README.md), [historical test evidence](VERIFICATION_AND_CREDITS.md) |
| A demo must not expose actual tenants | Public synthetic sample and permission boundaries | [Live read-only demo](https://b4math.com/demo) |

The timeline describes work **under my technical direction**, using both manual implementation and AI development tools. Without line-level review of every historical commit, I do not attribute every source line exclusively to myself.

## Source code a reviewer can actually inspect

This repo contains **two exact copies of real TypeScript modules from the original private application's domain package**, verified against their original Git blob hashes.

### 1. Pricing break-even is arithmetic, not a demand prediction

[`public-code/pricing-break-even.ts`](../public-code/pricing-break-even.ts)

Given an explicitly quoted change from $149 to $169, required volume to hold **revenue** constant is 149 / 169, or about 88.2% of the original paid volume. The module rejects ambiguous pricing language, mismatched currencies and contradictory billing periods. It does not claim the customers will actually remain or that profit increases.

### 2. Missing cost is not free

[`public-code/company-improvement.ts`](../public-code/company-improvement.ts)

When expected annual impact is supplied but implementation cost is unknown, first-year net benefit and payback remain **null**, not falsely positive. If the annual impact itself is missing, no economics result is derived.

Run these selected modules' [public tests](../public-code/README.md) with `cd public-code && npm test`. This is a **limited code excerpt**, not the proprietary decision-engine implementation or a substitute for the full private app.

## The design decisions I would defend to an MIT reviewer

1. **Immutable historical decisions.** Reopening a result should not update the facts on which it originally rested.
2. **Explicit uncertainty.** A numerical answer may be withheld when a necessary baseline, measurement or constraint is unknown.
3. **Human-approved learning.** Later outcomes must not automatically corrupt persistent company memory.
4. **Separation of model and calculation.** An LLM can help interpret an ambiguous question; deterministic code must govern arithmetic.
5. **Durable state boundaries.** A failed worker should not destroy the record of an attempted decision.

## Collaboration and limits

I am B4Math's solo founder, **not** the exclusive manual author of every UI or backend line. Generative coding assistance, libraries, open-source software and pretrained model APIs were part of development. The two published modules are genuine selected code; most production source remains private for business, security and confidentiality reasons.

What the portfolio proves well: I took responsibility for substantial backend design and concrete numerical correctness safeguards, and can point to real tests and tradeoffs. What it does not prove: forecast calibration on a large population of real business outcomes, or personal authorship of every line in the private codebase.

[Main project](../README.md) · [Public code](../public-code/README.md) · [Dated history](DEVELOPMENT_HISTORY.md) · [Verification](VERIFICATION_AND_CREDITS.md)
