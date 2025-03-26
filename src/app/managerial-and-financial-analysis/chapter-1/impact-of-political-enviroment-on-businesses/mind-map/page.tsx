import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="font-bold text-3xl">IMPACT OF POLITICAL ENVIRONMENT ON BUSINESSES
        </h1>
        <PlantUMLDiagram
          code={`
            @startmindmap
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

* Root [#3498DB]
** Political Decisions and Business Implications [#F1C40F]
*** Economic and Business Impact [#2ECC71]
**** Industrial Policy [#E74C3C]
**** Policy towards Foreign Capital and Technology [#E74C3C]
**** Fiscal Policy [#E74C3C]
**** Foreign Trade Policy [#E74C3C]
*** Ideologies of Political Parties [#2ECC71]
**** Communists and Leftists [#E74C3C]
***** Favor State Control [#C0392B]
***** Oppose Private Capital [#C0392B]
***** Against Foreign Investment [#C0392B]
***** Oppose International Control Over Local Business [#C0392B]
**** USA and Capitalism [#E74C3C]
***** Encourages Private Ownership [#C0392B]
***** Supports Foreign Investment [#C0392B]
***** Advocates Free Market Policies [#C0392B]
*** Business Managers' Considerations [#2ECC71]
**** Understanding Political Ideologies [#E74C3C]
**** Analyzing Past Approaches of Key Parties [#E74C3C]
**** Predicting Future Policies [#E74C3C]
** Government Goals [#F1C40F]
*** Economic Prosperity [#2ECC71]
*** Political Stability [#2ECC71]
@endmindmap

`}
        />

<PlantUMLDiagram
          code={`
            @startmindmap
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

* **Political Factors Affecting Business** #3498DB;line:#2980B9;white
** Government Spending #F1C40F;line:#F39C12;black
*** Left-Wing Policies #2ECC71;line:#27AE60;white
**** Public Services #E74C3C;line:#C0392B;white
***** Free Healthcare
***** Education for All
***** Social Welfare
**** Infrastructure Development
**** State-Owned Enterprises
*** Right-Wing Policies #2ECC71;line:#27AE60;white
**** Defense & Security #E74C3C;line:#C0392B;white
***** Military Spending
***** International Alliances
***** Expansion of Influence (Neo-Imperialism)
**** Economic Policies #E74C3C;line:#C0392B;white
***** Privatization
***** Business Deregulation
***** Lower Taxes for Corporations
@endmindmap


`}
        />

<PlantUMLDiagram
          code={`
            @startmindmap
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
* Political Factors Affecting Business
** Taxation
*** Mechanism for state earnings and resource building
*** Political ideologies influence tax policies
**** Reduce income of individuals and companies
**** Provide resources for public expenditures
**** Exercise control over private sector investment
**** Improve business competitive position
*** Examples of tax policies
**** US Republican Party & UK Conservative Party favor tax cuts
*** Importance of proper tax collection
**** Direct taxes based on income and wealth
**** Failure to broaden tax net leads to indirect taxes
**** Pakistan's struggle with tax net expansion
@endmindmap

`}
        />
        <PlantUMLDiagram
          code={`
            @startmindmap
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
* Political Factors Affecting Business
** Economic Policies
*** Different policies based on political ideologies
*** Impact on various sectors
**** Pro-agriculture policies may neglect other sectors
**** Non-agriculture-focused policies may harm agriculture
@endmindmap

`}
        />
                <PlantUMLDiagram
          code={`
            @startmindmap
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
* Political Factors Affecting Business #3498DB;line:#2980B9;fontcolor:white
** Labor Laws #F1C40F;line:#F39C12;fontcolor:black
*** Minimum Wages #2ECC71;line:#27AE60;fontcolor:white
*** Insurance Requirements #2ECC71;line:#27AE60;fontcolor:white
*** Labor-related Taxes #2ECC71;line:#27AE60;fontcolor:white
*** Employment Regulations #2ECC71;line:#27AE60;fontcolor:white
*** Impact on Small Businesses #2ECC71;line:#27AE60;fontcolor:white
**** Increased Expenses #E74C3C;line:#C0392B;fontcolor:white
**** Over Regulation #E74C3C;line:#C0392B;fontcolor:white
**** Ease of Doing Business #E74C3C;line:#C0392B;fontcolor:white
*** International Labor Regulations #2ECC71;line:#27AE60;fontcolor:white
**** Trade Restrictions #E74C3C;line:#C0392B;fontcolor:white
**** Child Labor Laws #E74C3C;line:#C0392B;fontcolor:white
**** Labor Health & Safety Policies #E74C3C;line:#C0392B;fontcolor:white
**** Western Import Regulations #E74C3C;line:#C0392B;fontcolor:white
***** Regular Inspections #E74C3C;line:#C0392B;fontcolor:white
***** Certifications #E74C3C;line:#C0392B;fontcolor:white
@endmindmap

`}
        />


<PlantUMLDiagram
          code={`
            @startmindmap
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

@startmindmap
* Political Factors Affecting Business
** International Relationship and Policies
*** Importance of International Relations
**** Supports foreign investments → business sustainability
**** Protectionist policies → different impacts
*** Globalization
**** Small businesses involved in global supply chains
** Example: Effects of a Socialist Regime on Business & Economy
*** Case Study: Z. A. Bhutto's Nationalization Policy (1971-77)
**** Phase 1: Nationalization of basic industries
**** Phase 2: State control over banks & insurance companies
**** Phase 3: Nationalization of rice-husking units
**** Justification: Economic disparity during Ayub Khan's era (1958-69)
*** Economic Impact
**** Slowed economic growth (1960s: 6.8% → 1970s: 4.8%)
**** Economic inefficiency and misallocation of resources
**** Nationalized units suffered losses (non-market-based decisions)
*** Counterarguments
**** Distributional objectives: Reducing economic disparities
**** 1960s rapid growth concentrated resources in few hands
** Modern Implications
*** All-out nationalization unlikely in the future
*** Possibility of government intervention under similar political ideologies
@endmindmap




`}
        />

     
      </section>

    </div>
  );
};

export default MagneticMindmap;