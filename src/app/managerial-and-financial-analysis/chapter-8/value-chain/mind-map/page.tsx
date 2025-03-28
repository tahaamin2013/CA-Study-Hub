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
* **Definition of Value**
** **1. Meaning of Value**
*** Benefit that a customer obtains from a product or service
*** Value is determined by the price a customer is willing to pay
** **2. Creating Added Value**
*** Businesses create added value by transforming raw materials into finished products
*** Example:
**** Buying leather for Rs. 1,000
**** Producing leather jackets and selling for Rs. 10,000
**** Added value = Rs. 9,000
** **3. Competitive Advantage & Value Creation**
*** **Porter's Strategies:**
**** *Cost Leadership*: Create the same value as competitors, but at a lower cost
**** *Differentiation*: Create more value than competitors
** **4. Customer Perceived Value**
*** Customers pay more if they see additional value
*** **Types of Extra Value:**
**** *Real or Perceived Value*: Branding can influence perception of quality
**** *Quality & Design Features*: Better materials, durability, or innovation
**** *Marketing Factors*: Advertising, availability, and convenience
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

* **Porter's Value Chain Framework**
** **Definition**
*** A series of activities adding value to a product or service
*** Helps analyze competitive advantage
** **Types of Activities**
*** **Primary Activities**
**** Directly related to production, sales, and distribution
**** **Inbound Logistics** – Receiving, storing, and managing raw materials
**** **Operations** – Transforming inputs into final products/services
**** **Outbound Logistics** – Delivering products to customers
**** **Marketing & Sales** – Promoting and selling products
**** **Service** – After-sales support, customer service
*** **Support Activities**
**** Indirectly support primary activities
**** **Firm Infrastructure** – Management, finance, planning
**** **Human Resource Management** – Recruiting, training, retaining employees
**** **Technology Development** – R&D, process automation, IT systems
**** **Procurement** – Acquiring raw materials, equipment, and supplies
** **Strategic Importance**
*** Competitive advantage comes from optimizing these activities
*** Each activity must add value efficiently
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

* **Primary Value Chain (Porter’s Model)**
** **Inbound Logistics**
*** Receiving & handling raw materials
*** Transport from suppliers
*** Inventory management & control
** **Operations**
*** Transforming inputs into final products/services
*** Includes machining, assembly, packaging, and testing
*** Equipment maintenance and quality control
left side
** **Outbound Logistics**
*** Storage of finished goods
*** Distribution & delivery to customers
*** Logistics coordination for timely delivery
** **Marketing & Sales**
*** Identifying customer needs
*** Managing the 4Ps of the marketing mix
*** Selling and order fulfillment
** **Service**
*** Installation and setup
*** Maintenance and repair
*** Customer support and after-sales services
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
* **Secondary Value Chain (Support Activities)**
** **Procurement**
*** Purchasing materials, equipment & assets
*** Negotiating with suppliers for better deals
*** Cost-effective sourcing strategies
** **Technology Development**
*** Research & development (R&D)
*** Innovation in product design
*** IT systems & process improvements
left side
** **Human Resources Management**
*** Recruiting & hiring skilled employees
*** Employee training & development
*** Performance management & rewards
** **Corporate Infrastructure**
*** Organizational structure & planning
*** Financial management & budgeting
*** Quality management & decision support
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

* **Methods of Adding Value**
** **Product Design & Features**
*** Enhancing product quality & functionality
*** Customization for specific market segments
*** Innovation & new features
** **Ease of Purchase**
*** Online purchasing platforms (e.g., e-commerce websites)
*** Convenient retail locations (e.g., airport bookstores)
*** Multiple payment & financing options
** **Brand Promotion**
*** Strong brand identity & reputation
*** Emotional appeal & customer loyalty
*** Perceived premium quality

left side

** **Speed of Delivery**
*** Faster service than competitors
*** Priority & express shipping options
*** Shorter lead time for orders

