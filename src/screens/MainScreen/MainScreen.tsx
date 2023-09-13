import { FC, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { CountryForm } from "../../components/CountryForm/CountryForm";
import { MainScreenProps } from "./MainScreen.type";
import { ALL_COUNTRIES } from "./MainScreen.graphql";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

export const MainScreen: FC<MainScreenProps> = () => {
  const [countryList, setCountryList] = useState([]);

  const [
    getAllCountries,
    {
      loading: getAllCountriesLoading,
      error: getAllCountriesError,
      data: getAllCountriesData,
    },
  ] = useLazyQuery(ALL_COUNTRIES);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  useEffect(() => {
    if (getAllCountriesData) {
      setCountryList(getAllCountriesData);
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
      <CountryForm countryList={countryList} />
    </>
  );
};
