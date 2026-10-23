# Notes on emergent properties

**[Read the notes](https://n-y-l.github.io/emergence-notes/)** ·
[Introduction](https://n-y-l.github.io/emergence-notes/start.html) ·
[Reading paths](https://n-y-l.github.io/emergence-notes/routes.html) ·
[Interactive models](https://n-y-l.github.io/emergence-notes/experiments.html)

These notes explain how interactions among many constituents give rise to
collective properties. Ten chapters develop 100 examples, from pressure and
magnetism through living matter, neural activity, societies, computation, and
the cosmos. Each entry explains a mechanism and cites the work supporting it.

The assumed background is graduate mathematics, basic graduate quantum
mechanics, and introductory condensed matter. Other specialized terms are
defined as they arise. The writing is Codex-assisted; read it with a grain of
salt and check the cited sources.

## Reading offline

Download and extract the repository ZIP, then open **`index.html`** in a browser.
No installation, server, or internet connection is needed to read, search, or
use the models. External references require internet access. The equations and
initial figures are saved in the pages, so the notes remain readable without
JavaScript.

Use [all.html](all.html) for printing, [docs/notes.md](docs/notes.md) for the
complete Markdown reading copy, or the [glossary](glossary.html) for recurring
terms. [Reading paths](routes.html) connect shorter sequences of entries.

## Models and reproducibility

| Model | Calculation |
|---|---|
| Random walk | Exact independent-step probabilities and their Gaussian approximation. |
| Curie–Weiss magnet | Thermodynamic-limit free energy, with minima located on a 0.001 magnetization grid. |
| Kuramoto oscillators | 24 coupled phases, integrated with fourth-order Runge–Kutta and time step 0.02. |
| Reaction–diffusion instability | Linear growth rates around a uniform Schnakenberg reaction state. |
| Site percolation | Exact cluster enumeration on a finite square grid with open boundaries. |
| Relocation | A specified Schelling-type model with conserved group populations and periodic boundaries. |

Equations, parameters, units, and limitations accompany the figures. The
[default calculation records](docs/model-defaults.json) contain numerical
results, parameters, and seeds; the [SVG figures](assets/figures/) are genuine
vector graphics. Random draws use Mulberry32 with explicit unsigned integer
seeds. Parameter changes recompute the models without automatic animation.

## Editing and checking

Edit `content/*.json` for prose. These strings contain ordinary Markdown and
LaTeX. HTML pages, the search index, figures, and `docs/notes.md` are generated;
edit their sources and rebuild rather than changing the outputs directly.

With Node.js 22 or newer:

```sh
npm ci --ignore-scripts
npm run build
npm test
npm run check
```

The model tests and site checks also run without installing dependencies when
using the committed pages. The build uses pinned local Markdown and KaTeX
dependencies. Tests cover identities, limiting cases, convergence, connectivity,
and conservation; the site checker verifies local links, anchors, and figures.

| Source | Purpose |
|---|---|
| `content/01-*.json` … `content/10-*.json` | Chapter prose, entry IDs, and references |
| `content/framework.json`, `content/glossary.json` | Introduction, concluding comparisons, and definitions |
| `models.js` | Browser-independent calculations |
| `lab-specs.js`, `figures.js`, `app.js` | Model explanations, figures, controls, and search |
| `scripts/build.mjs` | Page and reading-copy generation |
| `tests/`, `scripts/check-site.mjs` | Numerical tests and site checks |

For a local preview, run `npm start` and open
[localhost:8000](http://127.0.0.1:8000). This uses Python 3; on Windows, the
alternative is `py -3 -m http.server 8000 --bind 127.0.0.1`. Stop with Ctrl+C.
GitHub Pages serves the committed root files. There is no runtime service or
data collection.

## References and license

The [reference index](sources.html) identifies what each source supports.
Related physics is developed in the companion [anyon](https://n-y-l.github.io/anyon-playground/)
and [transport](https://n-y-l.github.io/quantum-transport-notes/) notes.

Original text and figures: **[CC BY 4.0](LICENSE-CONTENT)**.
Original code: **[MIT](LICENSE-CODE)**.
Copyright © 2026 Neil Yuanting Li. See [LICENSE](LICENSE) for the division and
suggested attribution. Bundled [KaTeX](vendor/katex/LICENSE) retains its MIT license.
