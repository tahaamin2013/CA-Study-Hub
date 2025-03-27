import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">THE IMPACT OF TECHNOLOGICAL CHANGE ON WORKING METHODS
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

* THE IMPACT OF TECHNOLOGICAL CHANGE ON WORKING METHODS
** Machines replacing humans
*** Replacing mechanical tasks
*** New machines replacing old machines frequently
*** Computers replacing humans for mental tasks
*** Higher-level intellectual tasks still performed by humans
*** Computers taking over high-level analytical tasks

** The impact on products and services
*** Technology affects the nature of products/services
*** Businesses must update technology to stay competitive
*** Example: Nokia failed due to outdated technology
*** Example: Sony and Toshiba competing in flat-screen TV technology
*** Technology shift: Manual buttons → Remote → Touch screens
left side
** The impact on organization structure and strategy
*** Effects on business organization and strategy
**** Downsizing
***** Reducing business size but not necessarily output
***** Machines replace human-performed tasks
**** De-layering
***** Removing middle management levels
***** Relies on high-quality communication and delegation
***** Leads to redundancy and downsizing
**** Outsourcing
***** External firms handle administrative/management tasks
****** Payroll management
****** Cleaning and security services
****** Outsourced component manufacturing
****** IT services outsourcing
****** Office administration outsourcing
***** Conceptual argument for outsourcing
****** Focus on core competencies
****** Non-core tasks distract from competitive advantage
***** High-quality telecommunications and IT facilitate outsourcing
***** Example: Cloud-based ERP solutions replacing native servers
**** Restructuring
***** Vertical and horizontal restructuring
***** Merging sections, departments based on technology
***** Centralized decision-making due to real-time online data
***** Decentralization to improve decision-making speed
right side
** Other technological tools affecting work methods
*** Virtual Company
**** Business outsources most activities
**** Managed by a small core team
**** Individuals work remotely via IT networks
**** No physical office, minimal assets, few full-time employees
**** Enabled by IT advancements
*** Online Social Media
**** Digital identities replace physical interactions
**** Traditional marketing and businesses affected
*** Big Data
**** Analyzing large data sets computationally
**** Identifying trends, patterns, preferences
**** Data-driven business decision-making
*** Artificial Intelligence
**** AI transforming business processes
**** Examples:
***** AI-powered online customer assistance
***** AI solving frequently occurring problems
***** AI handling routine decision-making
@endmindmap



`}
        />

        




      </section>

    </div>
  );
};

export default MagneticMindmap;