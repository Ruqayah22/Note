import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNoteDetails, noteUpdate } from "../api/NoteAPI";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const initialValue = {
  title: "",
  description: "",
};

function EditNote() {
  const [note, setNote] = useState();
  const [inputs, setInputs] = useState(initialValue);
  const id = useParams().id;
  //   console.log(id);

  let navigate = useNavigate();

  useEffect(() => {
    getNoteDetails(id)
      .then((data) => {
        setNote(data.note);

        setInputs({
          title: data.note.title,
          description: data.note.description,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    noteUpdate(inputs, id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Edit Note
        </Typography>
        <CreditScoreIcon
          sx={{ fontSize: "25px", paddingLeft: 1, color: "lightcoral  " }}
        />
      </Box>
      {note && (
        <form onSubmit={handleSubmit}>
          <Box
            padding={3}
            display="flex"
            width="80%"
            margin="auto"
            flexDirection={"column"}
          >
            <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
            <TextField
              onChange={handleChange}
              name="title"
              value={inputs.title}
              variant="standard"
              margin="normal"
            />
            <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
            <TextField
              onChange={handleChange}
              name="description"
              value={inputs.description}
              variant="standard"
              margin="normal"
            />

            <Button
              type="submit"
              // color="warning"
              sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
              variant="contained"
            >
              UpDate
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
}

export default EditNote;
