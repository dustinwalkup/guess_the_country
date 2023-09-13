import { Dispatch, SetStateAction } from "react";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";

export interface CountryFormProps {
  countryList: CountryType[];
  countryAnswer: CountryType | null;
  setNumAttempts: Dispatch<SetStateAction<number>>;
  setWinner: Dispatch<SetStateAction<boolean>>;
  resetGame: boolean;
}

export interface CountryDataType {
  country?: CountryType;
}
