# My backend and algorithm work

**Paulius Pukinskas · Solo founder, product architect and hands on backend developer**

I lead B4Math's technical direction and work on the application behind the interface: company state, calculation contracts, model integration, durable execution and outcome review. Coding assistants support implementation and debugging, especially interface iteration and repetitive work.

## Where my work sits

| Area | My responsibility | Evidence to inspect |
| :--- | :--- | :--- |
| Calculation pipeline | Translate business questions into explicit inputs, dependencies and comparable outcomes | [Accounting graph and validation cases](BACKEND_CASE_STUDIES.md#1-a-calculation-graph-for-business-outcomes) |
| Persistent company knowledge | Model revisions, evidence relationships and context used by decisions | [Revision and concurrency example](BACKEND_CASE_STUDIES.md#2-company-memory-that-can-be-revisited) |
| Asynchronous execution | Preserve submitted work and results across delivery failures and retries | [Failure matrix](BACKEND_CASE_STUDIES.md#3-background-execution-with-durable-state) |
| Numerical correctness | Preserve missing inputs, enforce units and retain meaningful objectives | [Original regression cases](BACKEND_CASE_STUDIES.md#original-source-and-verification-record) |
| Outcome learning | Separate an observed result from a proposed change to company knowledge | [Working walkthrough](PRODUCT_WALKTHROUGH.md#outcome-learning) |
| Integration | Connect external model APIs, application services, tests and deployment | [Engineering boundaries](ENGINEERING.md) and [build history](DEVELOPMENT_HISTORY.md) |

The [backend cases](BACKEND_CASE_STUDIES.md) follow substantial examples from problem through design choice to verification. They describe existing application behavior without publishing the private implementation.

## Source a reader can run

| Original module | Design choice |
| :--- | :--- |
| [Pricing break even](../public-code/pricing-break-even.ts) | Derive a revenue identity only from explicit, compatible prices |
| [Company improvement economics](../public-code/company-improvement.ts) | Preserve unknown costs and withhold unsupported returns |

Both files match the original private source blobs. The standalone public tests are documented in [public-code](../public-code/README.md). They are small supporting examples; the accounting graph, persistence and worker implementation remain private.

## Contribution and assistance

I am the sole founder and take responsibility for product direction, architecture and substantial backend and algorithm development. The project uses libraries, coding assistants and external pretrained models. This account identifies my work and technical decisions without attributing every generated or collaborative line exclusively to me.

The public screenshots demonstrate the product workflow. Synthetic fixtures test defined behavior. Forecast calibration against real company outcomes is a separate, unfinished evaluation task.

[Overview](../README.md) · [Backend cases](BACKEND_CASE_STUDIES.md) · [Credits](VERIFICATION_AND_CREDITS.md)

