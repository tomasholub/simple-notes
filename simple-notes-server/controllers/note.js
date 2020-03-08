// default data for testing
const DEFAULT_NOTES = [
  {
    id: 1,
    title: "First",
    text: "First_note_long_text"
  },
  {
    id: 2,
    title: "Second",
    text: "Second_note_long_text"
  },
  {
    id: 3,
    title: "Third",
    text: "Third_note_long_text"
  },
  {
    id: 4,
    title: "Fourth",
    text: "Fourth_note_long_text"
  },
  {
    id: 5,
    title: "Fifth",
    text: "Fifth_note_long_text"
  }
];

// helper function to deep copy array of notes
const getCopyOfNotes = () => [
  ...DEFAULT_NOTES.map(item => Object.assign({}, item))
];

// state initialized by copy of default value
let notes = getCopyOfNotes();

// return all notes
exports.getAllNotes = (req, res) => {
  res.send({
    success: true,
    message: "Notes successfully retrieved",
    data: notes
  });
};

// return note specified by id
exports.getOneNote = (req, res) => {
  const note = notes.find(item => item.id === parseInt(req.params.id));

  if (note) {
    res.send({
      success: true,
      message: `Note with id=${req.params.id} successfully retrieved`,
      data: note
    });
  } else {
    res.status(400).send({
      success: false,
      message: `Note with id=${req.params.id} not found`
    });
  }
};

// create a new note
exports.createOneNote = (req, res) => {
  let maxId = 0;
  // find maxId
  notes.map(item => (maxId = item.id > maxId ? item.id : maxId));
  const note = {
    id: maxId + 1,
    title: req.body.title || "",
    text: req.body.text || ""
  };
  notes.push(note);

  res.send({
    success: true,
    message: `Note with id=${req.params.id} successfully created`,
    data: notes
  });
};

// update the note specified by id
exports.editOneNote = (req, res) => {
  const index = notes.findIndex(item => item.id === parseInt(req.params.id));

  if (index !== -1) {
    notes[index].title = req.body.title || "";
    notes[index].text = req.body.text || "";
    res.send({
      success: true,
      message: `Note with id=${req.params.id} successfully updated`,
      data: notes
    });
  } else {
    res.status(400).send({
      success: false,
      message: `Note with id=${req.params.id} not found`
    });
  }
};

// delete the specified note
exports.deleteOneNote = (req, res) => {
  const index = notes.findIndex(item => item.id === parseInt(req.params.id));

  if (index !== -1) {
    notes.splice(index, 1);
    res.send({
      success: true,
      message: `Note with id=${req.params.id} successfully deleted`,
      data: notes
    });
  } else {
    res.status(400).send({
      success: false,
      message: `Note with id=${req.params.id} not found`
    });
  }
};

// for debugging purposes only
// reset note to the default state
exports.reset = (req, res) => {
  notes = getCopyOfNotes();
  res.send({
    success: true,
    message: "Notes successfully reset and retrieved",
    data: notes
  });
};
