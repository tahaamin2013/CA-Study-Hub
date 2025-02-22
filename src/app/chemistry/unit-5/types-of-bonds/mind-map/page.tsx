import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">TYPES OF BONDS</h1>
        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* TYPES OF BONDS
** Ionic bonds
left side
** Covalent bonds
@endmindmap

`}
        />

        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Ionic Bonds
** Formation
*** Between two atoms
*** One atom loses electron (Cation)
*** Other atom gains electron (Anion)
** Characteristics
*** Strong electrostatic forces
*** Attraction between opposite charges
**** Positive metal ions
**** Negative non-metal ions
left side
** Ionic Compounds
*** Formed by ions joined by electrostatic forces
*** Electrically neutral
**** Total positive charge equals total negative charge
*** Contains both cations and anions
@endmindmap

`}
        />

        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Cation Formation
** Formation Process
*** Sodium (Na+)
**** Group IA element
**** Electronic config
***** Initial: 1s² 2s² 2p⁶ 3s¹
***** Final: 1s² 2s² 2p⁶
**** Loses 1 valence electron
*** Magnesium (Mg2+)
**** Group IIA element
**** Electronic config
***** Initial: 1s² 2s² 2p⁶ 3s²
***** Final: 1s² 2s² 2p⁶
**** Loses 2 valence electrons
left side
** Key Concepts
*** Noble gas configuration
*** Electron loss process
*** Group number correlation
**** Group IA → +1 charge
**** Group IIA → +2 charge
** Practice Problems
*** Lithium (Li) Atomic number 3
**** Formation of cation
*** Aluminum (Al) Atomic number 13
**** Formation of Cations
*** Potassium (K)
**** Formation of Cations using electrons dot structure
*** Calcium (Ca)
**** Formation of Cations using electrons dot structure
@endmindmap
`}
        />

        <div className="flex items-center justify-between">
          <Image
            src="/K-dot-structure.jpg"
            alt="K dot structure"
            width={500}
            height={500}
          />
          <Image
            src="/dot-structure-of-calcuim.png"
            className="mx-10"
            alt="K dot structure"
            width={500}
            height={500}
          />
        </div>

        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Anion Formation
** Process Examples
*** Oxygen (O²⁻)
**** Group VIA element
**** Electronic config
***** Initial: 1s² 2s² 2p⁴
***** Final: 1s² 2s² 2p⁶
**** Gains 2 electrons
*** Fluorine (F⁻)
**** Group VIIA element
**** Electronic config
***** Initial: 1s² 2s² 2p⁵
***** Final: 1s² 2s² 2p⁶
**** Gains 1 electron
** Formation Strategy
*** Write electronic configuration
*** Calculate electrons needed
*** Show electron addition
left side
** Practice Problems
*** Sulfur (S)
**** Atomic number 16
*** Chlorine (Cl)
**** Atomic number 17
*** Other Elements using electron dot structuresa
**** Nitrogen (N)
**** Phosphorus (P)
**** Bromine (Br)
**** Hydrogen (H)
** Ionic Bonding
*** Electrostatic attraction
*** Charge neutrality
**** Total positive = Total negative
*** Forms ionic compounds
*** Strong electrostatic forces
@endmindmap
`}
        />

        <Image
          src="/electron-dot-structure-of-nitrogen-anion.png"
          className="my-5"
          alt="K dot structure"
          width={500}
          height={500}
        />

        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Ionic Bond Formation
