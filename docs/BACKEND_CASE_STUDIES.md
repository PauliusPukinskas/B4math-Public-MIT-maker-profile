# Three backend engineering cases

My work in B4Math includes the calculation pipeline, persistent company memory and durable execution. These cases explain the design choices, failure modes and verification behind those parts of the product.

**Evidence basis:** original application source and tests inspected at private commit `126079d231ab1886bd027c980efc2ccf51b6dead`; historical CI logs inspected November 8, 2026. Numeric examples are synthetic. No additional production source is published here.

## 1. A calculation graph for business outcomes

### The problem and my work

Pricing can affect conversion, churn, revenue per customer and movement between plans. Accepting a model's direct revenue estimate bypasses those relationships.

I worked on a typed decision pipeline in which behavioral inputs feed a directed dependency graph. The graph derives customer and financial metrics in dependency order. Validation checks references, compatible units and the segment, cohort and evaluation horizon shared by related inputs.

Known inputs support exact calculations. Declared distributions can be propagated through a calculation. Bounds alone remain bounds; displaying them does not turn them into probabilities.

### A source fixture that can be checked by hand

The original regression fixture starts with 100 customers, 50 qualified prospects, 20% conversion and 5% churn. Monthly ARPU is $120. Upgrades affect 10% of closing customers by $20; downgrades affect 5% by $10.

| Step | Calculation | Result |
| :--- | :--- | ---: |
| New customers | 50 × 0.20 | 10 |
| Churned customers | 100 × 0.05 | 5 |
| Closing customers | 100 + 10 − 5 | 105 |
| Expansion MRR | 105 × 0.10 × $20 | $210 |
| Contraction MRR | 105 × 0.05 × $10 | $52.50 |
| MRR | 105 × $120 + $210 − $52.50 | **$12,757.50** |
| ARR | $12,757.50 × 12 | **$153,090** |

A second option in the same fixture changes conversion to 18%, churn to 6%, ARPU to $132, upgrade rate to 8% and downgrade rate to 6%. Its 103 closing customers produce **$13,699 MRR** and **$164,388 ARR**.

Those behavior values are supplied test assumptions. The calculation checks their consequences; it does not establish that customers will behave that way. Expected customer counts can be fractional.

### Failure cases protected by original tests

| Failure | Protected behavior |
| :--- | :--- |
| A revenue improvement lever bypasses the graph | Reject a lever targeting a derived financial metric |
| A metric depends on itself or a cyclic chain | Reject the cycle |
| Inputs mix incompatible segments, cohorts or horizons | Reject the scope mismatch |
| A USD result receives an incompatible EUR display label | Withhold a defensible recommendation |
| A 60 day effect is evaluated at day 30 | Do not apply the effect yet; retain baseline ARR in the fixture |
| A primary objective cannot be derived | Do not replace it with an available minor metric for ranking |
| A sample vector contains an invalid world | Withhold the result instead of retaining only valid samples |

**Tradeoff:** the accounting and unit contracts are deliberately narrower than arbitrary prose. This is a snapshot at a declared horizon, not an unrestricted recursive model of a company's future.

## 2. Company memory that can be revisited

### The problem and my work

Editing company knowledge must not rewrite the facts used by an earlier decision. Copying old evidence into a new revision must not make its observation date appear newer.

I worked on versioned company records, evidence lineage and reviewed state. A record retains its identity while an edit creates a revision. Evidence relationships distinguish direct support, carried evidence, superseded evidence and invalidated evidence. Decisions use a frozen context snapshot.

The original architecture record defines concurrent edits against an expected revision. If two editors begin from revision 3, the first successful edit creates revision 4. The second must conflict instead of silently overwriting it. This illustrates the documented concurrency contract; it is not a transcript of a customer incident.

| Operation | Required interpretation |
| :--- | :--- |
| Carry a source into another revision | Keep its original observation time |
| Replace an incorrect source | Preserve history and mark the evidence relationship |
| Add many records in the same category | Do not inflate evidence quality through duplicates |
| Reopen an earlier decision | Use saved context rather than today's editable profile |
| Record an outcome | Propose a learning for review before updating persistent knowledge |

The inspected readiness tests check category level evidence handling, exclusion of superseded evidence, and separate treatment of stale knowledge and stale evidence. They also check that a pricing decision prioritizes relevant categories.

**Tradeoff:** revisions and evidence lineage add persistence complexity. They make the historical basis of a decision inspectable.

[Company Brain demonstration](PRODUCT_WALKTHROUGH.md#company-brain) · [Outcome review](PRODUCT_WALKTHROUGH.md#outcome-learning)

## 3. Background execution with durable state

### The problem and my work

A database commit and queue publication are separate operations. A process can fail between them, and queue delivery can happen more than once.

I worked on execution and persistence boundaries that use the database as the durable record. Submission saves the decision, snapshot and enqueue intent together. The queue schedules execution. Retries have separate attempts; a worker must own the current attempt before committing. Saving a result and marking success share a transaction.

| Failure point | Intended invariant |
| :--- | :--- |
| Database commit succeeds but publication fails | Saved enqueue intent remains recoverable |
| Work is delivered twice | Delivery does not create a second logical result |
| An old worker finishes after losing ownership | It cannot overwrite the current attempt's result |
| Saving a result fails partway through | Result and success state commit together or roll back |
| A later retry succeeds | Earlier attempts remain in the history |

The original worker integration suite exercises real PostgreSQL and Redis/BullMQ, including repeated delivery producing one durable result. Its successful run is part of the November 1 CI record below. The lifecycle design also specifies stale worker fencing and recovery. Those scenarios were not rerun locally on November 8.

**Tradeoff:** durable enqueue records and attempt ownership add complexity while preserving the relationship between submitted work, execution and saved results.

## Original source and verification record

Source remains private. These identifiers locate inspected artifacts; they do not grant access or independently establish personal line authorship.

| Original application artifact | Git blob |
| :--- | :--- |
| `packages/simulation/src/derived-metric-graph.ts` | fb393591389e73df21d76ed991b54a11f19eba00 |
| `packages/simulation/src/derived-metric-graph.test.ts` | 1fec2234c4a6424f8e607597464f5fcc9b5e04e4 |
| `docs/decisions/0002-company-brain-model.md` | 96e46360440abb0b7819df799a0740aa107bdfed |
| `docs/decisions/0003-simulation-lifecycle.md` | e1832d8ed393f568f82d53b1860fe9dd5a959ab0 |

Private CI run **41340055654**, November 1, at the inspected source revision records:

| Check | Recorded result |
| :--- | :--- |
| Calculation graph suite | 11 tests passed |
| Company Brain readiness suite | 3 tests passed |
| Complete Vitest unit run | 981 passed; 1 skipped |
| Database and worker integration run | 84 passed across 17 files |
| Validation, public layouts and browser smoke jobs | Success |

These results were transcribed from original private CI logs, not newly executed public tests. Raw logs are not republished. [Current verification](REVIEW_CHECKS.md) separately records the five tests anyone can run against the two original public modules.

[My contribution](MY_BACKEND_AND_ALGORITHM_WORK.md) · [Development milestones](DEVELOPMENT_HISTORY.md) · [Overview](../README.md)

