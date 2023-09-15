import { Dispatch, SetStateAction } from "react";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";

export interface CustomModalProps {
  /**
   * User as guess correctly trigger
   */
  winner: boolean;
  /**
   * Number of guess attempts remaining
   */
  numAttempts: number;
  /**
   * setter function for resetGame trigger
   */
  setResetGame: Dispatch<SetStateAction<boolean>>;
  /**
   * Country object correct answer
   */
  countryAnswer: CountryType | null;
}
