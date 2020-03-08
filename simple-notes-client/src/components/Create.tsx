import React, { useState, useContext, ChangeEvent } from "react";
import { UISref } from "@uirouter/react";
import { LocalizationContext } from "../localization";

// form to create a new note
const Create = () => {
  const [title, setTitle] = useState("demo");
  const [text, setText] = useState("example");
  console.debug("Create.render", title, text);
  const ctx = useContext(LocalizationContext);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="createTitle">{ctx.tr("Title")}</label>
        <input
          type="text"
          id="createTitle"
          value={title}
          onChange={handleChangeTitle}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="createText">{ctx.tr("Text")}</label>
        <textarea
          id="createText"
          value={text}
          onChange={handleChangeText}
          className="form-control"
        />
        <small className="form-text text-muted">
          {ctx.tr("There are default values here for the purpose of the demo.")}
        </small>
      </div>
      <UISref to="create" params={{ title, text }}>
        <button className="btn btn-primary mr-2">{ctx.tr("OK")}</button>
      </UISref>
      <UISref to="home">
        <button className="btn btn-outline-primary">{ctx.tr("Cancel")}</button>
      </UISref>
    </form>
  );
};

export default Create;