** Formation Rules
*** Metal forms cations
**** Group IA → +1
**** Group IIA → +2
**** Group IIIA → +3
*** Non-metal forms anions
*** Neutral compound formation
**** Balance of charges
**** Simplest ratio needed
** Example Compounds
*** Sodium Chloride (NaCl)
**** Components
***** Na (metal)
***** Cl (non-metal)
**** Equation
***** 2Na + Cl₂ → 2NaCl
*** Magnesium Fluoride (MgF₂)
**** Components
***** Mg (metal)
***** F (non-metal)
**** Equation
***** Mg + F₂ → MgF₂
**** Ratio
***** One Mg²⁺ to two F⁻
** Use electron dot and electron cross structures to right the equation for formation of ionic compound
*** Mg and O
*** Al and Cl
** Key Concepts
*** Electron transfer
*** Charge balance
*** Structural representation
**** Electron dot
**** Electron cross
@endmindmap

`}
        />
        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Identifying Ionic Compounds
** General Rules
*** Metal + Non-metal combination
*** Electron Transfer Process
**** Metals lose electrons
**** Non-metals gain electrons
*** Noble Gas Configuration
** Example Compounds
*** Magnesium Oxide (MgO)
**** Metal: Mg (Group IIA)
***** Loses 2 electrons
**** Non-metal: O (Group VIA)
***** Gains 2 electrons
**** Ratio: 1:1
*** Sodium Fluoride (NaF)
**** Metal: Na (Group IA)
***** Loses 1 electron
**** Non-metal: F (Group VIIA)
***** Gains 1 electron
**** Ratio: 1:1
** Recognize these compounds as having ionic bonds
*** Potassium Chloride
**** KCl
*** Aluminum Chloride
**** AlCl₃
*** Magnesium Fluoride
**** MgF₂
*** Sodium Compounds
**** NaF
**** NaBr
** Key Concepts
*** Group number correlation
**** Metal loss = Group number
**** Non-metal gain = 8 - Group number
*** Charge balance
*** Simplest ratio determination
@endmindmap
`}
        />
        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>
* Covalent Bonds
** Basic Concept
*** Electron sharing between nonmetals
*** Strong electrostatic attraction
*** Shared electrons attract both nuclei
** Bond Formation Types
*** Single Covalent Bond
**** One electron pair shared
**** Examples
***** H₂ molecule
****** H + H → H:H
***** F₂ molecule
****** Each F shares one electron
*** Double Covalent Bond
**** Two electron pairs shared
**** Example
***** O₂ molecule
****** Each O shares two electrons
*** Triple Covalent Bond
**** Three electron pairs shared
**** Example
***** N₂ molecule
left side
** Key Features
*** Electron Representation
**** Electron dot structure
**** Electron cross structure
**** Dash notation (-)
*** Lone Pairs
**** Unshared electron pairs
**** Important for structure
** Bond Stability
*** Noble gas configuration
*** Octet completion
*** Electrostatic forces
**** Between shared electrons
**** Between atomic nuclei
@endmindmap
`}
        />

        <div className="flex items-center justify-between flex-wrap">
          <Image
            src="/669e2a24ae8c5529a9da74a4_168005.image1.jpeg"
            className="my-5"
            alt="formation-of-hydrogen-molecule"
            width={500}
            height={500}
          />
          <Image
            src="/NVT_SCI_TECH_DIG_X_P1_C09_E16_004_S01.png"
            className="my-5"
            alt="formation-of-hydrogen-molecule"
            width={500}
            height={500}
          />
          <Image
            src="/triple covalend bond.jpg"
            className="my-5"
            alt="formation-of-hydrogen-molecule"
            width={500}
            height={500}
          />
          <Image
            src="/669e2a1b9ee33e23fd91a3a4_168008.image0.jpeg"
            className="my-5"
            alt="formation-of-hydrogen-molecule"
            width={500}
            height={500}
          />
        </div>

        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Drawing electron cross and dot structures for single covalent bonds
** Problem Solving Steps
*** Identify Central Atom
**** Based on electron contribution
**** Position in molecule
*** Arrange Other Atoms
**** Connect with single bonds
**** Show electron sharing
*** Verify Octet Rule
** Example Molecules
*** Methane (CH₄)
**** Carbon is central
**** Four C-H single bonds
**** Complete octet for C
**** Complete duplet for H
*** Water (H₂O)
**** Oxygen is central
**** Two O-H single bonds
**** Complete octet for O
**** Complete duplet for H
**** Four lone pairs on O
left side
** Draw electron cross and dot structures
*** Ammonia (NH₃)
*** Hydrogen Chloride (HCl)
*** Methanol (CH₃OH)
** Key Concepts
*** Electron Representation
**** Dots for one atom
**** Crosses for other atom
*** Bond Requirements
**** Octet rule for main atoms
**** Duplet rule for hydrogen
*** Lone Pairs
**** Unshared electrons
**** Important for structure
@endmindmap

`}
        />
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold">Methene</h1>
            <Image
              src="/methane-covalend-bond.png"
              className="my-5"
              alt="formation-of-hydrogen-molecule"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold">Water</h1>
            <Image
              src="/water-covalend-bond.png"
              className="my-5"
              alt="formation-of-hydrogen-molecule"
              width={500}
              height={500}
            />
          </div>
        </div>
        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
        }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Drawing electron cross and dot structures for Multiple Covalent Bonds
