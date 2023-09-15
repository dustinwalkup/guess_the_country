import { Dispatch, SetStateAction } from "react";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";

export interface CluesProps {
  /**
   * Country object correct answer
   */
  countryAnswer: CountryType | null;
  /**
   * Number of attempts remaining setter function
   */
  setNumAttempts: Dispatch<SetStateAction<number>>;
  /**
   * Reset the game trigger
   */
  resetGame: boolean;
}
