import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllNotes } from "../api/NoteAPI";
import CardItem from "./CardItem";

function Home() {
  const [notes, setNotes] = useState();

  useEffect(() => {
    getAllNotes()
      .then((data) => setNotes(data?.notes))
      .catch((err) => console.error(err));
  });

  return (
    <Box
      display="flex"
      padding={3}
      //   flexDirection={"column"}
      justifyContent={"center"}
      //   alignItems={"center"}
    >
      {" "}
      {notes &&
        notes.map((value, index) => (
          <CardItem
            date={new Date(`${value.date}`).toLocaleDateString()}
            description={value.description}
            id={value._id}
            title={value.title}
            key={index}
          />
        ))}
    </Box>
  );
}

export default Home;
