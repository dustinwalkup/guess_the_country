import { FC } from "react";
import Button from "@mui/material/Button";
import { CustomButtonProps } from "./CustomButton.type";

export const CustomButton: FC<CustomButtonProps> = ({
  buttonText,
  color = "primary",
  variant = "text",
}) => {
  return (
    <Button type="submit" color={color} variant={variant}>
      {buttonText}
    </Button>
  );
};
