import { Dispatch, SetStateAction } from "react";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";

export interface CustomModalProps {
  winner: boolean;
  numAttempts: number;
  setResetGame: Dispatch<SetStateAction<boolean>>;
  countryAnswer: CountryType | null;
}
