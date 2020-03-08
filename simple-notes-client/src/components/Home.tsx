import React, { useContext } from "react";
import { UISref } from "@uirouter/react";
import { LocalizationContext } from "../localization";
import INote from "../INote";
import NoteLink from "./NoteLink";

interface IHomeProps {
  notes: INote[];
}

// main page with a list of notes
const Home = (props: IHomeProps) => {
  const notes = props.notes;
  console.debug("Home.render", notes);
  const ctx = useContext(LocalizationContext);

  return (
    <div id="notes">
      <ul className="list-group">
        {notes.map((note: INote) => (
          <li key={note.id} className="list-group-item">
            <NoteLink note={note} />
          </li>
        ))}
      </ul>
      <UISref to="create1">
        <button className="btn btn-primary mt-2">{ctx.tr("New Note")}</button>
      </UISref>
    </div>
  );
};

export default Home;
