import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Economic Indicator</h1>
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
* **Economic Indicator**
** **Definition**
*** Macroeconomic data used to evaluate a country's economy
** **Types of Economic Indicators**
*** **Leading Economic Indicators**
**** Forecasts future economic stages (peak/trough in 3-12 months)
**** **Examples**
***** Stock market index
***** Index of business confidence
***** Manufacturers’ new orders
***** New building permits for private housing
***** The money supply
*** **Coincident Economic Indicators**
**** Occur at the same time as a peak or trough
**** Used by governments to assess current economic stage
**** **Examples**
***** Gross Domestic Product (GDP)
***** Number of people in employment
***** Industrial production
***** Personal incomes
***** Manufacturing and trade sales
*** **Lagging Economic Indicators**
**** Confirm peak/trough 3-12 months after it occurs
**** **Examples**
***** Consumer Price Index (inflation level)
***** Unemployment
***** Interest rates
***** Average income
***** Balance of Trade
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
* **The Economic Cycle**
** **Definition**
*** Describes national income changes yearly
*** **Growth**: National income increases
*** **Recession**: National income decreases
**** **Extreme case**: Economic decline
** **Stages of Economic Cycle**
*** **Economic Growth**
**** Lasts several years
**** National income rises each year
*** **Economic Recession**
**** Lasts several years
**** National income falls yearly
** **Government Policy**
*** **Primary Goal**: Achieve continuous growth
*** **During Recession**
**** Make it short & minor
** **Impact on Business Strategy**
*** Businesses must align strategy with cycle stage
*** **During Depression**
**** Risky to launch new products
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

