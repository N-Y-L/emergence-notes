# Figures and dependencies

The six SVG figures in `figures/` are original, reproducible drawings of the
models in `models.js`. Their default parameters are stored in
`docs/model-defaults.json`. The build regenerates their static versions and the
browser uses the same drawing functions for parameter changes.

Original figures: © 2026 Neil Yuanting Li, CC BY 4.0. No third-party photographs,
illustrations, or article figures are reproduced. The linked interactive
explanations by Bartosz Ciechanowski are a reading recommendation, not a source
of copied code or assets.

KaTeX, including its fonts and MIT license, is bundled under `vendor/katex/`
for offline mathematical typesetting. Its version is pinned in `package.json`.
