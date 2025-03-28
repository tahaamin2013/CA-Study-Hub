import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">1. Strategic Capability</h1>
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
* **Strategic Capability**
** **Definition**
*** Ability of an entity to perform & prosper by achieving strategic objectives
*** Ability to use **core competences** to create **competitive advantage**
** **Key Aspects**
*** **Competitive Advantage**
**** Comes from managing **resources, competences & capabilities**
**** Helps entity exploit **opportunities** & handle **threats**
*** **Monitoring the Environment**
**** Identifying **opportunities & threats** is **not enough**
**** Must also **develop capabilities** to sustain advantage
*** **Effective Resource Utilization**
**** Using available **resources & competences**
**** Linking **internal & external** activities
**** Maintaining **balance of core competences**
** **Sustaining Strategic Capability**
*** Requires **continuous improvement** in competitive advantage
*** Long-term success depends on ability to **exploit strengths** effectively
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
* **Achieving Strategic Capability**
** **Resource-Based View of the Firm**
*** Competitive advantage comes from **resources & capabilities**
*** Strategic capability depends on how resources are **utilized & managed**
** **Hierarchy of Requirements**
*** **Resources** → **Competences** → **Capabilities** → **Strategic Capability**
**** Resources: Assets like technology, finance, and human capital
**** Competences: Efficient use of resources
**** Capabilities: Ability to sustain & develop competences
**** Strategic Capability: Long-term success from competitive advantage
** **Key Factors**
*** **Understanding Customer Needs**
**** Fundamental to **achieving competitive advantage**
**** Helps in aligning **resources & capabilities** effectively
*** **Developing Core Competencies**
**** Building unique **skills & strengths** 
**** Enhancing **efficiency & innovation**
*** **Sustaining Competitive Advantage**
**** Continuous **improvement & adaptation**
**** Responding to **market & environmental changes**
@endmindmap



`}
        />
     
      
 
      </section>

    </div>
  );
};

export default MagneticMindmap;