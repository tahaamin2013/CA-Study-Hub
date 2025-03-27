import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">LEGAL ENVIRONMENT AFFECTING BUSINESS</h1>
      <section>
      <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    FontColor black
    FontSize 14
  }
  :depth(1) {
    BackgroundColor lightGreen
  }
  :depth(2) {
    BackgroundColor gold
  }
  :depth(3) {
    BackgroundColor pink
  }
  :depth(4) {
    BackgroundColor gray
  }
  .radioisotopes {
    BackgroundColor yellow
  }
  .isotopes {
    BackgroundColor cyan
  }
  .unstable {
    BackgroundColor lightPink
  }
  .examples {
    BackgroundColor lightGreen
  }
}
</style>



* The Role of Legislation in Business
** Importance of Legal System
*** Regulates business practices
*** Defines business policies, rights, and obligations

** Business Laws
*** Make a business or transaction illegal
*** Impose conditions on certain businesses
*** Regulate rights and duties to ensure fairness
*** Protect against defective services
*** Ensure fair and non-discriminatory employee treatment
*** Protect investors, creditors, and consumers
*** Regulate dealings with suppliers
*** Ensure fair competition

** Government Role
*** Can change business rules and regulations
*** Managers should stay updated with laws

** Examples of Business Impact by Law
*** 1970s: Nationalization Act in Pakistan
*** 2007: Venezuela oil companies takeover
*** 2007: US corn shipment rejected by EU

@endmindmap

`}
        />
                <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    FontColor black
    FontSize 14
  }
  :depth(1) {
    BackgroundColor lightGreen
  }
  :depth(2) {
    BackgroundColor gold
  }
  :depth(3) {
    BackgroundColor pink
  }
  :depth(4) {
    BackgroundColor gray
  }
  .radioisotopes {
    BackgroundColor yellow
  }
  .isotopes {
    BackgroundColor cyan
  }
  .unstable {
    BackgroundColor lightPink
  }
  .examples {
    BackgroundColor lightGreen
  }
}
</style>

* Different types of Laws affecting businesses
** Companies law
*** Companies Act, 2017 (Pakistan)
*** Regulated by SECP
*** Protects shareholders, creditors, stakeholders
*** Ensures good governance
*** Compliance costs: incorporation, HR, audits, AGMs, record-keeping
*** Penalties for non-compliance
** Partnership law
*** Governed by Partnership Act, 1932
*** Covers registration, dissolution, rights & duties
*** Less regulatory burden than companies
** Employment law
*** Protection against unfair treatment & exploitation
*** Minimum wage laws
*** Working conditions: max hours, retirement, child labor, health & safety
*** Unfair dismissal protections
*** Redundancy regulations
*** Anti-discrimination laws (disability, gender, race, religion, orientation, age)
*** Gender equality & anti-harassment laws
** Health and safety law
*** Sets minimum health & safety standards
*** Varies by country
*** Compliance critical for employers
*** Safe workplace requirements
*** Regular risk assessments
left side
** Data protection law
*** Protects personal data privacy
*** Prevents unauthorized data collection & use
*** Ensures data accuracy & security
** Cyber laws
*** Regulates internet & online transactions
*** Protects user information & confidentiality
** Competition law
*** Prevents unfair market practices
**** Monopolies
***** Restricts single entity market dominance
***** Government investigations & merger regulations
**** Anti-collusion regulations
***** Prevents secret agreements harming competition
**** Price controls
***** Government oversight of essential services pricing
** Consumer protection
*** Contract law & sale of goods legislation
**** Buyer protections
***** Title (seller ownership assurance)
***** Goods must match description
***** Quality standards
***** Remedies for defective products
** Copyrights, Patents, and Licenses
*** Copyright: Protects original works (art, writings, music, etc.)
*** Patent: Exclusive rights to inventions
*** License: Permits regulated business activities
@endmindmap



`}
        />
                <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    FontColor black
    FontSize 14
  }
  :depth(1) {
    BackgroundColor lightGreen
  }
  :depth(2) {
    BackgroundColor gold
  }
  :depth(3) {
    BackgroundColor pink
  }
  :depth(4) {
    BackgroundColor gray
  }
  .radioisotopes {
    BackgroundColor yellow
  }
  .isotopes {
    BackgroundColor cyan
  }
  .unstable {
    BackgroundColor lightPink
  }
  .examples {
    BackgroundColor lightGreen
  }
}
</style>




`}
        />
     



      </section>

    </div>
  );
};

export default MagneticMindmap;