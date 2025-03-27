import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">6. OPPORTUNITIES AND THREATS


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
* SWOT Analysis
** Definition
*** A technique for identifying key factors affecting business strategy
*** A simple but useful technique for analyzing strategic position
** Components
*** Strengths (S)
**** Internal strengths from entity’s resources
*** Weaknesses (W)
**** Internal weaknesses in entity’s resources
*** Opportunities (O)
**** External factors that can be exploited for strategic advantage
*** Threats (T)
**** External factors that create adverse risk for future prospects
** Internal vs External
*** Internal Factors
**** Strengths
**** Weaknesses
*** External Factors
**** Opportunities
**** Threats
** Focus of this Chapter
*** Using SWOT analysis to identify
**** Strategic opportunities
**** Threats in the business environment
**** Threats in the competitive environment
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
* 6.2 Identifying Opportunities and Threats
** SWOT Analysis in Examinations
*** Identify opportunities and threats
*** Recommended approach
left side
** Sources of Opportunities and Threats
*** Changes in the Business Environment
**** PESTEL Analysis
***** Political
***** Economic
***** Social
***** Technological
***** Environmental
***** Legal
**** PESTEL vs SWOT
***** PESTEL identifies significant factors
***** SWOT assesses factors for opportunity or threat
*** Nature of Market Competition
**** Strategic space
**** Competitive environment
***** Strength of competition
***** Five Forces Model
****** Future changes in Five Forces
****** Effect on competition and profitability
***** Life Cycle Model
****** Introductory phase
****** Growth phase
****** Maturity phase
****** Decline phase
****** Transition between phases
****** Consequences for business
***** Market Segmentation
****** Existing market segments
****** Gaps in the market
****** Opportunities for new segments
****** Future segmentation possibilities
****** Opportunity to create new segments
right side
** Defining Opportunities and Threats
*** Opportunities
**** Circumstances or changes increasing competitive advantage
*** Threats
**** Circumstances or changes weakening or removing competitive advantage
**** Circumstances or changes giving competitors an advantage
** Dual Nature of Changes
*** Some changes can be both threats and opportunities
**** Threat if competitors take advantage
**** Opportunity if the company takes initiative
@endmindmap

`}
        />
       
      
 
      </section>

    </div>
  );
};

export default MagneticMindmap;