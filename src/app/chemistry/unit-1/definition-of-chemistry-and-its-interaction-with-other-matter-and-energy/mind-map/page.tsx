import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Nature of Science in Chemistry</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*:DEFINITION OF CHEMISTRY AND
ITS INTERACTION WITH OTHER MATTER
AND ENERGY;
** Definition
*** Science that Investigates
**** The materials of the universe
**** The changes that these materials undergo
*** Chemistry deals with
**** Composition of Matter & Energy
**** Structure of Matter & Energy
**** Properties of Matter & Energy
**** Behavior of Matter & Energy
**** Changes in Matter & Energy
left side
** Applications
*** Explaining natural phenomena
*** Development of essential substances
*** Development of drugs
*** Development of technologies
** Green Chemistry
*** Model for chemical products and processes that
**** Reduces use of hazardous substances
*** Helps understand pollution
*** Aids in reducing pollution
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;