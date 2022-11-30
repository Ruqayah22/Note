import { Router } from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/noteController.js";

const noteRouter = Router();

noteRouter.get("/", getAllNotes);
noteRouter.get("/:id", getNoteById);
noteRouter.post("/addNote", addNote);
noteRouter.put("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);

export default noteRouter;
