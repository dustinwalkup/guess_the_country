export interface MainScreenProps {}

export interface CountryType {
  capital: string;
  code: string;
  continent: ContinentType;
  languages: LanguageType[];
  name: string;
}

interface ContinentType {
  name: string;
}

interface LanguageType {
  name: string;
}
