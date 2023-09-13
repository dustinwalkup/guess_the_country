import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CluesProps } from "./Clues.type";

const CAPITAL: string = "Capital";
const CONTINENT: string = "Continent";
const LANGUAGE: string = "Langauge(s)";
const HIDE_TEXT: string = "------------------------";

export const Clues: FC<CluesProps> = ({
  countryAnswer,
  setNumAttempts,
  resetGame,
}) => {
  const [showContinent, setShowContinent] = useState<boolean>(false);
  const [showLangauges, setShowLangauges] = useState<boolean>(false);

  useEffect(() => {
    if (resetGame) {
      setShowContinent(false);
      setShowLangauges(false);
    }
  }, [resetGame]);

  const showClueHandler = (setStateFunc: Dispatch<SetStateAction<boolean>>) => {
    setStateFunc(true);
    setNumAttempts((prev: number) => prev - 1);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ marginBottom: 5, marginTop: 10 }}
    >
      <List
        aria-labelledby="clues-list"
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemText primary={CAPITAL} secondary={countryAnswer?.capital} />
        </ListItem>
        <Divider component="li" />
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            !showContinent ? (
              <IconButton
                edge="end"
                aria-label="visibility"
                onClick={() => showClueHandler(setShowContinent)}
              >
                <VisibilityIcon />
              </IconButton>
            ) : null
          }
        >
          <ListItemText
            primary={CONTINENT}
            secondary={
              showContinent ? countryAnswer?.continent.name : HIDE_TEXT
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            !showLangauges ? (
              <IconButton
                edge="end"
                aria-label="visibility"
                onClick={() => showClueHandler(setShowLangauges)}
              >
                <VisibilityIcon />
              </IconButton>
            ) : null
          }
        >
          <ListItemText
            primary={LANGUAGE}
            secondary={
              showLangauges ? (
                <>
                  {countryAnswer?.languages.map((value, key) => {
                    return (
                      <Typography
                        key={key}
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                      >
                        {`${value.name} `}
                      </Typography>
                    );
                  })}
                </>
              ) : (
                HIDE_TEXT
              )
            }
          />
        </ListItem>
        <Divider component="li" />
      </List>
    </Box>
  );
};
