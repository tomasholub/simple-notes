import axios from "axios";

// return all notes from server
const getAllNotes = async () => {
  console.debug("getAllNotes");

  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4000/notes")
      .then(response => {
        if (response.data && response.data.success) {
          console.debug("getAllNotes OK");
          resolve(response.data.data);
        } else {
          reject("Call to backend failed.");
        }
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

// return note with the specified noteId or undefined from server
const getNote = async (noteId: number) => {
  console.debug("getNote", noteId);

  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:4000/notes/${noteId}`)
      .then(response => {
        if (response.data && response.data.success) {
          resolve(response.data.data);
        } else {
          reject("Call to backend failed.");
        }
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

// create a new note on server
const createNote = async (title: string, text: string) => {
  console.debug("createNote", title, text);

  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:4000/notes`, { title, text })
      .then(response => {
        if (response.data && response.data.success) {
          resolve(response.data.data);
        } else {
          reject("Call to backend failed.");
        }
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

// update note with the specified noteId on server
const editNote = async (id: number, title: string, text: string) => {
  console.debug("editNote", id, title, text);

  return new Promise((resolve, reject) => {
    axios
      .put(`http://localhost:4000/notes/${id}`, {
        title,
        text
      })
      .then(response => {
        if (response.data && response.data.success) {
          resolve(response.data.data);
        } else {
          reject("Call to backend failed.");
        }
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

// delete note with the specified noteId from server
const deleteNote = async (noteId: number) => {
  console.debug("deleteNote", noteId);

  return new Promise((resolve, reject) => {
    axios
      .delete(`http://localhost:4000/notes/${noteId}`)
      .then(response => {
        if (response.data && response.data.success) {
          resolve(response.data.data);
        } else {
          reject("Call to backend failed.");
        }
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

// used for debugging
// reset notes on server to default values
const resetNotes = async () => {
  console.debug("resetNotes");

  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4000/notes/reset")
      .then(response => {
        if (response.data && response.data.success) {
          resolve(response.data.data);
        } else {
          reject("Call to backend failed.");
        }
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

const services = {
  getAllNotes,
  getNote,
  createNote,
  editNote,
  deleteNote,
  resetNotes
};

export default services;
