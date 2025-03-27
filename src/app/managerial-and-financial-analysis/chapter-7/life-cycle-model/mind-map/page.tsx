import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">3. LIFE CYCLE MODEL

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

* Classical Product Life Cycle
** Definition
*** Period from creation to withdrawal
*** Applies to products, companies, and industries
** Stages
*** Introduction
**** Some sales demand but low total sales
**** High investment, startup, and running costs
**** Not yet profitable
*** Growth
**** Rapid increase in sales demand
**** New entrants attracted by high sales and profits
**** Companies start earning profits
*** Maturity
**** Total annual sales stabilize
**** Prices and profits stabilize
**** Growth opportunities diminish
**** Companies differentiate products to target niche markets
**** Product updates may extend life cycle
*** Decline
**** Total annual sales fall
**** Profits decrease
**** Companies exit the market
**** Lifecycle ends when the last supplier exits
left side
** Exceptions
*** Not all products follow a classical life cycle
*** Unsuccessful products never become profitable
*** Some products can be revitalized and redesigned
**** Sales increase again, leading to renewed growth and maturity
** Variability in Life Cycle
*** Life cycle length varies
*** Broad product types (e.g., motor cars) have longer cycles
*** Specific models (e.g., Volkswagen Beetle) have shorter cycles
** Factors Influencing Each Phase
*** Selling prices change
*** Costs vary
*** Capital investment fluctuates
*** Advertising and marketing spending changes
** Example: Smartphone Life Cycle
*** Short life cycle, often less than a year
*** Rapid technological advancements
*** Companies discount older models before launching new ones
**** Attracts bargain hunters
**** Helps clear inventory and maximize sales

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

* Cost Implications of the Product Life Cycle
** Life Cycle Costing Importance
*** Profitability Consideration
*** Total Cost Recovery
** Costs to be Recovered
*** Research and Development Costs
*** Training Costs
*** Machinery Costs
*** Production Costs
*** Distribution and Selling Costs
*** Marketing Costs
*** Working Capital Costs
*** Retirement and Disposal Costs
** Stage Costs
*** Product Development
**** R&D Costs
**** Capital Expenditure Decisions
*** Introduction to the Market
**** Manufacturing Costs
**** Operating Costs (Marketing & Advertisement)
**** Setup & Expansion of Distribution Channels
*** Growth
**** Costs of Increasing Capacity
**** Increased Costs of Working Capital
*** Maturity
**** Maintenance & Operating Costs
**** Marketing & Product Enhancement Costs
*** Decline
**** Maintenance & Operating Costs
**** Costs to Keep Sales
*** Withdrawal
**** Asset Decommissioning Costs
**** Possible Restructuring Costs
**** Remaining Warranties Support
** Benefits of Life Cycle Costing
*** Revenue & Cost Comparison Over Entire Life
*** Early Profitability Assessment
**** Abandon Non-Profit-Making Products Early
*** Cost Reduction Techniques
*** Pricing Strategy Determination
**** Better Control of Marketing & Distribution Costs
*** Faster Market Entry
**** Reduce R&D Phase
**** Early Breakeven Achievement
*** Performance Monitoring
**** Improve Future Product Performance
**** Enhance Estimating Techniques
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


* Cycle of Competition
** Concept
*** Understanding competitor behavior
*** Companies seek competitive advantage
*** New initiatives lead to counter-measures
** Effects
*** Prices & Quality
**** Lower prices by rivals
**** Quality improvements at same price
**** Response: better quality & reduced price
*** Growing Market
**** Prices fall
**** Quality improves
*** Maturity & Decline Phase
**** Harder to lower prices without reducing quality
**** Lower prices may reduce quality
**** Possible spiral of falling prices & quality
**** Product may become unprofitable & less attractive
** Strategic Importance
*** Helps explain market strategies
*** Assists in predicting competitor initiatives
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

* Glory Ultimate - Life Cycle Costing
** Benefits of Life Cycle Costing
*** Assess profitability before development
*** Identify various costs over the life cycle
*** Assist in developing a pricing strategy
** Costs in Each Phase
*** Introductory Phase
**** Manufacturing costs (costs of operations)
**** Marketing and advertising costs
**** Costs of setting up and expanding distribution channels
*** Growth Phase
**** Increased costs of working capital
**** Costs of increasing capacity
**** Marketing and advertising costs to raise customer base
*** Maturity Phase
**** Costs to maintain manufacturing capacity
**** Marketing and product enhancement costs
*** Decline Phase
**** Costs of withdrawals (warranties, etc.)
**** Discounts to attract customers
** Strategies to Extend Maturity Phase
*** Modify design, features, packaging, etc.
*** Target untapped markets (geographical, demographic, lifestyle, etc.)
*** Adjust pricing strategy with discounts or promotions
@endmindmap



`}
        />

 
      </section>

    </div>
  );
};

export default MagneticMindmap;