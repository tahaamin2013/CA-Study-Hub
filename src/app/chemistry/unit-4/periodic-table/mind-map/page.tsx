import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Periodic Table and Periodicity
        </h1>

        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>

* Introduction to Periodic Table
** Evolution of the Periodic Table
*** Only **23 elements** known until **18th century**
*** Now contains **118 elements**
** Need for Organization
*** Remembering element reactions, properties, atomic masses is difficult
*** A system is needed to **organize information**
** Importance of the Periodic Table
*** **One of the most important tools in chemistry**
*** Helps in **understanding & predicting** properties of elements
*** If you know the **properties of one element in a group**, you can predict others
*** **Relates element reactivity** to atomic structure
*** **Predicts**:
**** **Reactivity trends** of elements
**** **Formation of ionic & covalent bonds**
left side
** Search for Order
*** Observations & objects are grouped by **common features**
*** Makes it **easier to describe** elements
** Role of Atomic Number
*** Discovered by **Moseley (1913)**
*** **Atomic number** serves as a base for systematic arrangement
*** Elements arranged in **increasing atomic number**
** Definition of Periodic Table
*** A **table showing systematic arrangement** of elements
*** **Based on Periodic Law**
** Periodic Law
*** **Elements arranged by increasing atomic numbers**
*** Their **properties repeat in a periodic manner**

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
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
            * Structure of the Periodic Table