** **Reliable Service**
*** Consistency in quality & performance
*** Meeting deadlines & on-time delivery
*** Strong customer support & after-sales service
** **Convenient Logistics**
*** Home delivery services
*** Subscription-based replenishment (e.g., groceries, essentials)
*** Automated & efficient supply chain management
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

* **Value Creation & Strategic Management**
** **Improving Profitability**
*** Lowering costs (efficient operations)
*** Increasing sales (better product/service)
*** Reinvesting in future growth
** **Customer Benefits**
*** Better product quality
*** Lower selling price
*** Enhanced customer experience
** **Corporate Strategy**
*** Focus on competitive advantage
*** Adding value for customers
*** Strengthening brand reputation
left side
** **Financial Strategy**
*** Maximizing shareholder value
*** Profit reinvestment decisions
*** Sustainable business growth
** **Investment Strategy**
*** Ensuring long-term value creation
*** Expanding into new markets
*** Funding innovation & technology
@endmindmap

@startmindmap
* **Value Creation & Strategic Management**
** **Improving Profitability**
*** Lowering costs (efficient operations)
*** Increasing sales (better product/service)
*** Reinvesting in future growth
** **Customer Benefits**
*** Better product quality
*** Lower selling price
*** Enhanced customer experience
** **Corporate Strategy**
*** Focus on competitive advantage
*** Adding value for customers
*** Strengthening brand reputation
*** **Provide Earnings & Dividends**
**** Shareholder returns
**** Reinvestment for expansion
left side
** **Financial Strategy**
*** Maximizing shareholder value
*** Profit reinvestment decisions
*** Sustainable business growth
*** **Provide Finance**
**** Funding for strategic projects
**** Supporting R&D and operations
** **Investment Strategy**
*** Ensuring long-term value creation
*** Expanding into new markets
*** Funding innovation & technology
*** **Provide Resources**
**** Skilled workforce
**** Advanced technology
**** Efficient infrastructure
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
* **Value Chain Analysis**
** **Objective of Value Creation**
*** Add value better than competitors
*** Create long-term value for shareholders
** **Strategic Assessment Using Value Chain**
*** Assess performance at each part of the value chain
**** Primary Value Chain
**** Secondary Value Chain (Support Activities)
** **Primary Value Chain Questions**
*** How is value added by this part of the value chain?
*** Has the entity been successful in adding value here?
*** Has the entity outperformed competitors in this part?
*** Has there been a failure in adding value?
*** Does the entity have the core competencies here?
**** **Outsourcing Decision**
***** Consider outsourcing if competencies are lacking
** **Secondary Value Chain Questions**
*** How do support activities add value?
*** Do support activities align with primary value chain to add value?
*** Are there any improvements or innovations possible in support activities?
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
* **TCH Primary Value Chain Activities**
** **Inbound Logistics**
*** Procurement of the finest quality coffee beans
*** Developing and maintaining strategic relationships with suppliers
*** Safe transportation of beans from suppliers to coffeehouses and licensed stores
*** Adequate storage of beans to ensure quality remains intact
** **Operations**
*** Roasting of coffee to bring out deep and intense flavors
*** Frequent testing to ensure consistency in quality
*** Packaging of gourmet blends for online orders
*** Adequate maintenance of coffee equipment (coffee brewers, milk frothers, etc.)
left side
** **Outbound Logistics**
*** Sale of coffee through TCH’s own coffeehouses and licensed stores
*** Delivery of packaged coffee to online customers
** **Marketing and Sales**
*** Marketing through various mediums (print, electronic, and social media)
*** Word of mouth through high-quality coffee and excellent customer service
*** Participation in food festivals and related events
** **Service**
*** Ensuring top-tier service at all coffeehouses
*** Offering complimentary coffee or refunds for unsatisfied customers
*** Encouraging feedback from customers and addressing any concerns
@endmindmap




`}
        />
     
      
 
      </section>

    </div>
  );
};

export default MagneticMindmap;