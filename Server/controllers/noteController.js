import Notes from "../models/notesModels.js";

export const getAllNotes = async (req, res) => {
  let notes;
  try {
    notes = await Notes.find().populate("user");
  } catch (err) {
    return console.log(err);
  }

  if (!notes) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ notes });
};

export const addNote = async (req, res) => {
  const { title, description, date } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !date
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }
  let note;

  try {
    note = new Notes({
      title,
      description,
      date: new Date(`${date}`),
    });

    note = await note.save();
  } catch (err) {
    return console.log(err);
  }

  if (!note) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
  return res.status(201).json({ note });
};

export const getNoteById = async (req, res) => {
  const id = req.params.id;

  let note;

  try {
    note = await Notes.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!note) {
    return res.status(404).json({ message: "No Note found" });
  }
  return res.status(200).json({ note });
};

export const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let note;
  try {
    note = await Notes.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (err) {
    return console.log(err);
  }

  if (!note) {
    return res.status(500).json({ message: "Unable to update" });
  }
  return res.status(200).json({ message: "Updated Successfully" });
};

export const deleteNote = async (req, res) => {
  const id = req.params.id;
  let note;
  try {
    note = await Notes.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }
  if (!note) {
    return res.status(500).json({ message: "Unable to delete" });
  }

  return res.status(200).json({ message: "Deleted Successfully" });
};
