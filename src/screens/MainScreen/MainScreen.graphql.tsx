import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
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
