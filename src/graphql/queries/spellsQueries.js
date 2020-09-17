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
      casting_time
      level
      attack_type
      school {
        name
      }
      classes {
        name
      }
      subclasses {
        name
      }
    }
  }
`;
