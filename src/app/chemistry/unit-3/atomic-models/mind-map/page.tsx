import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import Image from 'next/image'
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Atomic Models and Concepts
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor pink
  }
  :depth(3) {
    BackgroundColor lightyellow
  }
}
</style>
* Atomic Models and Concepts
** Particle Paths
*** Illustrate paths of charged particles in uniform electric field
** Proton Number/Atomic Number
*** Definition: Number of protons in nucleus
*** Unique to each element
*** Used to arrange elements in periodic table
*** Can be changed by radioactivity
** Nucleon Number/Atomic Mass and Isotopes
*** Definition: Sum of protons and neutrons in nucleus
*** Isotopes
**** Same number of protons, different neutrons
**** Affect molecular mass but not chemical properties
**** Can exhibit radioactivity
**** Examples: Carbon dating, medical imaging
*** Relative Atomic Mass
**** Average mass of isotopes compared to 1/12th of carbon-12
** Formation of Ions
*** Positive ions (cations)
*** Negative ions (anions)
** Calculations
*** Relative atomic mass from isotope masses and abundance
*** Relative mass of an isotope given atomic mass and abundance
left side
** 3.1 Atomic Models
*** Dalton&apos;s Model (1803)
**** Postulates
***** Elements composed of indivisible atoms
***** Atoms of an element are identical
***** Atoms combine, separate, or rearrange in reactions
***** Atoms cannot be created or destroyed
**** Limitations
***** Later experiments showed atoms are divisible
*** Rutherford&apos;s Experiment (1911)
**** Gold foil experiment with alpha particles
**** Conclusions
***** Most of atom is empty space
***** Nucleus is small, dense, and positively charged
***** Electrons revolve around nucleus
**** Limitations
***** Classical physics predicts electron collapse into nucleus
***** Continuous spectrum not explained
*** Bohr&apos;s Atomic Theory (1913)
**** Postulates
***** Electrons in fixed energy orbits
***** Energy proportional to distance from nucleus
***** Angular momentum quantized
***** Light absorbed/emitted during electron jumps
**** Limitations
***** Does not depict 3D aspect of atom
*** Quantum Mechanical Model
**** Current model used in modern science
**** Treats electrons as wave-particle entities
**** Defines probability distributions (orbitals)
**** Explains complex phenomena
**** Limitation: Complex and involves probability
** Key Points
*** Matter: Anything with mass and occupies space
*** Plasma: Electrically charged gas
*** Allotropy: Element existing in different physical forms
*** Element: Simplest form of matter, same type of atoms
*** Compound: Substance formed by chemically combined different atoms
*** Solution: Homogeneous mixture of two or more components
*** Aqueous solution: Substance dissolved in water
*** Saturated solution: Maximum amount of solute at given temperature
*** Unsaturated solution: Less solute than required for saturation
*** Colloid: Mixture with particles 1-1000 nm in diameter
*** Suspension: Heterogeneous mixture of undissolved particles in liquid
@endmindmap`}
        />

        <PlantUMLDiagram code={`
