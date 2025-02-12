import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Halogens
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
        BorderColor darkGreen
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
    :depth(4) {
      BackgroundColor lightGray
    }
}
</style>
* Periodic Table Elements
** Lanthanides & Actinides
*** Lanthanides
**** Also known as "rare earth elements"
**** Series of 14 elements
**** Atomic numbers 57 to 71
*** Actinides
**** Series of 14 elements
**** Atomic numbers 89 to 103
** Halogens (Group 17)
*** General Characteristics
**** Reactive non-metals
**** Exist as diatomic molecules
**** Electronic configuration: ns²np⁵
*** Appearance
**** Fluorine (F₂): Pale yellow gas
**** Chlorine (Cl₂): Yellow-green gas
**** Bromine (Br₂): Red-brown liquid
**** Iodine (I₂): Grey-black solid, purple vapor
*** Density
**** Increases down the group
**** Fluorine: 0.0017 g/cm³
**** Chlorine: 0.0032 g/cm³
**** Bromine: 3.1028 g/cm³
**** Iodine: 4.933 g/cm³
*** Reactivity
**** Decreases down the group
**** Order: F₂ ≥ Cl₂ ≥ Br₂ ≥ I₂
**** Related to electron gain tendency
*** Displacement Reactions
**** F₂ can displace all other halides
**** Cl₂ can displace Br⁻ and I⁻
**** I₂ cannot displace any halide
*** Hydrogen Halides
**** General formula: HX (X = F, Cl, Br, I)
**** Thermal stability: HF ≥ HCl ≥ HBr ≥ HI
**** Formation: H₂ + X₂ → 2HX
@endmindmap`}
        />

<PlantUMLDiagram code={`
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

* **4.7 Halogens**
** **Definition**
*** Found in **Group 17 (VIIA)**
*** Name derived from Greek words: **"halous" (salt) + "gen" (former)**
*** Includes **F, Cl, Br, I, At, Ts** (At & Ts are radioactive)
*** Exist as **diatomic molecules**
*** Highly **reactive non-metals**

** **4.7.1 Appearance of Halogens**
*** Exist as **diatomic, colored molecular substances**
*** Color **darkens down the group**
**** **Fluorine (F₂):** Pale yellow gas
**** **Chlorine (Cl₂):** Yellow-green gas
**** **Bromine (Br₂):** Red-brown liquid
**** **Iodine (I₂):** Grey-black solid (sublimates to purple vapor)

** **Electronic Configuration**
*** **ns²np⁵** configuration
*** Have **7 valence electrons**
*** **Tend to gain 1 electron** to form univalent negative ions (F⁻, Cl⁻, Br⁻, I⁻)

** **Density of Halogens**
*** **Increases down the group** (Mass ↑ faster than Volume ↑)
*** **Stronger intermolecular forces down the group**
**** **Fluorine:** 0.0017 g/cm³
**** **Chlorine:** 0.0032 g/cm³
**** **Bromine:** 3.1028 g/cm³
**** **Iodine:** 4.933 g/cm³

** **Reactivity of Halogens**
*** **Reactivity decreases down the group**
**** **Fluorine is the most reactive**
**** **Iodine is the least reactive**
*** **Electronegativity decreases down the group**
*** **Strong oxidizing power** (Decreases in order: F₂ > Cl₂ > Br₂ > I₂)
left side

** **Displacement Reactions**
*** **Stronger halogens displace weaker halide ions**
*** **Examples**:
**** **F₂ + 2KCl → 2KF + Cl₂**
**** **Cl₂ + 2KBr → 2KCl + Br₂**
**** **Br₂ + 2KI → 2KBr + I₂**
*** **I₂ cannot displace any halide ion**


** **Hydrogen Halides & Thermal Stability**
*** Halogens react with hydrogen to form **hydrogen halides** (**HX**)
**** **H₂ + X₂ → 2HX** (where X = F, Cl, Br, I)
*** **Thermal stability decreases** from **HF > HCl > HBr > HI**
**** **HF has the strongest bond**
**** **HI has the weakest bond**

** **Prediction of Group 17 Properties**
*** **Poisonous non-metals**
*** **Low melting & boiling points** (Increase down the group)
*** **State at Room Temperature:**
**** **Fluorine, Chlorine → Gases**
**** **Bromine → Liquid**
**** **Iodine → Solid**
*** **Color darkens down the group**

** **Concept Assessment Exercise 4.9**
*** Identify **which displacement reactions will occur**:
**** **(1) Cl₂ + 2NaF → 2NaCl + F₂** ❌ (Won't happen)
**** **(2) Br₂ + 2KI → 2KBr + I₂** ✅ (Will happen)
**** **(3) I₂ + 2KBr → 2KI + Br₂** ❌ (Won't happen)
**** **(4) Cl₂ + 2KBr → 2KCl + Br₂** ✅ (Will happen)
**** **(5) Cl₂ + 2NaI → 2NaCl + I₂** ✅ (Will happen)

@endmindmap
`} />
      </section>
       

      <div className="bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800">
    <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Halogens (Group 17 / Group VII-A)</h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Definition</h2>
            <p className="text-lg mb-4">The name is derived from Greek: &quot;halous&quot; (salt) + &quot;gen&quot; (former). Halogens are reactive non-metals existing as diatomic molecules.</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Elements: Fluorine, Chlorine, Bromine, Iodine, Astatine, Tennessine</li>
                <li>Reactive non-metals</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Appearance</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Fluorine (F₂): Pale yellow gas</li>
                <li>Chlorine (Cl₂): Yellow-green gas</li>
                <li>Bromine (Br₂): Red-brown liquid</li>
                <li>Iodine (I₂): Grey-black solid, dark purple vapors when warmed</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Electronic Configuration</h2>
            <p className="text-lg mb-4">General: ns²np⁵ (7 valence electrons). Halogens tend to gain one electron to form univalent negative ions (F⁻, Cl⁻, Br⁻, I⁻).</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Density</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Fluorine: 0.0017 g/cm³</li>
                <li>Chlorine: 0.0032 g/cm³</li>
                <li>Bromine: 3.1028 g/cm³</li>
                <li>Iodine: 4.933 g/cm³</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Reactivity</h2>
            <p className="text-lg mb-4">Reactivity decreases down the group as electronegativity decreases. Order of decreasing reactivity: F₂ ≥ Cl₂ ≥ Br₂ ≥ I₂.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Displacement Reactions</h2>
            <p className="text-lg mb-4">More reactive halogens can displace less reactive ones from their compounds:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Br₂ + 2KI → 2KBr + I₂</li>
                <li>Cl₂ + 2KBr → 2KCl + Br₂</li>
                <li>Cl₂ + 2NaI → 2NaCl + I₂</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Hydrogen Halides</h2>
            <p className="text-lg mb-4">General reaction: H₂ + X₂ → 2HX (X = F, Cl, Br, I). Bond strength decreases from HF to HI. Thermal stability order: HF ≥ HCl ≥ HBr ≥ HI.</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;