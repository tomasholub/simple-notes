import React from "react";
import INote from "../INote";

interface IViewContentProps {
  note: INote;
}

// example of a very simple component
// great for very simple test
const ViewContent = (props: IViewContentProps) => {
  const note = props.note;
  console.debug("ViewContent.render", note);

  return (
    <div>
      <h3>{note.title}</h3>
      <div>{note.text}</div>
    </div>
  );
};

export default ViewContent;
