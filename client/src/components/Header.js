import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to={"/"}
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          >
            Notes
          </Typography>
          <Button color="inherit" component={Link} to={"/addNote"}>
            AddNote
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