** Drawing Strategy
*** Identify Central Atom
**** Based on valence electrons
**** Position in molecule
*** Electron Distribution
**** Count needed electrons
**** Plan sharing arrangement
*** Bond Formation Rules
**** Satisfy octet rule
**** Multiple bond formation
** Example Molecules
*** Carbon Dioxide (CO₂)
**** Central carbon
**** Double bonds with oxygen
**** C needs 4 electrons
**** Each O needs 2 electrons
*** Hydrogen Cyanide (HCN)
**** Structure
***** Single H-C bond
***** Triple C-N bond
**** Electron distribution
***** H: 1 electron
***** C: 4 electrons
***** N: 5 electrons
left side
** Draw electron cross and electron dot structures
*** Carbon Disulfide (CS₂)
*** Nitrogen (N₂)
*** Ethane (C₂H₆)
** Key Concepts
*** Multiple Bond Types
**** Double bonds
**** Triple bonds
*** Electron Counting
**** Valence electrons
**** Shared pairs
*** Octet Completion
**** Through multiple sharing
**** Complete shell structure
@endmindmap
`}
        />
<Image
  src="/carbon-dioxide-covalent-bond.png"
  className="my-5"
  alt="formation-of-hydrogen-molecule"
  width={700}
  height={700}
/>
<div className="flex items-start justify-center text-center flex-col">
    <h1 className="text-2xl font-bold">HCN (Hydrogen Cyanide) Covalent Bond</h1>
<Image
  src="/hcn-covalent-bond.png"
  className="my-5"
  alt="formation-of-hydrogen-molecule"
  width={700}
  height={700}
/>
  </div>

        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>
* Covalent Bond Polarity
** Non-Polar Covalent Bonds
*** Definition
**** Equal electron sharing
**** Between identical atoms
*** Examples
**** H₂
**** N₂
**** O₂
**** Cl₂
*** Characteristics
**** Equal electronegativity
**** Symmetric electron distribution
** Polar Covalent Bonds
*** Definition
**** Unequal electron sharing
**** Between different atoms
*** Examples
**** HCl
**** H₂O
**** NH₃
**** CO
*** Characteristics
**** Different electronegativity
**** Partial charges develop
***** δ+ on less electronegative atom
***** δ- on more electronegative atom
left side
** Intermolecular Forces
*** Between molecules
*** Affects properties
*** Strength varies
** Key Factors
*** Electronegativity
**** Determines polarity
**** Electron pulling power
*** Electron Distribution
**** Symmetric vs asymmetric
**** Affects bond character
@endmindmap
`}
        />
        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>
* Covalent Bond Polarity

