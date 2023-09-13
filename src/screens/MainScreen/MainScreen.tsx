import { FC, useEffect, useState } from "react";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { CountryForm } from "../../components/CountryForm/CountryForm";
import { Clues } from "../../components/Clues/Clues";
import { Attempts } from "../../components/Attempts/Attempts";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import { CountryType, MainScreenProps } from "./MainScreen.type";
import { GET_ALL_COUNTRIES } from "./MainScreen.graphql";
import { getRandomCountry } from "./MainScreen.utils";

export const MainScreen: FC<MainScreenProps> = () => {
  const [countryList, setCountryList] = useState<CountryType[]>([]);
  const [countryAnswer, setCountryAnswer] = useState<CountryType | null>(null);
  const [numAttempts, setNumAttempts] = useState<number>(3);
  const [winner, setWinner] = useState(false);
  const [resetGame, setResetGame] = useState(false);

  const [
    getAllCountries,
    {
      loading: getAllCountriesLoading,
      error: getAllCountriesError,
      data: getAllCountriesData,
    },
  ] = useLazyQuery(GET_ALL_COUNTRIES);

  // This useEffect will reset the game
  useEffect(() => {
    if (resetGame) {
      setResetGame(false);
      setWinner(false);
      setNumAttempts(3);
      setCountryAnswer(getRandomCountry(countryList));
    }
  }, [resetGame, countryList]);

  // This useEffect will call the API to get the list of countries
  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  // This useEffect updates the countryList state once the data is returned from API
  useEffect(() => {
    if (getAllCountriesData) {
      setCountryList(getAllCountriesData.countries);
      setCountryAnswer(getRandomCountry(getAllCountriesData.countries));
    }
  }, [getAllCountriesData]);

  // If error, show error message
  if (getAllCountriesError) {
    return (
      <>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong — <strong>please refresh!</strong>
        </Alert>
      </>
    );
  }

  // Show loading spinner while API data is being fetched
  if (getAllCountriesLoading || countryList.length < 1) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }
  return (
    <>
      <CustomModal
        winner={winner}
        numAttempts={numAttempts}
        setResetGame={setResetGame}
        countryAnswer={countryAnswer}
      />
      <Clues
        countryAnswer={countryAnswer}
        setNumAttempts={setNumAttempts}
        resetGame={resetGame}
      />
      <CountryForm
        countryList={countryList}
        countryAnswer={countryAnswer}
        setNumAttempts={setNumAttempts}
        setWinner={setWinner}
        resetGame={resetGame}
      />
      <Attempts numAttempts={numAttempts} />
    </>
  );
};
