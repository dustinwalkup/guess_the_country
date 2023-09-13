import { Dispatch, SetStateAction } from "react";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";

export interface CluesProps {
  countryAnswer: CountryType | null;
  setNumAttempts: Dispatch<SetStateAction<number>>;
}
