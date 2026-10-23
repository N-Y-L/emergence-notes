# Notes on emergent properties

Neil Yuanting Li

Slide a plate across a layer of water. The water resists, and the resistance grows with the difference in velocity across the layer. Viscosity is the coefficient relating this velocity gradient to the tangential force per area, in the regime where the relation is linear. A single water molecule has no such coefficient. Viscosity belongs to the fluid: molecular motion and interactions carry momentum between regions moving at different speeds.

This is an example of **emergence**: the behavior of many interacting constituents admits a description in terms of collective properties that are absent from the constituents considered separately. The microscopic laws still apply. What changes is which quantities explain the experiment. To predict a slow flow, we usually need the fluid's density and viscosity rather than the position of every molecule.

I use the word in this practical sense throughout these notes. The examples range from pressure and magnetism to cells, collective decisions, and computation. They share a problem—how the behavior of the parts gives rise to a useful description of the whole—but they need different explanations.

## Choosing the variables

A **microstate** specifies the detailed variables of a model. For a classical gas, these could be all the molecular positions and momenta. A **macrostate** specifies selected collective quantities, such as density and total energy. Many microstates correspond to the same macrostate. The distinction depends on the model: an individual cell may be one constituent in a tissue model and a complicated collective system in a molecular model.

**Coarse-graining** means deliberately discarding some detail. For a fluid, we can divide space into small regions and average the mass and momentum within each. Each region should contain many molecules while remaining small compared with the length over which the flow changes appreciably. The resulting density and velocity fields describe the flow at that resolution.

The difficult step comes next. We need equations for the retained variables. Eliminating a microscopic variable does not necessarily eliminate its influence: the coarse description may acquire noise, dependence on its past, or additional interactions. A fluid's usual equations work when the omitted motions relax rapidly compared with the flow we follow. If an internal orientation relaxes slowly, as it can in a liquid crystal, that orientation must also be kept.

An **effective theory** is such a description, valid for a specified range of scales and conditions. Its coefficients retain information about the unresolved physics. When deriving it requires an approximation, we must identify that approximation and, where possible, estimate its error.

## Why averages can be reliable

Let $x_1,\ldots,x_N$ be random variables with common mean $\mu$ and variance $\sigma^2$. Angle brackets denote an average over their joint probability distribution. Their covariance is

$$C_{ij}=\langle(x_i-\mu)(x_j-\mu)\rangle.$$

For the sample average $\bar x=N^{-1}\sum_i x_i$, expanding the square gives

$$\operatorname{Var}(\bar x)=\frac{1}{N^2}\sum_{i,j}C_{ij}.$$

If distinct variables are uncorrelated, only the $N$ diagonal terms remain, and $\operatorname{Var}(\bar x)=\sigma^2/N$. The uncertainty in the average, measured by its standard deviation, then decreases as $N^{-1/2}$.

The sum also tells us when this argument fails. Suppose every distinct pair has the same positive covariance $c\sigma^2$, with $0<c\leq1$. Then

$$\operatorname{Var}(\bar x)=\sigma^2\left[\frac{1}{N}+c\left(1-\frac{1}{N}\right)\right].$$

As $N$ grows, the variance approaches $c\sigma^2$. Repeating a correlated observation supplies less independent information than repeating an uncorrelated one. This simple calculation will reappear in different forms when we discuss fluctuations near a phase transition and the reliability of collective estimates. For a real system, the covariances have to be calculated or measured; equal covariance is only an illustrative model.

## What changes beyond averaging

Some collective behavior requires more than suppressing fluctuations. A magnet can choose a direction even when its microscopic interaction treats opposite directions equally. A disturbance can grow into a convection pattern. Coupled cells can sustain a rhythm. These are changes in organization, and we need to explain why the particular organization persists.

Anderson's [“More Is Different” (1972)](https://doi.org/10.1126/science.177.4047.393) makes the central distinction: knowing fundamental laws does not by itself supply the concepts and calculations needed at every larger scale. His discussion of broken symmetry concerns states that have less symmetry than the laws governing them. In the magnet, reversing all magnetic moments leaves the zero-field interaction unchanged, while a magnetized state picks one of the possible directions. The [chapter on collective order](../order.html) develops the statistical mechanics behind this choice.

Different microscopic systems can also approach the same large-scale behavior, a property called **universality**. Wilson's [1971 work on critical phenomena](https://doi.org/10.1103/PhysRevB.4.3174) made changing the observation scale part of the calculation. The interactions of the coarse description change as finer detail is removed. Near a continuous phase transition, this can explain why some microscopic differences cease to affect the leading behavior. Universality is a result to establish for a specified class of systems, rather than a reason to assume that similar pictures share a mechanism.

## Scope of the notes

The physics assumes graduate mathematics, basic graduate quantum mechanics, and introductory condensed matter. Specialized terms from biology, neuroscience, economics, and computing are introduced where they are needed. Each entry develops a mechanism and links to sources for the argument. The [glossary](../glossary.html) collects recurring definitions.

The catalogue distinguishes established phenomena, results within models, and open interpretations. These labels refer to an entry's central claim. A model may explain an observed effect without establishing that it is the only mechanism, while a well-measured effect may still lack an agreed explanation. The text makes those distinctions locally.

