import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CountryDataType, CountryFormProps } from "./CountryForm.type";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { CustomButton } from "../CustomButton/CustomButton";
import { Box, Stack } from "@mui/material";

export const CountryForm: FC<CountryFormProps> = ({
  countryList,
  countryAnswer,
  setNumAttempts,
  setWinner,
  resetGame,
}) => {
  const methods = useForm();

  // Updates user attempts and checks if user submitted the correct answer
  const onSubmitHandler = (data: CountryDataType) => {
    setNumAttempts((prev) => prev - 1);
    if (data?.country?.code === countryAnswer?.code) setWinner(true);
  };

  return (
    <Box display="flex" justifyContent="center">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
          <Stack spacing={2}>
            <CustomSelect options={countryList} resetGame={resetGame} />
            <CustomButton buttonText="Submit" />
          </Stack>
        </form>
      </FormProvider>
    </Box>
  );
};
