import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">5. BOSTON CONSULTING GROUP MATRIX (BCG MATRIX)</h1>
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

* Boston Consulting Group matrix (BCG matrix)
** Developed by Boston Consulting Group for strategic planning
** Helps in selecting optimal strategies for products/business units
** Ensures strategies align with corporate objectives
** Assists in allocation of funds to different products/business units
** Structure
*** 2 × 2 matrix
*** One side: Market growth rate
*** Other side: Market share held by product/business unit
** Market Growth
*** Mid-point often set at 10% per year
*** Above 10% = High growth
*** Below 10% = Low growth
** Market Share
*** Measured as product sales relative to biggest competitor
*** Mid-point = Sales equal to biggest competitor
*** High relative market share = Market leader
*** Low relative market share = Not market leader
** Representation in Matrix
*** Products/business units represented as circles
*** Size of circle = Sales value
left side
** Four Categories of Products/Business Units
*** Question Mark (Problem Child)
**** Low market share in high-growth market
**** Opportunity to increase market share but requires investment
**** Strategic choices:
***** Invest heavily to grow market share
***** Maintain small but profitable position
***** Withdraw due to negative cash flow
**** Small market share is risky as larger firms have cost advantages
*** Star
**** High market share in high-growth market
**** Market leader but requires continuous investment
**** Initially cash-consuming but should become self-financing
**** Eventually earns high returns
*** Cash Cow
**** High market share in low-growth or declining market
**** Market leader, generating strong cash inflows
**** Benefits from economies of scale and efficiency
**** Other companies unlikely to attack due to market stagnation
**** Provides cash for investment in Question Marks and Stars
*** Dog
**** Low market share in low-growth or declining market
**** Unlikely to gain market share due to market leader dominance
**** Often unprofitable, may require closure
**** Strategic choices:
***** Immediate withdrawal or sale (e.g., management buyout)
***** Continue for short-term cash flow before exiting
***** Not advisable to invest more in Dogs
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
* BCG Matrix
** Companies must invest in products and business units for the future
*** Invest in Question Marks and Stars
*** Cash for investment comes from Cash Cows
*** Helps management decide on product portfolio
** Cash Cow
*** Low market growth, high market share
*** Strategy
**** Defend and maintain market share
**** Limited spending on innovation (R&D)
**** Cash generated can develop other products
** Question Mark
*** High market growth, low market share
*** Strategy
**** Needs a lot of new investment to increase market share
**** Strategic choice: Invest heavily or disinvest/abandon
left side
** Star
*** High market growth, high market share
*** Stars are the future Cash Cows
*** Strategy
**** Market aggressively to maintain/increase market share
**** Large investment in equipment and R&D required
**** Should eventually become self-sustaining
**** Until then, financed by Cash Cows
** Dog
*** Low market growth, low market share
*** Strategy
**** Might generate some cash, but future is limited
**** Strategic focus should be on short-term
**** Risk of using up cash if trying to preserve market share
**** Avoid risky investments aimed at turnaround
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

* BCG Analysis
** Products and Market Data
*** Product 1
**** Total Market Size
***** Year -2: 50
***** Year -1: 58
***** Current Year: 65
***** Next Year: 75
***** Year +2: 84
**** Product Sales
***** Year -2: 2
***** Year -1: 2
***** Current Year: 2.5
***** Next Year: 3
***** Year +2: 3.5
*** Product 2
**** Total Market Size
***** Year -2: 150
***** Year -1: 152
***** Current Year: 149
***** Next Year: 153
***** Year +2: 154
**** Product Sales
***** Year -2: 78
***** Year -1: 77
***** Current Year: 80
***** Next Year: 82
***** Year +2: 82
*** Product 3
**** Total Market Size
***** Year -2: 40
***** Year -1: 50
***** Current Year: 60
***** Next Year: 70
***** Year +2: 80
**** Product Sales
***** Year -2: 3
***** Year -1: 5
***** Current Year: 8
***** Next Year: 10
***** Year +2: 12
*** Product 4
**** Total Market Size
***** Year -2: 60
***** Year -1: 61
***** Current Year: 61
***** Next Year: 61
***** Year +2: 60
**** Product Sales
***** Year -2: 2
***** Year -1: 2
***** Current Year: 2
***** Next Year: 2
***** Year +2: 2
*** Product 5
**** Total Market Size
***** Year -2: 100
***** Year -1: 112
***** Current Year: 125
***** Next Year: 140
***** Year +2: 150
**** Product Sales
***** Year -2: 4
***** Year -1: 5
***** Current Year: 5.5
***** Next Year: 6
***** Year +2: 6.5
left side
** Market Share of Market Leader
*** Product 1: 37%
*** Product 2: 26%
*** Product 3: 12%
*** Product 4: 29%
*** Product 5: 20%
** Classification using BCG Model
*** Star
**** Product 3
*** Cash Cow
**** Product 2
*** Dog
**** Product 4
*** Question Marks
**** Product 1
**** Product 5
** Strategic Decisions
*** Maintain Product 2 as Cash Cow
*** Invest in Product 3 to become Cash Cow
*** Consider abandoning Product 4
*** Evaluate potential growth of Products 1 and 5
*** Explore profitability improvements for all products
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

* BCG Model Weaknesses
** Criticisms of the BCG Model
*** Assumptions may be incorrect
**** Competitive strength depends on market share
***** A product can have a strong position despite low market share
***** Factors like quality, brand, and cost impact competitiveness
***** Example: Porsche earns high profits despite low market share
**** Market attractiveness depends on sales growth
***** Companies might benefit from investing in low-growth markets
*** Other influential factors
**** Strength of competition
**** Cost base
**** Brand strength
*** Market definition challenges
**** Geographical scope issues
***** Market could be national, regional, or global
**** Identifying competing products
***** Car market segmentation example
***** Difficulty in categorizing models
*** Better suited for SBUs and segments
**** Not ideal for entire markets
**** Markets have multiple segments
*** Difficulty in defining high/low rates
**** Growth rate ambiguity
**** Market share classification issues
*** Careful interpretation required
**** Impact on R&D and marketing
**** Small changes in growth rate may lead to incorrect decisions
@endmindmap



`}
        />



 
      </section>

    </div>
  );
};

export default MagneticMindmap;