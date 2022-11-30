import {
  Alert,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt"; // edit note
import LayersClearIcon from "@mui/icons-material/LayersClear"; // delete note
import { Link } from "react-router-dom";
import { noteDelete } from "../api/NoteAPI";

function CardItem({ title, description, date, id }) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    noteDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setOpen(true);
  };

  return (
    <Card
      sx={{
        width: "50%",
        height: "50%", //"60vh"
        padding: 1,
        margin: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader title={title} subheader={date} />
      <CardContent>
        <hr />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto", padding: 2 }}>
        <IconButton
          LinkComponent={Link}
          to={`/notes/${id}`}
          aria-label="Edit Note"
          title="Edit Note"
        >
          <NoteAltIcon />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          aria-label="Delete"
          title="Delete Note"
        >
          <LayersClearIcon />
        </IconButton>
      </CardActions>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Deleted success...
        </Alert>
      </Snackbar>
    </Card>
  );
}

export default CardItem;
