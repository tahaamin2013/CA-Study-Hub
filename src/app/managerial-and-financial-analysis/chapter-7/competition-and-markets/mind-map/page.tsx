import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Competition and Markets

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
* Customers and Markets
** Market Definition
*** By Products or Services
**** Fashion Clothes Market
**** Banking Market
**** Air Travel Market
*** By Customers
**** Consumer Market
**** Youth Market
*** By Geographical Area
**** North American Market
**** European Market
** Market Scope
*** Global Markets
*** Localised Markets
** Business Strategy
*** Selling Goods or Services Successfully
*** Targeted Markets
*** Product-Market Strategies
** Public Services Market
*** Education Services
**** Customers: Pupils or Parents
*** Healthcare Services
**** Customers: Patients

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
* Industries and Sectors
** Industry
*** Suppliers produce similar goods and services
**** Aerospace
**** Automobile Manufacturing
**** Construction
**** Travel
**** Leisure
**** Insurance
** Industry Segments
*** Separately-identifiable parts of a larger industry
**** Automobile Industry
***** Assembly of Automobiles
***** Manufacture of Parts
**** Insurance Industry
***** General Insurance
***** Life Assurance
***** Pensions
** Strategic Decisions
*** Industry and Industrial Segment to operate in
*** Markets to sell goods or services in
** Distinction: Products vs. Markets
*** Different industries selling to the same market
**** Small building companies vs. Retailers of DIY tools
**** Laundry services vs. Domestic washing machine manufacturers
*** Same industry, different markets
**** Ferry services: UK-France vs. Greek Islands
left side
** Strategic Position Analysis
*** Recognize industries and segments operated in
*** Identify markets sold to
*** Recognize changing conditions in industries, segments, and markets
*** Determine future product-market strategies
** Generic Types of Industry (Porter)
*** Fragmented Industries
**** Small firms selling to small portions of total market
**** Examples: Dry Cleaning, Hairdressing, Shoe Repairs
*** Emerging Industries
**** Recently developed, expected to grow
**** Examples: Space Travel, Telecommunications in Africa
*** Mature Industries
**** Products have reached maturity in their life cycle
**** Examples: Automobile Manufacture, Soft Drinks
*** Declining Industries
**** Falling sales and fewer competitors
**** Example: Coal Mining in Europe
*** Global Industries
**** Operate on a global scale
**** Examples: Microprocessor Industry, Professional Football Industry
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
* Convergence
** Definition
*** Two or more industries/segments merge into one
*** Serve the same customer markets
*** Major impact on business strategy
Left side
** Example: Communications Services
*** Past Separate Industries
**** Television Broadcasters
***** Example: BBC, ITV
***** Delivered terrestrial TV services
**** Telephone Service Companies
***** Delivered voice communications
***** Used telephone network
**** Data Communications
***** Provided through internet service providers
**** Mobile Telephone Industry
*** Current Convergence
**** Merging into a single industry
**** Serving the same customers
**** Voice, data, and entertainment over the same network
**** Services accessible via mobile and household devices
*** Strategic Changes
**** Continuous technological development
***** High-quality TV over the internet
***** Unified delivery of voice, data, and entertainment
**** Emerging Products & Markets
***** On-demand TV
***** Video conferencing
***** Narrowcasting (targeted programs)
***** Direct advertising impact
**** Winners and Losers
***** Companies with successful strategic management survive
right side
** Types of Convergence
*** Demand-led Convergence
**** Driven by customer needs
**** Customers view products as interchangeable or complementary
*** Supply-led Convergence
**** Driven by supplier innovation
**** Suppliers see links between industries
**** Entertainment, voice, and data convergence driven by suppliers
@endmindmap

`}
        />

      </section>

    </div>
  );
};

export default MagneticMindmap;