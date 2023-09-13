import { FC, useEffect, useState } from "react";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { CountryForm } from "../../components/CountryForm/CountryForm";
import { CountryType, MainScreenProps } from "./MainScreen.type";
import { GET_ALL_COUNTRIES } from "./MainScreen.graphql";
import { getRandomCountry } from "./MainScreen.utils";
import { Clues } from "../../components/Clues/Clues";

export const MainScreen: FC<MainScreenProps> = () => {
  const [countryList, setCountryList] = useState([]);
  const [countryAnswer, setCountryAnswer] = useState<CountryType | null>(null);

  const [
    getAllCountries,
    {
      loading: getAllCountriesLoading,
      error: getAllCountriesError,
      data: getAllCountriesData,
    },
  ] = useLazyQuery(GET_ALL_COUNTRIES);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

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
  console.log("countryAnswer", countryAnswer);
  return (
    <>
      <Clues countryAnswer={countryAnswer} />
      <CountryForm countryList={countryList} />
    </>
  );
};
