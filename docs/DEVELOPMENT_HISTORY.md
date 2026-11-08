# B4Math · Development history

*A retrospective built from dated commits and engineering notes in the private development repository. These are genuine historical milestones; this public documentation was created afterward and does not pretend that newly published commits are old commits.*

## The evolution in one view

**Early prototype → custom backend → versioned Company Brain → deterministic decision engine → durable decisions → outcome learning → evidence-aware product.**

The strongest evidence of making is not the amount of UI shipped. It is the way I repeatedly replaced an assumption with a more defensible contract.

### Before July 16, 2026 · The original iteration

An earlier B4Math application existed before the custom-stack migration. It explored business simulation and market-related workflows. Its later migration baseline was imported with an explicit version label in July. **The import date is not the date the project began.** The earliest design work and all prior revisions are not reconstructed here with invented dates.

**What changed:** The original product idea had outgrown the constraints of the previous implementation. I needed clearer ownership of backend behavior, calculation and data persistence.

### July 16 · Rebuilding the technical foundation

Dated commits record an imported production baseline, an architecture plan, a custom stack scaffold, authentication, tenant-aware persistence, a versioned Company Brain foundation and a durable simulation lifecycle.

**My engineering focus:** moving the product into a TypeScript application with separate web and background-processing responsibilities, durable company state and a clear permission model.

**Why it matters:** a believable demo can hold everything in memory, but a decision tool needs to preserve the exact company context and inputs that produced a result. This made later learning and auditability possible.

**Tradeoff:** greater operational complexity in exchange for controllable and testable data and calculation boundaries.

### July 23–24 · Making the decision engine defensible

The history records a second major decision engine version, further correctness passes, AI-enabled workflows, notifications, a scheduled worker and added security controls.

I worked on the backend and decision logic, including the separation between **model-generated interpretation** and **deterministic numerical execution**. A model can help structure a question; it should not conjure missing financial inputs or be treated as a calculator that cannot be challenged.

**Failure mode addressed:** the system must be able to say “not enough evidence” rather than manufacture a high-confidence winner. Options must respect explicit constraints.

### July 25–27 · Building a complete workflow

Development moved from standalone calculations toward a full cycle: a public demo, an authenticated decision flow, persistent outcome tracking and an operator that proposes but does not silently execute consequential changes.

July 26 commits include **persisted outcome learning** followed by integrity hardening and a change requiring learning approval before Company Brain writes.

**What I learned:** correctly displaying a result is not enough. The result must remain attributable to frozen inputs, and observed outcomes must not rewrite the original prediction.

### July 27–30 · Real demo and reliability improvements

The build record includes worker readiness gates, deterministic tests for sparse decision forms, live rehearsal, synthetic read-only sample workspaces and public responsive improvements.

A deliberate design decision was to let a visitor see a working example without gaining access to real company data or writing to private records.

**What it demonstrates:** interaction with the real decision workflow rather than a static mockup. It does **not** demonstrate that the example figures predict real-world behavior.

### August · From feature collection toward a coherent product

The work shifted to meaningful product review, engineering hardening, visual systems and workflow clarity. August 23 engineering notes record a full multi-width browser review, reduced-motion behavior, tests and an interactive sample journey.

The interface was repeatedly revised because early layouts buried the recommendation under dashboards and controls. I pushed the core interaction toward a more straightforward sequence: **company context → the decision → the recommendation and its limits → what to test next**.

**A changed assumption:** more screens and more parameters did not necessarily make a more useful decision tool.

### September · Evidence and uncertain economics

The September 8 build record documents an expansion into software portfolio and improvement workflows, linked to existing rehearsals. An important correction was replacing assumed-zero implementation costs and mandatory economic figures with explicit unknowns.

Where a cost or effect was not supplied, the system was changed to preserve that uncertainty rather than compute an attractive but unsupported result.

The same period documents regression tests, tenant isolation, multi-width rendering and a review of permission and approval boundaries. September's public demo was refined to recover more safely from failures and to disclose what was and was not saved.

**Engineering lesson:** missing information is a domain state to model, not a hole to fill with AI prose.

### October · Refining a system around honest decisions

The product definition became more focused: **Company Brain → Decide → Rehearse → Learn**.

October work recorded evidence provenance, uncertainty bounds, derived metrics, outcome feedback, model-provider reliability, safe routing, a more navigable Company Brain, and accessible decision comparisons. New synthetic-persona workflows were kept separate from real user research.

On October 16, an internal **synthetic decision lab** documented twelve designed fixtures and additional properties. It tested, among other things, whether delayed outcomes were counted too early, whether contradictory effect estimates were averaged without justification and whether hard downside constraints could be overridden by attractive returns. One local run was recorded, not a controlled performance study or real-world forecast validation.

October 18 work addressed decision history contracts, learning follow-ups and accessibility. The development record includes corrections and regressions, not just feature launches.

### November 1 · Verification continues

New commits recorded derived metric dependency tests, developer prerequisites and dependency compatibility upgrades. These are important precisely because they are unglamorous: preserving correct behavior across a changing codebase is part of building a real product.

## Original engineering checkpoints

These are existing commits in the private source history, inspected on November 8. The public showcase does not recreate their timestamps or expose their patches.

| Date | Existing commit | Engineering change |
| :--- | :--- | :--- |
| July 16 | `0c41e0fbd9536b11fbe0e05665c94e86c3fda865` | Versioned Company Brain foundation |
| August 9 | `ee39e54f3353d7e5e7438a043a65f30f069a940b` | Deterministic SaaS derived metric graph runtime |
| August 9 | `b89da718b061fe2985e54af86ed5e0f494f17b42` | Connect the graph to the decision engine |
| October 16 | `69dd19010482889ff0bf1a87ad45ed5d02d1d76c` | Version numerical safety and preserve historical replay |
| October 16 | `04ca62981e8dd7ae418d87e0c96c3807cdb31ed2` | Preserve missing primary objectives in ranking safeguards |

The [backend cases](BACKEND_CASE_STUDIES.md) connect those changes to a hand calculated accounting fixture, revision behavior and execution failure cases. Original commit identifiers establish which records were inspected; they do not make the private history publicly accessible or establish individual line authorship.

## Four engineering decisions I would defend

1. **Deterministic numbers, explicit assumptions.** Language models assist with interpreting intent; the mathematical core checks what can actually be computed.
2. **Human approval for learning.** A suggested update must not silently contaminate persistent company context.
3. **An immutable decision snapshot.** Reopening an old result should not replace the assumptions that generated it.
4. **No false precision.** Missing baselines, conflicting evidence and unknown costs remain visible and may prevent a quantitative recommendation.

## How to read this public history

- Dates come from the original private project history, not from the creation time of this showcase.
- Screenshots are archived examples and may not reflect the latest UI.
- The public record is **selective** because the private repository includes proprietary algorithms, infrastructure configuration and implementation details.
- This is a history of product and engineering work under my direction. Tool-assisted code generation and debugging were part of my workflow; authorship should not be inferred solely from commit labels.

[Return to the overview](../README.md) · [Engineering notes](ENGINEERING.md) · [Verification and credits](VERIFICATION_AND_CREDITS.md)