* **Stock Market Index**
** **Definition**
*** Measures stock market performance
*** Considered a **leading economic indicator**
*** Reflects investor confidence in the capital market
*** Higher index values indicate positive business prospects
** **Market Capitalization**
*** Represents market value of publicly traded companies
*** **Formula**: Share Price × Number of Outstanding Shares
*** Measures company worth and investor perception
*** Used for market comparison and investment analysis
** **Types of Market Capitalization**
*** **Free-Float**
**** Readily available shares for trading on Stock Exchange
**** Excludes locked-in shares (held by government, promoters, etc.)
*** **Full-Cap**
**** Includes all shares issued by a company
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
* **Stock Exchange Indices**
** **Definition**
*** Leading indicators grouping companies by category, sector, or performance
*** Calculated through market capitalization
** **Key Indices in Pakistan Stock Exchange (PSX)**
*** **KSE-100 Index**
**** Most recognized index in PSX
**** Includes largest companies based on market capitalization
**** Represents 85% of PSX market capitalization
**** Calculated using **Free Float Market Capitalization** methodology
**** Base value: **1000 (November 1991)**
*** **All Share Index**
**** Consists of all listed companies on PSX
**** Based on **Full Cap** methodology
** **Stock Exchange Indices & Business Decisions**
*** **Impact on Companies**
**** Share price fluctuations affect market capitalization & value
**** Stock performance influences decisions on share issuance
**** Higher stock value encourages raising capital via new shares
*** **Market Value & Business Strategy**
**** Important for **mergers & acquisitions**
**** Companies hold shares as cash equivalents
**** Falling stock values can cause **funding issues**
**** Rising stock values may **attract investors** and create interest in new products/businesses
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
* **Inflation**
** **Definition**
*** Increase in price levels over time
*** Measured using price or cost indices (e.g., CPI, RPI, Index of Wages Costs)
** **Impact on Businesses & Individuals**
*** Businesses pay more for materials & labor
*** Companies raise prices to pass on extra costs
*** Individuals face higher prices for goods & services
*** Employees demand higher wages & salaries
*** Leads to **Inflationary Spiral** (continuous increase in prices & wages)
** **Inflationary Expectations**
*** Future inflation expectations affect:
**** Wage rise demands
**** Business pricing decisions
** **Implications for National Economy**
*** National income increases due to:
**** **Real economic growth** (increase in goods & services production)
**** **Price inflation** (higher costs & prices)
*** National income may rise while real economy is in **recession**
**** Example: 3% income growth vs. 5% inflation → **2% real decline**
*** High inflation & expectations can cause:
**** Economic stagnation or recession
**** Incentives for producers to **increase output & profits**
**** Some inflation is considered necessary for **economic growth**
*** Governments aim to **control inflation** while allowing real growth
** **Implications of Inflation**
*** **Shift of Economic Wealth**
**** Borrowers benefit (real debt value falls)
**** Savers & lenders lose (real value of loans & savings decreases)
**** Fixed-income households suffer (e.g., pensioners)
**** Income inequality may rise (rich get richer, poor get poorer)
** **Inflation in Pakistan (2020-21)**
*** CPI inflation: **9.7% (June 2021)** vs. **8.6% (June 2020)**
*** Peak inflation: **11.1% (April 2021)**
*** Inflation remained high throughout **FY 2020-21**
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
* **Interest Rates**
** **Definition**
*** Cost of using money
*** Charged by lenders on borrowed sums
*** Paid by banks on deposited amounts
*** Expressed as **annual percentage rates**
** **Regulated Interest Rate**
*** Set by **monetary authorities** (e.g., State Bank of Pakistan)
*** Determines market interest rates for deposits & loans
*** **KIBOR**: Karachi Interbank Offered Rate (daily reference rate for interbank lending)
** **Increase in Interest Rates**
*** **Effects on Investment**
**** Discourages investment (harder to earn returns)
**** Encourages saving (more funds available for future investments)
*** **Effects on Consumption**
**** Encourages saving → **reduces consumption**
**** Lower disposable income (higher loan & mortgage costs)
**** Borrowing becomes expensive → **less spending**
*** **Sectoral Impact**
**** **Banking Sector**: Higher interest rates → more profit from deposits
**** **Textile Sector**:
***** Higher business costs → **less competitive exports**
***** Reduced demand → possible layoffs → **unemployment rise**
***** Increased financing costs → **hinders expansion & technology upgrades**
***** Higher mark-up rates → **loan defaults**
** **Decrease in Interest Rates**
*** **Effects on Investment**
**** Encourages investment (easier to earn returns)
**** Discourages saving → **less available funds for future investments**
*** **Effects on Consumption**
**** Lower savings → **higher consumption**
**** More disposable income (lower loan & mortgage costs)
**** Borrowing becomes cheaper → **spending increases**
*** **Sectoral Impact**
**** Lower import costs → **greater capital investment**
**** Job creation & tech advancements → **economic growth**
** **Interest Rates in Pakistan (2020-21)**
*** **Policy rate: 7% (Q3 2021)**
*** Decision to maintain rate for economic recovery (COVID-19 impact)
*** Increase in **fixed investment loans & consumer financing** (especially auto-financing) due to low interest rates
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
* **Unemployment**
** **Definition**
*** People willing to work but unable to find jobs
*** Businesses could hire but choose not to
*** Often rises during **economic recession**
** **Impact of Unemployment**
*** **Economic Impact**
**** Individuals unable to earn income → **lower living standards**
**** Reduces **economic growth potential**
**** Can lead to a **shortage of skilled labor** in certain industries
*** **Ways to Address Skilled Labor Shortage**
**** Better standards of **education**
**** Increased **training programs**
**** Relocating jobs to **countries with more skilled workers**
** **Unemployment & Business Decisions**
*** High unemployment → **less household income** → lower consumer spending
*** Shift in demand towards **cheaper alternatives**
**** Higher sales of **supermarket own-brands**
**** Preference for **locally produced goods** over imports
*** **Businesses hiring during high unemployment benefit from:**
**** A larger available workforce
**** Ability to offer **lower salaries**
** **Fiscal Policy**
*** **Definition**: Government policies on **taxation, spending, and borrowing**
*** **Main Objective**: Reduce **unemployment & poverty** while sustaining **economic growth**
*** **Government Spending Includes:**
**** Wages for **government employees**
**** Development projects
**** Health & education
**** Defense & infrastructure
*** **Encouraging Private Sector Investment**
**** Offering **tax incentives** or **subsidies**
**** Encouraging investment in **transport, schools, hospitals, etc.**
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
* **Balance of Payments (BOP)**
** **Definition**
*** Measures financial transactions between a country and the rest of the world
*** Calculated by summing **exports** and **imports**
** **Components of BOP**
*** **Current Account**
**** Records trade in **goods and services**
*** **Capital Account**
**** Records **financial transactions** (investments, loans, etc.)
*** **Official Financing Account**
**** Records government and central bank financial transactions
** **Balance Equation**
*** Surplus/Deficit on Trade in Goods & Services = **Net Capital Inflow/Outflow**
*** Example:
**** **$10B trade surplus** → $10B transferred as capital flows to other countries
**** **$25B trade deficit** → $25B received in capital inflows
** **Importance of BOP**
*** **For Businesses:**
**** Helps assess **market potential**
**** Affects **import and export strategies**
**** High trade deficit → **Government may impose tariffs & quotas**
*** **For Government & Policymakers:**
**** Used for **economic planning & trade policies**
**** Helps set **monetary & fiscal policies**
** **Impact on Businesses**
*** **Trade Deficit → Potential Restrictions**
**** **Tariffs & Quotas** increase costs for businesses relying on imports
**** **Higher prices for imported raw materials** impact pricing & inventory
*** **Trade Surplus → Export Promotion**
**** Government encourages **export-driven industries** (e.g., textiles)
**** Limits import of **luxury goods** (e.g., chocolates, packaged foods)
**** Provides incentives for **local manufacturing** (e.g., automobiles)
**** Protectionist policies may include **import tariffs** to support local industries
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
* **Gross Domestic Product (GDP)**
** **Definition**
*** Monetary measure of the market value of all final goods & services produced within a country in a specific time period
*** Can be expressed as **GDP per capita** (GDP per person) for comparisons
** **Formula**
*** GDP = C + I + G + (X - M)
**** **C:** Consumption
**** **I:** Investment
**** **G:** Government Spending
**** **X:** Exports
**** **M:** Imports
** **Sectors Contributing to GDP**
*** **Primary Sector** (Agriculture, Mining, etc.)
*** **Secondary Sector** (Manufacturing, Construction)
*** **Tertiary Sector** (Services)
** **Types of GDP**
*** **Nominal GDP**
**** Calculated at **current prices** (includes inflation)
**** Usually **higher** than real GDP
*** **Real GDP**
**** Adjusted for **inflation** (base-year prices)
**** More **accurate** for economic growth analysis
** **GDP & Economic Growth**
*** Higher GDP → **Stronger Economy**
*** GDP per capita → **Indicator of Standard of Living**
*** Does **not** include products/services produced **outside the country**
** **Pakistan’s GDP (SBP Report)**
*** GDP Growth Rate (FY21) → **3.9%**
*** Previous Year (FY20) → **-0.5% (Contraction)**
*** Recovery Driven by:
**** **Large Scale Manufacturing (LSM)**
**** **Services Sector** (Wholesale & Retail Trade)
**** **Agriculture** (Wheat, Rice, Maize, Sugarcane increased, Cotton declined)
@endmindmap

