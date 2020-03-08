import React, { useContext } from "react";
import { UISref } from "@uirouter/react";
import INote from "../INote";
import ViewContent from "./ViewContent";

interface IViewProps {
  note: INote;
}

// displays one note
const View = (props: IViewProps) => {
  const note = props.note;
  console.debug("View.render", note);
  const ctx = useContext(LocalizationContext);

  return (
    <div>
      <ViewContent note={note} />
      <UISref to="home">
        <button className="btn btn-primary mt-2">{ctx.tr("OK")}</button>
      </UISref>
    </div>
  );
};

export default View;
