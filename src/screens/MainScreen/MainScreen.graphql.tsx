import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query getAllCountries {
    countries {
      capital
      code
      continent {
        name
      }
      languages {
        name
      }
      name
    }
  }
`;
