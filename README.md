# Emergence: one hundred ways a world appears

**[Read the notes](https://n-y-l.github.io/emergence-notes/)** ·
[Start here](https://n-y-l.github.io/emergence-notes/start.html) ·
[Reading paths](https://n-y-l.github.io/emergence-notes/routes.html) ·
[Six interactive models](https://n-y-l.github.io/emergence-notes/experiments.html)

A first-person atlas of 100 emergent phenomena: what the parts do, what appears
collectively, why the new description works, and where it stops working.
The intended reader knows graduate physics and mathematics; specialized
biology, neuroscience, economics, and computing vocabulary is introduced locally.

The ten chapters cover bulk behavior; ordering and criticality; quantum matter;
dynamical patterns; living matter; ecology and evolution; brains; societies;
computation and networks; and landscapes, planets, and the cosmos. This is a
bounded selection of major families, not a claim of exhaustive coverage.
Established observations, results about models, and open interpretations are
labeled separately. Every entry includes a concrete question and annotated sources.

## Read offline

Download the repository ZIP, extract it, and open **`index.html`** in a browser.
No installation, server, account, or internet connection is needed to read the
notes, search, use the models, or render equations. External sources require
internet. Default figures and accessible mathematical markup are saved in the
HTML, so the notes also remain readable without JavaScript.

The [single-page atlas](all.html) is convenient for printing. The generated
[Markdown reading copy](docs/atlas.md) includes the introduction, all entries,
and concluding connections. The [glossary](glossary.html) collects recurring terms.

## What the models calculate

| Model | Calculation and limits |
|---|---|
| Diffusion | Exact independent-step probabilities and their Gaussian approximation; step length and duration are one. |
| Collective ordering | Curie–Weiss free energy in the thermodynamic limit, with minima located on a 0.001 magnetization grid; not an exact short-range lattice calculation. |
| Synchronization | 24 Kuramoto oscillators; fourth-order Runge–Kutta, time step 0.02, recorded initial-phase seed. Finite-time coherence is not a proof of frequency locking. |
| Turing instability | Eigenvalue growth rates around a uniform Schnakenberg reaction state; no nonlinear final pattern is simulated. |
| Percolation | Exact cluster enumeration on a finite open square grid; a sample spanning event is not an infinite-system threshold estimate. |
| Segregation | A specified relocation model with conserved populations and recorded seed; a possibility demonstration, not an empirical model of a particular city. |

The model equations, units, boundaries, algorithms, and limitations are beside
each figure. “Save figure” exports genuine vector SVG; “Save calculation” exports
JSON with software version, parameters, seeds, and results. These downloads are
records, not importable sessions. A link remains available for repeating the
download until parameters change. All random draws use Mulberry32 with explicit
unsigned integer seeds. There is no automatic animation or frame-dependent simulation.

## Reproduce and edit

Node.js 22 or newer runs the model tests without installing packages:

```sh
npm test
npm run check
```

To edit and regenerate the committed pages:

```sh
npm ci --ignore-scripts
npm run build
npm test
npm run check
```

The documentation dependencies are pinned. The build typesets equations with
local KaTeX, creates static figure defaults, and generates all reading copies.
Edit `content/*.json` for prose; the JSON strings contain ordinary Markdown and
LaTeX. Do not edit generated HTML or `docs/atlas.md` directly.

| Location | Purpose |
|---|---|
| `content/01-*.json` … `content/10-*.json` | Authoritative chapter prose, stable entry IDs, and annotated sources |
| `content/framework.json`, `content/glossary.json` | Introduction, synthesis, and shared vocabulary |
| `models.js` | Pure, browser-independent calculations |
| `lab-specs.js`, `figures.js`, `app.js` | Model explanations, vector drawing, controls, search, and exports |
| `scripts/build.mjs` | Reproducible reading-page generation |
| `tests/` | Independent identities, limits, convergence, connectivity, and conservation checks |
| `scripts/check-site.mjs` | Local links, anchors, saved figures, and rendering-structure checks |
| `docs/model-defaults.json` | Complete numerical records for the six saved default figures |
| `docs/content-summary.json` | Generated entry, word, and source counts |

For an optional local server, run `npm start` and open
[localhost:8000](http://127.0.0.1:8000). Alternatively run
`python3 -m http.server 8000 --bind 127.0.0.1`; on Windows use `py -3` in place
of `python3`. Stop with Ctrl+C. GitHub Pages serves the committed root files;
there is no runtime service or data collection.

## Sources and license

The [annotated source index](sources.html) states what each reference supports.
No third-party article text or illustrations are reproduced. The style follows
the companion [anyon](https://n-y-l.github.io/anyon-playground/) and
[transport](https://n-y-l.github.io/quantum-transport-notes/) notes.

Original writing and figures: **[CC BY 4.0](LICENSE-CONTENT)**.
Original code: **[MIT](LICENSE-CODE)**.
Copyright © 2026 Neil Yuanting Li. See [LICENSE](LICENSE) for the division and
suggested attribution. Bundled [KaTeX](vendor/katex/LICENSE) retains its MIT license.
