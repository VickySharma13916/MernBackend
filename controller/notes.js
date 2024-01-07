const notes = require("../model/notes");

const AddNotesData = async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = new notes({ title, description });
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const GetNotesDataById = async (req, res) => {
  try {
    const note = await notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const GetNotesData = async (req, res) => {
  try {
    const note = await notes.find({}).sort({ createdAt: -1 });

    if (!note || note.length === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const UpdateNotesById = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedNote = await notes.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const DeleteNotesById = async (req, res) => {
  try {
    const deletedNote = await notes.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  GetNotesData,
  GetNotesDataById,
  AddNotesData,
  UpdateNotesById,
  DeleteNotesById,
};
