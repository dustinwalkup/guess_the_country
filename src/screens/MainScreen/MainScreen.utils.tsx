import { CountryType } from "./MainScreen.type";

/**
 * This function generates a random country from the list that is returned from the GET_ALL_COUNTRIES API
 * @param countryList List of all countries returned from API
 * @returns Country Object
 */
export const getRandomCountry = (countryList: CountryType[]) => {
  return countryList[Math.floor(Math.random() * countryList?.length)];
};