@startmindmap
* Atomic Models
** Dalton's Model 1803
*** Main Postulates
**** Elements & Atoms
***** All elements composed of tiny indivisible particles called atoms
****** Example: Gold atoms make up pure gold
****** Example: Carbon atoms make up diamond
***** Atoms of same element are identical
****** Same mass
******* Example: All carbon-12 atoms have mass of 12 u
****** Same volume
******* Example: All oxygen atoms have radius of 60 picometers
**** Chemical Reactions
***** Atoms combine, separate, or rearrange
****** Example: 2H₂ + O₂ → 2H₂O (water formation)
****** Example: (limestone decomposition) CaCO₃ → CaO + CO₂
***** Combine in simple ratios
****** Example: H₂O has 2:1 ratio of H:O
****** Example: Ammonia NH₃ has 1:3 ratio of N:H
**** Conservation Law
***** Atoms cannot be created
****** Example: Mass before = Mass after in chemical reactions
***** Atoms cannot be destroyed
****** Example: Burning wood transforms atoms but doesn't destroy them
*** Historical Impact
**** Explained quantitative experimental results
***** Example: Law of Multiple Proportions in CO and CO₂
**** Explained laws of chemical combinations
***** Example: Law of Constant Composition in H₂O
**** Stimulated rapid progress in chemistry during 19th century
***** Example: Development of chemical formulas
***** Example: Understanding of chemical equations
*** Limitations
**** Later Experiments
***** 1850s experiments
***** Early 20th century discoveries
****** Example: JJ. Thomson's discovery of electron In Cathode Ray Experiment (1897)
**** Discovery of Atomic Structure
***** Atoms found to be divisible
****** Example: Uranium nuclear fission
***** Identification of subatomic particles
****** Electrons
****** Protons
****** Neutrons
@endmindmap
`} />
<PlantUMLDiagram code={`
@startmindmap
<style>
mindmapDiagram {
  .background {
    BackgroundColor #3498DB
    LineColor #2980B9
    FontColor white
  }
  .experiment {
    BackgroundColor #F39C12
    LineColor #D35400
    FontColor black
  }
  .conclusion {
    BackgroundColor #2ECC71
    LineColor #27AE60
    FontColor white
  }
  .defect {
    BackgroundColor #E74C3C
    LineColor #C0392B
    FontColor white
  }
  .detail {
    BackgroundColor #9B59B6
    LineColor #8E44AD
    FontColor white
  }
  .year {
    BackgroundColor #1ABC9C
    LineColor #16A085
    FontColor white
  }
  .purpose {
    BackgroundColor #8E44AD
    LineColor #732D91
    FontColor white
  }
  .setup {
    BackgroundColor #D35400
    LineColor #A04000
    FontColor white
  }
  .observations {
    BackgroundColor #C0392B
    LineColor #922B21
    FontColor white
  }
  .structure {
    BackgroundColor #2980B9
    LineColor #1F618D
    FontColor white
  }
  .force {
    BackgroundColor #27AE60
    LineColor #1E8449
    FontColor white
  }
  .properties {
    BackgroundColor #F1C40F
    LineColor #D4AC0D
    FontColor black
  }
}
</style>
* Rutherford's Atomic Model
** Background <<background>>
*** Year: 1911 <<year>>
*** Purpose <<purpose>>
**** Understand arrangement of electrons and protons in atoms <<purpose>>
** Rutherford's Experiment (1911) <<experiment>>
*** Experimental Setup <<setup>>
**** Gold Foil Properties <<properties>>
***** Thickness: 0.00004 cm <<properties>>
**** Alpha Particles <<properties>>
***** Source: Polonium disintegration <<properties>>
***** Properties <<properties>>
****** Helium nuclei <<properties>>
****** Doubly positively charged (He2+) <<properties>>
*** Observations <<observations>>
**** Primary Results <<observations>>
***** Most particles passed straight through <<observations>>
***** Few particles slightly deflected <<observations>>
***** One in 1 million deflected > 90° <<observations>>
**** Additional Testing <<observations>>
***** Used thin foils of other elements <<observations>>
***** Similar results observed <<observations>>
left side
** Key Conclusions <<conclusion>>
*** Empty Space Theory <<structure>>
**** Most of atom is empty space <<structure>>
**** Explained undeflected particles <<structure>>
*** Nuclear Structure <<structure>>
**** Strong deflections due to electrostatic repulsion <<structure>>
**** Indicated concentrated positive charge <<structure>>
*** Electron Behavior <<structure>>
**** Alpha particles not deflected by electrons <<structure>>
** Proposed Model <<background>>
*** Fundamental Structure <<structure>>
**** Planetary System Design <<structure>>
***** Similar to solar system <<structure>>
***** Dense positive nucleus at center <<structure>>
**** Particle Arrangement <<structure>>
***** Nucleus: Dense positively charged region <<structure>>
***** Electrons revolve in circular orbits <<structure>>
*** Force Balance <<force>>
**** Centrifugal force from electron revolution <<force>>
**** Balanced by electrostatic attraction <<force>>
*** Atomic Properties <<properties>>
**** Overall neutral charge <<properties>>
**** Mass concentrated in nucleus <<properties>>
** Defects in Rutherford's Atomic Model <<defect>>
*** Classical Physics Issue <<defect>>
**** Electrons emit energy continuously <<defect>>
***** Orbit becomes smaller
***** Eventually collapses into the nucleus
***** Atomic structure collapse
*** Energy Spectrum Issue <<defect>>
**** Continuous energy emission <<defect>>
***** Should form a continuous spectrum (not observed)
@endmindmap
`} />
<Image
width={800}
height={800}
alt="Plum Pudding Model"
src="/plum_pudding_model.jpeg"
/>

<div className="flex items-center justify-between md:flex-row flex-col">
<Image
width={650}
height={700}
alt="RutherFord Model setup"
src="/rutherford_model_setup.png"
/>
<Image
width={650}
height={700}
alt="RutherFord Model setup"
src="/Rutherfords-Experiment.png"
/>
</div>
      </section>

      <div className="p-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6">
          Atomic Models and Concepts
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">
            I. Atomic Models Evolution
          </h2>

          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            A. Dalton&apos;s Model (1803)
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              Main postulates:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>a. Elements composed of indivisible atoms</li>
                <li>b. Atoms of same element are identical</li>
                <li>
                  c. Atoms combine, separate, or rearrange in chemical reactions
                </li>
                <li>d. Atoms cannot be created or destroyed</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            B. Rutherford&apos;s Model (1911)
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              Gold foil experiment findings:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>a. Most space in atom is empty</li>
                <li>b. Positive charge concentrated in nucleus</li>
                <li>c. Electrons revolve around nucleus in orbits</li>
              </ul>
            </li>
            <li>
              Defects:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>
                  a. Contradicts classical physics (continuous energy emission)
                </li>
                <li>
                  b. Predicts continuous spectrum instead of observed line
                  spectrum
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            C. Bohr&apos;s Model (1913)
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              Key postulates:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>a. Electrons in fixed energy orbits</li>
                <li>b. Energy proportional to distance from nucleus</li>
                <li>c. Quantized angular momentum</li>
                <li>d. Light absorbed/emitted during electron transitions</li>
              </ul>
            </li>
            <li>Limitation: Does not depict 3D aspect of atom</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            D. Quantum Mechanical Model
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Current model based on quantum mechanics</li>
            <li>Defines electron probability distributions (orbitals)</li>
            <li>Explains complex atomic phenomena</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">
            II. Important Atomic Concepts
          </h2>

          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            A. Proton Number/Atomic Number
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Number of protons in nucleus</li>
            <li>Unique to each element</li>
            <li>Used for arranging elements in periodic table</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            B. Nucleon Number/Atomic Mass
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Sum of protons and neutrons in nucleus</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            C. Isotopes
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Same element, different neutron numbers</li>
            <li>Affect molecular mass but not chemical properties</li>
            <li>Applications: Carbon dating, medical imaging</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            D. Ion Formation
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Cations (positive) and anions (negative)</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            E. Relative Atomic Mass
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Average mass of isotopes compared to 1/12 of carbon-12</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">
            III. Limitations of Atomic Models
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Each model improved upon previous but had limitations</li>
            <li>
              2. Quantum model most comprehensive but involves probabilities
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
