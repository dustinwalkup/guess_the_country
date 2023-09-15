import { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material/";
// import MenuIcon from "@mui/icons-material/Menu";
import { HeaderProps } from "./Header.type";

export const Header: FC<HeaderProps> = ({
  title,
  color = "primary",
  position = "static",
}) => {
  return (
    <AppBar
      position={position}
      color={color}
      style={{ margin: 0, marginBottom: 20, alignItems: "center" }}
    >
      <Toolbar>
        {/*
        
        TODO: Implement Menu
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
