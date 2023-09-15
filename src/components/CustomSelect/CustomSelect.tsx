import { FC, useEffect, useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";
import { CustomSelectProps } from "./CustomSelect.type";

// constants
const INPUT_NAME: string = "country";
const ERR_MESSAGE: string = "This is required";

export const CustomSelect: FC<CustomSelectProps> = ({ options, resetGame }) => {
  const [countryValue, setCountryValue] = useState<CountryType | null>(null);
  const {
    control,
    clearErrors,
    setValue,
    formState: { errors },
  } = useFormContext();

  // This useEffect will assist with resetting the game
  useEffect(() => {
    if (resetGame) {
      setCountryValue(null);
      setValue(INPUT_NAME, "");
      clearErrors(INPUT_NAME);
    }
  }, [resetGame, setValue, clearErrors]);

  // updates countryValue state and form Field
  const autoCompleteOnChangeHandler = (
    data: CountryType | null,
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    setCountryValue(data);
    field.onChange(data);
  };

  return (
    <>
      <Controller
        control={control}
        name={INPUT_NAME}
        rules={{ required: true }}
        render={({ field }) => (
          <Autocomplete
            {...field}
            disablePortal
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            id="user-input"
            onChange={(_, data) => autoCompleteOnChangeHandler(data, field)}
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="Enter Country" />
            )}
            sx={{ width: 300 }}
            value={countryValue}
          />
        )}
      ></Controller>
      {errors.country && (
        <Typography style={{ color: "red" }}>{ERR_MESSAGE}</Typography>
      )}
    </>
  );
};
