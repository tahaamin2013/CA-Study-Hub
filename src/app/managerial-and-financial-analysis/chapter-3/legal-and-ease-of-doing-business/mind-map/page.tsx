import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">LEGAL ENVIRONMENT AND EASE OF DOING BUSINESS
        </h1>
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


* LEGAL ENVIRONMENT AND EASE OF DOING BUSINESS
** Sensible Legal System
*** Establish and clarify property rights
*** Minimize cost of resolving disputes
*** Increase predictability of economic interactions
*** Provide core protections against abuse
*** Identify prospects of success for business activity
** Business Considerations
*** Level of risk (time & money) in setting up
*** Strategic analysis of business environment
**** Understand dynamics of business environment
**** Strategize to achieve objectives
*** Factors examined by business managers
**** Overall quality of business environment
**** Financial system
**** Market size
**** Rule of law
**** Quality of labor force
left side
** Ease of Doing Business Indices
*** Generally accepted indices
*** Insight into regulatory environment
** World Bank Ease of Doing Business Index
*** Launched in 2003
*** Assessment of business regulations across 190 economies
*** Most authentic indicator of regulatory environment
*** Higher ranking = More conducive regulatory environment
*** Ten Indicators
**** Starting a Business
**** Getting credit
**** Construction permit
**** Getting electricity
**** Registering property
**** Protecting minority investors
**** Resolving insolvency
**** Enforcing contracts
**** Trading across borders
**** Paying taxes
@endmindmap

`}
        />
     



      </section>

    </div>
  );
};

export default MagneticMindmap;