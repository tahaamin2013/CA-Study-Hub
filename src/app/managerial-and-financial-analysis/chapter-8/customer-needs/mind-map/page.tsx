import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">2. Customer Needs</h1>
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

* **The Marketing Approach**
** **Definition of Markets**
*** Defined by **customers & potential customers**
*** Businesses compete to **sell goods & services**
** **Business Success Factors**
*** Achieved by **meeting customer needs**
*** Most profitable businesses **sell successfully**
** **Marketing Concept**
*** Aim: **Deliver products/services that meet customer needs**
*** Success: **Better than competitors**
** **Competitive Advantage**
*** Businesses must develop **strategies to outperform competitors**
*** Key Goal: **Achieve and sustain a competitive advantage**
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

* **Customer Needs**
** **Reasons for Buying a Product**
*** Price is a **major factor**
*** Other factors if **not based on price**:
**** **Better quality**
**** **Better design features**
**** **Availability** (no waiting time)
**** **Convenience** of purchase
**** **Advertising & sales promotions**
** **Types of Customers**
*** **Consumers** (buy for personal use)
*** **Industrial & Commercial Customers** (businesses buying for operations)
*** **Government Organisations & Agencies** (e.g., military purchases)
** **Customer Preferences**
*** **Consumers** may pay more for:
**** **Branded products**
**** **Convenience**
*** **Industrial & Commercial Customers**:
**** More influenced by **price**
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

* **4Ps of the Marketing Mix**
** **Product** 
*** Design features & quality
*** Delivery time & reliability
*** After-sales service & warranties
*** Skills of service providers (for services)
** **Price**
*** Selling price
*** Discounts & promotions
*** Attracting different customer segments
left side
** **Place**
*** Distribution channels
**** Shops & supermarkets
**** Specialist suppliers
**** Direct delivery
**** Online stores
** **Promotion**
*** Advertising & sales promotions
*** Direct selling (e.g., telesales)
*** Influence of marketing strategies
@endmindmap

`}
        />




      
 
      </section>

    </div>
  );
};

export default MagneticMindmap;