** Periods (horizontal rows)
*** 7 periods
*** Short periods (1-3)
*** Long periods (4-7)
** Groups (vertical columns)
left side
** Blocks
*** s-block (Groups 1-2)
*** p-block (Groups 13-18)
*** d-block (Transition elements)
*** f-block (Lanthanides and Actinides)
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
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Periods
** **Definition**: Horizontal rows in the periodic table
** **Arrangement**: Elements listed in order of increasing atomic numbers
** **Total Periods**: 7
left side
** **Elements Per Period**: 
*** **Period 1** → 2 elements
*** **Period 2 & 3** → Short periods
*** **Period 4 - 7** → Long periods
** **Periodic Law**: Properties **repeat** when moving to the next period
@endmindmap
`}
        />

        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>

* Groups (columns)
** **Definition**: Vertical columns in the periodic table
** **Similar Properties**: Elements in the same group have similar properties
** **Numbering Systems**
*** IUPAC = International union of applied and pure chemistry
*** **New IUPAC System**
**** Groups **1-18** from left to right
***** **Group 1** → **Alkali Metals** (Highly reactive metals)
***** **Group 2** → **Alkaline Earth Metals** (Less reactive than alkali metals)
***** **Group 3-12** → Transition Elements
***** **Group 13** → **Boron Group**
***** **Group 14** → **Carbon Group**
***** **Group 15** → **Nitrogen Group (Pnictogens)**
***** **Group 16** → **Oxygen Group (Chalcogens)**
***** **Group 17** → **Halogens** (Highly reactive non-metals)
***** **Group 18** → **Noble Gases** (Inert, do not readily react)

*** **Traditional System (Old IUPAC)**
**** **Group A** (1-2 & 13-18) → Normal/Representative Elements (Main Group Elements)
***** Groups **IA, IIA** (1-2)
****** **Group 1 (IA)** → **Alkali Metals** (Highly reactive metals)
****** **Group 2 (IIA)** → **Alkaline Earth Metals** (Less reactive than alkali metals)
***** Groups **IIIA - VIIIA** (13-18)
****** **Group 13 (IIIA)** → **Boron Group**
****** **Group 14 (IVA)** → **Carbon Group**
****** **Group 15 (VA)** → **Nitrogen Group (Pnictogens)**
****** **Group 16 (VIA)** → **Oxygen Group (Chalcogens)**
****** **Group 17 (VIIA)** → **Halogens** (Highly reactive non-metals)
****** **Group 18 (VIIIA)** → **Noble Gases** (Inert, do not readily react)
**** **Group B** (3-12) → Transition Elements
** **Valence Electrons**
*** Group number indicates **valence electrons** count
*** **Examples**:
**** **Group 1** → 1 valence electron
**** **Group 2** → 2 valence electrons
**** **Group 13 - 18** → Valence electrons = Group Number - 10
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
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Blocks in the Periodic Table
** **s-block Elements** 
*** Group 1 & Group 2 elements
*** Valence electrons in **s sub-shell**
*** Example: **Li (1s², 2s¹) → s-block**
** **p-block Elements** 
*** Group 13 to 18 (except He)
*** Valence electrons in **p sub-shell**
*** Example: **C (1s², 2s², 2p²) → p-block**
left side
** **d-block Elements** 
*** Transition metals (Group 3 to 12)
*** Valence electrons in **d sub-shell**
*** Example: **Fe (1s², 2s², 2p⁶, 3s², 3p⁶, 3d⁶, 4s²) → d-block**
** **f-block Elements** 
*** **Lanthanides & Actinides**
*** Valence electrons in **f sub-shell**
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
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Electronic Configuration
** Aufbau Principle
*** **Order of Orbital Filling**
**** 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p...
*** **Orbital Capacities**
**** s-orbital → 2 electrons
**** p-orbital → 6 electrons
**** d-orbital → 10 electrons
**** f-orbital → 14 electrons
** Placement of Elements
*** **Block of an Element**
**** Determined by the orbital where the last electron is placed
*** **Period of an Element**
**** Determined by the **principal quantum number (n)** of the valence electron
*** **Group of an Element**
**** **s-block** → Group number = Number of valence electrons
**** **p-block** → Group number = Valence electrons + 10
** Example: Sodium (Na)
*** **Atomic Number** → 11
*** **Electronic Configuration** → 1s², 2s², 2p⁶, 3s¹
*** **Block** → **s-block** (last electron in 3s)
*** **Period** → 3 (principal quantum number of valence electron)
*** **Group** → 1 (valence electron count in s-block)
** **Note**
*** Electrons fill orbitals in the order dictated by the Aufbau principle.
** Example 4.1: Identifying the Group and Period of an Element
*** Problem Solving Strategy
**** Write the electronic configuration of the element
**** Identify the **valence shell** (highest n value)
**** **Period Number** → n value of valence shell
**** **Group Number** 
***** **s-block** → Number of valence electrons
***** **p-block** → Valence electrons + 10
*** **Solution**
**** **1. Aluminium (Al, Atomic No. 13)**
***** **Electronic Configuration** → 1s², 2s², 2p⁶, 3s², 3p¹
***** **Valence Sub-shell** → 3p (belongs to **p-block**)
***** **Period Number** → n = 3 (**3rd Period**)
***** **Total Valence Electrons** → 2 + 1 = 3
***** **Group Number** → 3 + 10 = **13**
***** **Conclusion** → Al is in **Group 13, Period 3, p-block**
**** **2. Potassium (K, Atomic No. 19)**
***** **Electronic Configuration** → 1s², 2s², 2p⁶, 3s², 3p⁶, 4s¹
***** **Valence Sub-shell** → 4s (belongs to **s-block**)
***** **Period Number** → n = 4 (**4th Period**)
***** **Total Valence Electrons** → 1
***** **Group Number** → **1**
***** **Conclusion** → K is in **Group 1, Period 4, s-block**
** Example 4.2: Classifying Elements into Groups and Periods
*** Problem Solving Strategy
**** Elements with **similar valence shell electronic configuration** belong to the **same group**.
**** The **n value of the valence shell** determines the **period**.
**** Elements with the **same valence shell (same n value)** lie in the **same period**.
*** Solution
**** **Period 2**
***** **Group IIA (2A)** → A: **1s² 2s²**
***** **Group VA (5A)** → B: **1s² 2s² 2p³**
***** **Group VIIA (7A)** → C: **1s² 2s² 2p⁵**
**** **Period 3**
***** **Group IIA (2A)** → D: **1s² 2s² 2p⁶ 3s²**
***** **Group IIIA (3A)** → F: **1s² 2s² 2p⁶ 3s² 3p¹**
***** **Group VIIA (7A)** → E: **1s² 2s² 2p⁶ 3s² 3p⁵**
@endmindmap
`}
        />
      </section>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-10 font-sans">
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Periodic Table and Periodicity
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Element Properties and Prediction
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Use chemical periodicity to predict properties of elements in a
              group. Deduce unknown elements&apos; nature and position from
              given properties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Group 1 (Alkali Metals)
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Characteristics: Relatively soft metals</li>
              <li>
                Trends down the group:
                <ul className="list-disc pl-5">
                  <li>Decreasing melting point</li>
                  <li>Increasing density</li>
                  <li>Increasing reactivity</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Group 7 (Halogens)
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Characteristics: Diatomic non-metals</li>
              <li>
                Trends down the group:
                <ul className="list-disc pl-5">
                  <li>Increasing density</li>
                  <li>Decreasing reactivity</li>
                </ul>
              </li>
              <li>
                Appearances at room temperature:
                <ul className="list-disc pl-5">
                  <li>Fluorine: Pale yellow gas</li>
                  <li>Chlorine: Yellow-green gas</li>
                  <li>Bromine: Red-brown liquid</li>
                  <li>Iodine: Grey-black solid</li>
                </ul>
              </li>
              <li>
                Reactions:
                <ul className="list-disc pl-5">
                  <li>Displacement reactions with halide ions</li>
                  <li>Act as reducing agents</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Hydrogen Halides
            </h2>
            <p className="text-lg text-gray-700">
              Analyze relative thermal stabilities. Explain in terms of bond
              strengths.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Transition Elements
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>
                Characteristics:
                <ul className="list-disc pl-5">
                  <li>High densities</li>
                  <li>High melting points</li>
                  <li>Variable oxidation numbers</li>
                  <li>Form colored compounds</li>
                  <li>
                    Act as catalysts (e.g., Haber process, catalytic converters)
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Group 18 (Noble Gases)
            </h2>
            <p className="text-lg text-gray-700">
              Characteristics: Unreactive monoatomic gases. Explain unreactivity
              in terms of electronic configuration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Metals vs. Non-metals
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>
                Compare general physical properties:
                <ul className="list-disc pl-5">
                  <li>Thermal conductivity</li>
                  <li>Electrical conductivity</li>
                  <li>Malleability and ductility</li>
                  <li>Melting and boiling points</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Periodic Table Structure
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Elements arranged by increasing atomic number</li>
              <li>Based on Periodic Law: Properties repeat periodically</li>
              <li>7 periods (horizontal rows)</li>
              <li>18 groups (vertical columns)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Blocks in the Periodic Table
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>s-block: Groups 1 and 2</li>
              <li>p-block: Groups 13 to 18 (except He)</li>
              <li>d-block: Transition elements</li>
              <li>f-block: Lanthanides and actinides</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Importance of the Periodic Table
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Organizes element information</li>
              <li>Predicts properties and reactivity</li>
              <li>Relates reactivity to atomic structure</li>
              <li>Predicts bond types (ionic or covalent)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
