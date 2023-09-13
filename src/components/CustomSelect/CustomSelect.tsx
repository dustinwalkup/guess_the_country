import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CountryType } from "../../screens/MainScreen/MainScreen.type";
import { CustomSelectProps } from "./CustomSelect.type";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";

const INPUT_NAME: string = "country";

export const CustomSelect: FC<CustomSelectProps> = ({ countryList }) => {
  const [countryValue, setCountryValue] = useState<CountryType | null>(null);
  const { control } = useFormContext();

  const autoCompleteOnChangeHandler = (
    data: CountryType | null,
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    setCountryValue(data);
    field.onChange(data);
  };

  return (
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
          options={countryList}
          renderInput={(params) => (
            <TextField {...params} label="Enter Country" />
          )}
          sx={{ width: 300 }}
          value={countryValue}
        />
      )}
    ></Controller>
  );
};
