import React, { useState } from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { addNote } from "../api/NoteAPI";
import { useNavigate } from "react-router-dom";

const initialValue = {
  title: "",
  description: "",
  date: "",
};

function AddNote() {
  const [inputs, setInputs] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onResReceived = (data) => {
    console.log(data);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addNote(inputs)
      .then(onResReceived) //(res) => console.log(res)
      .catch((err) => console.log(err));
    // navigate("/");
  };

  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Add Note
        </Typography>
        <AddTaskIcon
          sx={{ fontSize: "25px", paddingLeft: 1, color: "lightcoral  " }}
        />
      </Box>
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
          <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
          <TextField
            type="date"
            onChange={handleChange}
            name="date"
            value={inputs.date}
            variant="standard"
            margin="normal"
          />
          <Button
            type="submit"
            // color="warning"
            sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddNote;
