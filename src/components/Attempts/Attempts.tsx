import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { AttemptsProps } from "./Attempts.type";

// constants
const NUM_ATTEMPTS_CONST: string = "Number of attempts remaining:";

export const Attempts: FC<AttemptsProps> = ({ numAttempts }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ marginBottom: 5, marginTop: 5 }}
    >
      <Typography>{`${NUM_ATTEMPTS_CONST} ${numAttempts}`}</Typography>
    </Box>
  );
};
