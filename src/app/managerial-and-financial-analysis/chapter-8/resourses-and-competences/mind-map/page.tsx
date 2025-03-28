import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">5. Resources and Competences
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
* Resources
** Definition
*** Any asset, process, skill, or item of knowledge controlled by the entity
*** Used to provide products or services to customers
** Categories of Resources
*** Human Resources
**** Leaders, managers, and employees with their skills
*** Physical Resources
**** Tangible assets like property, plant, equipment, and raw materials
*** Financial Resources
**** Financial assets and ability to acquire additional finance
*** Intellectual Capital
**** Patents, trademarks, brand names, copyrights
**** Acquired knowledge and "know-how"
** Threshold Resources vs Unique Resources
*** Threshold Resources
**** Essential for participation in the industry and competition
**** Necessary for survival in the market
*** Unique Resources
**** Controlled by the entity and difficult for competitors to acquire
**** Source of competitive advantage
**** Examples
***** Scarce raw materials (e.g., mines, exploration rights)
***** Location advantages (e.g., hydroelectric power near a waterfall)
***** Special privileges (e.g., patents, franchises)
** Evolution of Unique Resources
*** Can lose uniqueness over time
**** Example 1: A talented specialist might be poached by a competitor
**** Example 2: A company’s patent might be circumvented by a competitor
@endmindmap

`}
        />      <PlantUMLDiagram
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
* Competences
** Definition
*** Activities or processes in which an entity uses its resources
*** Created by bringing resources together and using them effectively
*** Provide products or services that offer value to customers
** Competence as Ability
*** The ability to do something well
*** Essential for a business to compete effectively
** Threshold Competences vs Core Competences
*** Threshold Competences
**** Activities, processes, and abilities that meet customer needs
**** Provides products or services with 'threshold' features
**** Necessary for competition in the market
**** Easy to imitate or at the same level as competitors
*** Core Competences
**** Activities, processes, and abilities that provide competitive advantage
**** Help achieve critical success factors for products or services
**** Difficult for competitors to imitate or obtain
** Importance of Core Competences
*** Offer competitive advantage by using resources more effectively
*** Essential to do more than just meet thresholds to succeed in the market
*** Core competence concept by Hamel and Prahalad
**** Definition: "Activities and processes through which resources are deployed to achieve competitive advantage in ways that others cannot imitate or obtain."
@endmindmap

`}
      />      <PlantUMLDiagram
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
* Sustainable Core Competences
** Definition
*** Core competences that provide a long-term competitive advantage
*** Last long enough to achieve strategic objectives
** Key Characteristics
*** Durability
**** Length of time core competence continues to exist
**** Rate of depreciation or obsolescence
*** Difficulty to Imitate
**** Difficult for competitors to imitate
**** Takes competitors a long time to copy
** Examples of Core Competences
*** Providing Good Service
**** Some entities excel at providing service that is hard to imitate
*** Embedded Operational Routines
**** Efficient processes and procedures that ensure smooth operations
**** Known as operating efficiency
*** Management Skills
**** Competence derived from strong leadership and management team
*** Knowledge
**** Ability to use internal knowledge and know-how for competitive advantage
** Identifying Sustainable Core Competences
*** Analyze a company's unique resources and competences
*** Think about what makes a company better than its competitors in the same industry or market
@endmindmap

`}
    />      <PlantUMLDiagram
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
* Core Competences and the Selection of Markets
** Core Competence and Competitive Advantage
*** Provides competitive advantage in a particular market or industry
** Expanding Core Competences to Other Markets
*** Core competences can be extended to other markets or industries
*** Effective in creating competitive advantage in new markets
** Example: Marriott Group
*** Originates from the hotel industry
*** Successfully extended core competences into:
**** Conference organization
**** Hospitality arrangements at events (e.g., sporting events)
**** Facilities management
** Strategy for Market Expansion
*** Look for opportunities to expand into markets where core competences can be exploited
@endmindmap

`}
  />      <PlantUMLDiagram
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
* Summary: Resources and Competences
** Resources
*** Threshold Resources
**** Necessary to participate in an industry
**** Basic resources required to meet industry standards
*** Unique Resources
**** Provide a foundation for competitive advantage
**** Difficult for competitors to imitate
** Competences
*** Threshold Competences
**** Activities, processes, and abilities to meet product/service requirements
**** Necessary for industry participation
*** Core Competences
**** Provide competitive advantage
**** Activities, processes, and abilities that deliver superior value
** Threshold Resources and Competences
*** Necessary but not sufficient for achieving strategic success (strategic capability)
@endmindmap


`}
/> 
      </section>

    </div>
  );
};

export default MagneticMindmap;