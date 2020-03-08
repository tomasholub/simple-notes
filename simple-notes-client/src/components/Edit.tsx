import React, { useState, useContext, ChangeEvent } from "react";
import { UISref } from "@uirouter/react";
import { LocalizationContext } from "../localization";
import INote from "../INote";

interface IEditProps {
  note: INote;
}

// form to update a note
const Edit = (props: IEditProps) => {
  const note = props.note;
  console.debug("Edit.render", note);
  const ctx = useContext(LocalizationContext);

  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value);

  return (
    <form id="editForm">
      <div className="form-group">
        <label htmlFor="editTitle">{ctx.tr("Title")}</label>
        <input
          type="text"
          id="editTitle"
          value={title}
          onChange={handleChangeTitle}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="editText">{ctx.tr("Text")}</label>
        <textarea
          id="editText"
          value={text}
          onChange={handleChangeText}
          className="form-control"
        />
      </div>
      <UISref to="edit" params={{ id: note.id, title, text }}>
        <button id="ok" type="submit" className="btn btn-primary mr-2">{ctx.tr("OK")}</button>
      </UISref>
      <UISref to="home">
        <button id="cancel" className="btn btn-outline-primary">{ctx.tr("Cancel")}</button>
      </UISref>
    </form>
  );
};

export default Edit;
