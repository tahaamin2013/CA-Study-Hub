import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
        <h1 className="font-bold text-3xl">IT CONTROL & EFFECTIVENESS

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

* Threats to System Security
  ** Human Error
    *** Incorrect data entry
    *** Accidental deletion of records/files
    *** Leaving computer terminals unattended
  ** Technical Error
    *** Hardware failure
    *** Software bugs
    *** Communication link failure
  ** Natural Disasters
    *** Hurricanes
    *** Floods
    *** Earthquakes
  ** Sabotage/Criminal Damage
    *** Theft
    *** Malicious damage
    *** Terrorist attack
left side  
** Deliberate Corruption
    *** Viruses
    *** Hacking
    *** Unauthorized alteration/deletion of software/data
  ** Loss of Key Personnel
    *** Departure of senior systems analyst
    *** Loss of specialised knowledge
  ** Exposure to Unauthorised Users
    *** Hackers
    *** Industrial espionage
  ** Software Risks
    *** Bugs causing improper data processing
    *** Lack of sufficient in-built controls

* System Controls
  ** General Controls
    *** Physical security measures
    *** Protection against IT operational risks
    *** System software controls (passwords, encryption, firewalls)
    *** Controls over new program versions
    *** Application of IT standards
  ** Application Controls
    *** Unique to specific IT systems
    *** Embedded controls (data validation checks)

@endmindmap


@startmindmap

* General controls in IT
  ** Physical access controls
    *** Physical controls in an IT environment
      **** Locks on doors to computer rooms
      **** Bars on windows and shatterproof glass
    *** Risk control measures
      **** Locating hardware in safe places
      **** Physical protection for cables
      **** Back-up power generators
      **** Smoke detectors, fire alarms, fire doors
      **** Regular fire drills
      **** Insurance cover against fire and flooding
    *** Risk measures against terrorist attacks
      **** Agreement between companies to share mainframe systems
  ** Passwords
    *** Definition
      **** Sequence of characters required for access
    *** Usage
      **** System and file access
      **** Username and password combinations
    *** Issues
      **** Sharing passwords
      **** Predictable passwords
      **** Written down passwords
      **** Infrequent password changes
    *** Control measures
      **** Regular password changes
      **** Enforcing strong password policies
      **** Developing security culture
  ** Encryption
    *** Purpose
      **** Coding data to prevent unauthorized access
    *** How it works
      **** Encryption key for encoding
      **** Decryption key for decoding
    *** Usage
      **** Network communication security
      **** Protecting bank details and transactions
  ** Preventing or detecting hackers
    *** Measures
      **** Physical security
      **** Password protection
      **** Data encryption
      **** Audit trails
      **** Network logs
      **** Firewalls
left side  
** Firewalls
    *** Definition
      **** Software or hardware preventing unauthorized access
    *** Functions
      **** Blocking suspicious messages
      **** Notifying users of blocked messages
    *** Importance
      **** High risk of unauthorized access
      **** Regular system tests required
    *** Availability
      **** Purchased, pre-installed, or free downloads
    *** Necessity
      **** Continuous exposure to threats
      **** Large volume of malicious messages
  ** Computer viruses
    *** Definition
      **** Malicious software designed to corrupt systems
    *** Sources
      **** Email attachments
      **** Storage devices (CDs, floppy disks)
    *** Effects
      **** Corruption or destruction of data and software
    *** Prevention measures
      **** Installing and updating anti-virus software
      **** Restricting use of removable media
      **** Using firewalls
      **** Deleting suspicious emails
      **** Reporting virus suspicions immediately
    *** Response to infection
      **** System shutdown until virus is removed
  ** IT Standards
    *** Purpose
      **** Reducing IT system weaknesses and processing errors
    *** Examples
      **** International Standards Organisation (ISO) IT security standards
      **** Development and testing standards for IT systems

@endmindmap

@startmindmap
* Application Controls in IT
** Definition
*** Controls designed for a specific IT system
** Example: Data Validation
*** Definition
**** Checks on specific items of data input to test logical correctness
**** If data appears incorrect, system does not process it
**** Issues a data validation report for checking and correction
*** Examples
**** Sales Invoice Transaction
***** Must include an amount for sales value/amount owed
***** Missing value triggers an error report
**** Purchase Transaction
***** Must include a supplier code
***** If valid codes are in the range 2000-3999, an out-of-range code triggers an error
**** Key Code Numbers
***** Can include a check digit
***** Helps detect input errors (e.g., swapping digits in a customer account code)
** Purpose
*** Unique to a particular IT system
*** Prevents errors from entering the system
*** Reports errors for correction
@endmindmap

@startmindmap
* Monitoring of Controls
** Importance of Monitoring
*** Routine review and monitoring by management
*** Ensuring controls remain adequate, effective, and appropriately applied
** IT Controls Audit
*** Internal Audit Team
**** Responsible for testing and assessing internal controls
**** Includes IT controls assessment
**** Might employ IT auditors specializing in specific IT systems
*** External Audit / Outsourcing
**** IT control audit might be outsourced to independent auditors
**** Could involve company’s current external auditors
*** Cyclical Auditing
**** Different parts of the system assessed in cycles
**** Example:
***** First half of the year: Sales and receivables modules
***** Second half of the year: Purchases and inventory modules
left side
** Exception Reporting
*** IT control systems must include exception reporting
*** Alerts management to control failures
*** Frequency of reporting:
**** Periodic (e.g., daily / weekly / monthly)
**** Real-time basis
** Effectiveness of IT Control Monitoring
*** Dependent on management action to address control failures
*** Exception reporting is ineffective if:
**** Management fails to review reports
**** Management fails to act on recommendations
*** Internal & External Auditors
**** Reports and recommendations must be acted upon
*** Legal Duty of Directors
**** Safeguard company’s assets on behalf of shareholders
**** Responsible for implementing, maintaining, and monitoring internal controls
**** Includes IT controls
@endmindmap
`}
        />

        




      </section>

    </div>
  );
};

export default MagneticMindmap;