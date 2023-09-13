import { Stack, Button, Modal, Typography } from "@mui/material";
import { FC } from "react";
import { CustomModalProps } from "./CustomModal.type";
import { modalBoxstyle } from "./CustomModal.style";

const YOU_WIN: string = "You Win! :)";
const YOU_LOSE: string = "You Lose :(";
const CORRECT_ANSWER: string = "Correct Answer: ";

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
      <Stack sx={modalBoxstyle} alignItems="center">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {winner ? YOU_WIN : YOU_LOSE}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {`${CORRECT_ANSWER} ${countryAnswer?.name}`}
        </Typography>
        <Button onClick={() => setResetGame(true)}>Play Again</Button>
      </Stack>
    </Modal>
  );
};
