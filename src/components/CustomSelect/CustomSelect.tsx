import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CountryOptionType, CustomSelectProps } from "./CustomSelect.type";
import { sampledata } from "../../assets/data";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";

const INPUT_NAME: string = "country";

export const CustomSelect: FC<CustomSelectProps> = () => {
  const [countryValue, setCountryValue] = useState<CountryOptionType | null>(
    null
  );
  const { control } = useFormContext();

  const autoCompleteOnChangeHandler = (
    data: CountryOptionType | null,
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
          isOptionEqualToValue={(option, value) => option.code === value.code}
          id="user-input"
          onChange={(_, data) => autoCompleteOnChangeHandler(data, field)}
          options={sampledata}
          renderInput={(params) => <TextField {...params} label="Country" />}
          sx={{ width: 300 }}
          value={countryValue}
        />
      )}
    ></Controller>
  );
};
