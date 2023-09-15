import { CountryType } from "../../screens/MainScreen/MainScreen.type";

export interface CustomSelectProps {
  /**
   * List of dropdown options
   */
  options: CountryType[];
  /**
   * Reset dropdown trigger
   */
  resetGame: boolean;
}
