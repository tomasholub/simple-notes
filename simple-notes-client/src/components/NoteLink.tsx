import React, { useContext } from "react";
import { UISref } from "@uirouter/react";
import { LocalizationContext } from "../localization";
import INote from "../INote";

interface INoteLinkProps {
  note: INote;
}

// one note displayed in one row together with EDIT and DELETE buttons
const NoteLink = (props: INoteLinkProps) => {
  const note = props.note;
  console.debug("NoteLink.render", note);
  const ctx = useContext(LocalizationContext);

  return (
    <div className="d-flex align-items-center">
      <UISref to="view" params={{ noteId: note.id }}>
        <span className="note-title link clickable text-primary flex-grow-1">{note.title}</span>
      </UISref>
      <UISref to="edit1" params={{ noteId: note.id }}>
        <button className="note-edit btn btn-outline-primary ml-2">
          {ctx.tr("Edit")}
        </button>
      </UISref>
      <UISref to="delete" params={{ noteId: note.id }}>
        <button className="note-delete btn btn-outline-primary ml-2">
          {ctx.tr("Delete")}
        </button>
      </UISref>
    </div>
  );
};

export default NoteLink;
