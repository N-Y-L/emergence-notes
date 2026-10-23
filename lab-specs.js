/* Copyright (c) 2026 Neil Yuanting Li. MIT License; see LICENSE-CODE. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.EmergenceLabs=factory();})(globalThis,function(){return [
  {
    "key": "diffusion",
    "title": "Diffusion from a random walk",
    "entry": "diffusion",
    "chapter": "bulk",
    "defaults": {
      "steps": 30,
      "right": 0.5
    },
    "controls": [
      [
        "steps",
        "Number of steps",
        1,
        100,
        1
      ],
      [
        "right",
        "Probability of a right step",
        0.05,
        0.95,
        0.05
      ]
    ],
    "intro": "A walker takes independent steps of length one, to the right with probability $p$ and to the left with probability $1-p$. After $n$ steps its position varies between realizations, but we can calculate the probability of each possible position exactly. The comparison with a Gaussian shows how a smooth description develops as the number of steps grows.",
    "math": "If $j$ steps go right, the displacement is $x=2j-n$ and its probability is $\\binom nj p^j(1-p)^{n-j}$. The mean displacement is $n(2p-1)$ and the variance is $4np(1-p)$. The Gaussian has this same mean and variance. Successive reachable sites are two units apart, so the plotted dots show probability divided by two, for comparison with a continuous probability density.",
    "limit": "Step length and time per step are both one. The Gaussian approximation can assign density outside the finite range of the walk and is poor when too few steps sample the less probable direction.",
    "caption": "Blue dots show the exact distribution; the dashed red curve shows its Gaussian approximation. A bias shifts the mean while the distribution continues to broaden."
  },
  {
    "key": "meanField",
    "title": "Ordering in the Curie–Weiss model",
    "entry": "ferromagnetism",
    "chapter": "order",
    "defaults": {
      "temperature": 0.7,
      "field": 0
    },
    "controls": [
      [
        "temperature",
        "Reduced temperature kBT/J",
        0.2,
        2,
        0.02
      ],
      [
        "field",
        "Reduced field h/J",
        -0.3,
        0.3,
        0.01
      ]
    ],
    "intro": "The Curie–Weiss model contains $N$ spins $s_i=\\pm1$, each coupled equally to all the others. Their mean $m=N^{-1}\\sum_i s_i$ is the magnetization per spin. The pair coupling is $J/N$, with $J>0$, so the interaction energy per spin remains finite as $N$ grows. A field $h$, measured in energy units, favors one sign.",
    "math": "At temperature $T$, the free energy per spin in the thermodynamic limit is $f/J=-m^2/2-(h/J)m+(k_BT/J)[(1+m)\\ln((1+m)/2)+(1-m)\\ln((1-m)/2)]/2$, where $k_B$ is Boltzmann’s constant and $0\\ln0=0$. The interaction favors alignment; the entropy favors the many configurations with small magnetization. Equilibrium selects the global minimum of $f$. The plot subtracts $f(0)$ and locates minima on a magnetization grid with spacing 0.001.",
    "limit": "This free energy is exact for the infinite-range model in the thermodynamic limit. Applied to a short-range magnet it is a mean-field approximation. The calculation contains no spatial domains or relaxation dynamics.",
    "caption": "At zero field, cooling through kBT/J = 1 changes the minimum at zero magnetization into two symmetry-related minima. A nonzero field favors one of them."
  },
  {
    "key": "synchronization",
    "title": "Phase coherence in the Kuramoto model",
    "entry": "synchronization",
    "chapter": "patterns",
    "defaults": {
      "coupling": 2,
      "seed": 17,
      "duration": 20,
      "dt": 0.02
    },
    "controls": [
      [
        "coupling",
        "Coupling K",
        0,
        5,
        0.1
      ],
      [
        "duration",
        "Elapsed model time",
        0,
        40,
        1
      ],
      [
        "seed",
        "Initial-phase seed",
        1,
        100,
        1
      ]
    ],
    "intro": "Each of $N=24$ oscillators has a phase $\\theta_i$, an angle specifying its position in a cycle, and a natural angular frequency $\\omega_i$. The frequencies are equally spaced from $-1$ to $1$ in the chosen inverse-time unit. Sinusoidal coupling of strength $K$, also measured in inverse time, changes each oscillator’s instantaneous speed according to its phase differences from the others.",
    "math": "The dynamics are $\\dot\\theta_i=\\omega_i+(K/N)\\sum_j\\sin(\\theta_j-\\theta_i)$. The magnitude $r=|N^{-1}\\sum_j e^{i\\theta_j}|$ measures phase coherence: $r=1$ when all phases agree, while a small $r$ means that their unit vectors largely cancel. The red line represents this average vector. Fourth-order Runge–Kutta integration uses time step 0.02; the seed fixes the initial phases.",
    "limit": "The display is a finite-time snapshot of a finite population. Frequency locking means equal long-time average frequencies, which cannot be established from a single value of phase coherence.",
    "caption": "The two circles compare the initial phases with those at the selected time. Increasing the coupling can bring phases together despite different natural frequencies."
  },
  {
    "key": "turing",
    "title": "A reaction–diffusion instability",
    "entry": "turing-patterns",
    "chapter": "patterns",
    "defaults": {
      "ratio": 10
    },
    "controls": [
      [
        "ratio",
        "Diffusion ratio Dᵥ / Dᵤ",
        1,
        40,
        0.5
      ]
    ],
    "intro": "Two reacting concentrations, $u$ and $v$, have a uniform steady state that is stable without diffusion. Diffusion ordinarily smooths a disturbance. Here unequal diffusion rates can instead destabilize the coupled system, allowing some spatial variations to grow. We calculate the growth rates of small disturbances.",
    "math": "In dimensionless units the reactions and diffusion obey $\\partial_tu=0.1-u+u^2v+\\nabla^2u$ and $\\partial_tv=0.9-u^2v+D\\nabla^2v$. Here $D$ is the diffusion coefficient of $v$ divided by that of $u$. The uniform state is $(u,v)=(1,0.9)$. A Fourier disturbance with wave number $k$ evolves according to the matrix $\\left(\\begin{smallmatrix}0.8-k^2&1\\\\-1.8&-1-Dk^2\\end{smallmatrix}\\right)$. The largest real part of its eigenvalues is the plotted growth rate. A positive rate means exponential growth within the linear approximation.",
    "limit": "These are Schnakenberg reaction kinetics. The calculation predicts the onset of instability, not the eventual stripe or spot pattern. It samples a continuous range of wave numbers; a finite domain permits only the modes compatible with its boundaries.",
    "caption": "At equal diffusion rates all modes decay. A sufficiently large ratio allows a band of nonzero wave numbers to grow while the uniform mode remains stable."
  },
  {
    "key": "percolation",
    "title": "Connectivity in site percolation",
    "entry": "percolation",
    "chapter": "computation",
    "defaults": {
      "occupation": 0.59,
      "seed": 17,
      "size": 32
    },
    "controls": [
      [
        "occupation",
        "Site occupation probability",
        0,
        1,
        0.01
      ],
      [
        "seed",
        "Disorder seed",
        1,
        100,
        1
      ]
    ],
    "intro": "Each site of a $32\\times32$ square grid is independently occupied with probability $p$. Occupied sites connect across a shared edge. A cluster is a set of occupied sites joined by such connections; a spanning cluster reaches both the top and bottom boundaries. Increasing local occupancy can therefore create a path across the entire grid.",
    "math": "The calculation identifies every connected cluster in the displayed sample. Boundaries are open, so opposite edges are not joined. Keeping the seed fixed reuses the same random numbers: increasing $p$ adds sites without removing any. Red sites with white dots belong to spanning clusters; blue sites belong to the other clusters.",
    "limit": "An infinite-lattice critical probability describes a limit of large systems. One sample’s first spanning event does not determine that limit; estimating it requires repeated samples and analysis of size dependence.",
    "caption": "A spanning path appears at a sample-dependent occupation probability. Changing the seed changes the sample and can move this first spanning event."
  },
  {
    "key": "segregation",
    "title": "Segregation in a relocation model",
    "entry": "segregation",
    "chapter": "societies",
    "defaults": {
      "threshold": 0.4,
      "seed": 17,
      "sweeps": 20,
      "size": 24
    },
    "controls": [
      [
        "threshold",
        "Requested same-group neighbor fraction",
        0,
        1,
        0.05
      ],
      [
        "sweeps",
        "Maximum relocation sweeps",
        0,
        60,
        1
      ],
      [
        "seed",
        "Placement and relocation seed",
        1,
        100,
        1
      ]
    ],
    "intro": "A $24\\times24$ grid holds members of two groups and about 20% vacant sites. A member requests a move when the fraction of its occupied neighbors in the same group falls below a chosen threshold. Repeated moves change the neighborhood of other members, allowing a local rule to reorganize the whole grid.",
    "math": "The neighborhood consists of the eight surrounding sites; opposite edges of the grid are identified. A member without occupied neighbors makes no move. Each sweep visits positions in a seeded random order. A member below its threshold moves to a uniformly chosen vacancy, even if the new location also fails the threshold. An arrival is not moved again during that sweep. Blue squares and red squares with white dots distinguish the groups; blank sites are vacancies.",
    "limit": "Both group populations are conserved. A run stops when all members meet their thresholds or the sweep limit is reached. This variant of a Schelling model isolates a possible mechanism; it contains no housing prices, geography, or discriminatory institutions with which to assess their empirical contributions.",
    "caption": "The panels show the initial and final arrangements. The fraction of occupied neighbor pairs that belong to the same group measures spatial separation. The number of members still below their individual threshold shows whether further moves are possible."
  }
];
});
