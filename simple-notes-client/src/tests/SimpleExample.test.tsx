import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "../App";
import ViewContent from "../components/ViewContent";
import INote from "../INote";
import { tr, LocalizationContext } from "../localization";

let container: any = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// note used for testing
const note: INote = {
  id: 1,
  title: "First",
  text: "First text"
};

// tests if "ViewContent" (i.e. a simple component) renders correctly
it("ViewContent renders correctly", () => {
  act(() => {
    render(
      <LocalizationContext.Provider value={{ language: "en", tr }}>
        <ViewContent note={note} />
      </LocalizationContext.Provider>,
      container
    );
  });
  const title = container.querySelector("h3");
  const text = container.querySelector("div").querySelector("div");
  expect(title.textContent).toBe("First");
  expect(text.textContent).toBe("First text");
});

// tests if "About" page is displayed correctly after click on ABOUT link on home page
it("About page is displayed after click to ABOUT link", async () => {
  await act(async () => {
    render(
      <App />,
      container
    );
  });

  // get ABOUT link and click it
  const aboutLink = container.querySelector("#about");
  expect(aboutLink.textContent).toBe("ABOUT");

  await act(async () => {
    aboutLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // assert the displayed "about" page
  const createdDiv = container.querySelector("#createdby");
  expect(createdDiv.textContent).toBe("Created by tomas.holub@apitree.cz.");
  const okButton = container.querySelector("button");
  expect(okButton.textContent).toBe("OK");
});
