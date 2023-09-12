import { FC } from "react";
import Button from "@mui/material/Button";
import { CustomButtonProps } from "./CustomButton.type";

export const CustomButton: FC<CustomButtonProps> = ({ buttonText }) => {
  return (
    <Button type="submit" color="primary">
      {buttonText}
    </Button>
  );
};
