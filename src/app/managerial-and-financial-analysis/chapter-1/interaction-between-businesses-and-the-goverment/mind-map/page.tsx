import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
      <h1 className="font-bold text-3xl">INTERACTION BETWEEN BUSINESSES AND THE GOVERNMENT
      </h1>

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

* Entrepreneurs & Business People
** Influence in Modern Democracies
*** Not Powerless
**** Can Impact Government Decisions
** Methods of Influence
*** Pressure Groups
**** Influence Policy Decisions
**** Advocate for Business Interests
*** Lobbying
**** Directly Engage with Politicians
**** Financial & Ideological Support
** Political Party Influence
*** Dependence on Business Support
**** Need Votes from Business Owners
**** Economic Contributions
**** Reducing Unemployment
**** Party Funding from Businesses
*** Potential Risks
**** Sector-Biased Decisions
**** Adverse Impact on Other Sectors
** Role of Business Managers
*** Monitor Political Parties
**** Understand Their Business Connections
*** Watch Pressure Groups
**** Identify Their Business Backers
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
* **Ways Businesses Pursue & Protect Interests** 
** Financial Incentive Strategy
*** Economic Leverage
**** Threat to Leave 
***** Influence policymakers by threatening relocation
***** Can be at city, state, or country level
**** Persuasion of Government
***** Use financial power to gain favorable actions
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
* Business Influence on Political Setups
** Promoting a Constituency-Building Strategy
*** Stakeholder Coalitions
**** Mobilizing employees, stockholders, customers, and local communities
**** Organizing programs to influence government officials
*** Advocacy Advertising
**** Advocacy ads focus on political issues, not products/services
**** Ads appear in newspapers, television, and other media
*** Trade Associations
**** Coalitions of businesses in the same or related industries
**** Promote common industry interests
**** Examples:
***** Federation of Pakistani Chambers of Commerce & Industry (FPCCI)
***** Overseas Investors Chambers of Commerce and Industry (OICCI)
***** American Business Council (ABC)
***** All Pakistan Textile Manufacturers Association (APTMA)
***** Pakistan Automotive Manufacturers Association (PAMA)
**** Publish magazines and newsletters for advocacy
*** Industrial Associations and Public Policy Initiatives
**** APTMA’s Political Influence
***** Advocates against electricity load shedding
***** Fights against increased industrial tariffs
**** OICCI’s Political Influence
***** Represents private businesses
***** Channels concerns for business-friendly policies
***** Encourages foreign investment
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
* Managing Political Interests
** Managing the Political Environment - Public Affairs Department
*** Role of Public Affairs Department
**** Manage firm's interactions with government
**** Promote firm’s interests in political process
**** Influence policymaking at all levels
*** Global Trend of Public Affairs Units
**** Common in developed countries
**** Increasingly sophisticated operations
*** Activities of Public Affairs Executives
**** Direct lobbying with federal/state politicians
**** Hosting visits by politicians to company locations
**** Attending political fund-raising activities
@endmindmap


`}
        />
   
     
      </section>

    </div>
  );
};

export default MagneticMindmap;