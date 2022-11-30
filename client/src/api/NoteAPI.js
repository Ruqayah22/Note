import axios from "axios";

const notesURL = "http://localhost:5000";

export const getAllNotes = async () => {
  const res = await axios.get(`${notesURL}/notes`);
  if (res?.status !== 200) {
    return console.log("Some Error Occurred");
  }

  const data = res.data;
  return data;
};

export const addNote = async (data) => {
  const res = await axios
    .post(`${notesURL}/notes/addNote`, {
      title: data.title,
      description: data.description,
      date: data.date,
    })
    .catch((err) => console.log(err));

  if (res?.status !== 201) {
    return console.log("Error Occurred");
  }

  const resData = await res.data;
  return resData;
};

export const getNoteDetails = async (id) => {
  const res = await axios
    .get(`${notesURL}/notes/${id}`)
    .catch((err) => console.log(err));
  if (res?.status !== 200) {
    return console.log("Unable to fetch note");
  }

  const resData = await res.data;
  return resData;
};

export const noteUpdate = async (data, id) => {
  const res = await axios
    .put(`${notesURL}/notes/${id}`, {
      title: data.title,
      description: data.description,
    })
    .catch((err) => console.log(err));

  if (res?.status !== 200) {
    return console.log("Unable to update");
  }

  const resData = await res.data;
  return resData;
};

export const noteDelete = async (id) => {
  const res = await axios
    .delete(`${notesURL}/notes/${id}`)
    .catch((err) => console.log(err));

  if (res?.status !== 200) {
    return console.log("Unable to delete");
  }

  const resData = await res.data;
  return resData;
};
