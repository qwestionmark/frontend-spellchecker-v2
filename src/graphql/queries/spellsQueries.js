import { gql } from "@apollo/client";

export default gql`
  {
    spells {
      name
      desc
      range
      components
      material
      ritual
      duration
      castingTime
      level
      attackType
      damageType
      classes
      school
      subclasses
      damageAtSlotLevel {
        first
      }
      higherLevel
      areaOfEffect {
        type
        size
      }
      dc {
        type
        success
      }
    }
  }
`;
