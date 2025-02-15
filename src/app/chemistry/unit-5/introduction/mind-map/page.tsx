import React from 'react'
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const page = () => {
  return (
    <div>
        <h1 className='text-2xl ml-5 mt-6 font-bold'>Introduction of Chemical Bonding</h1>
              <PlantUMLDiagram
                    code={`@startmindmap
    <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* Universe Matter Composition
** Compounds and Mixtures
*** Human Bodies
*** Animal Bodies
*** Plant Bodies
*** Rocks
*** Soil
*** Petroleum
*** Coal
** In compounds different kinds of atom are bounded together. 
** Elements with Unbonded Atoms
*** Noble Gases
**** Helium
**** Neon
**** Argon
**** Xenon
**** Krypton

left side

** Chemical Bonding
*** Effects on Properties
**** Hardness
**** Toughness
**** Softness
**** Flexibility

*** Applications
**** Resins
***** Paint for Infrastructure
****** Dams
****** Bridges
****** Buildings
****** Automobiles
***** Adhesive Properties

**** Adhesives
***** Glue
***** Binding Mechanisms
***** Surface Linkages

*** Molecular Structure
**** Determines Material Behavior
**** Influences Bond Types
**** Affects Physical Properties
@endmindmap
`}
                />
    </div>
  )
}

export default page