The chapters form a continuous route; the [reading paths](../routes.html) connect a smaller number of examples across fields. Six [interactive models](../experiments.html) let us change parameters and inspect the consequences. For related quantum physics, see the [anyon](https://n-y-l.github.io/anyon-playground/) and [transport](https://n-y-l.github.io/quantum-transport-notes/) notes.


## 1. From particles to bulk behavior

A glass of water has temperature, pressure, viscosity, and surface tension. These properties describe distributions and responses of molecules, rather than attributes of an isolated molecule. Their usefulness depends on averaging over enough microscopic motion while retaining the quantities that control the experiment.

Temperature and entropy describe energy exchange and the statistical weight of macroscopic states. Pressure, diffusion, sound, and viscosity follow the transport of conserved quantities. Elasticity and surface tension describe the cost of deformation, while screening shows how the surrounding material modifies a perturbing field. Hydrodynamics combines these ideas: it retains slowly varying fields, constrains their evolution by conservation, and represents faster processes through an equation of state and transport coefficients. This change of description can be effective far from any phase transition.

### 1. Temperature and thermal equilibrium

A gas thermometer and a metal thermometer have different microscopic degrees of freedom, yet they agree after equilibrating with the same bath. Their agreement follows from the quantity that energy exchange equalizes. It need not imply equal energies per particle: rotations, vibrations, interactions, and quantum level spacings all affect how a body stores energy.

Consider two weakly coupled bodies with fixed combined energy $E$. Let $\Omega_A(E_A)$ count states in a narrow energy interval compatible with the other constraints on $A$, and write $S_A=k_B\ln\Omega_A$, where $k_B$ is Boltzmann's constant. Neglecting the interaction energy, the combined state count is proportional to $\Omega_A(E_A)\Omega_B(E-E_A)$. At a stable maximum,

$$\frac{\partial S_A}{\partial E_A}=\frac{\partial S_B}{\partial E_B},\qquad \frac1T=\left(\frac{\partial S}{\partial E}\right)_{V,N}.$$

Volume $V$ and particle number $N$ are held fixed in the derivative. Reciprocal temperature is the entropy slope. For macroscopic bodies with ordinary stable thermodynamics, the state count is sharply concentrated near this maximum, making temperature reproducible despite microscopic fluctuations.

For a small system in a much larger bath, expanding the bath entropy gives $S_B(E-E_i)\simeq S_B(E)-E_i/T$. Its number of compatible bath states is therefore proportional to $e^{-E_i/(k_BT)}$, the Boltzmann weight of system state $i$. The same temperature governs a gas's velocity distribution and a spin's level populations because both exchange energy with the bath. A thermometer measures a property calibrated against this parameter.

This reasoning requires equilibration of the relevant degrees of freedom. In a driven material, electrons and lattice vibrations may exchange energy slowly enough to have different effective temperatures. A single reading then characterizes only the degrees of freedom to which the instrument responds.

**Sources**

- [Tong, Statistical Physics, §1.2.2 and §1.3](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html). Entropy maximization, thermal equilibrium, and the canonical distribution.

### 2. Pressure as momentum transfer

A piston receives separate molecular impacts but feels a nearly steady force. In the local rest frame of an equilibrium fluid, pressure is the normal momentum transferred per unit area and time, averaged over scales large compared with individual collisions. A moving fluid also carries momentum through a surface by bulk advection; this contribution must be separated from pressure.

Take $N$ noninteracting particles of mass $m$ in a rectangular box of volume $V$. A particle with normal velocity $v_x$ transfers $2m|v_x|$ when it reflects from a wall. It returns after $2L_x/|v_x|$, where $L_x$ is the box length. Summing the average force and dividing by wall area gives

$$p=\frac{Nm}{V}\langle v_x^2\rangle=\frac{Nm}{3V}\langle v^2\rangle.$$

The second equality assumes an isotropic velocity distribution. Classical thermal equilibrium gives $m\langle v^2\rangle=3k_BT$, hence $pV=Nk_BT$. Number density and temperature determine the average momentum flux, although the sequence of impacts remains irregular.

The same accounting applies across an imaginary plane inside the gas: particles crossing it exchange momentum between neighboring regions. Interparticle forces also transmit momentum across such a plane. They contribute substantially in a dense liquid, where the ideal-gas formula no longer applies. In equilibrium, the mechanical pressure agrees with $p=-(\partial F/\partial V)_{T,N}$, where the Helmholtz free energy $F=E-TS$ gives the reversible work of changing volume at fixed temperature.

A scalar pressure describes isotropic normal stress. A sheared fluid or a solid generally requires a stress tensor, whose component $\sigma_{ij}$ is the force in direction $i$ per area across a surface normal to direction $j$. Small sensors also resolve fluctuations hidden by macroscopic averaging. Thus the familiar pressure of a gas is a particularly simple form of the more general transport of momentum.

**Sources**

- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, I §39–2](https://www.feynmanlectures.caltech.edu/I_39.html). Molecular momentum transfer and the ideal-gas equation of state.

### 3. Entropy and the direction of relaxation

Remove a partition confining a gas to half a box. The gas spreads, although reversing all particle momenta would reverse the microscopic trajectory. The statistical explanation concerns how much phase space corresponds to each macroscopic description and how the gas was prepared.

A macrostate specifies quantities such as particle counts in spatial cells. A classical microstate specifies all positions and momenta. Boltzmann entropy is $S_B=k_B\ln\Omega$, where $\Omega$ is the phase-space volume compatible with a macrostate, measured in fixed microscopic units. For an ideal gas expanding freely into twice its initial volume, the available positional volume gains a factor $2^N$, so

$$\Delta S_B=Nk_B\ln 2.$$

At equilibrium, independently distributed particle positions put all $N$ particles in the original half with probability $2^{-N}$. This explains why that macrostate is rarely observed; the relaxation time still depends on the dynamics.

The Boltzmann entropy of a macrostate must be distinguished from the fine-grained Gibbs entropy of a distribution. For probability density $\rho$ on phase space with volume element $d\Gamma$, Hamiltonian evolution preserves $-k_B\int\rho\ln\rho\,d\Gamma$, with a fixed reference measure understood. The distribution develops fine structure and correlations that a macroscopic density measurement does not resolve. For an isolated quantum system, unitary evolution similarly preserves the full-state von Neumann entropy, while a subsystem's entropy can grow through entanglement.

Ordinary relaxation starts from an unusually small region of phase space and evolves toward macrostates occupying much more of it. This argument needs dynamics that actually explores the relevant regions: conserved quantities and restricted motion can prevent equilibration. Reversing an expansion would require preparing the detailed position–momentum correlations generated during its history. Matching the total energy and density alone would not reproduce that exceptional preparation.

**Sources**

- [Tong, Statistical Physics, §1.2.1 and §1.3.3](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html). Boltzmann and Gibbs entropy and their different statistical meanings.

### 4. Diffusion from random motion

A dye spot spreads because more molecules cross from a concentrated region into a dilute one than cross back. Individual molecules need no directional bias. A simple model makes the resulting law explicit: a walker takes independent steps $+a$ or $-a$ every time interval $\tau$, each with probability $1/2$.

The position distribution obeys a discrete update that averages its two neighboring values. Expanding for variation over distances much larger than $a$ and times much longer than $\tau$ gives

$$\partial_tP=D\partial_x^2P,\qquad D=\frac{a^2}{2\tau},\qquad \langle x^2\rangle=2Dt.$$

Here the walker starts at the origin, $P(x,t)$ is its probability density, and $D$ has units of area per time. A localized initial distribution approaches a Gaussian whose width grows as $\sqrt{t}$. Transport across twice the distance therefore takes roughly four times as long.

For many particles, conservation gives $\partial_tc+\nabla\cdot\mathbf j=0$, where $c$ is number concentration and $\mathbf j$ is particle flux. Fick's constitutive law, $\mathbf j=-D\nabla c$, closes this equation and reproduces diffusion for constant $D$. In an interacting mixture, the more general driving quantity is chemical potential, the free-energy change per added particle. Its gradient need not point along the concentration gradient.

Ordinary diffusion requires microscopic memory to decay sufficiently quickly. Before velocity correlations decay, motion can be ballistic, with mean squared displacement proportional to $t^2$. Persistent correlations or broad waiting-time distributions can instead produce anomalous diffusion, for which that displacement is not proportional to time. Flow and reactions add further transport and source terms. An observed slow expansion should therefore be tested over a range of times before assigning it a small constant diffusivity.

**Sources**

- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, I Ch. 43](https://www.feynmanlectures.caltech.edu/I_43.html). Diffusion as molecular transport down a concentration gradient.
- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, I §41–4](https://www.feynmanlectures.caltech.edu/I_41.html). Independent random walks and mean squared displacement.

### 5. Sound as a collective density wave

A spoken word crosses a room without carrying the speaker's air along with it. The propagating disturbance consists of local compression and velocity changes. A pressure excess accelerates adjacent fluid, whose motion creates the next compression.

Write density and pressure as $\rho_0+\delta\rho$ and $p_0+\delta p$ about uniform equilibrium, and let $\mathbf v$ be the small mean velocity. To first order, mass and momentum conservation give

$$\partial_t\delta\rho+\rho_0\nabla\cdot\mathbf v=0,\qquad \rho_0\partial_t\mathbf v=-\nabla\delta p.$$

When heat transfer between neighboring compressed and expanded regions is negligible within a cycle, the response is approximately adiabatic. The equation of state then gives $\delta p=c_s^2\delta\rho$, with $c_s^2=(\partial p/\partial\rho)_s$ and $s$ the entropy per unit mass. Combining the equations yields $\partial_t^2\delta\rho=c_s^2\nabla^2\delta\rho$.

For an ideal gas, $c_s^2=\gamma p_0/\rho_0$, where $\gamma=C_p/C_V$ is the heat-capacity ratio. More generally, sound speed compares the stiffness against compression with the inertia of the fluid. A dense material can transmit sound rapidly if it is correspondingly difficult to compress. The wave's wavelength describes the coordinated density pattern, not the distance traveled by an individual molecule.

Local equilibrium must be established faster than the oscillation, and a wavelength must be large compared with microscopic transport lengths. Viscosity and heat conduction then give small attenuation corrections. Large amplitudes change the local propagation speed and can steepen a wave into a shock. These corrections connect the ideal wave equation to the same momentum and energy transport processes that underlie diffusion and viscosity.

**Sources**

- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, I Ch. 47](https://www.feynmanlectures.caltech.edu/I_47.html). Acoustic wave equation and the adiabatic sound speed.

### 6. Viscosity and the diffusion of momentum

Moving one plate past another with fluid between them requires a force even when the plates never touch. Faster fluid layers transfer momentum to slower neighbors. For a Newtonian fluid, the resulting viscous stress is linear in the local rate of deformation.

In simple shear,

$$\sigma_{xy}=\eta\,\partial_yv_x.$$

Here $v_x$ is velocity along the plates, $y$ measures distance across the gap, and $\sigma_{xy}$ is tangential stress across a surface normal to $y$. The dynamic shear viscosity $\eta$ has units of pascal seconds. Steady flow between plates of area $A$, separation $h$, and relative speed $U$, with no slip at either plate and no imposed pressure gradient, has a linear velocity profile and requires force $F=\eta AU/h$.

In a dilute gas, molecules transport momentum between collisions, giving the estimate $\eta\sim\rho v_{\rm th}\ell$. Here $\rho$ is mass density, $v_{\rm th}$ a thermal speed, and $\ell$ the mean free path. Increasing density shortens $\ell$, approximately compensating for the larger number of momentum carriers. In a dense liquid, intermolecular forces and structural rearrangements dominate the relaxation instead. Different microscopic mechanisms can therefore produce the same leading stress law.

In this shear flow, the work becomes heat at rate $\eta(\partial_yv_x)^2$ per volume. Momentum disturbances spread with kinematic viscosity $\nu=\eta/\rho$, which has the same dimensions as a diffusion coefficient. A polymer solution may retain stress after the motion stops because stretched molecules relax slowly. Such memory requires a time-dependent constitutive relation; a constant viscosity is adequate only when those internal relaxations are fast compared with the experiment.

**Sources**

- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, II §41–1 and §41–2](https://www.feynmanlectures.caltech.edu/II_41.html). Shear viscosity and the viscous stress tensor.
- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, I Ch. 43](https://www.feynmanlectures.caltech.edu/I_43.html). Kinetic estimates for molecular momentum transport.

### 7. Elasticity and persistent constraints

A metal rod returns nearly to its initial length after a small pull because deforming its collective atomic arrangement raises the free energy. Its atoms continue to vibrate throughout. Elasticity describes displacements relative to a stable reference configuration, on time scales over which irreversible rearrangements are negligible.

Let $\mathbf u(\mathbf r)$ be the displacement of material initially at $\mathbf r$. The small-strain tensor $\epsilon_{ij}=(\partial_i u_j+\partial_j u_i)/2$ measures changes of lengths and angles while removing infinitesimal rigid rotations. Expanding about an unstressed configuration gives

$$F-F_0=\frac12\int C_{ijkl}\epsilon_{ij}\epsilon_{kl}\,dV,\qquad \sigma_{ij}=C_{ijkl}\epsilon_{kl}.$$

Repeated indices are summed. The elastic stiffness tensor $C_{ijkl}$ relates strain to stress; $\sigma_{ij}$ is force in direction $i$ per area across a surface normal to $j$. A linear stress law follows from a quadratic expansion of free energy, even when the underlying atomic forces are nonlinear.

For an isotropic solid, two moduli suffice: the bulk modulus penalizes volume change and the shear modulus penalizes distortion at fixed volume. Crystal symmetry generally permits additional independent coefficients. These coefficients include thermal effects as well as bond energetics. In rubber, stretching a polymer network reduces the number of accessible chain configurations, so much of the restoring force is entropic.

An ordinary liquid continually rearranges under sustained shear; a solid retains a restoring stress on the measurement time scale. A material may therefore respond elastically during a rapid pull but flow under a slow load. Glasses achieve finite-time rigidity without periodic atomic order, while defects and bond rearrangements allow permanent deformation at larger loads. The elastic field remains useful as long as its reference configuration persists through the experiment.

**Sources**

- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, II Ch. 39](https://www.feynmanlectures.caltech.edu/II_39.html). Elastic stiffness, strain energy, and the limits of linear elasticity.
- [MIT, Electronic and Mechanical Properties of Materials, Elasticity lectures](https://ocw.mit.edu/courses/3-225-electronic-and-mechanical-properties-of-materials-fall-2007/ebe5b2b88cb75a01b5088a05865e4476_elasticity.pdf). Bonding and entropic contributions to elastic response.

### 8. Surface tension and curved interfaces

A small free drop tends to become spherical because creating liquid–vapor interface costs free energy. Surface molecules have different surroundings from molecules in the interior. The resulting surface tension $\gamma$ is the reversible free-energy cost per added area under specified thermodynamic conditions.

For a clean interface with approximately constant $\gamma$, its free-energy contribution is $F_s=\gamma A$. A spherical drop of radius $R$ has $dA=8\pi R\,dR$ and $dV=4\pi R^2\,dR$. Balancing surface work against the pressure difference gives

$$\Delta p\,dV=\gamma\,dA,\qquad \Delta p=\frac{2\gamma}{R}.$$

This Young–Laplace relation says that the interior pressure is higher, with a greater jump for a smaller drop. It applies to one spherical interface; a thin soap bubble has two. At a general smooth interface, the pressure jump is $\gamma$ times the sum of its two principal curvatures, with signs fixed by the chosen normal.

At fixed volume, a sphere minimizes surface area. Gravity becomes competitive over the capillary length $\ell_c=\sqrt{\gamma/(\Delta\rho g)}$, where $\Delta\rho$ is the density difference between phases and $g$ gravitational acceleration. Small drops are therefore rounded, while larger ones can be strongly deformed by gravity. On a solid substrate, the free energies of the solid–liquid and solid–vapor interfaces also determine the equilibrium contact angle.

Surface tension includes both energetic and entropic effects. Molecules that accumulate at an interface can alter it; spatial gradients of $\gamma$ exert tangential stresses and drive flow. The treatment of an interface as a sharp surface with a constant coefficient becomes inaccurate when the drop radius approaches the molecular interfacial thickness.

**Sources**

- [MIT, Advanced Fluid Dynamics, Section 11: Surface Tension](https://web.mit.edu/2.25/www/225_sect_11.html). Surface free energy, capillary forces, and wetting.
- [Bush, Interfacial Phenomena, Lecture 3: Fluid Statics](https://www.mit.edu/course/1/1.63/OldFiles/www/Lec-notes/Surfacetension/Lecture3.pdf). Curvature–pressure balance and the capillary length.

### 9. Screening by mobile charges

A charge in an electrolyte attracts opposite ions and repels ions of the same sign. Their redistribution weakens its field at large distances. The measured potential therefore belongs to the inserted charge together with the response of the medium.

Consider ions of charges $+q$ and $-q$, each with bulk number density $n_0$, in a solvent of permittivity $\varepsilon$. At temperature $T$, dilute-ion Boltzmann distributions give $n_\pm=n_0\exp(\mp q\phi/k_BT)$ in potential $\phi$. For $|q\phi|\ll k_BT$, the induced charge density is $q(n_+-n_-)\simeq-2n_0q^2\phi/(k_BT)$. Outside the inserted charge, Poisson's equation becomes

$$\nabla^2\phi=\frac{\phi}{\lambda_D^2},\qquad \lambda_D=\sqrt{\frac{\varepsilon k_BT}{2n_0q^2}}.$$

The Debye length $\lambda_D$ measures the screening distance. In three dimensions, linear response to a point charge $Q$ gives $\phi(r)=Qe^{-r/\lambda_D}/(4\pi\varepsilon r)$. At fixed permittivity and density, higher temperature weakens the ionic concentration around the source and lengthens the screening distance. More mobile ions shorten it.

The calculation is self-consistent: the potential changes the ion distribution, and the redistributed ions contribute to that same potential. Using the bare charge's potential throughout would miss this feedback. In the infinite-medium solution, the integrated induced charge compensates $Q$; finite systems must also satisfy their boundary and total-charge constraints.

For a point source, linearization necessarily fails sufficiently close to the origin. The exponential expression describes the weak-field region; a nonlinear core can change its amplitude. Finite ion sizes and strong ionic correlations can further invalidate the dilute mean-field treatment. Metals screen through quantum electronic occupations and may have oscillatory responses, so screening in general need not have the Debye form.

**Sources**

- [Hutchinson, Introduction to Plasma Physics I, §1.2.3: Debye Shielding](https://ocw.mit.edu/courses/22-611j-introduction-to-plasma-physics-i-fall-2003/0d55dc0f7c1c80046ebc862df0e8b314_chap1.pdf). Debye shielding in dilute plasma; the two-mobile-species coefficient is derived here.

### 10. Hydrodynamics from slow conserved fields

Density, velocity, and temperature can predict large-scale fluid motion without specifying molecular coordinates. Conservation explains why these fields remain important: a conserved quantity leaves a region through its boundary, so a fluctuation spread over a long distance generally relaxes slowly.

For a one-component fluid, mass, momentum, and energy provide the basic fields. Local equilibrium assumes that microscopic degrees of freedom relax within a region much smaller than the scale of macroscopic variation. An equilibrium equation of state then relates local pressure, density, and temperature. With mass density $\rho$ and local mean velocity $\mathbf v$, mass conservation is $\partial_t\rho+\nabla\cdot(\rho\mathbf v)=0$.

For an incompressible Newtonian fluid with constant mass density $\rho$ and shear viscosity $\eta$, momentum balance becomes

$$\rho\big[\partial_t\mathbf v+(\mathbf v\cdot\nabla)\mathbf v\big]=-\nabla p+\eta\nabla^2\mathbf v+\mathbf f,\qquad \nabla\cdot\mathbf v=0.$$

Here $\mathbf f$ is force per volume. The advective term $(\mathbf v\cdot\nabla)\mathbf v$ accounts for acceleration as fluid moves into a region of different velocity. The viscous term follows from the constitutive relation between stress and velocity gradients. Conservation fixes the balance equation; it does not fix the numerical viscosity. In the incompressible problem, pressure also enforces the constraint $\nabla\cdot\mathbf v=0$.

The same equations describe chemically different liquids once their coefficients and boundary conditions are supplied. Molecular confinement or driving faster than local relaxation can remove the required separation of scales. Slowly relaxing composition or orientation must be added as extra fields in mixtures or liquid crystals. Even with few fields, nonlinear advection can generate complex vortices and turbulence. The reduction is in the information needed to specify the dynamics, not necessarily in the difficulty of solving it.

**Sources**

- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, II Ch. 40](https://www.feynmanlectures.caltech.edu/II_40.html). Continuity, material acceleration, and incompressible flow.
- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, II §41–2](https://www.feynmanlectures.caltech.edu/II_41.html). Viscous stress and the Newtonian momentum equation.

## 2. Collective order and its limits

Interactions can select an arrangement that persists over distances far larger than the particle spacing. Crystals organize positions, ferromagnets align magnetic moments, and antiferromagnets alternate them. An order parameter is an observable chosen to distinguish these arrangements: the average that detects one kind of order can miss another completely.

This chapter develops that choice of observable and the physics it reveals. Liquid crystals retain directional order while flowing; phase separation organizes composition. Near a continuous transition, growing correlations lead to critical scaling, whose common features can be explained by the renormalization group. The last examples extend the picture: broken continuous symmetries produce soft modes, vortex binding distinguishes the two sides of a BKT transition, and glasses develop rigidity when structural relaxation becomes too slow to observe. These forms of organization have different thermodynamic and dynamical origins.

### 11. Crystallization: free energy and nucleation

Cooling a liquid can produce a repeating density pattern with a definite orientation. The atomic positions are selected collectively: translating a free crystal as a whole leaves its energy unchanged, while displacing one atom relative to its neighbors generally costs energy.

For $N$ particles at positions $\mathbf r_j$, the static structure factor at scattering wavevector $\mathbf q$ detects positional correlations:

$$S(\mathbf q)=\frac1N\left\langle\left|\sum_{j=1}^{N}e^{i\mathbf q\cdot\mathbf r_j}\right|^2\right\rangle.$$

At reciprocal-lattice vectors, which match the crystal periodicity, amplitudes from many particles add coherently. The resulting Bragg peaks distinguish long-range periodic order from the short-range correlations of an ordinary liquid.

At fixed temperature and pressure, equilibrium favors the phase with lower Gibbs free energy $G=E+ pV-TS$. Interaction energy and entropy both matter. Alder and Wainwright's hard-sphere simulations provided a particularly clear example: particles that only exclude overlap can crystallize without any attraction. At high density, an ordered arrangement can allow enough additional particle motion to outweigh the entropy lost by selecting lattice positions. A regular-looking snapshot can therefore belong to the phase with greater total entropy at fixed volume and energy.

Thermodynamic preference does not guarantee immediate crystallization. In a simple nucleation approximation, a spherical crystal region in a metastable liquid has

$$\Delta G(R)=4\pi R^2\gamma-\frac{4\pi}{3}R^3\Delta g,$$

where $\gamma>0$ is interfacial tension and $\Delta g>0$ the bulk free-energy advantage per volume. The barrier peaks at $R=2\gamma/\Delta g$: smaller nuclei tend to shrink, while larger ones can grow. Impurities, interfacial anisotropy, and cooling rate alter this route. They help determine whether the sample crystallizes and which defects remain, even when its equilibrium phase is already known.

**Sources**

- [Alder and Wainwright (1957), Phase Transition for a Hard Sphere System](https://gibbs.ccny.cuny.edu/teaching/s2021/labs/HardDiskSimulation/Alders%26Wainwright1957.pdf). Hard-sphere crystallization without attractive interactions.
- [Feynman, Leighton and Sands, The Feynman Lectures on Physics, II Ch. 30](https://www.feynmanlectures.caltech.edu/II_30.html). Crystal periodicity, reciprocal lattices, and defects.

### 12. Ferromagnetism and spontaneous symmetry breaking

A ferromagnetic domain retains a collective orientation without a continuing applied field. The Ising model isolates one mechanism by assigning a spin $s_i=\pm1$ to each of $N$ lattice sites, representing a moment constrained to one axis:

$$H=-J\sum_{\langle ij\rangle}s_is_j-h\sum_i s_i,\qquad m=\frac1N\sum_i\langle s_i\rangle.$$

The first sum runs over neighbors, $J>0$ favors parallel spins, and $h$ is field energy per spin. At $h=0$, reversing all spins leaves $H$ unchanged. An ordered state with a selected sign of magnetization $m$ breaks this symmetry: its orientation is not shared by every state with the same energy.

Flipping a region inside an ordered state creates a domain wall of unfavorable neighbor pairs. Ordering depends on the competition between the wall's energy and the number of ways walls can occur. Replacing each neighbor by its mean gives $m=\tanh[(zJm+h)/(k_BT)]$, where $z$ is the coordination number. This mean-field approximation predicts a transition but misses spatial fluctuations. The nearest-neighbor chain has no ordered phase at nonzero temperature, whereas Onsager's exact square-lattice solution establishes a finite-temperature transition. Dimensionality changes the balance between excitation cost and entropy.

For a finite zero-field system, an equilibrium average over both orientations gives $m=0$. Spontaneous magnetization is defined by taking the thermodynamic limit before removing an infinitesimal selecting field. Long-range spin correlations also reveal the order.

Real ferromagnets add exchange anisotropy and long-range magnetic fields. Forming oppositely magnetized domains can reduce the external field energy, leaving little net sample moment. Distinguishing such a sample from a disordered magnet therefore requires spatial correlations or domain-sensitive measurements, not only the total magnetization.

**Sources**

- [Onsager (1944), Crystal Statistics. I. A Two-Dimensional Model with an Order-Disorder Transition](https://doi.org/10.1103/PhysRev.65.117). Exact zero-field square-lattice Ising transition.
- [Tong, Statistical Field Theory, §1.1–§1.3](https://www.damtp.cam.ac.uk/user/tong/sft/sfthtml/S1.html). Order parameters, mean-field theory, and dimensionality.

### 13. Antiferromagnetism and staggered order

Regularly alternating magnetic moments can have zero net magnetization. On a bipartite lattice, divided into sublattices $A$ and $B$ with every nearest-neighbor bond joining unlike sublattices, the alternating pattern is detected by comparing their moments.

For spin operators $\mathbf S_i$, the antiferromagnetic Heisenberg model is $H=J\sum_{\langle ij\rangle}\mathbf S_i\cdot\mathbf S_j$, with $J>0$. For $N$ sites divided equally between the sublattices, define

$$\mathbf M=\frac1N\sum_i\langle\mathbf S_i\rangle,\qquad \mathbf L=\frac1N\sum_i\eta_i\langle\mathbf S_i\rangle,$$

where $\eta_i=+1$ on $A$ and $-1$ on $B$. The uniform magnetization $\mathbf M$ may vanish while the staggered magnetization $\mathbf L$ remains nonzero. This is Néel order. Magnetic diffraction detects it at wavevectors matching the alternation, even when a magnetometer records almost no total moment.

One microscopic origin of the exchange is the half-filled, one-orbital Hubbard model. Electrons hop with amplitude $t$ and pay energy $U$ for double occupancy. For $U\gg t$, real charge transfer is costly, but virtual hopping through doubly occupied intermediate states lowers the energy of antiparallel configurations. Second-order perturbation theory gives $J\simeq4t^2/U$. Charge motion can therefore be suppressed while spins still interact on a much smaller energy scale. Magnons are quantized collective oscillations of the ordered spins.

The lattice and symmetry determine whether Néel order survives. A triangle cannot make all three neighboring classical moments antiparallel; this incompatibility is frustration. Strong quantum fluctuations can also prevent order. At nonzero temperature, an isotropic two-dimensional model with short-range exchange has no conventional magnetic long-range order; anisotropy or interlayer coupling can allow real layered materials to order. The relevant observable must follow the spatial organization favored by these interactions.

**Sources**

- [Néel (1970), Nobel Lecture](https://www.nobelprize.org/uploads/2018/06/neel-lecture.pdf). Opposite sublattice magnetizations and antiferromagnetic ordering.
- [Hubbard (1963), Electron correlations in narrow energy bands](https://doi.org/10.1098/rspa.1963.0204). The on-site interaction model whose half-filled strong-coupling limit generates exchange.

### 14. Nematic liquid crystals: alignment without a lattice

A nematic liquid crystal flows while retaining a preferred molecular axis. Its molecules continually change neighbors, but their orientations remain correlated. This distinguishes orientational order from the repeating positional order of a crystal.

For rods whose two ends are equivalent, $\mathbf n$ and $-\mathbf n$ describe the same axis. A vector average can therefore vanish in an aligned sample. In three dimensions, the appropriate order parameter is the tensor

$$Q_{ij}=\left\langle u_i u_j-\frac{\delta_{ij}}3\right\rangle,$$

where $\mathbf u$ is a molecular unit axis. An isotropic distribution has $Q=0$. For a uniaxial nematic, $Q_{ij}=S(n_i n_j-\delta_{ij}/3)$, where $\mathbf n$ is the director, an unoriented axis, and $S$ measures alignment. This form respects the head–tail symmetry.

Alignment need not be caused by attractive forces. In Onsager's model of long rigid hard rods, nearly perpendicular rods exclude more volume from one another than nearly parallel rods. At sufficient concentration, losing orientational entropy can release enough positional freedom to lower the total free energy. The model makes an entropic origin of directional order explicit, much as hard spheres demonstrate an entropic route to crystallization.

Spatial variations of the director cost elastic free energy. Splay makes neighboring axes diverge, twist rotates the director between neighboring planes, and bend curves its direction along itself. Boundaries and electric fields can select the director and thereby control the optical response. Defects occur where the surrounding orientation pattern cannot be continued smoothly through a core without reducing the order. The tensor and these deformation costs provide a continuum description of an orientationally ordered fluid; polar or layered liquid-crystal phases require additional variables.

**Sources**

- [Onsager (1949), The Effects of Shape on the Interaction of Colloidal Particles](https://doi.org/10.1111/j.1749-6632.1949.tb27296.x). Excluded-volume ordering in the slender, rigid hard-rod limit.
- [MIT, Electromagnetic Energy: Liquid Crystal Display Technology, Lecture 26](https://ocw.mit.edu/courses/6-007-electromagnetic-energy-from-motors-to-lasers-spring-2011/c461adab92e83d350d3f7459e593d276_MIT6_007S11_lec26.pdf). Directional optical response and electric-field control of liquid-crystal orientation.
- [University of Michigan, Lecture 7: Excluded Volume](https://compass.engin.umich.edu/wp-content/uploads/2025/03/Lecture-7.pdf). Excluded volume and the self-consistent orientational distribution of hard rods.

### 15. Phase separation and spinodal instability

A binary mixture can prefer two different compositions to one uniform composition. Whether separation starts from small fluctuations or requires a finite nucleus depends on the local stability of the initial mixture.

Let $c(\mathbf r)$ be the local fraction of one component. A minimal free energy is

$$F[c]=\int\left[f(c)+\frac\kappa2|\nabla c|^2\right]dV,$$

where $f$ is bulk free-energy density and $\kappa>0$ penalizes composition gradients. Cahn and Hilliard's gradient construction represents an interface as a smooth composition profile with a free-energy cost. The variational derivative $\mu=\delta F/\delta c=f'(c)-\kappa\nabla^2c$ has units of energy per volume for this dimensionless choice of $c$; it is proportional to the chemical-potential difference per particle.

With constant mobility $M>0$ and flux $\mathbf j=-M\nabla\mu$, composition conservation gives the Cahn–Hilliard equation $\partial_tc=M\nabla^2\mu$. A Fourier perturbation about uniform $c_0$ has growth rate

$$\lambda(k)=-Mk^2[f''(c_0)+\kappa k^2].$$

When $f''(c_0)<0$, a small enrichment lowers local free energy and attracts further material. Long-wavelength fluctuations grow, while the gradient penalty stabilizes short wavelengths. This is spinodal decomposition. For closed boundaries with no flux and the corresponding natural boundary condition on $c$, or for periodic boundaries, the dynamics conserves mean composition and satisfies $dF/dt=-M\int|\nabla\mu|^2dV\leq0$.

The initial wavelength need not be the final domain size: domains usually coarsen as interfacial area decreases. Outside the spinodal region, $f''(c_0)>0$ can stabilize small perturbations even though a two-phase state has lower free energy. Separation then requires nucleation across a barrier. Flow, elastic stress, reactions, or long-range interactions can modify either process and can arrest coarsening.

**Sources**

- [Cahn and Hilliard (1958), Free Energy of a Nonuniform System. I. Interfacial Free Energy](https://doi.org/10.1063/1.1744102). Gradient free energy of nonuniform mixtures and interfacial cost; the dynamics and stability calculation are developed here.

### 16. Criticality and growing correlations

Near a liquid–gas critical point, density fluctuations can scatter visible light and make the fluid cloudy. Their growth reflects the weakening of the restoring force against long-wavelength density changes. At a conventional continuous transition, the correlation length diverges in the ideal infinite equilibrium system.

For a scalar order parameter $\phi$, the connected correlation function at separation $r$ is $G(r)=\langle\phi(\mathbf r)\phi(0)\rangle-\langle\phi\rangle^2$. Subtracting the mean isolates fluctuations. Away from criticality, $G$ typically decays exponentially beyond a correlation length $\xi$. Near a short-range critical point,

$$\xi\sim|t|^{-\nu},\qquad G(r)\sim r^{-(d-2+\eta)}\quad(a\ll r\ll\xi).$$

Here $t=(T-T_c)/T_c$, $d$ is dimension, $a$ a microscopic length, and $\nu,\eta$ critical exponents. A widening interval between $a$ and $\xi$ admits approximately scale-free correlations.

A Gaussian free energy illustrates the softening:

$$F=\frac12\int[r_0\phi^2+\kappa|\nabla\phi|^2]dV.$$

For $r_0,\kappa>0$, a Fourier mode has variance proportional to $k_BT/(r_0+\kappa k^2)$. As $r_0$ decreases, long waves become inexpensive and $\xi=\sqrt{\kappa/r_0}$ grows. Interactions between fluctuations, omitted here, change the critical exponents in many physical systems.

Response grows with the correlated region: a small conjugate field can change many degrees of freedom together. Relaxation also commonly slows as those regions reorganize. Finite size and finite observation time cut off this growth and round thermodynamic singularities. Establishing a critical description therefore requires consistent scaling of correlations and response as a control parameter approaches the transition; a fitted power law in one observable supplies only part of that evidence.

**Sources**

- [Tong, Statistical Field Theory, §2.2: Correlation Functions](https://www.damtp.cam.ac.uk/user/tong/sft/sfthtml/S2.html). Gaussian correlations, correlation length, and critical opalescence.
- [Tong, Statistical Field Theory, §3.2.1](https://www.damtp.cam.ac.uk/user/tong/sft/sfthtml/S3.html). Scaling relations and interacting critical exponents.

### 17. Universality and the renormalization group

A fluid near its liquid–gas endpoint and a uniaxial magnet can share critical exponents despite different constituents and forces. Universality concerns specified long-distance observables after material-dependent units and amplitudes have been accounted for.

The renormalization group averages over short-distance fluctuations and rescales lengths. Effective coupling constants change under this operation. A fixed point is an effective description reproduced by the transformation. Wilson's explanation of universality is that different microscopic models can approach the same fixed point and therefore acquire the same critical scaling.

Near a fixed point, a small coupling perturbation $g$ transforms to leading order as

$$g'\simeq b^y g,$$

with length rescaling factor $b>1$. A relevant perturbation has $y>0$ and grows; an irrelevant one has $y<0$ and diminishes. For $y=0$, the perturbation is marginal, and nonlinear terms in its evolution must be examined. Temperature distance from criticality is usually relevant, explaining why the transition must be approached by tuning. Many details of short-range interactions are irrelevant, explaining why their differences do not change leading exponents.

Spatial dimension, order-parameter symmetry, interaction range, disorder, and additional soft fields help determine the accessible fixed points. A scalar liquid–gas endpoint can have static Ising critical behavior after the appropriate thermodynamic variables are identified. Its dynamics need not match a magnet's: a conserved density relaxes differently from a nonconserved magnetization.

Experiments also have a finite range of lengths and temperatures. A weak perturbation that is relevant may grow appreciably only at very large scales, producing crossover between apparent scaling regimes. Predicting universality therefore requires both identifying a fixed point and checking which physically allowed perturbations destabilize it.

**Sources**

- [Wilson (1982), The Renormalization Group and Critical Phenomena, Nobel Lecture](https://www.nobelprize.org/uploads/2018/06/wilson-lecture-2.pdf). Renormalization-group explanation of universality and critical scaling.
- [Tong, Statistical Field Theory, §3](https://www.damtp.cam.ac.uk/user/tong/sft/sfthtml/S3.html). Fixed points and relevant, irrelevant, and marginal perturbations.

### 18. Goldstone modes and the cost of a slow twist

An ordered phase may select an orientation even though its Hamiltonian favors none. Uniformly rotating that state then costs no energy. Neighboring regions rotated by different amounts do cost energy, but their mismatch becomes arbitrarily small when the variation is spread over a long wavelength. Goldstone modes are the resulting gapless collective excitations of a broken continuous global symmetry.

For an angular coordinate $\theta(\mathbf r)$, invariance under uniform shifts excludes a local restoring term proportional to $\theta^2$. With stiffness $K$, the leading static cost is instead

$$F[\theta]=\frac K2\int|\nabla\theta|^2dV.$$

A sinusoidal distortion has energy density proportional to $Kk^2$ times its squared amplitude, where $k$ is wave number. Introducing an inertial coefficient $\chi$, the Lagrangian density $\mathcal L=\chi(\partial_t\theta)^2/2-K|\nabla\theta|^2/2$ gives frequency $\omega=\sqrt{K/\chi}|k|$. Its quantum excitation energy vanishes as $k\to0$.

Symmetry constrains the soft coordinate, but the dynamics determines the dispersion. An isotropic ferromagnet has a quadratic long-wavelength magnon dispersion rather than this linear one. In nonrelativistic systems, two broken generators can act as conjugate variables of a single mode; Watanabe and Murayama's counting result makes this distinction precise. Broken crystal rotations likewise need not add independent modes beyond those already described by displacement fields.

A weak anisotropy or selecting field adds a cost for uniform rotation and can open a gap. Long-range forces and dynamical gauge fields modify the elementary argument as well. The existence of the ordered state must also be checked: thermal fluctuations can destroy continuous-symmetry order in low dimensions. Within these conditions, the long-wavelength spectrum follows from the symmetries and dynamics of the collective coordinate.

**Sources**

- [Watanabe and Murayama (2012), Unified Description of Nambu-Goldstone Bosons without Lorentz Invariance](https://arxiv.org/abs/1203.0609). Nonrelativistic Goldstone counting, conjugate pairs of generators, and dispersion relations.
- [Watanabe and Murayama (2013), Redundancies in Nambu-Goldstone Bosons](https://arxiv.org/abs/1302.4800). Redundant broken spatial symmetries and the absence of additional rotational phonons.

### 19. Berezinskii–Kosterlitz–Thouless transition: unbinding vortices

Planar spins in an infinite two-dimensional system with short-range isotropic interactions cannot sustain ordinary magnetization at nonzero temperature. Long-wavelength angular fluctuations destroy it. A sharp transition can nevertheless distinguish bound vortex pairs from free vortices.

A vortex has integer winding $q$: the spin angle changes by $2\pi q$ around a loop enclosing its core. Smooth deformations preserve that integer until a core crosses the loop or the angular field becomes undefined. With phase stiffness $\rho_s$, the long-distance free energy is $F=(\rho_s/2)\int|\nabla\theta|^2d^2r$. A unit vortex has $|\nabla\theta|=1/r$ outside core radius $a$, hence

$$E_v\simeq\pi\rho_s\ln(L/a)+E_{\rm core}.$$

The system size is $L$ and $E_{\rm core}$ is the core energy. Approximately $(L/a)^2$ possible vortex positions provide entropy $2k_B\ln(L/a)$. Energy and positional entropy therefore compete at the same logarithmic order.

Below the Berezinskii–Kosterlitz–Thouless transition, opposite vortices remain paired. Spin correlations decay algebraically because smooth fluctuations persist; this is quasi-long-range order. Above the transition, unbound vortices produce exponential decay. The single-vortex estimate identifies the competition, while the effect of vortex pairs must be included in the effective long-distance stiffness. Just below the transition it obeys

$$\rho_s(T_c^-)=\frac{2k_BT_c}{\pi},$$

the universal jump predicted by Nelson and Kosterlitz in this stiffness normalization.

The same reasoning applies to appropriate two-dimensional neutral superfluids. Finite size cuts off the logarithms, while interlayer coupling, anisotropy, or electromagnetic screening can change the transition. Measurements of vortex separation, correlations, and stiffness test different parts of the mechanism. The topology here is the winding of a classical field, distinct from intrinsic topological order in a quantum many-body state.

**Sources**

- [Kosterlitz and Thouless (1973), Ordering, metastability and phase transitions in two-dimensional systems](https://doi.org/10.1088/0022-3719/6/7/010). Vortex binding and the two-dimensional transition mechanism.
- [Nelson and Kosterlitz (1977), Universal Jump in the Superfluid Density of Two-Dimensional Superfluids](https://doi.org/10.1103/PhysRevLett.39.1201). Universal jump of the renormalized superfluid stiffness.

### 20. Glasses and the slowing of structural relaxation

A glass resists shear without the repeating atomic pattern of a crystal. Cooling a liquid while avoiding crystallization can make its structural relaxation time $\tau_\alpha$ exceed the experiment's duration. Rearrangements that would relax a liquid's stress then occur too slowly for the sample to flow appreciably.

The operational glass transition occurs when $\tau_\alpha(T)$ becomes comparable with a preparation or observation time. Its measured temperature therefore depends on cooling rate. Once out of equilibrium, the material can age: its properties continue changing with elapsed time after preparation. Neither finite-time arrest nor aging alone identifies an equilibrium thermodynamic singularity.

Relaxation is spatially heterogeneous. A particle can be confined by its neighbors, and escape may require several neighbors to move. To quantify this, let $w_i(t)=1$ if particle $i$ moves less than a specified microscopic distance during time $t$, and zero otherwise. For $N$ particles, define $Q(t)=N^{-1}\sum_iw_i(t)$ and

$$\chi_4(t)=N\big[\langle Q(t)^2\rangle-\langle Q(t)\rangle^2\big].$$

Expanding the variance expresses $\chi_4$ as a sum of correlations between local mobilities. Independently rearranging particles contribute only local fluctuations; groups moving together add correlated contributions. Its normalization and interpretation depend on the ensemble and displacement threshold, so it is not automatically a unique correlation volume.

Competing theories explain growing barriers through structural organization, cooperative rearrangements, or dynamical facilitation, in which a mobile region enables nearby motion. Kinetically constrained models show explicitly how restricted moves can generate slow heterogeneous dynamics despite simple equilibrium statistics. Distinguishing these explanations requires more than fitting the average relaxation time: spatial mobility correlations and responses to changed preparation provide additional tests. An ideal equilibrium glass transition remains a separate theoretical question from the established observation of kinetic arrest.

**Sources**

- [Berthier et al. (2005), Direct experimental evidence of a growing length scale accompanying the glass transition](https://arxiv.org/abs/cond-mat/0512379). Experimental dynamical susceptibilities and evidence for a growing scale of correlated relaxation.
- [Garrahan and Chandler (2002), Geometrical explanation and scaling of dynamical heterogeneities in glass forming systems](https://arxiv.org/abs/cond-mat/0202392). Heterogeneous relaxation in kinetically constrained facilitation models.

## 3. Quantum matter makes new excitations

The effective particles in matter need not coincide with its microscopic constituents. A phonon is a quantum of coordinated atomic motion. A Fermi-liquid quasiparticle carries electronic charge but has a dispersion and lifetime modified by the surrounding electrons. A fractional quantum Hall quasihole has charge and exchange statistics that emerge from the correlated many-electron state.

The chapter follows these excitations and the states that support them. Bose condensation describes macroscopic occupation of an orbital, while superfluidity and superconductivity concern phase stiffness and response. Mott insulation and Anderson localization suppress transport through interactions and coherent disorder scattering, respectively. Intrinsic topological order and topological bands then show two different ways in which quantum states carry structure beyond an ordinary local order parameter. In each case, identifying the excitation or response is the first step toward determining the low-energy description and its range of validity.

### 21. Fermi liquids and long-lived quasiparticles

Many metals behave at low temperature like electron gases with altered masses and interactions, even when microscopic repulsion is substantial. Landau's Fermi-liquid theory describes their low-energy excitations as quasiparticles: particles dressed by the response of the surrounding electrons, with a sufficiently narrow energy width to remain identifiable.

A Fermi surface separates occupied and unoccupied momentum states at zero temperature in a noninteracting gas. In a Fermi liquid, a corresponding surface survives. For volume $V$, quasiparticle energy $\epsilon^*_{\mathbf p}$, and residual interaction $f_{\mathbf p\mathbf p'}$, the energy change due to small occupation changes $\delta n_{\mathbf p}$ can be expanded as

$$\delta E=\sum_{\mathbf p}\epsilon^*_{\mathbf p}\delta n_{\mathbf p}+\frac{1}{2V}\sum_{\mathbf p,\mathbf p'}f_{\mathbf p\mathbf p'}\delta n_{\mathbf p}\delta n_{\mathbf p'}.$$

Spin labels are suppressed. A quasiparticle retains the electron's charge and, in a spin-rotation-invariant setting, its spin quantum number. Its velocity differs from the bare value. The interaction term also modifies compressibility and magnetic susceptibility, so replacing the electron mass alone is insufficient.

Pauli exclusion blocks most final scattering states near the Fermi surface. In a conventional three-dimensional Fermi liquid, the quasiparticle energy width behaves as $\Gamma\propto\epsilon^2+(\pi k_BT)^2$, where $\epsilon$ is measured from the chemical potential. At zero temperature, $\Gamma/|\epsilon|\to0$ as $\epsilon\to0$: lower-energy excitations become better defined. The same description gives a heat capacity linear in temperature, with coefficient set by the quasiparticle density of states.

This low-energy organization can fail in one dimension, at some quantum critical points, or when another phase intervenes. Spectral line widths and thermodynamic responses must therefore agree with the quasiparticle picture. A fitted effective mass by itself does not establish that the corresponding excitation is long lived.

**Sources**

- [Shankar (1994), Renormalization-group approach to interacting fermions](https://arxiv.org/abs/cond-mat/9307009). Fermi-liquid behavior and competing instabilities from a renormalization-group treatment.
- [Coleman, Many-Body Physics: The Unfinished Frontier](https://www.physics.rutgers.edu/~coleman/620/mbody/unfinished_frontier.pdf). Dressed fermionic quasiparticles and their low-energy effective description.

### 22. Phonons: quantized lattice vibrations

A neutron can scatter from a crystal and transfer a definite energy without adding or removing an atom. It can instead create a phonon, one quantum of a collective vibrational mode.

For a periodic chain of atoms with mass $M$, spacing $a$, displacement $u_j$, momentum $p_j$, and nearest-neighbor spring constant $\kappa$, the harmonic Hamiltonian and mode frequency $\omega_k$ at wave number $k$ are

$$H=\sum_j\left[\frac{p_j^2}{2M}+\frac\kappa2(u_{j+1}-u_j)^2\right],\qquad \omega_k=2\sqrt{\frac\kappa M}\left|\sin\frac{ka}{2}\right|.$$

The normal modes labeled by $k$ are coordinated patterns that oscillate independently. Transforming to these coordinates makes $H$ a sum of harmonic oscillators, with energies $\hbar\omega_k(n_k+1/2)$. Increasing integer $n_k$ by one adds a phonon.

A mode extends through the crystal, but superposing nearby wave numbers produces a wave packet that propagates at group velocity $d\omega_k/dk$. No atom travels with it across the sample. A one-phonon state has zero mean displacement; its energy appears in displacement and momentum fluctuations. A classical lattice wave is instead represented by a coherent superposition of occupation numbers with an oscillating mean displacement. Quantizing a collective coordinate therefore introduces distinct quantum states of the same atomic motion.

At small $|k|a$, $\omega_k\simeq a\sqrt{\kappa/M}|k|$, recovering continuum sound. Anharmonicity allows phonons to interact and decay. A particle description remains useful when a mode's width is small relative to its frequency. Crystal momentum $\hbar k$ is defined modulo a reciprocal-lattice momentum and is not generally the sample's total mechanical momentum. Long-lived modes provide a compact account of energy transport and scattering without requiring the motion of every atom to be tracked.

**Sources**

- [Tong, Solid State Physics, Ch. 4: Phonons](https://www.damtp.cam.ac.uk/user/tong/aqm/solid4.pdf). Normal modes, quantization, phonon dispersion, and anharmonic effects.

### 23. Bose–Einstein condensation and macroscopic occupation

Bose–Einstein condensation is macroscopic occupation of a one-particle orbital. More precisely, trace out all but one particle and normalize the resulting one-particle density matrix to trace $N$, the total particle number. Its matrix elements describe single-particle coherence between positions, and its eigenvalues are orbital occupations that sum to $N$. Condensation occurs when one eigenvalue is proportional to $N$. For a uniform ideal gas this state is the zero-momentum orbital. The macroscopic occupation describes a many-particle state; it does not bind the particles into one object.

For noninteracting bosons of mass $m$, the occupation of a level of energy $\epsilon$ is $[e^{(\epsilon-\mu)/(k_BT)}-1]^{-1}$. Taking the lowest energy as zero, the chemical potential $\mu$ approaches zero from below as the gas is cooled. In three dimensions, the excited states can then hold at most

$$n_{\rm ex}=\frac{\zeta(3/2)}{\lambda_T^3},\qquad \lambda_T=\sqrt{\frac{2\pi\hbar^2}{mk_BT}}.$$

Here $n_{\rm ex}$ is excited-state number density, $\lambda_T$ the thermal wavelength, and $\zeta(3/2)=\sum_{j=1}^{\infty}j^{-3/2}$. At total density $n$, the transition satisfies $n\lambda_T^3=\zeta(3/2)$. Below this temperature $T_c$, particles exceeding the thermal capacity occupy the ground state. Writing the ground-state population as $N_0$, the condensate fraction is $N_0/N=1-(T/T_c)^{3/2}$.

This saturation mechanism requires Bose statistics but no attraction. Collisions are nevertheless important for equilibrating experimental gases. Penrose and Onsager's density-matrix criterion extends the definition to interacting or nonuniform systems: an eigenvalue of order $N$ identifies condensation, and its eigenfunction identifies the occupied orbital. That orbital need not be a plane wave.

The first dilute rubidium experiments observed a narrow component whose population grew on cooling. Trap geometry changes the available excited states, so the uniform-gas formulas do not apply unchanged. A uniform ideal gas in one or two dimensions has no finite-temperature condensation in the thermodynamic limit. Condensation also differs from superfluidity: occupation is a property of the state, whereas persistent flow depends on its response and accessible excitations.

**Sources**

- [Tong, Statistical Physics, §3.5: Bose–Einstein Condensation](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S3.html). Excited-state saturation and the dimension dependence of ideal-gas condensation.
- [Anderson et al. (1995), Observation of Bose-Einstein Condensation in a Dilute Atomic Vapor](https://doi.org/10.1126/science.269.5221.198). Observation of condensation in a trapped dilute rubidium gas.
- [Penrose and Onsager (1956), Bose-Einstein Condensation and Liquid Helium](https://doi.org/10.1103/PhysRev.104.576). Macroscopic-eigenvalue criterion for condensation in an interacting Bose system.

### 24. Superfluidity: excitations and persistent flow

A fluid current decays by transferring energy and momentum to other degrees of freedom. Superfluid flow can persist because the excitation spectrum and the possible changes of its collective phase restrict those decay processes.

For a homogeneous fluid moving past a weak obstacle, an excitation of momentum $\mathbf p$ and rest-frame energy $\epsilon(\mathbf p)$ has energy balance $\epsilon(\mathbf p)-\mathbf v\cdot\mathbf p$. Emission cannot lower the energy if this remains positive. For an isotropic spectrum, Landau's criterion is

$$v<v_L,\qquad v_L=\min_{p>0}\frac{\epsilon(p)}p.$$

This tests a specified excitation channel, rather than proving stability against every possible disturbance.

For a dilute Bose gas of particles of mass $m$, with repulsive contact coupling $g$ and number density $n$, Bogoliubov theory gives $\epsilon(p)=\sqrt{[p^2/(2m)][p^2/(2m)+2gn]}$. At low momentum it becomes $cp$, with $c=\sqrt{gn/m}$, and this spectrum gives $v_L=c$. The ideal gas has quadratic excitations and zero Landau threshold. Condensation alone has therefore not supplied this energetic obstruction to decay.

Phase stiffness is the free-energy cost of a spatial variation in the collective phase $\theta$. For a neutral condensate, $\mathbf v_s=(\hbar/m)\nabla\theta$. Single-valuedness quantizes circulation around a loop avoiding vortex cores in units of $h/m$. Changing the winding requires the phase to become undefined somewhere along the process, for example when a vortex crosses the flowing channel. Such a phase slip connects states that cannot be joined by a small smooth phase deformation.

Boundaries, obstacles, and thermal fluctuations can enable vortex nucleation at velocities below the elementary-excitation estimate. Different channels can thus have different critical velocities for the same fluid. The superfluid fraction measured by flow or rotational response also need not equal the condensate fraction: phase rigidity, occupation, and metastability are related but distinct properties.

**Sources**

- [Dalibard (2016), Interacting gases and the Landau criterion, Collège de France](https://www.college-de-france.fr/en/agenda/lecture/quantum-coherence-and-superfluidity-in-atomic-gases/interacting-gases-and-the-landau-criterion). Interactions, metastable currents, and the Landau criterion.
- [Floerchinger, Quantum Field Theory 1, Lecture 14](https://www.tpi.uni-jena.de/~floerchinger/qft1/lecture14/). Bogoliubov dispersion and the sound-speed Landau threshold.

### 25. Superconductivity and electromagnetic phase stiffness

A superconductor exhibits the Meissner effect: in an appropriate equilibrium regime, magnetic field is expelled from its bulk. This response distinguishes it from a hypothetical perfect conductor, which would preserve previously trapped flux when its resistance vanished.

In conventional superconductors, lattice vibrations can mediate an effective attraction between electrons near the Fermi surface. The Bardeen–Cooper–Schrieffer state coherently combines many overlapping Cooper pairs. For isotropic pairing, let $\xi_{\mathbf k}$ be normal-state energy relative to the chemical potential and $\Delta$ the gap. The fermionic excitation energies are

$$E_{\mathbf k}=\sqrt{\xi_{\mathbf k}^2+|\Delta|^2},$$

Pairing changes the excitation spectrum, while phase stiffness determines the long-wavelength current response.

Write an effective pair field as $\Psi=\sqrt{n_p}e^{i\theta}$. With pair charge $q_p=-2e$, its gauge-invariant momentum is $\hbar\nabla\theta-q_p\mathbf A$. For effective pair mass $m_p$, a local continuum model with a positive quadratic cost for this momentum gives

$$\mathbf j=\frac{n_pq_p}{m_p}(\hbar\nabla\theta-q_p\mathbf A).$$

The ratio $n_p/m_p$ parametrizes superfluid stiffness; in a material it need not be obtained by simply counting microscopic pairs. Taking a curl in a vortex-free region gives $\nabla\times\mathbf j=-(n_pq_p^2/m_p)\mathbf B$. Maxwell's equations then imply exponential field penetration with length $\lambda=\sqrt{m_p/(\mu_0n_pq_p^2)}$ in SI units, where $\mu_0$ is the vacuum permeability. The phase depends on gauge, but this magnetic response does not.

Type-II superconductors can admit quantized flux vortices, whose motion dissipates energy. Strong current, temperature, or field can also destroy the superconducting response. Unconventional superconductors may have gap nodes and pairing mechanisms different from lattice-mediated attraction. The common macroscopic feature is electromagnetic phase stiffness; the isotropic BCS construction supplies one microscopic realization.

**Sources**

- [Bardeen, Cooper and Schrieffer (1957), Theory of Superconductivity](https://doi.org/10.1103/PhysRev.108.1175). Microscopic pairing theory and the excitation gap of conventional superconductors.
- [MIT, Applied Superconductivity, Lecture 10](https://ocw.mit.edu/courses/6-763-applied-superconductivity-fall-2005/resources/lecture10/). Supercurrent, London response, and flux quantization.

### 26. Mott insulation and the separation of charge and spin scales

A partially filled noninteracting band normally permits conduction. Strong interactions can instead make charge transfer costly and produce a Mott insulator. The one-orbital Hubbard model isolates this competition:

$$H=-t\sum_{\langle ij\rangle,\sigma}(c^\dagger_{i\sigma}c_{j\sigma}+\mathrm{h.c.})+U\sum_i n_{i\uparrow}n_{i\downarrow}.$$

Here $c^\dagger_{i\sigma}$ creates an electron of spin $\sigma$ at site $i$, $c_{i\sigma}$ removes one, and $n_{i\sigma}=c^\dagger_{i\sigma}c_{i\sigma}$ is the number operator. The parameters $t$ and $U>0$ are nearest-neighbor hopping energy and the cost of double occupancy. The Hermitian conjugate supplies reverse hopping. At one electron per site, hopping tends to create a doubly occupied site and an empty site. It gains kinetic energy but costs interaction energy.

In the atomic limit $t=0$, the cost is explicit. When $U$ is large compared with the bandwidth, the range of noninteracting band energies, finite hopping need not restore mobile charge. A useful diagnostic is the charge gap

$$\Delta_c=E_0(N+1)+E_0(N-1)-2E_0(N),$$

where $E_0(N)$ is the ground-state energy with $N$ electrons. A positive gap in the thermodynamic limit separates particle-addition and particle-removal thresholds. Meanwhile, virtual hopping generates spin exchange of order $4t^2/U$. Low-energy spin excitations can remain active far below the charge-transfer scale.

The effective low-energy variables are then local moments rather than freely moving electrons. Magnetic order may accompany this state, but the strong-coupling charge gap and an ordering-induced band gap have different origins. Filling matters as much as interaction strength: the same argument does not guarantee insulation away from integer occupancy. Additional orbitals and lattice motion complicate real materials. Ultracold bosons in optical lattices offer a separate realization in which repulsion suppresses number fluctuations at integer filling, with different particle statistics but the same basic competition between hopping and interaction energy.

**Sources**

- [Hubbard (1963), Electron correlations in narrow energy bands](https://doi.org/10.1098/rspa.1963.0204). On-site electronic correlations and the competition between atomic and band limits.
- [Greiner et al. (2002), Quantum phase transition from a superfluid to a Mott insulator in a gas of ultracold atoms](https://pubmed.ncbi.nlm.nih.gov/11780110/). Interaction-driven Mott transition of bosonic atoms in an optical lattice.

### 27. Anderson localization by coherent scattering

Random scattering can slow a classical random walk, but a coherent wave can cease spreading altogether. Interference among repeated scattering paths produces Anderson localization even without classical barriers enclosing each localized state.

For a one-dimensional lattice, the stationary amplitude $\psi_j$ obeys

$$E\psi_j=-t(\psi_{j+1}+\psi_{j-1})+V_j\psi_j.$$

The hopping energy is $t$ and the static on-site energies $V_j$ are independent random variables. Without disorder, eigenstates are extended waves. For generic uncorrelated disorder in this model, eigenstates are exponentially localized, with envelope $|\psi_j|\sim e^{-|j-j_0|a/\xi}$. Here $j_0$ is a localization center, $a$ the lattice spacing, and $\xi$ the localization length. Weak disorder can make $\xi$ much larger than an experimental sample.

A wave packet is a superposition of eigenstates. When the participating states are localized, their evolving phases do not produce ordinary indefinite diffusion. Replacing every scattering amplitude by an independent probability would discard the interference responsible for this result. In three dimensions, localized and extended states can occur at different energies, separated by a mobility edge. The dimensional and symmetry assumptions therefore belong to the localization prediction.

Saturated wave-packet expansion and exponentially suppressed transmission are useful signatures, provided absorption and finite-time trapping are distinguished from coherent localization. Absorption removes wave intensity; localization redistributes a conserved wave into spatially confined states. Inelastic scattering, time-dependent disorder, or interactions can restore transport by opening additional processes. Localization of an interacting many-body system is a separate question. The single-particle result already shows how a wave interacting with many scattering sites can acquire a collective transport length without requiring many occupied particles.

**Sources**

- [Anderson (1958), Absence of Diffusion in Certain Random Lattices](https://doi.org/10.1103/PhysRev.109.1492). Suppression of quantum diffusion by static disorder.
- [Abrahams et al. (1979), Scaling Theory of Localization: Absence of Quantum Diffusion in Two Dimensions](https://doi.org/10.1103/PhysRevLett.42.673). Dimensional scaling of coherent noninteracting disordered transport.

### 28. Fractional charge and anyonic statistics

A two-dimensional electron fluid can support a localized excitation of charge $+e/3$, although every electron has charge $-e$. The excitation is a deficit spread across a correlated many-electron state. Fractionalization assigns new quantum numbers to that collective excitation without subdividing an electron.

Laughlin's state at filling $\nu=1/m$, with odd integer $m\geq3$, makes the construction explicit. Filling is the ratio of electron number to the degeneracy of a Landau level, a quantized cyclotron-energy level. With $z_j=x_j+iy_j$ and magnetic length $\ell_B=\sqrt{\hbar/(e|B|)}$, a suitable field convention gives

$$\Psi_m\propto\prod_{i<j}(z_i-z_j)^m\exp\!\left[-\sum_i\frac{|z_i|^2}{4\ell_B^2}\right].$$

The zeros suppress close electron pairs and reduce repulsive interaction energy. Multiplying by $\prod_i(z_i-\eta)$ creates a quasihole near $\eta$. In the screened Laughlin-fluid regime, its integrated electron deficit carries charge $+e/m$. The electron number is unchanged; compensating charge lies elsewhere, for example at the droplet edge.

Arovas, Schrieffer, and Wilczek evaluated the geometric phase of slowly moving quasiholes. After subtracting ordinary electromagnetic and dynamical phases, taking one quasihole fully around another contributes statistical phase of magnitude $2\pi/m$. An exchange has magnitude $\pi/m$, with sign set by orientation and field convention. These are Abelian anyons: exchanges act by commuting scalar phases, rather than the bosonic or fermionic exchange signs of the constituents.

The calculation requires a gapped correlated bulk and well-separated quasiholes moved slowly enough to avoid other excitations. The wavefunction is exact for special interactions and approximates a phase realized more generally. Interferometry at $\nu=1/3$ has observed phase slips consistent with the predicted full-winding phase, in devices designed to suppress charging effects. Charge, spatial profile, and interference thus provide distinct tests of the emergent excitation.

**Sources**

- [Laughlin (1983), Anomalous Quantum Hall Effect: An Incompressible Quantum Fluid with Fractionally Charged Excitations](https://doi.org/10.1103/PhysRevLett.50.1395). Laughlin trial state and fractionally charged quasiholes.
- [Arovas, Schrieffer and Wilczek (1984), Fractional Statistics and the Quantum Hall Effect](https://doi.org/10.1103/PhysRevLett.53.722). Geometric-phase calculation of quasihole charge and fractional statistics.
- [Nakamura et al. (2020), Direct observation of anyonic braiding statistics](https://arxiv.org/abs/2006.14115). Interference phase slips consistent with a full-winding anyonic phase at filling 1/3.

### 29. Intrinsic topological order in the toric code

Different quantum ground states can agree on every local measurement while differing in observables that wind around the whole system. Kitaev's toric code gives an exactly solvable example of intrinsic topological order, with both nonlocal state structure and fractionalized excitations.

Place a spin-$1/2$ on every edge of a square lattice with periodic boundaries in both directions. This gives a torus, with Hamiltonian

$$H=-J_e\sum_s A_s-J_m\sum_p B_p.$$

The operator $A_s$ is the product of Pauli $X$ operators on edges meeting vertex $s$; $B_p$ is the product of Pauli $Z$ operators around plaquette $p$, an elementary square. They commute because a vertex and plaquette share either zero or two edges. Positive $J_e,J_m$ favor $A_s=B_p=+1$.

These local constraints leave four ground states on the torus. Operators in a small contractible region cannot distinguish them, while loops winding around the two independent torus directions can. A string of Pauli $Z$ operations creates vertex violations at its endpoints; a dual-lattice string of Pauli $X$ operations creates plaquette violations. Separating either pair costs no additional energy. Taking an electric-type endpoint around a magnetic-type endpoint multiplies the state by $-1$. These labels refer to two kinds of constraint violation, not physical electric and magnetic charges.

Weak local perturbations that preserve the bulk gap generally split the ground states by an amount exponentially small in system size. Changing a nonlocal state label requires an operation extending around the system, which accounts for this suppression. Thermal errors are different: a pair of excitations can be created and then separate without a growing energy barrier. For weak local coupling to a thermal bath, the two-dimensional toric code does not become a stable passive quantum memory merely by increasing its size at fixed nonzero temperature.

This intrinsic order differs from the topology of an ordinary band insulator. Its ground-state degeneracy and mutual anyonic statistics belong to the correlated many-body state and cannot be captured by a conventional local order parameter.

**Sources**

- [Kitaev (2003; preprint 1997), Fault-tolerant quantum computation by anyons](https://arxiv.org/abs/quant-ph/9707021). Commuting lattice constraints, topological ground-state degeneracy, and anyonic excitations.
- [Castelnovo and Chamon (2007), Entanglement and topological entropy of the toric code at finite temperature](https://arxiv.org/abs/0704.3616). Finite-temperature topological entropy and the order of the temperature and system-size limits.
- [Alicki, Fannes, and Horodecki (2009), On thermalization in Kitaev's 2D model](https://arxiv.org/abs/0810.4584). System-size-independent upper bound on relaxation time for weak local coupling to a thermal reservoir.

### 30. Topological bands and protected boundaries

An insulating bulk can constrain its boundary to carry electronic states. To distinguish this from accidental surface conduction, we need a bulk property that cannot change continuously while the relevant gap and symmetries remain intact.

For a two-dimensional noninteracting band insulator, the occupied Bloch states define a geometry over crystal momentum. Berry curvature $\Omega_n(\mathbf k)$ measures the geometric phase of band $n$ around an infinitesimal momentum-space loop. Its integral over the Brillouin zone gives the total Chern number:

$$C=\frac1{2\pi}\sum_{n\,\mathrm{occupied}}\int_{\rm BZ}\Omega_n(\mathbf k)\,d^2k,\qquad \sigma_{xy}=C\frac{e^2}{h}.$$

The integer $C$ cannot change under a smooth deformation that keeps occupied and empty bands separated. Here $\sigma_{xy}$ is zero-temperature Hall conductivity, $e$ is the elementary charge, and $h$ is Planck's constant; the sign follows the chosen orientation. Haldane's model demonstrates that a nonzero $C$ is possible with zero net magnetic flux per unit cell.

Across an interface, the difference in Chern numbers fixes the net number of boundary branches moving in one direction minus those moving oppositely. This is bulk–boundary correspondence. An edge with an unpaired directed branch is chiral: static disorder has no reverse-moving partner into which that branch can scatter at the same edge. The statement constrains boundary propagation, while contacts and other channels still affect measured resistance.

Protection can also rely on symmetry. A quantum spin Hall insulator has counterpropagating edge partners related by time reversal. For a single pair, time-reversal-preserving single-particle disorder cannot elastically backscatter one partner into the other. Magnetic perturbations, coupling opposite edges, and suitable interaction processes can change that conclusion. Mercury-telluride quantum wells provide experimental evidence for this boundary conduction. Unlike intrinsic topological order, this band structure requires neither fractionalized charge nor topological ground-state degeneracy on a torus.

**Sources**

- [Haldane (1988), Model for a Quantum Hall Effect without Landau Levels](https://doi.org/10.1103/PhysRevLett.61.2015). Chern-insulating lattice model with zero net magnetic flux per unit cell.
- [Kane and Mele (2005), Z2 Topological Order and the Quantum Spin Hall Effect](https://arxiv.org/abs/cond-mat/0506581). Time-reversal-invariant band topology and quantum spin Hall edge states.
- [König et al. (2007), Quantum Spin Hall Insulator State in HgTe Quantum Wells](https://arxiv.org/abs/0710.0582). Transport evidence for quantum spin Hall boundaries in HgTe wells.

## 4. Rhythms, patterns, and failure

A fluid heated from below can change from conducting heat without moving to transporting it through circulating rolls. The molecular interactions remain the same; a collective state loses stability. Identifying a reference state and calculating which disturbances grow provides one route to understanding pattern formation.

Other organized behavior requires different tools. Coupling can synchronize existing oscillators, chemical reactions can generate a stable rhythm, and dispersion can balance nonlinear wave steepening to preserve a pulse. Turbulence is described through transfer between scales, while avalanches and fracture follow the propagation of local instabilities. Jamming makes the contact geometry itself central to rigidity. Throughout these examples, the useful quantities are measurable features of the dynamics: growth rates, frequencies, wavelengths, energy fluxes, and mechanical response. Similar-looking patterns can arise from different mechanisms, so the explanation must connect those observables to the interactions that produce them.

### 31. Synchronization of coupled oscillators

Oscillators with different natural frequencies can acquire a common frequency through coupling. Each oscillator repeatedly traverses a cycle, and its phase records progress around that cycle. Frequency locking permits a fixed phase offset; it does not require identical instantaneous states.

In the Kuramoto model, $N$ oscillators have phases $\theta_i$, natural angular frequencies $\omega_i$, and coupling strength $K$:

$$\dot\theta_i=\omega_i+\frac{K}{N}\sum_{j=1}^{N}\sin(\theta_j-\theta_i).$$

Define the collective phase $\psi$ and alignment magnitude $r$ by $re^{i\psi}=N^{-1}\sum_j e^{i\theta_j}$. The coupling term becomes $Kr\sin(\psi-\theta_i)$: relative to the collective phase, it speeds a lagging oscillator and slows one that is ahead. If the group rotates at frequency $\Omega$, a locked oscillator satisfies $\omega_i-\Omega=Kr\sin(\theta_i-\psi)$. Locking is possible only when its frequency mismatch is at most $Kr$.

This relation explains the feedback behind collective onset. Alignment increases $r$, strengthening the effective coupling and allowing more oscillators to lock. For suitable frequency distributions and sufficiently strong coupling, a synchronized subset persists in the large-population limit. The threshold and its character depend on that distribution and the coupling structure.

A phase-only description assumes that amplitude disturbances relax quickly compared with changes in timing. Strong coupling, delays, noise, or sparse connections can invalidate this reduction. Experimentally, stable phase differences and a response to altered coupling provide stronger evidence for mutual synchronization than a shared frequency alone. A common external driver can entrain otherwise uncoupled oscillators, so its influence must be separated from interactions among the units.

**Sources**

- [Strogatz (2000), From Kuramoto to Crawford: exploring the onset of synchronization in populations of coupled oscillators](https://doi.org/10.1016/S0167-2789(00)00094-4). Onset of synchronization in globally coupled phase oscillators.
- [Kuramoto (1984), Cooperative dynamics of oscillator community: A study based on lattice of rings](https://doi.org/10.1143/PTPS.79.223). Phase reduction of coupled limit-cycle oscillators and collective dynamical order.

### 32. Chemical oscillations and delayed inhibition

A reacting mixture can repeatedly change color while its fuel is steadily consumed. The concentrations that oscillate are intermediates: substances produced by one reaction step and removed by another. A catalyst can cycle between forms differing by electron transfer; their different colors make the oscillation visible while the catalyst is regenerated overall.

The Belousov–Zhabotinsky reaction couples rapid amplification to slower recovery. In the Oregonator, Field and Noyes reduced its chemical mechanism to a few intermediates. Autocatalysis allows one intermediate to accelerate its own production. A competing process restores an inhibitor that suppresses this growth. After the activated intermediate is depleted and inhibition relaxes, the cycle can begin again.

For an activating concentration $x$ and a slower inhibitory concentration $y$, write $\dot x=f(x,y)$ and $\dot y=g(x,y)$, where $f$ and $g$ are net production rates. Positive feedback initially raises $x$; delayed inhibition turns the increase around. Nonlinear reaction rates can make the resulting trajectory approach an attracting limit cycle, a closed orbit to which nearby states return. The cycle's stability explains why concentrations can recover their rhythm after a small perturbation. Feedback signs alone do not ensure that such an orbit exists; its existence and period must follow from the rate equations.

Maintaining the cycle consumes free energy. A sealed batch can oscillate transiently while its reactants are depleted, often with a changing period. A flow reactor can replenish reagents and remove products to sustain an approximately stationary rhythm. The oscillating intermediate concentrations therefore coexist with a directed chemical conversion. Measuring that conversion, the feedback reactions, and the recovery time connects the visible rhythm to its mechanism.

**Sources**

- [Field and Noyes (1974), Oscillations in chemical systems. IV. Limit cycle behavior in a model of a real chemical reaction](https://doi.org/10.1063/1.1681288). Oregonator reaction mechanism and attracting concentration cycles.

### 33. Turing patterns from diffusion-driven instability

Diffusion smooths each concentration field, yet can destabilize a mixture of reacting substances. The key is that unequal transport rates change the feedback between the fields. A uniform state stabilized by local reactions may then become unstable to spatial disturbances.

For concentrations $u$ and $v$, let $f$ and $g$ be net local reaction rates, and $D_u,D_v>0$ their diffusivities:

$$\partial_tu=f(u,v)+D_u\nabla^2u,\qquad \partial_tv=g(u,v)+D_v\nabla^2v.$$

At a uniform steady state, the reaction Jacobian $J$ is the matrix of first derivatives of $f$ and $g$. Assume its eigenvalues have negative real parts, so a spatially uniform disturbance decays. A Fourier disturbance with wave number $q$ instead evolves under $J-q^2\operatorname{diag}(D_u,D_v)$. If the diffusivities were equal, diffusion would simply shift both eigenvalues left and improve stability. Unequal diffusivities can instead make one eigenvalue positive over a band of nonzero $q$.

Turing's construction thus converts a local stability problem into a wavelength-dependent one. Local activation and more rapidly spreading inhibition provide an intuitive realization. The fastest-growing wave number sets an initial spacing; nonlinear reactions then determine whether growth saturates into spots, stripes, or another state. Boundaries restrict the allowed wavelengths, so chemistry alone does not select the final pattern.

The calculation establishes a possible mechanism for spatial organization. Applying it to a tissue requires identifying the relevant interacting substances, their transport, and the instability of the uniform state. Cell migration, mechanical stresses, or pre-existing signals can generate similar appearances. The decisive evidence is how the pattern responds when those reaction and transport processes are changed.

**Sources**

- [Turing (1952), The chemical basis of morphogenesis](https://doi.org/10.1098/rstb.1952.0012). Reaction–diffusion instability of a homogeneous state and wavelength selection.

### 34. Convection and the instability of a heated layer

In a fluid heated from below, an upward-displaced parcel can remain warmer and less dense than its surroundings. Buoyancy then strengthens the displacement. Viscosity damps the motion and thermal diffusion erases the temperature difference; convection begins when buoyant feedback overcomes them.

For layer depth $H$, imposed temperature difference $\Delta T$, expansion coefficient $\alpha$, gravitational acceleration $g$, kinematic viscosity $\nu$, and thermal diffusivity $\kappa$, the dimensionless Rayleigh number is

$$\mathrm{Ra}=\frac{g\alpha\Delta T H^3}{\nu\kappa}.$$

Increasing depth strongly favors instability through the factor $H^3$. In the Boussinesq approximation, density variations are retained in buoyancy but neglected elsewhere, allowing an incompressible velocity description. Linearizing the coupled temperature and velocity equations about the motionless conducting state gives growth rates for disturbances. Their first crossing through zero sets a critical Rayleigh number that depends on the mechanical and thermal boundary conditions.

Near onset, an unstable mode can saturate into rolls: warm fluid rises, cooler fluid descends, and circulation carries additional heat. Its amplitude and spacing describe a coordinated flow of many molecules. The layer depth supplies a natural length for the rolls, while the boundary conditions and geometry select among the allowed modes. Heat flux and the response to a changed temperature difference test the predicted onset and subsequent growth.

The imposed temperature difference maintains this organization. Several flow patterns can coexist or compete, with imperfections and preparation selecting the observed one. Stronger forcing can destabilize a steady pattern into time dependence and turbulence. A stability calculation explains the onset, while the nonlinear fluid dynamics determines what follows it.

**Sources**

- [Cross and Hohenberg (1993), Pattern formation outside of equilibrium](https://doi.org/10.1103/RevModPhys.65.851). Driven pattern formation and amplitude descriptions near convection onset.
- [Rayleigh (1916), On convection currents in a horizontal layer of fluid, when the higher temperature is on the under side](https://doi.org/10.1080/14786441608635602). Linear stability of a heated fluid layer under specified boundary conditions.

### 35. Deterministic chaos and finite prediction horizons

A deterministic equation can specify a unique trajectory while nearby trajectories rapidly separate. Finite uncertainty in the initial state then limits how far ahead the motion can be predicted, even without random forcing.

Lorenz illustrated this with a truncated convection model. Its variables $x,y,z$ are rescaled amplitudes of circulation and temperature patterns, and $\sigma,r,b$ are dimensionless parameters:

$$\dot x=\sigma(y-x),\qquad \dot y=rx-y-xz,\qquad \dot z=xy-bz.$$

In chaotic regimes, trajectories remain bounded without approaching a repeating cycle. An initially small separation $\delta(0)$ can grow as $\delta(t)\sim\delta(0)e^{\lambda t}$ while it remains small. A positive largest Lyapunov exponent $\lambda$ measures the average rate of exponential separation. Stretching amplifies differences, while the nonlinear dynamics repeatedly returns trajectories to a bounded region.

For acceptable forecast error $\Delta$, this growth gives an approximate horizon $t_{\rm pred}\simeq\lambda^{-1}\ln[\Delta/\delta(0)]$. Improving initial precision by a fixed factor adds a fixed amount of useful forecast time. It does not proportionally extend the horizon. Eventually the error reaches the scale of the explored region and exponential growth saturates.

Long-term distributions and correlations can remain predictable after a particular trajectory becomes uncertain. Those statistical properties are associated with an attractor, the set approached by trajectories from a range of initial conditions. Irregular data alone do not establish chaos: stochastic forcing and measurement noise can also generate irregularity. Evidence requires dynamical sensitivity assessed with finite-record and numerical errors under control. The distinction is between predicting a specific evolving state and predicting the statistical behavior of the same deterministic system.

**Sources**

- [Lorenz (1963), Deterministic nonperiodic flow](https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2). Bounded nonperiodic motion and sensitivity to initial conditions in a convection truncation.

### 36. Solitons and the balance of nonlinearity with dispersion

A localized wave packet usually spreads because its Fourier components propagate differently. In some nonlinear media, amplitude-dependent propagation counteracts that dispersion and produces a persistent pulse. The moving object is a field profile, not a fixed set of material particles.

For a rescaled amplitude $u(x,t)$, the dimensionless Korteweg–de Vries equation is

$$\partial_tu+6u\partial_xu+\partial_x^3u=0.$$

The nonlinear term makes larger amplitudes propagate faster and tends to steepen a wave. The third derivative produces dispersion. Their balance admits a pulse of speed $c>0$ and initial center $x_0$:

$$u(x,t)=\frac c2\operatorname{sech}^2\left[\frac{\sqrt c}{2}(x-ct-x_0)\right].$$

Its height is $c/2$ and its width scales as $c^{-1/2}$. These properties are linked by the equation; arbitrary heights, widths, and speeds cannot be combined into a persistent solution.

A solitary wave is a localized traveling profile. The stronger soliton property includes collisions: solutions containing several pulses show that they recover their shapes and speeds afterward, with shifted positions. The collision changes where a pulse is found but preserves the relation between its shape and speed. Zabusky and Kruskal's numerical study identified this persistence and showed why the pulses could be treated as effective objects.

Physical water channels, optical fibers, and plasmas add losses, forcing, higher-order dispersion, and other modes. A long-lived pulse may closely approximate a soliton over a useful distance while gradually radiating or changing shape. Comparing pulses before and after a collision, including any emitted waves and position shifts, tests the stronger claim more directly than observing one isolated pulse travel.

**Sources**

- [Zabusky and Kruskal (1965), Interaction of “Solitons” in a Collisionless Plasma and the Recurrence of Initial States](https://doi.org/10.1103/PhysRevLett.15.240). Persistent Korteweg–de Vries pulses and their collision behavior.

### 37. Turbulence and transfer between scales

Stirring a fluid at a large scale can produce motion across a wide range of smaller scales. Individual eddies continually change, but the average transfer of kinetic energy can be reproducible. Turbulence is therefore often described through correlations and fluxes between scales rather than a single flow trajectory.

In three-dimensional incompressible turbulence, nonlinear advection transfers energy toward small scales where viscosity dissipates it. At sufficiently large Reynolds number, the ratio of inertial to viscous effects, an inertial range can separate forcing from dissipation. Neither directly dominates the energy balance within that range.

Let $\varepsilon$ be the mean energy transfer rate per unit mass and $\delta u_\ell$ a typical velocity difference across separation $\ell$. Kolmogorov's similarity argument assumes sufficiently homogeneous and locally isotropic statistics and uses only $\varepsilon$ and $\ell$ to estimate

$$\delta u_\ell\sim(\varepsilon\ell)^{1/3}.$$

The corresponding energy spectrum scales as $E(k)\sim\varepsilon^{2/3}k^{-5/3}$, where $k$ is wave number and $\int E(k)\,dk$ is kinetic energy per unit mass. The mean flux through the inertial range is approximately independent of scale.

This cascade is a statistical balance: individual transfers fluctuate and can run in either direction. Intermittency describes the uneven concentration of strong velocity gradients and dissipation in space and time. It modifies some scaling predictions and the tails of probability distributions beyond the simplest similarity picture.

Two-dimensional, rotating, stratified, or wall-bounded flows have additional constraints that change energy transfer. A short spectral interval near $k^{-5/3}$ is consequently insufficient to establish the full cascade picture. Flux measurements, scale separation, and tests of anisotropy connect the observed spectrum to the mechanism assumed in the estimate.

**Sources**

- [Kolmogorov (1941), The local structure of turbulence in incompressible viscous fluid for very large Reynolds numbers](https://rainbow.ldeo.columbia.edu/~alexeyk/Papers/Kolmogorov1941.pdf). Similarity hypotheses for high-Reynolds-number locally isotropic turbulence.

### 38. Avalanches and the propagation of local instability

Slow loading can produce sudden bursts because one local rearrangement changes the forces on neighboring regions. A slip or spin reversal may push another region past its threshold, which triggers further changes. An avalanche is a connected sequence of such events, distinguishable from the next sequence when loading is slow compared with its duration.

In a simple branching approximation, each rearrangement triggers a mean number of successors. If this number is below one, events usually die out quickly. Near one, many generations can occur and large bursts become possible. Real materials add spatial correlations, force balance, and interactions that may stabilize some neighbors while destabilizing others. These details determine whether the branching picture is useful and which event statistics follow.

Driven magnetic reversal gives a concrete example. The zero-temperature random-field Ising model assigns different local biases to spins; slowly changing the external field initiates avalanches of spin flips. Sethna and colleagues showed a disorder-controlled critical point separating regimes with and without a macroscopic magnetization jump. Slow driving separates the events, but disorder must also be appropriately tuned to reach this critical behavior.

Event sizes, durations, and shapes can be measured as field, disorder, and sample size change. Finite-size scaling, the systematic dependence of distributions on system dimensions, tests a collective description more strongly than a power-law fit over a short interval. At higher driving rates, independent events can overlap and appear to be a single large burst. Other models contain feedback that maintains proximity to an instability, but this is an additional mechanism, not a consequence of slow loading alone. Identifying how a rearrangement transmits force and how the sequence stops is essential to comparing different crackling systems.

**Sources**

- [Sethna, Dahmen, and Myers (2001), Crackling noise](https://doi.org/10.1038/35065675). Scaling of intermittent collective responses in crackling systems.
- [Sethna et al. (1993), Hysteresis and hierarchies: Dynamics of disorder-driven first-order phase transformations](https://arxiv.org/abs/cond-mat/9210018). Disorder-controlled avalanches and a critical magnetization jump in the driven random-field Ising model.

### 39. Jamming and contact constraints

Compressing disordered particles can make them resist shear without forming a crystal or permanent bonds. Their contacts constrain motions that would otherwise let them rearrange. Jamming concerns the onset of mechanical rigidity in this contact network.

Consider frictionless spheres with finite-range repulsion at zero temperature. The packing fraction $\phi$ measures the fraction of space occupied. At low enough density, energy minimization removes overlaps and leaves particles unconstrained. Compression eventually produces a load-bearing contact structure. Above the jamming threshold, small shear deformations cost energy, giving a shear modulus, the linear ratio of shear stress to strain.

Constraint counting provides a first estimate. In $d$ dimensions, $N$ particle centers have approximately $dN$ translational degrees of freedom. Each independent frictionless contact supplies one normal constraint. If $z$ is the mean number of contacts per particle, the number of contacts is $Nz/2$, suggesting $z\simeq2d$ at marginal rigidity. Global motions and particles that are not constrained by the network must be treated separately. Geometry, redundant constraints, and force balance also matter; a contact count alone does not prove rigidity.

Near the threshold, collective modes with very small restoring forces allow unusually easy distortions. O'Hern and colleagues' simulations connected this excess of low-frequency modes with the onset of pressure and elastic response in disordered sphere packings. The threshold is defined for a specified particle model and preparation protocol, rather than being a universal density for all granular matter.

Friction, particle shape, attraction, and loading history change the available constraints. A stable arch in a funnel also relies on boundaries absent from a periodic packing. The contact network and its mechanical response, not crowding alone, determine whether a disordered assembly is rigid.

**Sources**

- [O’Hern, Silbert, Liu, and Nagel (2003), Jamming at zero temperature and zero applied stress: The epitome of disorder](https://jamming.research.yale.edu/files/papers/PhysRevE.68.011306.pdf). Jamming thresholds, contact counting, elastic response, and low-frequency modes in frictionless repulsive packings.

### 40. Fracture and the energy released by a crack

A scratch can make glass fail under a load that an otherwise similar specimen withstands. The crack concentrates stress near its tip and changes the elastic field throughout a much larger region. Extending it releases stored mechanical energy while breaking bonds and creating surfaces.

Griffith's energetic criterion compares these two changes. The energy-release rate $G$ is the reduction in the appropriate mechanical potential energy per added projected crack area, including the effect of the loading apparatus. Crack advance becomes energetically possible when $G$ reaches the fracture resistance $G_c$. For an ideally brittle material, $G_c$ is the cost of the two newly created surfaces. Real fracture resistance can also include plastic deformation and other dissipation near the tip.

For an isolated crack of half-length $a$ in a large elastic plate under tensile stress $\sigma$, Young's modulus $E$ sets the stiffness scale. The energy-release rate behaves as

$$G\sim\frac{\sigma^2a}{E},$$

with geometry and plane-stress or plane-strain conditions determining additional factors. A longer crack therefore reaches a fixed resistance at a smaller applied stress. The flaw's influence extends far beyond the bonds at its tip because the surrounding solid relaxes as it grows.

Reaching $G_c$ does not by itself determine whether growth is stable. The change of $G-G_c$ with crack extension depends on specimen geometry, material resistance, and whether the apparatus holds force or displacement fixed. Crack motion also emits stress waves and may branch or encounter regions of different toughness; fatigue introduces further history dependence. The useful collective variables are the advancing crack and its surrounding elastic field, which connect local separation to the load-bearing capacity of the whole specimen.

**Sources**

- [Griffith (1921), The phenomena of rupture and flow in solids](https://doi.org/10.1098/rsta.1921.0006). Energetic criterion for brittle fracture and the dependence of strength on flaw size.

## 5. Living matter: structures that maintain and reproduce themselves

Living systems combine several kinds of persistence. A membrane retains its shape while its molecules move; a gene circuit maintains a concentration pattern while proteins are replaced; a reproducing group passes its organization to descendants. Each calls for a different explanation. We begin with molecular structures and then add feedback, chemical energy, and reproduction.

The first examples connect familiar statistical mechanics to biology: membrane assembly, polymer elasticity, and protein folding. Reaction networks then introduce amplification, memory, and timing. The final entries examine how chemical signals specify position, how cells compensate for disturbances, and how groups of cells acquire a shared life cycle. Throughout, the useful large-scale variables are things we can measure—curvature, extension, concentration, period, or reproductive output. Explaining their behavior gives us concrete pieces of biological organization without requiring a single mechanism to explain life as a whole.

### 41. Molecular self-assembly: Membranes from molecular interactions

Many membrane lipids have a head group that interacts favorably with water and hydrocarbon tails whose exposure to water is unfavorable. Such molecules are called amphiphiles. In water they can aggregate with their tails sheltered inside: a micelle has a small hydrophobic interior, a bilayer contains two opposing molecular layers, and a vesicle is a closed bilayer surrounding water. Simple lipid mixtures form these structures without cellular machinery.

Assembly depends on the free energy of the entire mixture. Sheltering the tails competes with the loss of translational entropy as freely dispersed molecules enter aggregates. Head groups need space, and connected tails must fill the interior without excessive stretching. These packing constraints help determine whether an aggregate favors strong curvature or an almost flat surface. The theory of [Israelachvili, Mitchell, and Ninham](https://pubs.rsc.org/en/content/articlelanding/1976/f2/f29767201525) connects molecular geometry and interaction free energies to this choice of structure.

At equilibrium, molecules exchange between aggregates and solution until their chemical potentials agree. Over an aggregation range, adding amphiphile mainly increases the amount in aggregates, while the free-molecule concentration changes much less. Molecular species, temperature, salt, and concentration determine which structures are stable. A bilayer can close into a vesicle because removing an exposed edge can outweigh the bending cost of closure.

Once a membrane exists, we can describe its bending stiffness, surface tension, and permeability without tracking every lipid. These properties belong to the extended assembly. Cellular membranes use this physical foundation, but also contain proteins and actively maintain differences between their two sides. Equilibrium assembly explains how a boundary can form; transport and chemical reactions explain how a living cell maintains and uses it.

**Sources**

- [Israelachvili, Mitchell & Ninham (1976), Theory of self-assembly of hydrocarbon amphiphiles into micelles and bilayers](https://pubs.rsc.org/en/content/articlelanding/1976/f2/f29767201525). Connects aggregate free energies and molecular packing constraints to the formation of micelles and bilayers.
- [Alberts et al. (2002), The Chemical Components of a Cell](https://www.ncbi.nlm.nih.gov/books/NBK26883/). Explains amphiphilic cell components and the noncovalent interactions underlying molecular assembly.

### 42. Polymer elasticity: A molecular chain becomes an entropic spring

A polymer is a molecule made from many connected units. A long chain can resist extension even when its chemical bonds barely stretch: there are many more coiled configurations than extended ones. Holding its ends far apart reduces the number of accessible configurations and therefore raises its free energy. DNA, which stores hereditary sequence information, provides a measurable example of this entropic elasticity.

Replace the molecule by $N$ independently oriented segments of length $b$, where $b$ is an effective segment length. For the end-to-end vector $\mathbf R$, the random-walk result is $\langle R^2\rangle=Nb^2$. At large $N$ and $R\ll Nb$, its probability density is Gaussian. Constraining the vector to $\mathbf R$ therefore costs $F(\mathbf R)-F(\mathbf0)\simeq3k_BT R^2/(2Nb^2)$, and the applied force is $\mathbf f\simeq3k_BT\mathbf R/(Nb^2)$. Here $k_B$ is Boltzmann's constant and $T$ is absolute temperature. The vector constraint matters: the probability density of the distance alone also includes the spherical measure $4\pi R^2$.

Real DNA retains orientational correlations over a persistence length. The wormlike-chain model represents this local stiffness by a bending-energy cost. Its use in [DNA stretching studies](https://doi.org/10.1021/ma00130a008) explains why an ideal random walk works only after averaging over enough contour length. Close to full extension, the Gaussian spring law fails because the finite contour length becomes important; at still larger forces, stretching the molecular backbone also matters.

The collective behavior here occurs within one molecule, among its many internal degrees of freedom. Its effective spring constant measures the configurations removed by an imposed deformation. This also explains the factor of $T$: for a fixed ideal-chain geometry, heating strengthens the entropic restoring force.

**Sources**

- [Bustamante et al. (1994), Entropic elasticity of lambda-phage DNA](https://pubmed.ncbi.nlm.nih.gov/8079175/). Discusses the entropic elasticity of stretched DNA; the ideal-chain derivation in this entry is an illustrative statistical-mechanical calculation.
- [Marko & Siggia (1995), Stretching DNA](https://doi.org/10.1021/ma00130a008). Develops the wormlike-chain description of DNA stretching, including bending stiffness and thermal fluctuations.

### 43. Protein folding: A sequence forms a reproducible structure

A protein is a chain of amino acids, molecular building blocks with chemically different side groups. The sequence fixes the order of these groups, while their interactions with one another and with the surrounding water favor some chain shapes over others. Many proteins repeatedly occupy a relatively narrow family of three-dimensional structures. Those structures arrange binding surfaces or bring chemical groups together to accelerate reactions, a process called catalysis.

A conformation is one spatial arrangement of the chain. We can describe folding through a free-energy landscape over conformations: nonpolar groups tend to become buried, and hydrogen bonds and other interactions favor particular local arrangements. The native state is the structural ensemble associated with the folded protein under specified conditions. Thermal motion continues within it. Refolding experiments showed that some isolated proteins recover their active structure in a suitable solution, demonstrating that the sequence and environment can be sufficient to specify this ensemble.

In a two-state approximation, collect conformations into folded and unfolded ensembles with free energies $G_F$ and $G_U$. Their equilibrium probabilities obey $P_F/P_U=\exp[-(G_F-G_U)/(k_BT)]$. A favorable folded free energy determines occupancy, while barriers on the landscape determine how quickly folding occurs. A chain can instead become trapped or aggregate with other chains. Molecular chaperones are proteins that assist folding or prevent aggregation; many consume ATP, a molecule whose chemical conversion supplies free energy.

The reduction to a few structural states makes binding and mechanical response tractable despite the enormous configuration space. It works differently for different proteins: some remain broadly disordered, and others acquire structure when they bind a partner. A structure prediction addresses which configurations are favored; explaining folding also requires the routes, rates, and cellular conditions that make them accessible.

**Sources**

- [Alberts et al. (2002), The Shape and Structure of Proteins](https://www.ncbi.nlm.nih.gov/books/NBK26830/). Explains protein sequence, stabilizing interactions, structural ensembles, and the role of molecular chaperones.
- [Cooper (2000), Protein Folding and Processing](https://www.ncbi.nlm.nih.gov/books/NBK9843/). Describes spontaneous refolding in solution and folding assistance within cells.
- [Weinreb et al. (1996), NACP, a protein implicated in Alzheimer’s disease and learning, is natively unfolded](https://pubmed.ncbi.nlm.nih.gov/8901511/). Reports conformational measurements showing that the studied protein occupies a disordered ensemble under the tested solution conditions.

### 44. Autocatalysis: Chemistry that accelerates its own production

A catalyst accelerates a reaction without being consumed overall in that reaction. When a product catalyzes further production of itself, its concentration affects its own growth rate: this is autocatalysis. The feedback can also run through several species, each helping produce another. Catalysis changes reaction rates; the free energy and material needed for net production still come from the supplied reactants.

The schematic reaction $A+X\rightarrow2X$ captures the simplest amplification. Let $a$ and $x$ be the concentrations of supplied material $A$ and catalyst $X$. With $a$ fixed, a reaction-rate constant $k$, and a first-order loss rate $d$, mass-action kinetics gives $\dot x=(ka-d)x$. A small seed grows exponentially when $ka>d$ and decays when losses dominate. In a closed vessel, consumption of $A$ eventually removes the fixed-supply approximation. Continuous growth requires replenishment.

[Lincoln and Joyce](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652413/) realized cross-catalytic replication with RNA. RNA is a chain molecule whose sequence can carry information and whose folded structure can catalyze reactions. Two RNA catalysts each joined supplied fragments to assemble copies of the other. Transfers into fresh substrate sustained amplification. This connects molecular reaction kinetics directly to the growth and competition of replicating populations.

A viable network must do more than contain a closed loop of reaction arrows. Production must outpace dilution and degradation, and side reactions must not consume essential intermediates too quickly. Hereditary evolution introduces a further requirement: differences between replicators must be transmitted and affect subsequent reproduction. Autocatalysis supplies amplification; the fidelity, resource supply, and physical organization of a particular system determine what can persist and evolve.

**Sources**

- [Lincoln & Joyce (2009), Self-sustained Replication of an RNA Enzyme](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652413/). Demonstrates two RNA catalysts assembling copies of one another from supplied fragments, with continued amplification through substrate replenishment.
- [Hordijk & Steel (2012), Autocatalytic Sets Extended: Dynamics, Inhibition, and a Generalization](https://arxiv.org/abs/1206.1017). Analyzes molecular-flow dynamics and inhibition in networks satisfying autocatalytic-set criteria.

### 45. Homochirality: Amplification of molecular handedness

A chiral molecule cannot be superimposed on its mirror image by rotation. Its two mirror forms are called enantiomers. Proteins predominantly contain amino acids of one handedness, and the sugars in DNA and RNA also follow a consistent handedness preference. Chemistry can amplify an initial imbalance between mirror forms, but which processes established biological handedness remains a historical question.

Let $L$ and $D$ denote the concentrations of two enantiomers. Their enantiomeric excess is $e=(L-D)/(L+D)$ for nonzero total concentration. Equal amounts give $e=0$; one pure form gives $|e|=1$. Mirror-symmetric reaction equations can have an unstable symmetric solution and stable asymmetric ones. A fluctuation can then grow even though the equations favor neither sign. A small external bias can favor one branch.

One route combines autocatalysis—each form promotes its own production—with inhibition between opposite forms. Frank's reaction scheme made this mechanism explicit. The [Soai reaction](https://www.nature.com/articles/378767a0) subsequently demonstrated amplification of a small enantiomeric excess in a laboratory chemical system. Whether an imbalance grows depends on the actual kinetics and catalyst interactions; autocatalysis by itself does not guarantee it.

Local symmetry breaking and a shared biological preference are different scales of the problem. Independently reacting compartments could choose opposite signs, so mixing their contents could reduce the net excess. A persistent preference must survive reproduction and exchange of material, and the handedness of interacting molecular families must remain compatible. Experiments establish that nonlinear chemistry can strongly amplify asymmetry. Connecting such a mechanism to the particular molecules and environments of early life requires additional evidence.

**Sources**

- [Soai et al. (1995), Asymmetric autocatalysis and amplification of enantiomeric excess of a chiral molecule](https://www.nature.com/articles/378767a0). Demonstrates amplification of an initial enantiomeric excess in an asymmetric autocatalytic reaction.
- [Frank (1953), On spontaneous asymmetric synthesis](https://doi.org/10.1016/0006-3002(53)90082-1). Introduces a reaction scheme in which autocatalysis and mutual inhibition destabilize a symmetric mixture.

### 46. Gene switches: Chemical feedback stores a cell state

A gene is a stretch of DNA used to produce a functional RNA or protein. Gene expression is the production of that molecule. Regulatory proteins can change expression by binding to DNA or to other components of the production machinery. Consequently, cells with the same DNA sequence can maintain different concentrations of gene products and behave differently.

Consider two proteins that repress each other's production. More $A$ reduces $B$; less $B$ releases $A$ from repression. This double negative creates positive feedback. The circuit can maintain either high $A$ and low $B$, or the reverse. [Gardner, Cantor, and Collins](https://www.nature.com/articles/35002131) built this arrangement in the bacterium Escherichia coli and used transient inputs to switch between persistent expression states.

A symmetric model is $\dot a=\alpha/(1+b^n)-a$ and $\dot b=\alpha/(1+a^n)-b$. Concentrations $a,b$ are measured relative to repression thresholds, and time in protein-loss times. The parameter $\alpha$ sets maximum production and $n$ the steepness of repression. Steady states occur where the two nullclines—the curves on which the respective derivatives vanish—intersect. Strong, steep repression can produce two stable asymmetric states separated by an unstable state. A perturbation that crosses the boundary between their basins changes the stored state.

Memory resides in the maintained concentration pattern. Individual proteins can be destroyed and replaced while the state persists, provided production compensates for losses and dilution as the cell grows. Molecular fluctuations can occasionally switch a small circuit, so the state's lifetime matters as well as its existence. Two reproducible long-lived states and their switching responses distinguish bistable memory from a single state that simply takes a long time to relax.

**Sources**

- [Gardner, Cantor & Collins (2000), Construction of a genetic toggle switch in Escherichia coli](https://www.nature.com/articles/35002131). Demonstrates an engineered two-repressor switch in E. coli and models the conditions supporting bistability.

### 47. Biological clocks: A daily rhythm from molecular reactions

A circadian clock is an internal oscillator with a period close to twenty-four hours. It continues to cycle under constant environmental conditions; daily light changes can adjust its phase, or position within the cycle. The period must therefore arise from internal dynamics, even when the environment helps keep the clock aligned with day and night.

In a particularly simple reconstruction, [Nakajima and colleagues](https://pubmed.ncbi.nlm.nih.gov/15831759/) combined three proteins—KaiA, KaiB, and KaiC—with ATP. These proteins belong to cyanobacteria, bacteria that obtain energy from light. The mixture sustained daily oscillations in KaiC phosphorylation, the attachment of phosphate groups to that protein, outside a cell. Its period varied comparatively little with temperature over the tested range. ATP provided the chemical free energy needed to maintain the reaction cycle.

Different chemical states of KaiC interact differently with its partners. An ordered sequence of changes at two phosphorylation sites, together with delayed inhibitory interactions, allows activity to increase, suppress itself, and recover. This illustrates why internal state matters. A single autonomous variable obeying $\dot x=f(x)$ cannot execute a nonconstant periodic orbit: once it returns to the same value, the same derivative applies. Several chemical states, or an effective delay, allow the system to return by a different route.

Bulk oscillation also requires coordination. If molecules cycle independently with fluctuating periods, their phases spread and the population average loses its rhythm. Shared binding partners and interactions can coordinate the cycles. Thus a biochemical clock involves both a molecular sequence of events and a population mechanism that keeps their timing coherent. The Kai system isolates these problems experimentally; other organisms use different molecular circuits to generate and regulate their daily rhythms.

**Sources**

- [Nakajima et al. (2005), Reconstitution of circadian oscillation of cyanobacterial KaiC phosphorylation in vitro](https://pubmed.ncbi.nlm.nih.gov/15831759/). Reconstitutes KaiC phosphorylation rhythms with KaiA, KaiB, KaiC, and ATP, and examines temperature dependence and mutant periods.
- [Nishiwaki et al. (2007), A sequential program of dual phosphorylation of KaiC as a basis for circadian rhythm in cyanobacteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC1994132/). Identifies the ordered cycle of changes at two KaiC phosphorylation sites and their relation to clock regulation.

### 48. Morphogenesis: From chemical gradients to biological form

Morphogenesis is the development of biological form through cell growth, movement, shape change, and organization. One early requirement is positional differentiation: different regions must activate different developmental programs. A morphogen is a chemical signal whose spatial distribution helps specify those responses. A concentration gradient can therefore translate physical position into differences in gene expression.

In an early fruit-fly embryo, the protein Bicoid forms a profile along the future head-to-tail direction and regulates other genes. At this stage many nuclei, the compartments containing DNA, share a common surrounding cellular material. [Gregor and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC2253670/) measured Bicoid concentrations, their fluctuations, and the response of a target gene. This made the precision of positional signaling a quantitative problem.

As a simple model, suppose a signal is supplied at one end of a long one-dimensional domain, diffuses with coefficient $D$, and is removed at rate $\mu$. Away from the source, a steady profile obeys $Dc''-\mu c=0$. With $c(0)=c_0$ and decay far from the source, $c(x)=c_0e^{-x/\lambda}$, where $\lambda=\sqrt{D/\mu}$. A threshold response at concentration $c_*$ gives a boundary $x_* =\lambda\ln(c_0/c_*)$. This illustrative model shows both how a length scale arises and why a change in source strength shifts the boundary.

The boundary also fluctuates because signal molecules arrive and bind randomly. Averaging over time or nearby regions, and interactions among regulatory genes, can improve reproducibility. Subsequent tissue mechanics determines how the chemical pattern becomes shape: cells exert forces and rearrange. Establishing a signal profile, interpreting it reliably, and mechanically realizing the resulting organization are distinct stages of the same developmental process.

**Sources**

- [Gregor et al. (2007), Probing the limits to positional information](https://pmc.ncbi.nlm.nih.gov/articles/PMC2253670/). Measures Bicoid concentrations, fluctuations, target-gene responses, and reproducibility among embryos; the exponential profile here is an illustrative model.

### 49. Cellular homeostasis: Feedback maintains a stable cellular output

Homeostasis is the maintenance of internal conditions through ongoing physiological processes. A stable output can coexist with rapid molecular turnover. The central dynamical question is how the output returns after a disturbance, even if the disturbance persists or reaction rates vary.

Bacterial chemotaxis provides a tractable example. Chemotaxis is movement biased by chemical conditions; bacteria change their swimming behavior when an attractant concentration changes. After a sustained change, their signaling activity can return close to its previous level, leaving the system responsive to further changes. Chemical modification of receptors, molecules that detect the attractant, supplies a slowly changing internal variable. Barkai and Leibler modeled this robust adaptation, and [Yi and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC18287/) related it to integral feedback control.

Let $y$ be the regulated output and let an internal variable $z$ obey $\dot z=k(y_0-y)$, with $k>0$. The value of $z$ accumulates the discrepancy between $y$ and a reference value $y_0$, and feeds back on the processes controlling $y$. At a stable steady state with finite $z$, the condition $\dot z=0$ requires $y=y_0$. A constant disturbance changes the necessary controller state while leaving the output at the reference value. The result follows from the form of the feedback equation.

Its assumptions identify the operating limits. A controller with a bounded range cannot compensate for an arbitrarily large disturbance. Loss of the stored control variable can leave a residual error, and poorly matched response times can destabilize the feedback. Within its operating range, however, the circuit maintains a predictable response despite changes in its molecular components. In chemotaxis, the maintained quantity is a signaling activity; adaptation does not mean that every internal concentration remains fixed.

**Sources**

- [Barkai & Leibler (1997), Robustness in simple biochemical networks](https://www.nature.com/articles/43199). Shows how a chemotaxis network can achieve adaptation that is robust to changes in model parameters.
- [Yi et al. (2000), Robust perfect adaptation in bacterial chemotaxis through integral feedback control](https://pmc.ncbi.nlm.nih.gov/articles/PMC18287/). Connects chemotactic adaptation to integral feedback and identifies the conditions needed for exact steady-state adaptation.

### 50. Multicellularity: A cluster acquires a reproducing life cycle

Multicellularity ranges from loose cell associations to organisms whose cells depend on one another. An important evolutionary step occurs when a group grows, produces descendant groups, and transmits traits of its organization. At that point, differences among groups can affect which group forms become more common.

[Ratcliff and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC3277146/) observed this process in yeast, single-celled fungi that reproduce by budding off daughter cells. They repeatedly transferred the rapidly settling portion of a culture. Cells evolved persistent attachment after division, producing branching clusters. Cluster size affected settling, and fragmentation produced smaller clusters capable of further growth. A cellular change thus generated a collective physical property that altered success under the imposed selection procedure.

Selection among groups requires heritable variation in group reproductive success. For example, groups might differ in the size at which they fragment; this difference might affect how many surviving descendant groups they produce; and descendants might resemble the parent in that trait. These conditions make a group trait evolve. Growth of a single cluster alone would establish none of the comparisons needed to show this.

Cellular and group reproduction need not favor the same changes. Faster division within a cluster can interfere with transport or mechanical integrity, whereas reduced reproduction by some cells can support collective maintenance. Development from closely related cells can reduce internal genetic conflict, and specialization can make cells increasingly dependent on the group. The yeast experiment captures an early route into this organization: repeated attachment, growth, and fragmentation connect a physical boundary to a heritable life cycle. More elaborate multicellular organisms build on additional mechanisms for development, coordination, and conflict control.

**Sources**

- [Ratcliff et al. (2012), Experimental evolution of multicellularity](https://pmc.ncbi.nlm.nih.gov/articles/PMC3277146/). Documents settling selection, persistent attachment after cell division, cluster reproduction, and evolved group traits in snowflake yeast.

## 6. Ecology and evolution: collectives with histories

Ecology studies organisms' interactions with one another and their environment. Evolution concerns changes in inherited characteristics across generations. The two are coupled: organisms alter resources and competitors, while these conditions affect which organisms reproduce. Collective behavior therefore depends on both present interactions and the history that produced them.

We begin with selection, evolutionary innovation, cooperation, and task allocation. Flocking then provides an example of organization on a much shorter time scale, as individuals coordinate their motion without evolving during the event. The remaining entries consider communities: the stability of interaction networks, recovery from disturbance, succession, infection spread, and the exchange of nutrients between microbes. Simple models identify mechanisms and measurable quantities. Experiments determine which of those mechanisms matter in a particular population or environment.

### 51. Natural selection: Heritable differences change a population

Natural selection occurs when heritable differences affect reproductive success. Heritable means that descendants tend to retain the relevant differences. If one bacterial variant leaves more descendants in a nutrient solution, its share of the population can increase even though no individual improves during its lifetime. Fitness measures reproductive contribution under specified conditions; it depends on the environment and on the other organisms present.

For two faithfully inherited variants, let $p$ be the frequency of type $A$ and let $w_A,w_B$ be their expected numbers of descendants. In a deterministic generation model, $p'=p w_A/[p w_A+(1-p)w_B]$. Thus $A$ increases when $w_A>w_B$. This is an accounting relation once reproductive rates are specified. Resource use, survival, and interactions explain those rates and why their ordering can change.

In [Lenski and Travisano's long-term experiment](https://pubmed.ncbi.nlm.nih.gov/8041701/), replicate bacterial populations adapted to the same laboratory conditions over ten thousand generations while diverging from one another. Repeated exposure to the same conditions produced a common direction of adaptation without fixing a unique genetic route. Mutations—changes in hereditary sequence—supply new variation. Genetic drift adds random changes in variant frequencies through finite sampling of reproduction and survival.

Adaptation is the improved fit to particular conditions that selection can produce. It need not increase every measure of performance: using one resource more efficiently may reduce performance on another, and a variant's advantage may disappear as it becomes common. Nor is every frequent trait adaptive. A neutral difference can spread because it is inherited together with a beneficial one. The population-level outcome is a changing distribution of traits, shaped jointly by selective differences, chance, and the available hereditary variation.

**Sources**

- [Lenski & Travisano (1994), Dynamics of adaptation and diversification: a 10,000-generation experiment with bacterial populations](https://pubmed.ncbi.nlm.nih.gov/8041701/). Measures adaptation relative to an ancestor and divergence among replicate E. coli populations over ten thousand generations.

### 52. Evolutionary innovation: New capabilities depend on evolutionary history

An evolutionary innovation is a capability or organization absent from a lineage's ancestors. It can arise by changing when an existing component is used or by combining components differently. The effect of a new mutation therefore depends on the system in which it occurs, making the route to a capability part of its explanation.

The long-term Escherichia coli experiment offers a concrete case. Its medium contained citrate, a carbon-containing molecule that the ancestral bacteria could not use as a carbon source under the experiment's oxygenated conditions. One population evolved that ability. [Blount, Borland, and Lenski](https://doi.org/10.1073/pnas.0803151105) restarted evolution from stored samples and found that later genetic backgrounds were more likely to produce citrate-using descendants. Molecular work then identified changes that enabled and refined the new metabolism, the chemical transformations supporting growth and maintenance.

We can represent the dependence using two genetic changes, $a$ and $b$. If the effect of $b$ differs according to whether $a$ is present, the changes exhibit epistasis. Their effects cannot be treated as independent contributions. A useful combination may become accessible after an earlier change that originally spread for another reason. Equal current growth rates therefore need not imply equal access to future capabilities.

Think of hereditary sequences as vertices of a graph, with edges joining sequences accessible by one mutational step. Reproduction and loss determine which routes are occupied, while the environment changes the advantage of moving along them. Physical chemistry constrains the possible endpoints, but intermediate states constrain which endpoints a lineage can reach. Replaying evolution from preserved ancestors makes this historical dependence experimentally testable: it compares the distribution of subsequent outcomes from different starting backgrounds.

**Sources**

- [Blount, Borland & Lenski (2008), Historical contingency and the evolution of a key innovation in an experimental population of Escherichia coli](https://doi.org/10.1073/pnas.0803151105). Uses replay experiments from preserved bacterial populations to test how prior evolution changes access to citrate use.
- [Quandt et al. (2015), Fine-tuning citrate synthase flux potentiates and refines metabolic innovation in the Lenski evolution experiment](https://pmc.ncbi.nlm.nih.gov/articles/PMC4718724/). Identifies changes in citrate synthase activity that contributed to the preparation for, and refinement of, citrate-use metabolism.

### 53. Cooperation: A shared resource can sustain its producers

A cell may release an enzyme that makes food available to its neighbors. If producing the enzyme is costly, a nonproducer can benefit without contributing. Cooperation in evolutionary biology concerns effects that benefit another organism, assessed through reproduction; costly cooperation poses the additional problem of explaining why contributors persist in competition with noncontributors.

Yeast growing on sucrose provide a well-studied case. The enzyme invertase splits sucrose near the cell surface, and much of the resulting food diffuses away. In [experiments by Gore and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC2888597/), producing cells retained a small direct benefit. Combined with a nonlinear relationship between available food and growth, this allowed producers and nonproducers each to increase when rare under suitable conditions. Neither type eliminated the other.

Let $p$ be the producer fraction and $f_P(p),f_N(p)$ their respective per-capita growth rates. Then $\dot p=p(1-p)[f_P(p)-f_N(p)]$. If producers do better when rare but worse when common, a crossing of the two rates from positive to negative difference gives a stable mixed population. The maintained producer fraction follows from the dependence of growth on composition.

Spatial arrangement changes this dependence by determining who receives the released material. Limited diffusion can keep benefits near producers, while mixing spreads them more widely. Relatedness and repeated interactions can also alter how benefits return to contributors, but each requires a specified biological mechanism. Population productivity and resistance to invasion are separate outcomes: the mixture with the highest total yield need not be evolutionarily stable. Measuring both individual growth and shared-resource flows explains which cooperative arrangements can persist.

**Sources**

- [Gore, Youk & van Oudenaarden (2009), Snowdrift game dynamics and facultative cheating in yeast](https://pmc.ncbi.nlm.nih.gov/articles/PMC2888597/). Shows frequency-dependent coexistence of invertase producers and nonproducers, linked to nonlinear growth benefits and partial retention of released food.
- [Ohtsuki et al. (2006), A simple rule for the evolution of cooperation on graphs and social networks](https://www.nature.com/articles/nature04605). Derives cooperation criteria for specified interaction graphs, selection strengths, and population update rules.

### 54. Division of labor: Task specialization among similar individuals

Division of labor occurs when different individuals consistently perform different activities. Fixed differences in anatomy can create specialists, but similar individuals can also specialize through their interactions and experience. The relevant observation is persistence across time: a single snapshot of workers doing different things establishes only that several tasks are underway.

Consider an illustrative colony with food collection and care of young. Unfinished work increases a task signal, and a worker begins the task when that signal exceeds its response threshold. Completed work reduces the signal, limiting further recruitment. If performing a task also lowers that worker's threshold for it, small initial differences can grow into persistent specialization. Local responses to demand then allocate effort without requiring any individual to monitor the whole colony.

[Ulrich and colleagues](https://www.nature.com/articles/s41586-018-0422-6) tested groups of clonal raider ants whose workers were closely matched in age and genetically alike. Larger groups developed stronger and more persistent differences in activity, even at small group sizes. Colony conditions became more stable and reproductive performance improved. Their model attributed much of the increased stability to group size itself and a smaller contribution to specialization. Thus the experiment and model distinguish the coexistence of two changes from the claim that one fully explains the other.

The strength of reinforcement creates a tradeoff. Persistent roles can reduce task switching, but workers must sometimes replace absent specialists or respond to new demand. Removing workers from a task and measuring how the remaining group reallocates effort tests this flexibility. The collective property is the distribution and persistence of task participation, together with its response to changing workload.

**Sources**

- [Ulrich et al. (2018), Fitness benefits and emergent division of labour at the onset of group living](https://www.nature.com/articles/s41586-018-0422-6). Tracks specialization in clonal ant groups and uses a model to separate effects of group size and division of labor on colony stability.

### 55. Collective motion: Local interactions coordinate a moving group

A flock can turn coherently even though each bird observes only part of the group. To isolate the coordination problem, we can model individuals as self-propelled particles that continuously use energy to move. Interactions align their headings, regulate separation, or avoid collisions. A common direction then becomes a property of the coupled trajectories.

In the Vicsek alignment model, each particle adopts the direction of the vector sum of its neighbors' headings, adds a random angular perturbation, and moves forward. This circular average avoids treating headings just below and above $2\pi$ as opposites. Polarization, $P=|\sum_i\mathbf v_i|/\sum_i|\mathbf v_i|$, measures directional order. Aligned velocities give $P\simeq1$; random headings in a large group largely cancel. Varying noise, density, and interactions changes whether ordered motion persists.

Which individuals count as neighbors is experimentally consequential. [Ballerini and colleagues](https://arxiv.org/abs/0709.1916) reconstructed starling flocks in three dimensions and found spatial structure consistent with an interaction range set by neighbor rank, rather than a single fixed physical distance. Such a rule can preserve connections as a flock expands or compresses. The result is evidence about the observed flocks, while other species and circumstances may involve different interaction rules.

Large polarization alone cannot distinguish social coordination from independent responses to wind, light, or another common cue. The propagation of a turn, including delays and changing neighbor relationships, supplies additional evidence. This connects the visible group pattern to the information available locally. Directional order, rapid collective turning, and resistance to fragmentation are measurable outcomes whose dependence on the interaction rule can be tested separately.

**Sources**

- [Ballerini et al. (2008), Interaction ruling animal collective behavior depends on topological rather than metric distance: Evidence from a field study](https://arxiv.org/abs/0709.1916). Infers a neighbor-rank interaction range from three-dimensional starling flock structure and compares cohesion under alternative model rules.
- [Vicsek et al. (1995), Novel type of phase transition in a system of self-driven particles](https://doi.org/10.1103/PhysRevLett.75.1226). Demonstrates collective directional order in a minimal model of moving particles with local alignment and angular noise.

### 56. Food webs: Interaction structure controls community stability

A food web records which organisms consume which others. Extra species and links can provide alternative resource pathways, but they also introduce routes through which disturbances spread. Their effect on stability depends on interaction strengths and organization, rather than on the number of species alone.

Write population dynamics as $\dot n_i=f_i(\mathbf n)$, where $n_i$ is the abundance of species $i$. Near an equilibrium $\mathbf n_*$, small deviations obey $\dot{\delta\mathbf n}=J\delta\mathbf n$, with $J_{ij}=\partial f_i/\partial n_j$ evaluated at that equilibrium. Negative real parts of all eigenvalues ensure local asymptotic stability; a positive real part implies instability. Zero real parts require nonlinear analysis. A predator-prey pair typically produces opposite signs in its two off-diagonal entries: more prey benefits the predator, while more predators harm the prey.

[May's random-matrix analysis](https://www.nature.com/articles/238413a0) gave a useful comparison. Suppose diagonal entries are $-d$, and off-diagonal interactions are independently present with probability $C$, have zero mean, and have variance $\sigma^2$ when present. For a large matrix of $S$ species, the random eigenvalue spectrum extends roughly $\sigma\sqrt{SC}$ from its center at $-d$. Stability is lost near $\sigma\sqrt{SC}=d$. Correlations between reciprocal interactions change that spectrum, as [Allesina and Tang](https://www.nature.com/articles/nature10832) showed for different interaction types.

This is a statement about an ensemble of linearized models. A coexistence equilibrium must also be feasible, with positive abundances, and a locally stable state may fail after a large disturbance. Real communities are assembled through colonization, competition, and evolution, which impose structure absent from independent random entries. The random model is valuable because it identifies what needs explanation: correlations and constraints that alter collective growth and decay modes.

**Sources**

- [May (1972), Will a Large Complex System be Stable?](https://www.nature.com/articles/238413a0). Derives a local stability criterion for large random community matrices with stabilizing diagonal terms.
- [Allesina & Tang (2012), Stability criteria for complex ecosystems](https://www.nature.com/articles/nature10832). Shows how correlations in the signs and strengths of reciprocal interactions change random-matrix stability criteria.

### 57. Ecosystem resilience: Recovery rates and the size of a disturbance

Two ecosystems can have similar present conditions but respond very differently to the same disturbance. An ecosystem includes a community of organisms and its physical and chemical environment. Resilience can mean rapid recovery after a small disturbance, or the ability to withstand a large disturbance without switching to a different persistent regime. These properties need not change together.

For local recovery, write $\dot{\delta x}=-r\delta x$ with $r>0$. The return time is $1/r$. Near a bifurcation at which this recovery rate vanishes, disturbances decay increasingly slowly. If stationary white noise drives the linear system at fixed strength, its variance and temporal correlations increase as well. Changing noise strength or external forcing can produce similar statistics, so fluctuations alone do not identify the cause.

Experiments can directly test the disturbance response. [Veraart and colleagues](https://www.nature.com/articles/nature10723) increased light levels toward a collapse threshold in cyanobacteria, bacteria that obtain energy through photosynthesis. Recovery from small disturbances slowed as the threshold approached. In a whole-lake experiment, [Carpenter and colleagues](https://pubmed.ncbi.nlm.nih.gov/21527677/) observed warning statistics during food-web reorganization induced by adding top predators, using a reference lake for comparison.

Resistance to larger disturbances concerns the geometry beyond the linear neighborhood. If two stable regimes have different basins of attraction—the sets of states that return to each—a disturbance can carry the system across their boundary. A state may recover quickly from tiny displacements while lying close to that boundary. Measuring both recovery rates and the disturbances needed to trigger persistent change separates these meanings of resilience. It also explains why a sudden external shock can cause a transition without a preceding trend of slower recovery.

**Sources**

- [Carpenter et al. (2011), Early warnings of regime shifts: a whole-ecosystem experiment](https://pubmed.ncbi.nlm.nih.gov/21527677/). Reports warning statistics during a manipulated lake food-web transition, with a reference lake for comparison.
- [Veraart et al. (2012), Recovery rates reflect distance to a tipping point in a living system](https://www.nature.com/articles/nature10723). Tests recovery rates and temporal correlations in cyanobacterial populations approaching a light-induced collapse threshold.

### 58. Ecological succession: Community change depends on earlier occupants

Ecological succession is change in the species composition of a community through time, often after a disturbance. A community consists of the populations of different species living together. Early arrivals can alter light, nutrients, space, and other conditions, changing which organisms can subsequently establish.

Connell and Slatyer distinguished three mechanisms. In facilitation, early occupants improve conditions for later species. In inhibition, they prevent or delay establishment by occupying space or consuming resources. In tolerance, later species can establish without this assistance and eventually persist because they tolerate conditions that exclude earlier occupants. Different mechanisms can operate at different stages or between different species pairs.

A simple approximation exposes the causal question. Let $E$ be the abundance of an early colonist and let a rare later species have per-capita growth $g_L=r_L+aE$. Positive $a$ represents facilitation, negative $a$ inhibition, and $a\simeq0$ little direct effect in this approximation. The fact that one species appears first does not determine $a$: both species may respond independently to changing soil or weather. Experiments that add or remove early occupants, while accounting for the disturbance caused by the intervention, can distinguish these possibilities.

Arrival also depends on dispersal, the movement of organisms or reproductive material between places. Suitable conditions do not guarantee that a species has reached the site. Different arrival orders can therefore produce different communities under otherwise similar conditions. Repeated disturbance may prevent a persistent endpoint, and a changing environment can alter which endpoints are possible. Succession is a trajectory of interacting populations and their surroundings; explaining it requires the effects of earlier occupants as well as the conditions observed today.

**Sources**

- [Connell & Slatyer (1977), Mechanisms of Succession in Natural Communities and Their Role in Community Stability and Organization](https://doi.org/10.1086/283241). Formulates facilitation, tolerance, and inhibition as alternative mechanisms of succession and identifies ways to distinguish them.

### 59. Epidemics: Transmission produces a population threshold

An infection can disappear after a few transmissions or spread through a substantial fraction of a population. The outcome depends on susceptible hosts, contact patterns, and infectiousness. A simple population model shows how these ingredients generate a threshold that no isolated infected individual possesses.

In the susceptible-infectious-removed model, $S$, $I$, and $R$ count individuals who can acquire infection, can transmit it, and no longer participate in transmission. Assume a closed population of size $N$, homogeneous mixing, effective contact rate $\beta$, and removal rate $\gamma$. Then $\dot S=-\beta SI/N$, $\dot I=\beta SI/N-\gamma I$, and $\dot R=\gamma I$. Removal can represent recovery with immunity over the modeled interval. These constant-rate equations are a special case of the epidemic theory developed by [Kermack and McKendrick](https://doi.org/10.1098/rspa.1927.0118).

Initially, infection grows when $\beta S/N>\gamma$. In a fully susceptible population, the basic reproduction number $R_0=\beta/\gamma$ is the expected number of secondary infections caused by one infectious individual under these assumptions. As susceptibles are depleted, the effective value $R_0S/N$ falls. The infectious population peaks when it crosses one, while many susceptible individuals can still remain. Transmission then continues at a declining rate.

The deterministic threshold describes average growth, while early transmissions in a finite population are random. Even with $R_0>1$, an introduction can die out. In a population divided into interacting groups, a next-generation matrix records the expected secondary infections between groups; its dominant eigenvalue determines the invasion threshold. The exponential growth rate in time also depends on when transmissions occur. Thus reproduction number, outbreak probability, and growth speed are related but distinct quantities, each requiring the relevant contact and timing assumptions.

**Sources**

- [Kermack & McKendrick (1927), A contribution to the mathematical theory of epidemics](https://doi.org/10.1098/rspa.1927.0118). Develops epidemic thresholds in a formulation that includes the time since infection; constant-rate SIR is a special case.
- [Kermack & McKendrick (1991 reprint), Contributions to the mathematical theory of epidemics—I. 1927](https://pubmed.ncbi.nlm.nih.gov/2059741/). Reprints the original epidemic theory, including its homogeneous-population assumptions and threshold behavior.
- [Diekmann, Heesterbeek & Roberts (2010), The construction of next-generation matrices for compartmental epidemic models](https://pmc.ncbi.nlm.nih.gov/articles/PMC2871801/). Constructs next-generation matrices and distinguishes reproduction number from exponential growth rate in time.

### 60. Microbiome mutualism: Resource exchange creates community capabilities

Microbial communities contain organisms with different metabolic capabilities. Metabolism is the set of chemical transformations supporting growth and maintenance. In cross-feeding, material released by one organism becomes a resource for another. A community can therefore process substances, or sustain members, that would not be supported by the same organisms in isolation.

Suppose bacterium $A$ breaks a large food molecule into fragments that bacterium $B$ absorbs. This establishes a flow of material from $A$ to $B$, but a benefit to $B$ alone does not establish mutualism, a relationship benefiting both partners. The distinction requires comparisons of growth or persistence with and without the partner, together with interventions on the proposed exchange.

[Rakoff-Nahoum and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC4978124/) studied this distinction in gut bacteria. Bacteroides ovatus can break down inulin, a dietary chain of sugar units, outside the cell. The released products support Bacteroides vulgatus. Disabling the relevant digestive enzymes and comparing cultures and defined communities in mice showed that the producer gained a competitive benefit from the partner's presence under the tested conditions. The exact mechanism of the return benefit was not fully resolved. Other digestive systems in the same study largely retained their benefits within the producing cells.

These interactions depend on resource supply, diffusion, uptake, and competition. A partner's effect can change with the available food or with the other species present. Consequently, a community's rate of resource processing must be measured under specified conditions. A species list or a correlation between abundances cannot determine the underlying exchange: both organisms might simply respond to the same diet. The collective capability follows from the causal network of transformations and transfers.

**Sources**

- [Rakoff-Nahoum, Foster & Comstock (2016), The evolution of cooperation within the gut microbiota](https://pmc.ncbi.nlm.nih.gov/articles/PMC4978124/). Uses enzyme deletions, cultures, and communities in mice to test cross-feeding and reciprocal competitive benefits between gut bacteria.

## 7. Brains: collective dynamics and the limits of explanation

Neurons are cells specialized for electrical and chemical signaling. Their interactions support activity on many scales, from a voltage pulse along one cell to patterns distributed across a network. This chapter follows those scales through rhythms, sensory representation, memory, decisions, learning, and navigation.

Some mechanisms, such as the ionic currents underlying an action potential, have a detailed physical account. Others are best understood through models that show how a computation could occur. Recordings and interventions connect those models to biology: extracting a variable from neural activity shows that the activity contains information about it, while changing the activity tests its contribution to behavior.

The final entries examine two open problems. Neural criticality asks whether collective activity lies near a particular dynamical transition. Consciousness asks how neural organization relates to subjective experience. In both cases, progress depends on specifying which observations a proposed explanation predicts and how competing explanations differ.

### 61. Action potentials: Ion channels generate a traveling electrical pulse

A neuron is a cell specialized for electrical and chemical signaling. Its membrane separates fluids containing ions, electrically charged atoms or molecules. Membrane proteins called ion channels selectively allow these ions to pass. An action potential is a brief change in membrane voltage that regenerates as it travels, allowing a signal to propagate much farther than a passive pulse on a leaky membrane.

In the classic sodium-potassium mechanism, making the cell interior less negative opens sodium channels. Sodium entry raises the voltage further and opens more channels: positive feedback. Sodium-channel inactivation and delayed opening of potassium channels end the rise and repolarize the membrane. The ensuing refractory period, during which another spike is harder or impossible to initiate, separates successive events. [Hodgkin and Huxley](https://pmc.ncbi.nlm.nih.gov/articles/PMC1392413/) connected these processes quantitatively to measurements on the squid's large axon, the long cell extension along which signals travel.

The local current balance is $C_m\dot V=I_{\rm ext}-\sum_a g_a(V,t)(V-E_a)$. Here $V$ is the voltage inside relative to outside, $C_m$ is capacitance per membrane area, and $I_{\rm ext}$ is applied current per area. Each $g_a$ is a conductance per area, changing as channels open and close; $E_a$ is its reversal potential, where the ionic current changes direction. Current between adjacent membrane segments allows an excited segment to initiate the same process in its neighbor.

The propagating object is a coordinated voltage wave involving many channels. It does not require the same ions to travel the length of the axon. Chemical-energy-consuming pumps maintain the ionic concentration differences over longer times, while channel gating drives the rapid spike. Channel types and cell geometry determine the resulting wave shape, speed, and reliability.

**Sources**

- [Hodgkin & Huxley (1952), A quantitative description of membrane current and its application to conduction and excitation in nerve](https://pmc.ncbi.nlm.nih.gov/articles/PMC1392413/). Relates measured squid-axon ionic conductances to membrane excitation and action-potential propagation.
- [Gerstner et al. (2014), Neuronal Dynamics, section 2.2: Hodgkin–Huxley Model](https://neuronaldynamics.epfl.ch/online/Ch2.S2.html). Derives capacitive membrane dynamics and explains sodium and potassium gating, propagation prerequisites, and refractory behavior.

### 62. Neural oscillations: Excitation and inhibition generate a network rhythm

A population of neurons can oscillate even when its individual cells do not behave as autonomous clocks. Neurons communicate through synapses, connections that change the receiving cell's electrical state. Excitatory input promotes firing, while inhibitory input suppresses it in the operating regime considered here. Their interaction can create a repeating cycle of activation and suppression.

Let $E$ and $I$ be average activities of excitatory and inhibitory populations. A simplified rate model is $\tau_E\dot E=-E+F(w_{EE}E-w_{EI}I+P)$ and $\tau_I\dot I=-I+F(w_{IE}E-w_{II}I+Q)$. Positive coefficients $w$ set coupling strengths, $P,Q$ are external drives, $\tau_E,\tau_I$ are response times, and $F$ maps total input to bounded activity. Excitation recruits inhibition; inhibition reduces excitation; reduced excitation then allows inhibition to fall. Suitable response times and gains make this cycle self-sustaining.

[Wilson and Cowan](https://pubmed.ncbi.nlm.nih.gov/4332108/) showed how population models can support steady states, switching, and stable limit cycles—periodic trajectories that attract nearby states. The equations here simplify that approach. Oscillatory eigenvalues near a steady state identify a possible rhythm and its damping or growth, but the nonlinear dynamics determines whether an attracting cycle exists.

A measured oscillation may instead be a damped response repeatedly excited by input, or a response to periodic external forcing. Its persistence after a drive is removed helps distinguish these cases. Population rhythms also need not require every cell to fire on every cycle: changes in the fraction of active neurons can generate a strong bulk signal. Connecting a rhythm to behavior requires a further step, such as changing its timing or coupling and measuring the resulting performance. Frequency alone does not specify what a network computes.

**Sources**

- [Wilson & Cowan (1972), Excitatory and inhibitory interactions in localized populations of model neurons](https://pubmed.ncbi.nlm.nih.gov/4332108/). Demonstrates steady states, multiple stable states, and limit cycles in interacting excitatory and inhibitory populations.
- [Gerstner et al. (2014), Neuronal Dynamics, section 20.2: Oscillations: good or bad?](https://neuronaldynamics.epfl.ch/online/Ch20.S2.html). Explains network oscillations, their relation to single-cell firing, and the stability of asynchronous population activity.

### 63. Population coding: A variable is represented across many neurons

A neuron's firing rate is the number of electrical spikes it produces per unit time. A tuning curve describes how its average rate changes with a stimulus or behavior. A cell might fire most strongly during a northeastward reach while also responding to nearby directions. Its rate alone is therefore ambiguous. A population code uses the joint activity of many neurons to represent the variable more precisely.

Suppose neuron $i$ has preferred direction $\mathbf u_i$, a unit vector, and measured firing rate $r_i$. A population-vector decoder forms $\mathbf p=\sum_i(r_i-r_{i,0})\mathbf u_i$, with baseline rates $r_{i,0}$. For uniformly distributed preferences and matching cosine-like tuning, components transverse to the movement cancel and the vector points along it. [Georgopoulos and colleagues](https://pmc.ncbi.nlm.nih.gov/articles/PMC6569382/) found that population vectors tracked reach direction in recordings from primate motor cortex, a brain region involved in movement.

Combining responses can also reduce uncertainty. Independent fluctuations average down as more informative neurons are included. Shared fluctuations behave differently: if they change the population pattern in the same way as a change in the stimulus, no decoder can reliably tell the two apart. The pattern of correlations relative to the tuning curves matters more than whether correlations are simply positive or negative.

A decoder is an explicit rule for extracting information from activity. Its success establishes that the variable is recoverable under the tested conditions. To explain the brain's computation, we must also determine how other neurons use that information and how perturbing the population affects behavior. The useful collective description is therefore the geometry and variability of the joint response, with respect to a specified stimulus or task.

**Sources**

- [Georgopoulos, Kettner & Schwartz (1988), Primate motor cortex and free arm movements to visual targets in three-dimensional space. II. Coding of the direction of movement by a neuronal population](https://pmc.ncbi.nlm.nih.gov/articles/PMC6569382/). Tests population-vector estimates of three-dimensional reach direction using directionally tuned motor-cortex neurons.
- [Moreno-Bote et al. (2014), Information-limiting correlations](https://www.nature.com/articles/nn.3807). Shows how noise correlations that resemble changes in the encoded variable can limit information in a neural population.

### 64. Attractor memory: Network dynamics completes a stored pattern

Content-addressable memory retrieves a pattern from a similar or incomplete cue, rather than from a numerical storage address. A dynamical implementation makes each stored pattern an attractor: nearby network states evolve toward it. Errors in the cue can then be corrected through interactions among the units.

In a Hopfield network, unit $i$ has binary state $s_i=\pm1$. Define its local input as $h_i=\sum_jw_{ij}s_j-\theta_i$, where $w_{ij}$ are connection weights and $\theta_i$ is a threshold. For symmetric weights and no self-couplings, the function $E=-\tfrac12\sum_{ij}w_{ij}s_is_j+\sum_i\theta_i s_i$ decreases whenever a unit changes to agree with a nonzero $h_i$. Repeatedly visiting every unit, updating one at a time, and leaving it unchanged when $h_i=0$ leads a finite network to a fixed point. This is a mathematical energy for the update rule.

A simple storage prescription is $w_{ij}=N^{-1}\sum_\mu\xi_i^\mu\xi_j^\mu$ for $i\ne j$, where $N$ is the number of units and $\xi^\mu$ are the patterns. The resulting connections reinforce agreements present across the stored patterns. [Hopfield's model](https://doi.org/10.1073/pnas.79.8.2554) showed how suitable patterns and sufficiently informative cues can produce reliable completion through collective relaxation.

Each attractor has a basin: the starting states that converge to it. A damaged cue is corrected only while it remains in the appropriate basin. Too many or strongly correlated stored patterns cause interference, and unintended fixed points can appear. Simultaneous updates or asymmetric weights also remove the stated energy-descent guarantee. This model makes a specific memory mechanism understandable: distributed connections create robust retrieval regions, and retrieval errors arise when the cue or the stored associations send the dynamics into the wrong region.

**Sources**

- [Hopfield (1982), Neural networks and physical systems with emergent collective computational abilities](https://doi.org/10.1073/pnas.79.8.2554). Introduces distributed pattern storage and retrieval through collective dynamics, with convergence under the specified symmetric asynchronous update rule.
- [Gerstner et al. (2014), Neuronal Dynamics, section 17.2: Hopfield Model](https://neuronaldynamics.epfl.ch/online/Ch17.S2.html). Derives energy descent and explains retrieval, storage limits, and unintended fixed points in Hopfield networks.

### 65. Perceptual inference: Combining uncertain sensory estimates

Vision and touch can each give an uncertain estimate of an object's height. Combining them can improve precision, but the more reliable cue should carry greater weight. This is a concrete example of perceptual inference: using sensory measurements to estimate the external conditions that produced them.

Let $x_v$ and $x_h$ be independent, unbiased Gaussian measurements of a height $x$, with variances $\sigma_v^2$ and $\sigma_h^2$. Maximizing the joint likelihood gives $\hat x=(x_v/\sigma_v^2+x_h/\sigma_h^2)/(1/\sigma_v^2+1/\sigma_h^2)$. Each weight is proportional to reliability, defined here as inverse variance. The combined estimate has variance $(1/\sigma_v^2+1/\sigma_h^2)^{-1}$. Equal uncertainties give an equal average; if one cue becomes very noisy, its weight tends to zero.

[Ernst and Banks](https://www.nature.com/articles/415429a) measured visual and touch judgments of height, then used the separate uncertainties to predict their combination. Human judgments closely followed the prediction under the tested conditions. Changing visual uncertainty also changed its influence, linking the weighting rule to a controlled manipulation rather than just fitting one combined estimate.

The assumptions explain when the rule should change. Correlated errors reduce the amount of independent evidence, and cues from different objects should not automatically be fused. Prior knowledge can affect the estimate when some heights were more plausible before the measurements. These are computational questions about how evidence is combined. The neural implementation is a separate question: several circuits could approximate the same weighting rule. The experiment demonstrates a reliable population-level relation between sensory uncertainty and judgment, while leaving the responsible circuit operations to be identified.

**Sources**

- [Ernst & Banks (2002), Humans integrate visual and haptic information in a statistically optimal fashion](https://www.nature.com/articles/415429a). Measures visual and touch uncertainty separately and tests the predicted reliability-weighted combination in height judgments.

### 66. Evidence accumulation and discrete choices

In a moving-dot display, individual observations may give only weak evidence for leftward or rightward motion. Combining observations over time can improve a judgment. Evidence-accumulation models describe this process with a decision variable that changes until it reaches a stopping boundary, converting a fluctuating input stream into one of two choices.

A drift-diffusion model writes $dx=v\,dt+\sigma\,dW_t$, where $x$ is accumulated evidence, $v$ its mean drift, $\sigma$ the noise amplitude, and $W_t$ a Wiener process with increment variance $dt$. Starting at zero between symmetric bounds, a larger boundary separation increases the probability of choosing the drift-favored direction and increases the mean decision time. This produces a speed-accuracy tradeoff. Observed reaction time also includes sensory and movement delays.

[Shadlen and Newsome](https://journals.physiology.org/doi/10.1152/jn.2001.86.4.1916) recorded activity related to motion judgments in the lateral intraparietal area, a region of monkey cortex. Some responses resembled an evolving accumulation signal. Later, [Katz and colleagues](https://www.nature.com/articles/nature18617) reversibly inactivated this area and a sensory motion area during related tasks. Inactivation of the sensory area impaired performance, whereas inactivation of the strongly decision-correlated area had no measurable effect on the tested decisions. The correlation therefore did not establish that this area was necessary for the computation under those conditions.

The distinction matters at both the population and single-trial levels. A gradual ramp averaged over trials could reflect gradual accumulation on each trial, or abrupt changes occurring at different times. Models should therefore explain choice probabilities, response-time distributions, and suitably resolved activity. The reduction to a decision variable is useful when it predicts these observables; locating its neural implementation additionally requires causal tests.

**Sources**

- [Shadlen & Newsome (2001), Neural Basis of a Perceptual Decision in the Parietal Cortex (Area LIP) of the Rhesus Monkey](https://journals.physiology.org/doi/10.1152/jn.2001.86.4.1916). Records parietal neuronal responses associated with motion judgments and examines their relation to evidence accumulation.
- [Katz et al. (2016), Dissociated functional significance of decision-related activity in the primate dorsal stream](https://www.nature.com/articles/nature18617). Compares recordings and reversible inactivation in sensory motion and parietal areas, finding different causal effects despite strong decision correlations.

### 67. Synaptic learning: Activity changes the connections that shape future activity

A synapse is a connection through which a sending neuron influences a receiving neuron. Synaptic plasticity is a lasting change in that connection's efficacy. It provides one route by which experience changes future responses: activity modifies connections, and those modified connections alter the activity produced by later inputs.

Spike timing can determine the direction of modification. In [Bi and Poo's experiments](https://pmc.ncbi.nlm.nih.gov/articles/PMC6793365/) on cultured rat neurons, repeated pairs of electrical spikes strengthened certain synapses when the sending cell fired shortly before the receiving cell. Reversing the order favored weakening. The result also depended on the receiving cell type and the initial connection strength.

A schematic timing rule is $\Delta w=A_+e^{-\Delta t/\tau_+}$ for $\Delta t>0$ and $\Delta w=-A_-e^{\Delta t/\tau_-}$ for $\Delta t<0$. Here $\Delta t=t_{\rm post}-t_{\rm pre}$ is the receiving spike time minus the sending spike time, $w$ is connection strength, $A_\pm$ set change amplitudes, and $\tau_\pm$ set timing windows. Inputs that repeatedly precede a receiving cell's activity can be reinforced. The rule is sensitive to temporal relationships, however caused; it cannot by itself distinguish direct influence from two cells responding to a common input.

Fast activity and slower connection changes form a coupled dynamical system. Depending on the circuit, this interaction can develop selectivity, strengthen associations, or organize attractors that support memory. Unbounded reinforcement can also produce excessive excitation, so other mechanisms must regulate connection strength or overall activity. A measured plasticity rule supplies a local mechanism; explaining a learned behavior requires showing how its accumulated changes reorganize the relevant network responses.

**Sources**

- [Bi & Poo (1998), Synaptic modifications in cultured hippocampal neurons: dependence on spike timing, synaptic strength, and postsynaptic cell type](https://pmc.ncbi.nlm.nih.gov/articles/PMC6793365/). Measures how repeated paired spikes change synapses as a function of timing, initial strength, and receiving cell type; the exponential rule here is schematic.

### 68. Cognitive maps: Population activity represents spatial position

An animal can return to a place despite changes in its view or direction of travel. A cognitive map is an internal representation of spatial relations that can support such navigation. Neural recordings make one part of this idea concrete: patterns of activity vary systematically with location, allowing position to be inferred from them.

Place cells are neurons active around particular locations in an environment. Grid cells have multiple active locations arranged approximately as a triangular lattice. [Hafting and colleagues](https://www.nature.com/articles/nature03721) found grid cells in the entorhinal cortex, a region connected with the hippocampus, which is involved in spatial behavior and memory. Nearby grid cells shared spacing and orientation but differed in spatial phase, the offset of their firing lattices.

Periodicity creates an ambiguity. Cells with different phases but the same lattice can distinguish positions within one repeating cell of the lattice; they cannot distinguish positions separated by a common lattice vector. Combining different spacings can extend the unambiguous range. The relevant representation is therefore distributed across cells and scales.

Navigation also requires updating position from movement. Ideal path integration is $\mathbf x(t)=\mathbf x(0)+\int_0^t\mathbf v(s)\,ds$, with position $\mathbf x$ and velocity $\mathbf v$. Errors accumulate, so landmarks can correct the estimate. In a continuous-attractor model, a localized activity pattern moves through a continuous family of stable population states as position changes. This supplies a possible mechanism for updating the representation. Spatial firing patterns, their response to landmark removal, and the dynamics of the full population provide different tests of that mechanism. Representing location and computing its update are related but distinct achievements.

**Sources**

- [Hafting et al. (2005), Microstructure of a spatial map in the entorhinal cortex](https://www.nature.com/articles/nature03721). Documents triangular spatial firing patterns, shared grid spacing and orientation, differing phases, and relationships to landmarks.
- [O’Keefe & Dostrovsky (1971), The hippocampus as a spatial map. Preliminary evidence from unit activity in the freely-moving rat](https://doi.org/10.1016/0006-8993(71)90358-1). Reports location-selective hippocampal activity during movement in rats.

### 69. Brain criticality: Neural cascades and the criticality hypothesis

Some neural recordings contain cascades with many small events and a few very large ones. A neuronal avalanche is a cluster of detected activity events separated from other clusters by a specified period of inactivity. Its size distribution depends on recording coverage, detection thresholds, and time bins. A broad distribution motivates a criticality hypothesis, but does not alone identify a critical state.

A branching process provides a useful comparison. Each active event produces, on average, $m$ descendants. For $m<1$, the expected activity decays; for $m>1$, an unbounded model allows a nonzero probability of continued growth. The boundary is $m=1$. With a nondegenerate offspring distribution of finite variance, critical branching produces a power-law tail in total cascade size. This connects broad cascades to a balance between fading and amplification.

[Beggs and Plenz](https://pubmed.ncbi.nlm.nih.gov/14657176/) reported avalanche statistics in rat cortical tissue that helped motivate this interpretation. Neural networks also contain inhibition, recurrent connections, continuing input, and finite populations, so their events need not form an independent branching process. [Touboul and Destexhe](https://arxiv.org/abs/1503.08033) constructed noncritical dynamics with power-law statistics and scaling signatures, demonstrating that these observations are insufficient to identify criticality.

A stronger test combines statistics with a proposed control parameter and a response to perturbation. Changing the parameter should alter propagation in the predicted way, and scaling should remain consistent as the sampled system size changes. A claim that the network regulates itself toward the transition also needs a mechanism for that regulation. The scientific target is a specified collective propagation regime. Whether that regime improves a particular computation is another prediction to test, with both the computation and the comparison state defined.

**Sources**

- [Beggs & Plenz (2003), Neuronal avalanches in neocortical circuits](https://pubmed.ncbi.nlm.nih.gov/14657176/). Reports avalanche-size statistics and branching estimates in rat neocortical preparations.
- [Touboul & Destexhe (2017), Power-law statistics and universal scaling in the absence of criticality](https://arxiv.org/abs/1503.08033). Constructs noncritical network and stochastic models with power-law avalanche statistics and scaling signatures.

### 70. Consciousness and neural organization

Consciousness, in the sense used here, is subjective experience: what it is like to see a color, hear a sound, or feel pain. Its contents must be distinguished from wakefulness, task performance, and the ability to report. These provide evidence about experience, but are not interchangeable with it. An account of consciousness must explain which neural processes support experience and why different processes accompany different contents.

Experiments can compare neural responses across states and test the effects of interventions. [Casali and colleagues](https://pubmed.ncbi.nlm.nih.gov/23946194/) used magnetic stimulation to perturb the cortex, the brain's outer sheet of neural tissue, and measured the complexity of the resulting electrical response. Their perturbational complexity index distinguished the studied conditions across wakefulness, sleep, anesthesia, and brain injury. This provides an empirically useful relation between neural response and conscious state within those conditions.

Competing theories make different organizational proposals. Global neuronal workspace theory emphasizes information becoming widely available to other brain systems. Integrated information theory relates experience to internal causal organization that cannot be reduced to independent parts. A [2025 preregistered comparison](https://www.nature.com/articles/s41586-025-08888-1) tested predictions from both theories about conscious visual content. The results supported some predictions and challenged others. Because the predictions and interpretation criteria were specified in advance, disagreements could be tied to particular observations rather than adjusted entirely after the result.

The explanatory difficulty is connecting measurable processes to experience itself. A signal associated with a report may also reflect attention, memory, or preparation to act. A proposed mechanism must distinguish these contributions and state which changes should alter experience. Emergence names the hoped-for relation between neural organization and experience; the substantive work lies in deriving discriminating predictions and testing them. A generally accepted account of that relation remains open.

**Sources**

- [Casali et al. (2013), A theoretically based index of consciousness independent of sensory processing and behavior](https://pubmed.ncbi.nlm.nih.gov/23946194/). Tests a complexity measure of cortical responses to magnetic stimulation across specified human conscious states and clinical conditions.
- [Cogitate Consortium et al. (2025), Adversarial testing of global neuronal workspace and integrated information theories of consciousness](https://www.nature.com/articles/s41586-025-08888-1). Compares preregistered predictions from two consciousness theories using several neural measurement methods, supporting some predictions and challenging others.

## 8. Expectations, rules, and collective outcomes

Social interactions change when people learn what others are doing or revise the rules they follow. A convention, price, or institution can therefore influence the decisions that sustain it. We need to explain both the resulting pattern and the expectations, incentives, and constraints through which it acts.

The examples begin with coordination through shared meanings and expectations, then turn to exchange, residential patterns, and the movement of traffic. They also examine how groups combine information and govern shared resources. These systems differ in an essential respect: traffic permits a relatively direct physical description, whereas social institutions depend on interpretation, authority, and historical circumstances.

A mathematical model can establish that a mechanism produces a collective outcome. Explaining an observed society requires evidence that the mechanism actually operates there. The same distinction separates an arrangement's persistence from its value: a stable rule can distribute benefits unequally or survive without the consent of everyone subject to it.

### 71. Language conventions

A name becomes useful when other people interpret it similarly. A linguistic convention is a shared association between a form, such as a spoken word, and a use or meaning. Its formation depends on repeated interactions: successful usage changes what speakers expect to be understood next time.

A naming game isolates this feedback. Participants meet in pairs, propose names for the same pictured person, and receive a reward when their choices match. Reusing a successful name improves its prospects in later encounters. In Centola and Baronchelli's experiment, the pattern of contacts affected whether the population developed one shared convention or retained competing local conventions. Participants could coordinate across a population without seeing its overall distribution of names.

We can distinguish reinforcement from random copying with a simpler model. Let $p$ be the fraction using one of two names. If each person copies a uniformly chosen partner without bias, $p$ has no systematic drift, although fluctuations can eventually produce consensus in a finite, well-mixed population. A preference for the locally common name instead amplifies an existing imbalance. Similar final agreement can therefore result from different dynamics; the response to a small imbalance helps distinguish them.

Natural languages also involve rules for combining words, meanings negotiated in context, social differences among speakers, and transmission between generations. The naming experiment explains one ingredient: a shared mapping becomes stable because participants adapt their usage to one another. Deliberate standardization and unequal influence can contribute to that process in other settings.

**Sources**

- [Centola and Baronchelli (2015), The spontaneous emergence of conventions: An experimental study of cultural evolution](https://arxiv.org/abs/1502.06910). Human naming-game experiment showing that contact structure changes the formation of local and population-wide conventions.

### 72. Social norms and expectations

People washing their dishes in a shared kitchen may prefer cleanliness, expect criticism, or believe that everyone should contribute. The visible behavior alone does not distinguish these motives. A social norm involves expectations about others' behavior and approval that influence one's own conduct.

Empirical expectations are beliefs about what others actually do; normative expectations are beliefs about what others think one ought to do. Bicchieri and Xiao separated these experimentally using a dictator game, in which one participant divides a resource with another who cannot veto the allocation. Beliefs about other allocators' behavior helped predict choices, including when behavioral and approval information conflicted. This provides a way to test whether compliance responds to perceived practice or perceived obligation.

Enforcement introduces another mechanism. Suppose a violation yields benefit $b$, detection occurs with probability $q$, and detection incurs penalty $F$, with $b$ and $F$ measured in the same payoff units. Avoiding the violation is advantageous when $qF>b$. If monitoring depends on participation, compliance and monitoring may reinforce each other: people uphold a rule they expect others to uphold, while widespread violations can undermine that expectation. Reputational penalties operate through future interactions and require a longer-term version of this calculation.

We can distinguish these mechanisms by changing information about behavior, information about approval, and actual enforcement separately. Visible compliance need not imply private endorsement. The collective pattern is sustained partly by expectations that participants form about one another, alongside commitments and material constraints that need their own explanation.

**Sources**

- [Bicchieri and Xiao (2009), Do the right thing: But only if others do so](https://doi.org/10.1002/bdm.621). Allocation experiments separating information about others' behavior from information about their approval.

### 73. Market prices: Price formation in an auction

Buyers and sellers know different needs, costs, and alternatives. A market price can coordinate some of these dispersed decisions because it changes which trades each participant finds worthwhile. The resulting price depends on both their valuations and the rules through which they exchange offers.

Suppose each buyer has a maximum willingness to pay and each seller a minimum acceptable price. Demand $D(p)$ is the quantity buyers would purchase at price $p$; supply $S(p)$ is the quantity sellers would offer. A competitive equilibrium satisfies $D(p)=S(p)$ when such an equality is available. This is a condition for compatible trading plans. It does not specify how bargaining reaches that price. With discrete goods, an interval of prices may support the same allocation.

In a double auction, buyers submit bids and sellers submit asking prices, and accepted offers become trades. Vernon Smith's laboratory experiments showed that repeated trading under these rules could approach competitive predictions with few participants and limited information. Each trader could adjust offers using local experience, while the sequence of transactions supplied information to others.

Prices and quantities respond together when costs or valuations change. Measuring both, along with who trades, tests more than convergence of price alone. The result also depends on borrowing constraints, participants' ability to influence prices, and costs imposed outside the exchange. Because willingness to pay depends on purchasing power, even a price that coordinates trades successfully does not directly measure social need.

**Sources**

- [Smith (1962), An Experimental Study of Competitive Market Behavior](https://doi.org/10.1086/258609). Laboratory double auctions comparing transaction prices and allocations with competitive-equilibrium predictions.

### 74. Money and shared acceptance

A baker who needs shoes may find that the shoemaker wants repairs rather than bread. Direct barter requires each party to want what the other offers. A medium of exchange relaxes this matching requirement: we accept it because we expect to use it in a later transaction.

Search models of money describe people who meet only some potential trading partners and choose which exchanges to accept. In Kiyotaki and Wright's model, an object can circulate because accepting it is worthwhile when future partners are expected to accept it too. An equilibrium is a set of mutually consistent strategies and beliefs: given others' behavior, no participant can improve their payoff by changing strategy alone.

The mechanism becomes clear by comparing two routes from bread to shoes. Barter requires a shoe owner who wants bread. An accepted token permits separate exchanges with different people, first for the token and then for shoes. The token improves access to future trades even if it has no consumption value. If expected acceptance falls, taking it becomes less attractive, which can further reduce acceptance. The same dependence on others supports both coordination and fragility.

Money also serves as a unit of account, in which prices and obligations are stated, and a store of value, which carries purchasing power into the future. These functions need not coincide perfectly. Credit, taxation, public authority, and payment infrastructure help sustain actual monetary systems. The search model isolates the value of shared acceptance; it does not establish a historical sequence in which every monetary system arose from barter.

**Sources**

- [Kiyotaki and Wright (1993), A Search-Theoretic Approach to Monetary Economics](https://homepage.ntu.edu.tw/~yitingli/file/macro%20and%20money/Kiyotaki%2C%20N.%20and%20R.%20Wright%20%281993%29.pdf). Search model in which shared acceptance supports monetary exchange despite the difficulty of matching wants.

### 75. Residential segregation from local relocation rules

A separated residential map need not be the arrangement every resident prefers. Schelling's model demonstrates how local relocation choices can produce a collective pattern that no participant directly chooses.

Consider two categories of agents occupying sites on a grid with some vacancies. Each agent accepts a neighborhood when the fraction of occupied neighboring sites belonging to its own category reaches a specified threshold. Dissatisfied agents move according to a relocation rule. Each move changes the neighborhoods at both its origin and destination, potentially inducing further moves. For some thresholds and starting configurations, clusters develop even though agents would accept substantial mixing.

The result depends on how neighborhoods are defined, which destinations are available, and the order of moves. Individual thresholds alone do not determine it. We can measure segregation by comparing the fraction of same-category neighbors with that in randomized arrangements of the same population. This comparison accounts for the fact that a majority category will have many same-category neighbors even under random mixing. Recording satisfaction and mobility separately also reveals configurations that stop changing because agents cannot make an allowed move.

Actual housing patterns depend on discrimination, wealth, lending, public policy, and unequal access to housing as well as preferences. The model does not estimate their contributions. It establishes a logical point with broader relevance: actions that change other people's local circumstances can amplify a preference, and the resulting aggregate pattern does not uniquely identify either that preference or the constraints under which people acted.

**Sources**

- [Schelling (1971), Dynamic models of segregation](https://doi.org/10.1080/0022250X.1971.9989794). Relocation models demonstrating that locally acceptable neighborhood mixtures can generate substantial aggregate segregation.

### 76. Traffic jams as traveling density patterns

A traffic jam can persist while cars continuously enter and leave it. The collective object is a region of dense, slow traffic. Its motion differs from the motion of the vehicles composing it, so a jam can travel backward along a road while every car moves forward.

In a simple car-following model, a driver's desired speed depends on the gap to the next car, and the actual speed approaches it over a response time. Under sufficiently sensitive or delayed responses, a small deceleration causes a larger deceleration behind it. Sugiyama and colleagues observed a jam develop on a circular track without a fixed obstruction. This establishes that interactions among drivers can generate a jam internally, alongside the familiar jams caused by bottlenecks.

Vehicle conservation makes the distinction between car speed and pattern speed precise. Let $\rho(x,t)$ denote cars per unit length and $Q=\rho v$ the flow, with $v$ the local average speed. Away from entrances and exits,

$$\partial_t\rho+\partial_xQ=0.$$

A sharp boundary between uniform traffic states moves at

$$c=\frac{Q_2-Q_1}{\rho_2-\rho_1}.$$

The ratio can be negative even when both vehicle velocities are positive. Conservation determines this boundary speed once the two states are known; the response rules explain how those states develop.

Lane changes, different driving responses, and road geometry affect whether disturbances grow. Measurements of gaps and accelerations therefore complement the coarse density and flow fields: they connect the traveling pattern to the interactions that sustain it.

**Sources**

- [Sugiyama et al. (2008), Traffic jams without bottlenecks—experimental evidence for the physical mechanism of the formation of a jam](https://doi.org/10.1088/1367-2630/10/3/033001). Circular-track experiment in which a traffic jam forms without a fixed bottleneck.

### 77. Collective intelligence: Collective judgment and correlated errors

Averaging imperfect estimates can improve accuracy when their errors partly cancel. Write each estimate as $x_i=\theta+\epsilon_i$, with target $\theta$ and unbiased independent errors of variance $\sigma^2$. The average of $N$ estimates has variance $\sigma^2/N$.

Shared errors limit this gain. If every pair has correlation $\rho$, then

$$\operatorname{Var}(\bar x)=\frac{\sigma^2}{N}[1+(N-1)\rho].$$

For fixed positive $\rho$, the variance approaches $\rho\sigma^2$ as the group grows. A common bias also survives averaging. Copying a confident speaker can therefore increase agreement without improving accuracy. Discussion can nevertheless help when it introduces missing evidence or identifies mistakes; its effect depends on the information exchanged and how influence is distributed.

“Collective intelligence” also refers more broadly to a group's performance across tasks. Woolley and colleagues found a statistical factor summarizing correlated scores across several tasks in small groups. A factor identifies a pattern of covariation, without by itself identifying its cause. Bates and Gupta subsequently found a stronger role for members' individual cognitive abilities and challenged some proposed predictors of group performance. The organization of information and the abilities of participants both remain relevant explanatory variables.

A useful comparison follows the same people working individually, exchanging evidence under a specified procedure, and producing a joint answer. Accuracy, participation, and dependence among errors reveal whether interaction contributes information or mainly makes judgments converge. The capacity belongs to that arrangement of people and procedures, and can vary with the task.

**Sources**

- [Woolley et al. (2010), Evidence for a collective intelligence factor in the performance of human groups](https://doi.org/10.1126/science.1193147). Small-group experiments reporting a common statistical factor across task performance.
- [Bates and Gupta (2017), Smart groups of smart people: Evidence for IQ as the origin of collective intelligence in the performance of human groups](https://doi.org/10.1016/j.intell.2016.11.004). Group experiments finding a larger contribution from members' cognitive abilities and challenging some earlier predictors.

### 78. Commons governance: Governing a shared resource

An irrigation channel serves several farms, but water taken by one is unavailable to others. Maintaining the channel also requires contributions whose benefits are shared. A common-pool resource is one whose use reduces what remains for others and from which excluding potential users is difficult or costly. These features create incentives for overuse without determining how the users will respond.

A simple stock balance is

$$R_{t+1}=R_t+g(R_t)-\sum_i h_i,$$

where $R_t$ is the resource stock, $g(R_t)$ its replenishment during one interval, and $h_i$ user $i$'s withdrawal. Sustained use requires a stock trajectory compatible with replenishment. A user may nevertheless gain from taking more immediately if others bear much of the later depletion cost.

Governance consists of processes for making, enforcing, and revising rules. Elinor Ostrom's research documented how communities sometimes manage common-pool resources through defined access rights, monitoring, sanctions, and dispute resolution. These arrangements change the consequences of withdrawal. Graduated sanctions, for example, can distinguish occasional mistakes from repeated violations; participation in rule revision can help management respond to local conditions.

The relevant collective outcome includes both the resource trajectory and the practices sustaining agreed limits. Local organization may work together with markets and public authorities. Its effectiveness depends on the resource's replenishment dynamics, who can monitor use, who pays for enforcement, and whose interests enter the decisions. A successful arrangement in one setting is evidence for a feasible mechanism, rather than a rule that can be transferred unchanged to another.

**Sources**

- [Ostrom (2010), Beyond Markets and States: Polycentric Governance of Complex Economic Systems](https://doi.org/10.1257/aer.100.3.641). Synthesis of field studies, models, and experiments on how users govern shared resources through varied institutional arrangements.

### 79. Institutions and their persistence

A workplace's rules may precede its current members and survive their departure. An institution, in the sense used here, consists of formal or informal rules and enforcement practices that shape interaction. An organization is a group acting within such arrangements. Records, authority, and learned expectations can carry institutional rules across changes in membership.

Repeated exchange illustrates one supporting mechanism. Suppose breaking an agreement yields an extra gain $g$ now, but detectable defection triggers exclusion from future exchanges. Let cooperation provide $v$ more per period than exclusion, and let $0<\delta<1$ discount future benefits. The discounted loss from exclusion is $\delta v/(1-\delta)$, so cooperation can be supported when

$$g\leq\frac{\delta v}{1-\delta}.$$

This condition requires credible exclusion and detectable violations. Repetition supplies an incentive only if participants can actually impose the future consequence.

Institutions can make those conditions more reliable by recording obligations, resolving disputes, and assigning responsibility for enforcement. North's account emphasizes how formal rules and informal constraints structure economic and political choices over time. Participants sustain these constraints through their conduct, while also contesting and revising them.

Persistence can reflect effective coordination, but also unequal power or difficulty coordinating a change. The repeated-exchange model explains one incentive and leaves these other mechanisms to be investigated. Historical and comparative evidence is needed to determine which participants benefit, how rules are transmitted, and what permits reform. The durable collective constraint resides in connected practices that continue beyond any particular participant.

**Sources**

- [North (1991), Institutions](https://www.aeaweb.org/articles?id=10.1257/jep.5.1.97). Account of formal and informal rules, enforcement, and their persistence over historical time.
- [Ostrom (2010), Beyond Markets and States: Polycentric Governance of Complex Economic Systems](https://doi.org/10.1257/aer.100.3.641). Comparative evidence concerning access rules, monitoring, enforcement, and institutional change in resource governance.

### 80. Polarization and the effects of contact

Political polarization can refer to separation of policy positions, sorting into internally similar groups, or growing hostility toward another group. These are different quantities. Changes in communication can affect them differently, so an experiment must specify which outcome it measures.

A bounded-confidence model assigns each agent a numerical opinion and allows averaging only with agents whose opinions lie within a tolerance. Repetition can produce agreement within clusters while leaving distant clusters apart. The separation follows from the assumed refusal to average across sufficiently large differences. To apply the model, we need evidence that the opinion coordinate and response rule describe the people being studied.

Two field experiments illustrate the importance of the intervention itself. Bail and colleagues offered US Twitter users exposure to messages from opposing political elites. Treated Republicans became more conservative; the corresponding Democratic change was not statistically significant. Nyhan and colleagues instead reduced Facebook users' exposure to like-minded sources during the 2020 US election. They found no measurable change in several specified attitude measures, including hostility toward the opposing party and ideological extremity. These interventions altered different kinds of contact in different populations.

Neither network separation nor similarity among connected people establishes the direction of causation. People may choose contacts with similar views, change their views through contact, or do both. Controlled changes in exposure help separate these processes. Their interpretation still depends on who speaks, how recipients judge credibility, what other information they receive, and the duration over which effects are measured.

**Sources**

- [Hegselmann and Krause (2002), Opinion dynamics and bounded confidence: models, analysis and simulation](https://www.jasss.org/5/3/2.html). Analysis of opinion clusters generated by bounded-confidence averaging rules.
- [Bail et al. (2018), Exposure to opposing views on social media can increase political polarization](https://doi.org/10.1073/pnas.1804840115). Twitter field experiment reporting an asymmetric response to exposure to opposing political messages.
- [Nyhan et al. (2023), Like-minded sources on Facebook are prevalent but not polarizing](https://www.nature.com/articles/s41586-023-06297-w). Facebook field experiment finding no measurable change in specified political attitudes after reducing like-minded-source exposure during the 2020 US election.

## 9. Networks, computation, and learning

Connectivity changes what a system can do. A collection of isolated channels cannot transmit material across a barrier, but a spanning path can. Similarly, individually unreliable symbols can store a reliable message when constraints make errors detectable and correctable. These examples connect collective structure to a definite capability.

The first entries examine how connections form and how disturbances spread. The next group concerns designed systems: local protocols produce agreement, error correction protects information, and distributed algorithms restore a global condition after faults. Their assumptions are part of the explanation because changing the allowed failures or update rules can change the result.

Learning introduces a further distinction. Training can develop internal variables useful for a task without specifying them individually. Yet a sudden rise in a task score need not indicate a sudden internal reorganization. We will separate the learned computation, the dynamics that produce it, and the measurement used to judge its success.

### 81. Percolation and long-range connectivity

Opening one channel in a porous barrier makes a local change. Opening enough channels can create a path across the entire barrier. Percolation studies this global connectivity using a network of nodes joined by edges. In bond percolation, each edge is independently present with probability $p$; in site percolation, nodes are randomly made available. A cluster consists of nodes connected by available paths.

On suitable infinite networks, an infinite cluster has positive probability above a threshold $p_c$. A finite sample instead has a probability of spanning from one side to another, with a crossover that sharpens as the sample grows. The threshold depends on the network geometry and on what is removed; it is not a fixed fraction common to all materials.

An infinite regular tree, with $z>2$ edges at each node, gives a simple derivation. After arriving along an open edge, we can continue along $z-1$ unused edges, each open with probability $p$. The mean number of continuations is $p(z-1)$. The associated branching process can survive indefinitely when this exceeds one, giving

$$p_c=\frac{1}{z-1}.$$

Loops change the calculation because different paths can lead to already visited nodes.

Connectivity is only the first requirement for transport. A narrow connection may carry little current or water even when it completes a spanning path. Crossing probabilities and cluster sizes describe reachability; conductances, flow laws, and bottlenecks are also needed to predict a transport rate. The collective property is the existence of a connected route, which cannot be assigned to any one of its links.

**Sources**

- [Broadbent and Hammersley (1957), Percolation processes. I. Crystals and mazes](https://doi.org/10.1017/S0305004100032680). Formulation of random connectivity through a porous medium; the regular-tree threshold in the text follows from an elementary branching calculation.
- [Bollobás and Riordan (2006), Percolation](https://www.cambridge.org/core/books/abs/percolation/preface/35FA76DA88948FF71F34482AE513B37B). Mathematical treatment of percolation thresholds and connectivity, distinguishing proved results from conjectures.

### 82. Network hubs

A node's degree is the number of edges attached to it. A hub has unusually high degree relative to other nodes. Such unequal connectivity can arise during growth if existing connections make a node more likely to acquire new ones.

The Barabási–Albert model implements this preferential attachment: every new node contributes $m$ edges, choosing existing nodes with probability proportional to their degrees. After $t$ additions, the total degree is approximately $2mt$. A continuum approximation for node $i$ gives

$$\frac{dk_i}{dt}\simeq\frac{k_i}{2t},\qquad k_i(t)\simeq m\left(\frac{t}{t_i}\right)^{1/2},$$

where $t_i$ is its arrival time. Older nodes have had more opportunity to acquire edges. Because arrival times are approximately uniform, the fraction with degree at least $k$ scales as $k^{-2}$; differentiation gives the degree-distribution tail $P(k)\propto k^{-3}$.

The exponent depends on the mechanism. Linear attachment preference, continuing growth, and unrestricted degree enter this derivation. Aging, capacity limits, deletion, or differences in a node's attractiveness can alter the result.

A power-law degree distribution is commonly called scale free; simply having hubs is a weaker statement. Broido and Clauset's statistical analysis of empirical networks found limited support for strong scale-free claims under their tests, with other broad distributions often fitting well. Even a convincing power law does not identify its cause. Time-resolved observations of new attachments help distinguish reinforcement by existing degree from differences in age, capacity, or attractiveness.

**Sources**

- [Barabási and Albert (1999), Emergence of scaling in random networks](https://arxiv.org/abs/cond-mat/9910332). Growing-network model yielding a power-law degree tail through linear preferential attachment.
- [Broido and Clauset (2019), Scale-free networks are rare](https://www.nature.com/articles/s41467-019-08746-5). Statistical tests of empirical degree distributions, including comparisons of power-law and alternative fits.

### 83. Cascading failures

One component's failure can change the conditions faced by others. A damaged power line may redistribute load, while a lost supplier may remove a necessary input. A cascade occurs when those changes trigger further failures. The connection diagram alone cannot predict the outcome without a rule for transmitting the disturbance.

A binary threshold model isolates one mechanism. Each node is active or inactive and has threshold $\phi_i$. It becomes active when the fraction of active neighbors reaches that threshold, and remains active during the modeled event. If “active” means failed, a small seed can trigger successive failures. Watts showed that random networks have parameter regimes in which such seeds can affect a fraction of the system that remains finite as its size grows.

More connections have competing effects. They can join vulnerable regions, allowing activation to spread farther. But a node of degree $k$ receives a fraction $1/k$ of active neighbors from one failed neighbor. Increasing $k$ can therefore make it harder for that single neighbor to cross a fixed fractional threshold. A model based on absolute load would respond differently.

To connect the model to an infrastructure failure, we need measurements of what changes after the initiating event: load, available inputs, or another relevant quantity. Repair, protective shutdowns, and delayed responses can interrupt or redirect the sequence. The size and timing of a cascade arise jointly from the connections, the local thresholds, and the dynamics through which one failure affects the next.

**Sources**

- [Watts (2002), A simple model of global cascades on random networks](https://doi.org/10.1073/pnas.082090499). Binary threshold model showing parameter regimes where a small seed can trigger a macroscopic cascade.

### 84. Distributed consensus

Several computers holding copies of a record must agree on its next update despite delayed messages and possible failures. Distributed consensus requires agreement among participants that have not failed, a validity condition tying the decision to proposed inputs, and eventual termination under specified conditions.

Replication creates different local views. If three computers simply accept the first proposal they receive, different message orders can produce different decisions. Waiting for further messages may resolve the disagreement, but an unanswered message poses a problem: without timing bounds, a computer cannot distinguish a failed participant from a slow one.

Fischer, Lynch, and Paterson made this obstacle precise. In a fully asynchronous message-passing system, with no upper bound on message delays or relative process speeds, a deterministic consensus protocol cannot guarantee termination in every admissible execution when even one process may crash. A crash means the process stops taking steps. The impossibility holds even with reliable communication; it concerns the absence of timing information, rather than arbitrary message loss.

A Byzantine fault permits more than a crash: a participant can send conflicting or otherwise arbitrary messages. Agreement then depends on further assumptions, including whether messages can be authenticated. Fault thresholds from these different models cannot be interchanged.

Practical protocols gain progress through additional assumptions or resources, such as eventual timing bounds or randomization. Their guarantees must distinguish preventing conflicting decisions from ensuring that a decision eventually occurs. The collective capability is a common decision assembled from partial local histories, and the information available in those histories determines which guarantees are possible.

**Sources**

- [Fischer, Lynch, and Paterson (1985), Impossibility of distributed consensus with one faulty process](https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf). Impossibility of guaranteed deterministic consensus termination under full asynchrony with even one possible crash.
- [Lamport, Shostak, and Pease (1982), The Byzantine Generals Problem](https://lamport.azurewebsites.net/pubs/byz.pdf). Agreement with arbitrary faulty behavior under specified communication and authentication assumptions.

### 85. Error correction through redundancy

A code represents a message using more physical symbols than independent information symbols. The extra symbols impose constraints that help a decoder infer the intended message after transmission errors. Reliability belongs to the encoded message and decoding procedure together.

For example, encode zero as 000 and one as 111. Majority decoding corrects any single bit flip. With independent flip probability $p$, decoding fails only if at least two bits flip:

$$P_{\mathrm{error}}=3p^2(1-p)+p^3.$$

This is smaller than $p$ for $0<p<1/2$, at the cost of sending three bits per information bit. Correlated noise can defeat the gain: a disturbance that flips all three together changes one valid codeword directly into the other.

Hamming distance counts the positions where two strings differ. Correcting up to $t$ arbitrary bit errors requires minimum distance at least $2t+1$ between distinct codewords. Their radius-$t$ error neighborhoods then do not overlap, so a received string within that distance has a unique interpretation.

Hamming's codes use parity checks, constraints on whether selected sums of bits are even or odd, to identify error locations more efficiently than simple repetition. Information about a damaged symbol is distributed across relationships among symbols. The useful collective structure is therefore a set of distinguishable allowed states, together with a method for finding the intended state after damage. Evaluating its reliability requires the actual error distribution and decoding performance, including correlated errors that the code may not correct.

**Sources**

- [Hamming (1950), Error Detecting and Error Correcting Codes](https://zoo.cs.yale.edu/classes/cs323/doc/Hamming.pdf). Binary codes that use parity constraints to detect and correct errors; the repetition-code probability is derived separately in the text.

### 86. Cellular automata and computation

A cellular automaton is an array of finite-state cells that update by a specified local rule. In a one-dimensional binary example, every cell is zero or one and updates simultaneously using its own state and those of its two neighbors.

Rule 110 maps the neighborhoods 111, 110, 101, 100, 011, 010, 001, and 000 to next states 0, 1, 1, 0, 1, 1, 1, and 0. Read as a binary integer, this output list gives the name 110. Repetition of this uniform rule produces persistent moving patterns whose collisions change their subsequent motion.

Matthew Cook proved that carefully prepared Rule 110 configurations can carry out universal computation. Universality means that the system can simulate a general-purpose computational model when its program and input are appropriately encoded and sufficient space and time are available. In the construction, localized patterns moving through repeating backgrounds carry information, and their collisions implement operations. The effective information carriers extend across many cells, although each update reads only three.

The encoding is essential to the result. The proof does not imply that a random row will organize itself into a useful calculation, or that the construction is efficient or robust to noise. Its significance is the explicit correspondence between local updates and a higher-level computation. Following that correspondence allows us to verify what the pattern computes; visual complexity alone would not establish it.

**Sources**

- [Cook (2004), Universality in Elementary Cellular Automata](https://www.complex-systems.com/abstracts/v15_i01_a01/). Proof of computational universality using prepared Rule 110 configurations.
- [Cook (2009), A Concrete View of Rule 110 Computation](https://arxiv.org/abs/0906.3248). Explicit account of the encoding, moving patterns, and repeating backgrounds used to implement computation.

### 87. Self-stabilization in distributed algorithms

A token is a permission to use a shared resource. If machines pass one token around a ring, only its holder needs to act at a time. A temporary fault may corrupt their states and create several apparent tokens. A self-stabilizing algorithm recovers a legitimate global state from every allowed initial state once faults cease, and keeps subsequent evolution within the legitimate set.

Dijkstra's ring construction makes this recovery possible using local rules. Take $n\geq2$ machines, each with $K\geq n$ possible states labeled by integers from $0$ to $K-1$. Ordinary machines copy their left neighbor when the two values differ. One distinguished machine instead increments its value modulo $K$ when it matches its left neighbor. A machine has a privilege when its update condition is satisfied; a legitimate state has exactly one privilege.

The execution model allows one enabled machine at a time to read the relevant states and complete its update. Under this sequential execution rule, the condition $K\geq n$ guarantees eventual recovery from arbitrary initial values. The distinguished rule breaks the symmetry needed by this construction.

We can also see how a recovered state persists. If all values agree, only the distinguished machine can update. Its increment gives the next machine a mismatch; copying passes that mismatch around the ring until all values agree again. One privilege circulates through successive local updates.

Recovery and preservation are separate requirements. Correct initialization would establish only preservation, while permanent failures or simultaneous updates require a different analysis. The collective guarantee comes from the complete set of local rules and permitted executions, even though no machine inspects the whole ring.

**Sources**

- [Dijkstra (1974), Self-stabilizing systems in spite of distributed control](https://www.cs.utexas.edu/~EWD/transcriptions/EWD04xx/EWD426.html). Definition and ring constructions for self-stabilization with one enabled move executed at a time.

### 88. Learned representations

A representation transforms an input into variables useful for a task. Neural networks can learn such variables during training instead of requiring every intermediate feature to be chosen in advance. An artificial neuron applies a nonlinear function to a weighted combination of inputs; layers compose many such transformations.

Write the network as $f_\theta(x)$, where $x$ is the input and $\theta$ collects adjustable weights and other parameters. A loss $L$ measures the discrepancy between desired and actual outputs. Gradient descent updates the parameters by

$$\theta\leftarrow\theta-\eta\nabla_\theta L,$$

with step size $\eta$. Backpropagation uses the chain rule to compute these derivatives through the layers. Adjusting the layers jointly can produce intermediate variables that make the final task easier.

For a simple example, take two binary inputs and classify whether they differ. This exclusive-or task cannot be solved by a single linear threshold: the two positive cases lie on opposite corners of a square. Two intermediate units can instead detect the cases $(1,0)$ and $(0,1)$, after which an output unit combines them. A suitable nonlinear network can learn a representation that solves the task, although its coordinates need not match this hand-designed construction.

Rumelhart, Hinton, and Williams demonstrated the learning of internal representations through error-driven training. Interpreting a particular trained network requires an additional step: changing inputs or internal activations and testing the predicted effect on output. A unit correlated with a concept may not be used causally, and successful predictions can rely on features that fail under changed conditions. The learned capability arises from the composition of units, weights, training data, and objective.

**Sources**

- [Rumelhart, Hinton, and Williams (1986), Learning representations by back-propagating errors](https://doi.org/10.1038/323533a0). Demonstration that backpropagation can train hidden units to develop task-relevant internal representations.

### 89. Delayed generalization during training

A network can fit its training examples well before it succeeds on withheld examples. Generalization is performance on such new inputs under a specified test distribution. Memorizing the training examples need not produce a rule that works elsewhere.

Power and colleagues observed a long delay followed by a sharp improvement in test accuracy on small algorithmic datasets, a behavior they called grokking. Modular addition provides a controlled example: the inputs are integers and the target is their sum modulo a fixed integer. Because all input pairs are known, we can choose which pairs appear during training and test on the remainder. Dataset size, initialization, architecture, and penalties on large weights affect the learning trajectory.

In a study of small networks trained on modular addition, Nanda and colleagues identified a learned computation using Fourier representations and trigonometric identities. Integers were represented through periodic functions, allowing addition to be implemented through operations on phases. Removing selected internal components tested their contribution to the answer. Components supporting the general rule strengthened gradually, followed by a reduction in contributions that fit particular training examples.

The sharp test-accuracy rise therefore need not mark the first appearance of useful structure. Fitting examples, developing a general computation, and producing the highest-scoring correct answer can occur at different stages. Continuous loss, discrete accuracy, and measurements of the internal computation reveal these stages differently. Comparing them provides a mechanism for the observed learning curve without assuming that its visual similarity to a phase transition establishes the same physics.

**Sources**

- [Power et al. (2022), Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets](https://arxiv.org/abs/2201.02177). Experiments documenting delayed generalization on small algorithmically generated datasets.
- [Nanda et al. (2023), Progress measures for grokking via mechanistic interpretability](https://arxiv.org/abs/2301.05217). Modular-addition case study identifying Fourier-based computation, gradual internal development, and the effects of removing selected components.

### 90. Apparent emergent AI abilities: Capability curves and evaluation thresholds

A language model assigns probabilities to sequences of tokens, the pieces into which text is divided. Its performance on a task depends on the prompt, the procedure for producing an answer, and how that answer is scored. A graph of success against model size therefore combines properties of the model with properties of the measurement.

Wei and colleagues used “emergent abilities” for tasks whose measured performance was negligible in smaller models and substantial in larger ones. Schaeffer, Miranda, and Koyejo showed that several reported patterns admit another explanation: nonlinear or discontinuous scoring can turn smoother improvements into an apparently abrupt rise. This dispute concerns the shape and predictability of improvement, rather than whether the larger model succeeds at the task.

A simple calculation illustrates the effect. Suppose an answer has $L$ steps, each independently correct with probability $q$, and earns credit only if every step is correct. Whole-answer success is $q^L$. Smooth increases in $q$ can then produce a steep rise in the score; a small test sample may register no successes while the probability remains low. The independence assumption is illustrative, but the distinction between partial progress and all-or-nothing scoring is general.

To examine a particular capability, we can rescore the same outputs using continuous measures of partial progress, sample more densely across scale or training, and estimate uncertainty. Changes in training data and evaluation procedure also need to be separated from changes in size. A sharp internal change remains possible, but identifying it requires evidence about the computation in addition to a threshold in its measured success.

**Sources**

- [Wei et al. (2022), Emergent Abilities of Large Language Models](https://arxiv.org/abs/2206.07682). Definition and reported examples of abilities whose measured performance rises sharply with model scale.
- [Schaeffer, Miranda, and Koyejo (2023), Are Emergent Abilities of Large Language Models a Mirage?](https://papers.neurips.cc/paper_files/paper/2023/hash/adc98a266f45005c403b8311ca7e8bd7-Abstract-Conference.html). Mathematical and empirical analysis showing how evaluation metrics can create apparent abruptness in capability curves.

## 10. Landscapes, planets, and spacetime

Wind changes a sand bed, flowing water reshapes a drainage basin, and clouds alter the radiation that drives atmospheric circulation. In each case, the moving material changes its own conditions of motion. Dunes, channels, storms, and climates become useful objects because they summarize that coupled evolution.

Conservation laws constrain what these structures can do, while transport and response laws explain which structures form. Their motion can also differ from that of their constituents: a dune migrates through the transfer of grains, and a density wave travels through an orbiting ring. We will keep track of both the physical processes and the scales on which a collective description applies.

The chapter moves from landscapes and climate to plate motion, planetary rings, and gravitational clustering. The final example changes the status of the argument. Holographic theories provide a precise setting for relating quantum information to geometry, but their application to the origin of spacetime in our universe remains open.

### 91. Dunes: formation and migration

A dune migrates as wind transports sand along its exposed face and deposition and avalanches transfer material toward its sheltered side. The shape persists even though individual grains continually enter, leave, or change position. Formation of the shape requires a further mechanism: a nearly flat bed must become unstable to disturbances.

A small bump changes the airflow. In the turbulent-flow regime relevant to this instability, maximum bed stress can occur upstream of the crest. If sand transport responded immediately, the resulting erosion and deposition could amplify the bump. Transport instead adjusts over a finite saturation length, the distance needed to approach its local steady value. This lag suppresses sufficiently short disturbances. Its competition with the flow response selects a range of growing wavelengths.

Conservation constrains the subsequent motion. In a one-dimensional section,

$$(1-\phi)\partial_t h=-\partial_xq,$$

where $h$ is bed height, $\phi$ is the pore-volume fraction, and $q$ is solid-grain volume transported per unit width per unit time. A traveling profile $h(x-ct)$ obeys

$$q=c(1-\phi)h+q_0,$$

with migration speed $c$ and background flux $q_0$. Determining the speed and shape still requires a transport law.

Grain density $\rho_s$, fluid density $\rho_f$, and grain diameter $d$ give a drag length of order $(\rho_s/\rho_f)d$. Claudin and Andreotti compared its scaling with initial bedform wavelengths across air and water environments. Larger fluid density reduces this length at fixed grains. Mature dunes subsequently evolve through changing winds, sand supply, and interactions, so their final spacing need not equal the first unstable wavelength.

**Sources**

- [Claudin and Andreotti (2006), A scaling law for aeolian dunes on Mars, Venus, Earth, and for subaqueous ripples](https://arxiv.org/abs/cond-mat/0603656). Linear instability analysis and measurements relating initial bedform wavelengths to the drag length across fluid environments.
- [Andreotti and Claudin (2013), Aeolian and subaqueous bedforms in shear flows](https://doi.org/10.1098/rsta.2012.0364). Review of bed–flow instability, transport saturation, and later bedform evolution.

### 92. River networks and landscape evolution

Water follows low ground, and erosion can deepen the routes it follows. Later runoff then concentrates in those channels, changing the erosion again. This feedback can organize distributed runoff into a branching drainage network that delivers water to an outlet.

Drainage area $A$ is the upstream surface area whose runoff reaches a location. It often provides a proxy for discharge, the volume of water passing per unit time. Discharge and channel slope influence erosion, together with rock strength, sediment supply, vegetation, and thresholds for moving grains.

A common phenomenological model balances uplift against channel incision:

$$\partial_t z=U-KA^mS^n.$$

Here $z$ is elevation, $U$ is uplift rate, $S$ is positive channel slope, and $K,m,n$ are positive parameters. The term $KA^mS^n$ represents erosion rate rather than following from conservation alone. Since $S$ is dimensionless, $K$ has dimensions of length to the power $1-2m$ divided by time. For a steady channel with uniform $U$ and $K$,

$$S=\left(\frac{U}{K}\right)^{1/n}A^{-m/n}.$$

This relation connects a local slope to the entire contributing network through $A$. Measuring it constrains the ratio $m/n$, but does not uniquely establish an erosion law. Transient responses and sediment transport supply additional information.

Models that search for networks with low total energy dissipation can reproduce statistical features of drainage geometry. Dynamical erosion models ask how such geometry develops from an initial landscape. A branching shape or area–slope relation must therefore be interpreted together with the processes and history capable of producing it.

**Sources**

- [Howard (1994), A detachment-limited model of drainage basin evolution](https://doi.org/10.1029/94WR00757). Dynamical model coupling channel incision and hillslope evolution, with channel erosion limited by removal of material from the bed.
- [Rodríguez-Iturbe et al. (1992), Energy dissipation, runoff production, and the three-dimensional structure of river basins](https://doi.org/10.1029/91WR03034). Study of relations among drainage geometry, runoff, and energy dissipation.

### 93. Cloud organization: Convective self-aggregation

Some atmospheric simulations develop a few moist regions with vigorous rising motion, separated by broad dry regions, even when surface conditions and imposed forcing are horizontally uniform. This spontaneous concentration of convection, the transport of heat and moisture by fluid motion, is called convective self-aggregation.

Several coupled processes can sustain it. Mixing moist environmental air into a cloud causes less evaporation than mixing dry air, helping rising cloudy air retain buoyancy. Water vapor and clouds also affect radiative cooling. Differences in cooling drive circulation that redistributes moisture, while surface evaporation supplies water and energy. Air cooled by evaporating rain can spread outward and affect where new convection develops.

An energy budget helps separate these contributions. Let $H_i$ be the vertically integrated moist static energy of column $i$, combining thermal energy, gravitational potential energy, and the energy associated with water phase changes. For $N$ equal-area columns with horizontal mean $\bar H$, define the variance

$$V=\frac{1}{N}\sum_i(H_i-\bar H)^2.$$

If its budget is written as $\dot H_i=R_i+F_i+T_i$, with radiative, surface-flux, and transport contributions, then

$$\dot V=\frac{2}{N}\sum_i(H_i-\bar H)(R_i+F_i+T_i).$$

A contribution positively correlated with energy anomalies increases column contrasts; a negative correlation reduces them. The variance does not locate the moist regions or establish their spatial coherence, so it complements maps and spatial correlations.

These diagnostics, together with simulations that remove selected feedbacks, identify how organization develops. Real tropical systems also experience rotation, variable ocean temperatures, and incoming disturbances. Comparisons with more realistic simulations test which mechanisms from idealized self-aggregation remain active under those conditions.

**Sources**

- [Wing et al. (2017), Convective self-aggregation in numerical simulations: a review](https://doi.org/10.1007/s10712-017-9408-4). Review of radiation, moisture, surface-flux, and circulation feedbacks in convective self-aggregation.
- [Holloway (2017), Convective aggregation in realistic convective-scale simulations](https://doi.org/10.1002/2017MS000980). Controlled changes to physical processes in realistic tropical simulations, testing connections with idealized aggregation mechanisms.

### 94. Weather predictability and climate statistics

Atmospheric motion is driven by uneven heating and shaped by rotation, stratification, and moisture. Temperature, pressure, and velocity fields replace molecular trajectories; at larger scales, organized circulations and fronts become useful descriptions. A front is a narrow transition between different air masses, while a cyclone is a circulation around a low-pressure region.

Deterministic equations do not ensure accurate long-term trajectories when initial conditions are imperfectly known. Sensitive dependence means that nearby states can separate rapidly under the same dynamics. If a small discrepancy grows as $\delta(t)\simeq\delta_0e^{\lambda t}$ with positive rate $\lambda$, it reaches tolerance $\Delta$ after

$$t_*\simeq\lambda^{-1}\ln(\Delta/\delta_0).$$

Thus improving initial accuracy by a large factor adds prediction time only logarithmically in this regime. Growth eventually saturates, and different quantities and spatial scales have different predictability.

Lorenz's three-variable convection model demonstrated how deterministic dynamics can have this sensitivity. Weather forecasting uses much more detailed models, constrained by observations. An ensemble runs several plausible initial states and model choices to estimate a range of outcomes. Its spread must be checked against actual errors before it can be interpreted as forecast uncertainty.

Uncertain trajectories can coexist with predictable statistics. We may lose the exact location of a future storm while retaining information about the distribution of conditions. Climate concerns such distributions over longer periods, including how they respond to external forcing. Predicting their changes requires a physical response model; it does not require predicting every individual weather event along the way.

**Sources**

- [Lorenz (1963), Deterministic nonperiodic flow](https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2). Low-dimensional convection model demonstrating deterministic nonperiodic dynamics and sensitivity to initial conditions.
- [IPCC (2021), AR6 Working Group I, Chapter 4: Future global climate](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-4/). Assessment of forced climate response, internal variability, and the interpretation of climate projections.

### 95. Climate feedbacks and response times

Earth loses energy by emitting infrared radiation, and warming generally increases that emission. The response also changes water vapor, clouds, snow, ice, and ocean heat uptake. A climate feedback is a change caused by the climate response that then modifies the energy balance. A forcing is the imposed perturbation whose response we are studying.

For a small temperature anomaly $T$ relative to a reference state, a one-layer energy-balance model is

$$C\frac{dT}{dt}=F-\lambda T.$$

Here $C$ is heat capacity per area in $\mathrm{J\,m^{-2}\,K^{-1}}$, $F$ is imposed net energy flux in $\mathrm{W\,m^{-2}}$, and $\lambda>0$ is a restoring coefficient in $\mathrm{W\,m^{-2}\,K^{-1}}$. With constant $F$ and $T(0)=0$,

$$T(t)=\frac{F}{\lambda}\left(1-e^{-t\lambda/C}\right).$$

The equilibrium response $F/\lambda$ and relaxation time $C/\lambda$ are distinct. Two systems with the same restoring coefficient but different heat capacities reach the same final anomaly through different warming histories.

In this sign convention, an amplifying feedback reduces $\lambda$. Increased water vapor under warming, for example, strengthens infrared absorption and opposes part of the increase in outgoing radiation. A positive feedback can therefore amplify a finite response while the total restoring coefficient remains positive.

The surface and deep ocean exchange heat and have different heat capacities, giving more than one response time. Feedback strengths also depend on the warming pattern and reference climate. The simple equation separates the roles of heat storage and restoration; quantitative estimates require a model that represents the relevant coupled processes.

**Sources**

- [IPCC (2021), AR6 Working Group I, Chapter 7: The Earth’s energy budget, climate feedbacks, and climate sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Assessment of radiative forcing, feedbacks, and the distinction between equilibrium and transient climate response.
- [Geoffroy et al. (2013), Transient climate response in a two-layer energy-balance model, Part I](https://doi.org/10.1175/JCLI-D-12-00195.1). Two-layer energy-balance model calibrated to climate models, separating fast and slow response modes.

### 96. Ice–albedo feedback and multiple equilibria

Albedo is the fraction of incoming light reflected by a surface or planet. Replacing bright ice with darker water increases absorbed sunlight and favors further melting. The same feedback amplifies cooling when expanding ice reflects more sunlight.

A simple global model makes the possibility of multiple equilibria explicit:

$$C\dot T=\frac{S}{4}[1-\alpha(T)]-(A+BT).$$

Here $T$ is mean temperature, $C>0$ is heat capacity per area, and $S$ is sunlight flux at the planet's orbit. The factor four converts intercepted disk area to total spherical area. The effective planetary albedo $\alpha(T)$ falls as ice is lost. Outgoing radiation is approximated by $A+BT$, with $B>0$ and an intercept $A$ consistent with the chosen temperature scale.

An equilibrium is locally stable when the derivative of the net heating is negative. Here that derivative is

$$-\frac{S}{4}\alpha'(T)-B.$$

In the melting range, $\alpha'(T)<0$. A sufficiently steep decline in albedo can overcome the restoring term $B$, permitting an unstable branch between stable warm and cold equilibria. Slowly varying $S$ can then produce hysteresis: the state at a given forcing depends on which stable branch the system occupied previously.

Multiple equilibria differ from slow recovery. A single stable state can take a long time to recover because of heat storage; evidence for two stable states requires persistent different outcomes under the same forcing. Clouds, seasons, geography, and heat transport modify the feedback in Earth’s climate. The observed ice–albedo feedback supports the mechanism, while a particular abrupt transition requires evidence beyond this simple model.

**Sources**

- [IPCC (2021), AR6 Working Group I, Chapter 7, §7.4.2.3: Surface-albedo feedback](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/). Assessment of snow and ice reflectivity feedbacks and the distinction between surface and planetary albedo.
- [Budyko (1969), The effect of solar radiation variations on the climate of the Earth](https://doi.org/10.1111/j.2153-3490.1969.tb00466.x). Energy-balance model connecting changing ice cover with absorbed sunlight and multiple climate states.

### 97. Plate tectonics: Plate motion and localized deformation

Mantle rock is solid but can deform gradually under sustained stress over geological time. This creep occurs through changes within and between mineral crystals. A material can therefore resist rapid deformation while flowing over a sufficiently long interval.

Earth's lithosphere is its relatively rigid outer shell, comprising crust and uppermost mantle. It is divided into tectonic plates above the more readily deforming asthenosphere, which is also predominantly solid. Plates separate at ocean ridges, where new oceanic crust forms. At subduction zones, one plate descends beneath another into the mantle.

The collective pattern is a flow with strong spatial contrasts: broad regions move approximately coherently while deformation concentrates near their boundaries. Cold, dense sinking slabs contribute substantial driving forces, and the resulting plate motion is coupled to mantle circulation. Temperature-dependent viscosity and material strength help determine where deformation occurs.

A stress-relaxation time $\tau$ compared with an observation time $t_{\rm obs}$ indicates whether elastic response or accumulated relaxation is more important. That comparison explains how solid rock can flow, but does not explain narrow, persistent boundaries. Models also need constitutive laws relating stress and deformation to temperature, grain structure, and damage.

Bercovici and Ricard showed in an idealized model how deformation and grain evolution can create weak zones that persist and accumulate into plate boundaries. This supplies one mechanism for localization and inherited weakness. Plate motion itself is well established; explaining when this regime began on Earth and why other rocky planets evolved differently requires additional geological and dynamical evidence.

**Sources**

- [USGS, What is a tectonic plate?](https://pubs.usgs.gov/gip/dynamic/tectonic.html). Defines tectonic plates as parts of the lithosphere, including crust and uppermost mantle.
- [USGS, Are the tectonic plates floating on magma?](https://www.usgs.gov/faqs/are-tectonic-plates-floating-magma). Explains why plates overlie solid but deformable mantle rather than a global layer of liquid magma.
- [USGS, Understanding plate motions](https://pubs.usgs.gov/gip/dynamic/understanding.html). Describes plate boundaries, subduction, and evidence for plate motion.
- [Bercovici and Ricard (2014), Plate tectonics, damage and inheritance](https://doi.org/10.1038/nature13072). Model coupling deformation, grain evolution, and inherited weak zones to the formation of plate boundaries.

### 98. Waves and wakes in planetary rings

Saturn's rings are a granular disk: particles orbit the planet, collide, and attract one another while also feeling the gravity of nearby moons. Waves, gaps, and elongated concentrations describe the collective dynamics more economically than a list of individual orbits.

A density wave is a modulation of particle concentration; a bending wave changes the disk's vertical displacement. A moon can excite waves near an orbital resonance, where repeated gravitational forcing matches a natural orbital response. The pattern and the particles have different motions, so following a wave does not amount to following the same group of particles.

Mutual gravity also forms self-gravity wakes, temporary elongated concentrations stretched by differential rotation. Neighboring orbital radii have different angular velocities, shearing the concentrations as they develop. Collisions dissipate random motion while gravity and shear continually rearrange the material. Simulations produce such structures, and observations of starlight passing through Saturn's rings constrain their geometry through viewing-angle-dependent transmission.

These patterns affect transport. Particle motion, collisions, and gravitational stresses transfer angular momentum through the ring. An effective viscosity summarizes part of this collective transport; changes in clustering can alter it without changing the particles' composition.

The distinct structures have distinct causes. Moon-driven waves are forced responses, while wakes reflect competition between local self-gravity and shear. Gaps can depend on resonant torques or embedded bodies. Resolving these mechanisms connects the visible pattern to both the forcing that produces it and the material transport it causes.

**Sources**

- [Salo (1992), Gravitational wakes in Saturn’s rings](https://doi.org/10.1038/359619a0). Simulations showing gravitational wakes in a disk of mutually attracting, colliding particles.
- [Hedman et al. (2007), Self-gravity wake structures in Saturn’s A ring revealed by Cassini VIMS](https://doi.org/10.1086/516828). Cassini observations of starlight transmission constraining the geometry of self-gravity wakes.
- [NASA Cassini, Staggering structure](https://science.nasa.gov/resource/staggering-structure/). Cassini observation and explanation of a spiral density wave driven by Janus.

### 99. Gravitational structure: Gravitational instability and the cosmic web

Small density contrasts can grow under gravity as overdense regions attract additional matter. Expansion, pressure, orbital motion, and the geometry of the initial perturbations shape the result. The cosmic web is the large-scale arrangement of dense concentrations, filaments, sheets, and underdense regions traced by galaxies and other observations.

A simple fluid calculation shows how gravity competes with pressure. Take reference density $\rho_0$ and sound speed $c_s$, neglect cosmic expansion, and treat the uniform background as fixed while retaining the gravity of perturbations. A small density mode of wave number $k$ then obeys

$$\omega^2=c_s^2k^2-4\pi G\rho_0,$$

where $G$ is the gravitational constant. Short wavelengths oscillate under pressure restoration. When the right side is negative, the mode has a growing solution: the Jeans instability. This idealized background construction isolates the competition without describing the expansion of the universe.

Cosmological models instead follow density perturbations in an expanding background. Dark matter is inferred through gravitational effects while interacting too weakly with light to be mapped like stars and gas. In the cold-dark-matter framework, its early random velocities are small enough to preserve density fluctuations on the structure-forming scales of interest. Gravity subsequently assembles bound concentrations called halos, within which galaxies can develop.

Simulations such as Millennium follow this clustering from specified initial statistics and add models for luminous populations. Their comparison with observed structure tests the combined assumptions about initial conditions, matter, and galaxy formation. The resulting halos and filaments are collective objects, while the microscopic identity of dark matter remains unresolved.

**Sources**

- [Springel et al. (2005), Simulating the joint evolution of quasars, galaxies and their large-scale distribution](https://arxiv.org/abs/astro-ph/0504097). Large-volume simulation of dark-matter clustering with models for galaxies and quasars.
- [Bertschinger (1995), Cosmological dynamics](https://arxiv.org/abs/astro-ph/9503125). Derivation and discussion of gravitational perturbation growth in an expanding universe.

### 100. Emergent spacetime: Geometry and quantum entanglement

Most collective descriptions assume that constituents already occupy space. Holographic duality offers a setting in which an additional spatial direction and gravitational geometry can instead be related to a quantum theory formulated without them.

The best-developed examples concern the proposed equivalence between gravity in asymptotically anti-de Sitter spacetime and a conformal field theory on its boundary, abbreviated AdS/CFT. Anti-de Sitter space has constant negative spacetime curvature. A conformal field theory is invariant under transformations that preserve angles while allowing local changes of scale. The higher-dimensional gravitational region is called the bulk.

In suitable states with a semiclassical bulk, geometry has a leading classical description. For a boundary region $A$, the entanglement entropy is the von Neumann entropy of its reduced density matrix. In a static bulk described by Einstein gravity, the Ryu–Takayanagi relation gives its leading contribution as

$$S(A)=\frac{\operatorname{Area}(\gamma_A)}{4G_N},$$

using $\hbar=c=k_B=1$, with bulk gravitational constant $G_N$. On a constant-time slice, $\gamma_A$ is the least-area surface ending on the boundary of $A$ and satisfying the homology condition: together, $A$ and $\gamma_A$ bound a bulk spatial region. Corresponding short-distance cutoffs are needed to compare the generally divergent entropy and area. Quantum corrections lie beyond this leading formula.

The relation turns a property of a quantum state into a geometric calculation. Van Raamsdonk's argument further connects changes in entanglement with changes in the connectivity of a semiclassical bulk. These are specific theoretical relations, requiring appropriate quantum states and limits; generic entanglement does not ensure a smooth geometry. They give concrete content to spacetime emergence within holographic theories, while their application to our observed universe remains an open question.

**Sources**

- [Ryu and Takayanagi (2006), Holographic derivation of entanglement entropy from AdS/CFT](https://arxiv.org/abs/hep-th/0603001). Area–entropy proposal and checks within AdS/CFT at leading classical gravitational order.
- [Van Raamsdonk (2010), Building up spacetime with quantum entanglement](https://arxiv.org/abs/1005.3035). Argument relating entanglement changes to the connectivity of semiclassical bulk geometry.

## Connections between examples

A fluid, a magnet, and an ecosystem need different collective variables. Comparing them is useful when we can identify an operation or a mechanism that survives the change of setting. The comparisons below follow from the examples in the chapters.

## Which details survive a change of scale

In [hydrodynamics](../bulk.html#hydrodynamics), conservation of mass, momentum, and energy identifies variables whose long-wavelength disturbances cannot relax quickly. Molecular collisions redistribute these quantities but do not destroy them. The large-scale equations keep the conservation laws, while viscosity and thermal conductivity describe transport by the unresolved motions.

Near a [continuous phase transition](../order.html#criticality), correlations extend over distances much larger than the microscopic spacing. Repeated coarse-graining can then lead to [universal behavior](../order.html#universality): different models approach the same limiting description. Away from that regime, the microscopic differences may matter again. The molecular details that scarcely affect a critical exponent can still determine a material's transition temperature.

A [phonon](../quantum.html#phonons) illustrates a different change of variables. Instead of following each atom in a crystal, we describe coordinated vibrations and quantize their amplitudes. The useful new object is an excitation of the collective state. Changing the state of the material can change which excitations exist and how long they persist.

## Growth, stability, and memory

[Convection](../patterns.html#convection), [chemical patterns](../patterns.html#turing-patterns), and [gravitational clustering](../earth-cosmos.html#gravitational-structure) begin with disturbances that can grow. Linear stability analysis follows a small disturbance while its effect on the background is negligible. Once the disturbance becomes large, the background changes, and nonlinear dynamics determine whether growth saturates, oscillates, or continues. A calculation of onset therefore answers a narrower question than a calculation of the final pattern.

Feedback can preserve a state as well as amplify a disturbance. In a [gene switch](../living-matter.html#gene-switches), the products of gene expression alter further expression. In an [attractor model of memory](../brains.html#attractor-memory), recurrent interactions bring nearby activity patterns toward the same stored pattern. These systems can share the mathematics of stable states while differing in what is stored, how the interactions are formed, and how the model is tested.

A useful collective description must retain enough information to predict the next change. If two systems have the same measured variables but evolve differently because of their histories, we have either omitted a relevant variable or need an equation with memory. [Glasses](../order.html#glasses) and [ecological resilience](../ecology.html#ecosystem-resilience) make this problem particularly visible.

## What a model explains

The [relocation model](../societies.html#segregation) demonstrates that local decisions can produce extensive segregation without any individual specifying the final map. It does not measure the contribution of that mechanism to a particular city. To make that inference, we need observations that distinguish the proposed mechanism from alternatives such as prices, geography, and discriminatory institutions.

The same distinction applies to a simulated chemical pattern or a neural activity distribution. Reproducing a shape establishes that the chosen rules can generate it. Predicting a response to a changed condition provides a stronger test. Two models that match the same steady pattern may disagree about its relaxation time, fluctuations, or response to a disturbance.

These comparisons suggest concrete directions for further work: finding collective variables that remain predictive when conditions change; determining when discarded degrees of freedom leave long memory; and distinguishing mechanisms that produce similar observations. Each direction begins with an existing explanation and a precise limit of that explanation.
