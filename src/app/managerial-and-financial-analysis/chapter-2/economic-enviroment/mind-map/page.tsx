import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Economic Enviroment</h1>
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
* **Economic Environment**
** **Definition**
*** External factors and broader economic trends impacting businesses
** **Types of Economic Environment**
*** **Microeconomic Environment**
**** Relates to consumer behavior
**** Affected by market environment
**** Influenced by market competition
**** Driven by demand and supply forces
*** **Macroeconomic Environment**
**** Broad economic factors affecting the entire economy
**** Impacts all economic participants, including businesses
**** Analyzed using economic indicators
@endmindmap

`}
        />

     
      </section>

    </div>
  );
};

export default MagneticMindmap;