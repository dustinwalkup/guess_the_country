export interface MainScreenProps {}

export interface CountryType {
  /**
   * Capital of country
   */
  capital: string;
  /**
   * Country code (i.e. BR for Brazil)
   */
  code: string;
  /**
   * Continent of country
   */
  continent: ContinentType;
  /**
   * Language of country
   */
  languages: LanguageType[];
  /**
   * Name of country
   */
  name: string;
}

interface ContinentType {
  /**
   * Continent of country
   */
  name: string;
}

interface LanguageType {
  /**
   * Language of country
   */
  name: string;
}
