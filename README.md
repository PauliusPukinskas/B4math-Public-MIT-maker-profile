# B4Math

**Rehearse a business decision, inspect its assumptions, then compare it with what happened.**

I founded B4Math to help companies reason through decisions about pricing, operations and investment. I built the backend and decision logic around persistent company context, explicit alternatives, deterministic calculations and reviewed outcome learning.

**Paulius Pukinskas · Solo founder · Backend and algorithms · 2026**

[Try the live synthetic workspace](https://b4math.com/demo) · [My technical contributions](docs/MY_BACKEND_AND_ALGORITHM_WORK.md) · [Inspect original source](public-code/README.md) · [Build history](docs/DEVELOPMENT_HISTORY.md)

[![B4Math live synthetic decision workspace](assets/live-screenshots/2026-11-07/b4math-workspace.jpg)](https://b4math.com/demo)

*Captured from the working public demo on November 7, 2026. The example company and its data are synthetic.*

## What I built

My main contribution is the system behind the interface: how company knowledge is stored, how a decision becomes a calculation, and how the result remains traceable.

| Area | My work | Inspect the evidence |
| :--- | :--- | :--- |
| Company Brain | Versioned company context, evidence lineage, review state and saved decision inputs | [Backend walkthrough](docs/MY_BACKEND_AND_ALGORITHM_WORK.md#company-brain-and-decision-state) |
| Decision and simulation logic | Explicit alternatives, calculation contracts, uncertainty handling and numerical safeguards | [Engineering choices](docs/ENGINEERING.md) |
| Business arithmetic | Revenue break even from quoted prices; economics that preserve unknown costs | [Two original TypeScript modules](public-code/README.md) |
| Durable workflows | Database persistence, background execution and retry boundaries | [Dated development record](docs/DEVELOPMENT_HISTORY.md) |
| Outcome learning | Compare a saved expectation with an observed result; require review before changing company knowledge | [Live walkthrough](docs/PRODUCT_WALKTHROUGH.md#outcome-learning) |
| Integration and verification | External model APIs, application integration, regression tests and deployment work | [Verification and credits](docs/VERIFICATION_AND_CREDITS.md) |

I made the architecture and product decisions and worked hands on in the backend and algorithms. AI coding assistants helped with implementation, especially frontend iteration and repetitive tasks. Runtime language models are pretrained models accessed through APIs.

## Follow one decision through the product

| Review company context | Review what happened |
| :---: | :---: |
| [![Company Brain separates reviewed facts, assumptions and evidence gaps](assets/live-screenshots/2026-11-07/b4math-company-brain.jpg)](docs/PRODUCT_WALKTHROUGH.md#company-brain) | [![Outcome learning requires owner review before changing company knowledge](assets/live-screenshots/2026-11-07/b4math-outcome-learning.jpg)](docs/PRODUCT_WALKTHROUGH.md#outcome-learning) |
| Facts, goals, assumptions and gaps stay distinct. | An observed result becomes a proposed learning for review. |

### Run the analysis

[![Executed B4Math decision brief showing the recommendation, evidence limits and next test](assets/live-screenshots/2026-11-07/b4math-decision-result.jpg)](docs/PRODUCT_WALKTHROUGH.md#decision-result)

This capture follows a completed run of the public sample's deterministic analysis. It keeps the existing pricing option available because the supplied evidence does not justify changing course. The result exposes the uncertainty, next validation step and stopping boundary.

[See all six current captures and reproduce the walkthrough](docs/PRODUCT_WALKTHROUGH.md). Earlier development screenshots remain in [the visual evidence archive](docs/VERIFICATION_AND_CREDITS.md#visual-evidence).

## Two calculations you can inspect

The public source contains two unchanged modules from the application, with a separate standalone test suite.

| Engineering choice | Concrete behavior |
| :--- | :--- |
| Keep price arithmetic separate from demand assumptions | Changing $149 to $169 requires 149 / 169, about 88.2%, of the original paid volume to hold revenue constant. Customer retention still needs evidence. |
| Preserve unknown costs | With an unknown implementation cost, net impact and payback remain `null`. An unknown annual impact produces no economics result. |

With Node 22.16 or newer, no installation or credentials are needed:

```bash
cd public-code
npm test
```

[Source provenance and verification](public-code/README.md) · [Current verification record](docs/REVIEW_CHECKS.md)

## How the project developed

Earlier product iterations preceded the July 2026 migration to the custom TypeScript stack. July work established company state and durable execution; later iterations developed evidence handling, outcome learning, numerical correctness and the current Company Brain → Decide → Rehearse → Learn workflow.

The [development history](docs/DEVELOPMENT_HISTORY.md) records specific milestones and tradeoffs. The [architecture](assets/architecture.svg) shows the main system boundaries.

This repository is a public engineering case study with selected original source. The commercial application and most implementation remain private. Synthetic demonstrations and correctness tests establish inspectable behavior; real business forecast calibration remains work to do. [Scope and credits](docs/VERIFICATION_AND_CREDITS.md) distinguish these evidence types.