`}
        />
   
      </section>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Changes in Economic Indicators and Some Common Business Responses
        </h1>

        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="p-3 border border-gray-300">Change</th>
                        <th className="p-3 border border-gray-300">Consumers</th>
                        <th className="p-3 border border-gray-300">Businesses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="p-3 border border-gray-300">Higher Unemployment Rate</td>
                        <td className="p-3 border border-gray-300">May spend less, as fewer people are earning</td>
                        <td className="p-3 border border-gray-300">May lower prices in order to encourage people to buy</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-200">
                        <td className="p-3 border border-gray-300">Lower Unemployment Rate</td>
                        <td className="p-3 border border-gray-300">May increase their spending, as more people are in work</td>
                        <td className="p-3 border border-gray-300">May increase prices as demand increases</td>
                    </tr>
                    <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="p-3 border border-gray-300">Increased Interest Rates</td>
                        <td className="p-3 border border-gray-300">May spend less, as they are encouraged to save</td>
                        <td className="p-3 border border-gray-300">May reduce products’ sizes but leave the price unchanged (&apos;shrinkflation&apos;)</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-200">
                        <td className="p-3 border border-gray-300">Decreased Interest Rates</td>
                        <td className="p-3 border border-gray-300">May spend more, as there is less incentive to save</td>
                        <td className="p-3 border border-gray-300">May launch bigger versions of products to charge higher prices</td>
                    </tr>
                    <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="p-3 border border-gray-300">Decreased Value of Pound Sterling</td>
                        <td className="p-3 border border-gray-300">May spend more on imported goods, as they are relatively cheap</td>
                        <td className="p-3 border border-gray-300">May target new domestic markets for their products to attract new customers</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-200">
                        <td className="p-3 border border-gray-300">Increased Value of Pound Sterling</td>
                        <td className="p-3 border border-gray-300">May spend less on imported goods, as they are relatively more expensive</td>
                        <td className="p-3 border border-gray-300">May target new international markets for their products as exports are cheaper</td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Economic Enviroment</h1>
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
* **Economic Environment**
** **Definition**
*** External factors and broader economic trends impacting businesses
** **Types of Economic Environment**
*** **Microeconomic Environment**
**** Relates to consumer behavior
**** Affected by market environment
**** Influenced by market competition
**** Driven by demand and supply forces
*** **Macroeconomic Environment**
**** Broad economic factors affecting the entire economy
**** Impacts all economic participants, including businesses
**** Analyzed using economic indicators
@endmindmap

`}
        />

     
      </section>

    </div>

    </div>
  );
};

export default MagneticMindmap;