import { FC } from "react";
import { Stack, Button, Modal, Typography } from "@mui/material";
import { CustomModalProps } from "./CustomModal.type";
import { modalStackstyle } from "./CustomModal.style";

// constants
const YOU_WIN: string = "You Win! :)";
const YOU_LOSE: string = "You Lose :(";
const CORRECT_ANSWER: string = "Correct Answer: ";
const PLAY_AGAIN: string = "Play Again";

export const CustomModal: FC<CustomModalProps> = ({
  winner,
  numAttempts,
  setResetGame,
  countryAnswer,
}) => {
  return (
    <Modal
      open={winner || numAttempts === 0}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={modalStackstyle} alignItems="center">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {winner ? YOU_WIN : YOU_LOSE}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {`${CORRECT_ANSWER} ${countryAnswer?.name}`}
        </Typography>
        <Button onClick={() => setResetGame(true)}>{PLAY_AGAIN}</Button>
      </Stack>
    </Modal>
  );
};
