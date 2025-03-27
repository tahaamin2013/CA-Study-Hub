import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">INFORMATION TECHNOLOGY AND INFORMATION SYSTEMS

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

* INFORMATION TECHNOLOGY AND INFORMATION SYSTEMS
** Information Technology
*** IT Developments
**** New Products (Computers, Mobile Phones)
**** Improved Products (TVs, Domestic Appliances)
**** Communication Enhancements (Email, Mobile Phones)
**** Internet as Major Information Source
**** Internal Databases for Management Information
**** Faster Commercial Transactions
**** E-commerce Transactions via Internet
*** IT as Strategic Support
**** IT as an Opportunity or Threat
**** Internal Adoption Impact
**** No Business Can Ignore IT
left side
** Information Systems (IS)
*** Definition
**** Collection of Equipment for Information Processing
**** Includes Hardware, Software, Networks, Databases
**** Used for Operations, Marketing, Customer Interaction
*** Usage in Business
**** Transaction Processing (e.g., Bookkeeping)
**** Decision-Making & Planning
*** Main Types of Information Systems
**** Transaction Processing Systems
***** Routine Transactions (Sales Order, GL Accounting)
**** Management Information Systems (MIS)
***** Provides Routine Information for Planning & Control
***** Example: Budgeting & Budgetary Control System
**** Decision Support Systems (DSS)
***** Helps Managers with Complex Decisions
***** Includes Forecasting, Statistical Analysis, Scenario Testing
***** Example: Materials Requirements Planning (MRP)
**** Executive Information Systems (EIS)
***** For Senior Executives, Key Data Access
***** Summary & Drill-Down Features
**** Expert Systems
***** Provides Expert-Level Advice (Medical, Law, Taxation)
**** Enterprise Resource Planning (ERP)
***** Company-Wide Integration (HR, Operations, Tech)
***** Competitive Advantage & Strategic Support
*** IS as Strategic Support
**** Quality of Decision-Making & Customer Service
**** Competitive Advantage
**** Supercomputers for Advanced Computational Tasks
**** Business Use: Big Data Analysis, Inventory & Production Management
right side
** Data and Information Systems
*** Importance of IT in Business Decision Making
*** Data vs Information
**** Data: Raw, Unorganized Facts
**** Information: Processed, Meaningful Data
*** Role of Databases
**** Core of Business Information Systems
**** Customer Databases for Various Business Functions
*** Data Warehouse & Data Marts
**** Centralized Data for Decision-Making
**** Faster Analysis than Transaction Processing Systems
**** Used for CRM, Fraud Detection, Product Analysis
** Impact of IT/IS on Organization Structure
*** Information Accessibility via Databases & Intranets
*** Decentralized Decision-Making by Local Managers
*** Centralized Control by Head Office
*** Flattening of Management Hierarchy
*** Virtual Organizations Enabled by IS/IT
@endmindmap`}
        />

        




      </section>

    </div>
  );
};

export default MagneticMindmap;