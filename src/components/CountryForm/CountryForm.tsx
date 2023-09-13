import { FC } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { CountryFormProps } from "./CountryForm.type";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { CustomButton } from "../CustomButton/CustomButton";
import { Box, Stack } from "@mui/material";

export const CountryForm: FC<CountryFormProps> = ({ countryList }) => {
  const methods = useForm();

  const onSubmitHandler = (data: SubmitHandler<FieldValues> | FieldValues) =>
    console.log(data);

  return (
    <Box display="flex" justifyContent="center">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
          <Stack spacing={2}>
            <CustomSelect countryList={countryList} />
            <CustomButton buttonText="Submit" />
          </Stack>
        </form>
      </FormProvider>
    </Box>
  );
};