** Polar Covalent Bonds
*** Definition
**** Unequal electron sharing
**** Between different atoms
*** Examples
**** HCl
**** H₂O
**** NH₃
**** CO
*** Characteristics
**** Different electronegativity
**** Partial charges develop
***** δ+ on less electronegative atom
***** δ- on more electronegative atom
left side
** Intermolecular Forces
*** Between molecules
*** Affects properties
*** Strength varies
** Key Factors
*** Electronegativity
**** Determines polarity
**** Electron pulling power
*** Electron Distribution
**** Symmetric vs asymmetric
**** Affects bond character
** Non-Polar Covalent Bonds
*** Definition
**** Equal electron sharing
**** Between identical atoms
*** Examples
**** H₂
**** N₂
**** O₂
**** Cl₂
*** Characteristics
**** Equal electronegativity
**** Symmetric electron distribution
@endmindmap
`}
        />
        <PlantUMLDiagram
          code={`
                         @startmindmap
                <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>
* Coordinate Covalent Bond
** Basic Concept
*** Electron pair from single donor
*** Both nuclei attract shared pair
*** Indistinguishable after formation
** Examples
*** Ammonium Ion (NH₄⁺)
**** Formation
***** NH₃ + HCl reaction
***** H⁺ from HCl
***** Lone pair from N
**** Results in
***** NH₄⁺ and Cl⁻
*** Hydronium Ion (H₃O⁺)
**** Formation
***** H₂O + HCl reaction
***** H⁺ from HCl
***** Lone pair from O
*** NH₃-BF₃ Complex
**** Components
***** NH₃ (electron donor)
***** BF₃ (electron acceptor)
**** Characteristics
***** B is electron deficient
***** N provides lone pair
left side
** Key Features
*** Bond Formation
**** Single source of electrons
**** Shared by both atoms
*** Common Scenarios
**** Metal-ligand binding
**** Lewis acid-base reactions
** Comparison
*** vs Normal Covalent
**** Electron source differs
**** Final bond similar
*** vs Ionic Bond
**** Sharing vs transfer
**** Directional nature
@endmindmap
`}
        />
      </section>
      <div className="bg-gradient-to-r from-blue-100 to-green-100 p-10 font-sans">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Types of Bonds: Ionic Bonds
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Two Main Types of Bonds
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Ionic bonds</li>
              <li>Covalent bonds</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Ionic Bond Formation
            </h3>
            <p className="text-lg text-gray-700">
              Ionic bonds occur between two atoms, where one atom loses
              electron(s) to form a cation and the other atom gains electron(s)
              to form an anion.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Cation Formation
            </h3>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Example: Na → Na⁺ (1s² 2s² 2p⁶)</li>
              <li>Example: Mg → Mg²⁺ (1s² 2s² 2p⁶)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Anion Formation
            </h3>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Example: O + 2e⁻ → O²⁻ (1s² 2s² 2p⁶)</li>
              <li>Example: F + e⁻ → F⁻ (1s² 2s² 2p⁶)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Ionic Bond Characteristics
            </h3>
            <p className="text-lg text-gray-700">
              Ionic bonds are characterized by a strong electrostatic attraction
              between oppositely charged ions, resulting in compounds that are
              electrically neutral overall.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Ionic Compound Formation
            </h3>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Example: Na + Cl → NaCl (Sodium Chloride)</li>
              <li>Example: Mg + F₂ → MgF₂ (Magnesium Fluoride)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Key Concepts
            </h3>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Metal atoms form cations, non-metal atoms form anions.</li>
              <li>
                Electrons lost by metals in groups IA, IIA, IIIA equal the group
                number.
              </li>
              <li>
                The final compound formula is based on the simplest ratio of
                cations to anions.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">
              Representation Methods
            </h3>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Electron dot structures</li>
              <li>Electron cross structures</li>
              <li>Chemical equations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-black mb-4">
              Practice Exercises
            </h3>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Formation of various cations and anions</li>
              <li>
                Representation of ionic compounds using different structures
              </li>
              <li>Writing formulas for ionic compounds</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
