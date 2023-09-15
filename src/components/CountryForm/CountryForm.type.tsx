import { Dispatch, SetStateAction } from "react";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";

export interface CountryFormProps {
  /**
   * List of country options for dropdown
   */
  countryList: CountryType[];
  /**
   * Correct country correct answer
   */
  countryAnswer: CountryType | null;
  /**
   * Number of guess attempts remaining setter function
   */
  setNumAttempts: Dispatch<SetStateAction<number>>;
  /**
   * Game winner trigger setter function
   */
  setWinner: Dispatch<SetStateAction<boolean>>;
  /**
   * Reset the game trigger
   */
  resetGame: boolean;
}

export interface CountryDataType {
  /**
   * Country object
   */
  country?: CountryType;
}
