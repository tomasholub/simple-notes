import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { ReactStateDeclaration } from "@uirouter/react";

import App from "../App";
import Home from "../components/Home";
import Edit from "../components/Edit";

import INote from "../INote";

let container: any = null;

// note used for testing
const noteMock: INote = {
  id: 100,
  title: "Uno",
  text: "Jedna"
};

// helper functions
const getAllNotesMock = () => [ noteMock ];

const getNoteMock = (noteId: number) => noteMock;

const editNoteMock = (id: number, title: string, text: string) => {
  noteMock.title = "Changed Uno";
  return [ noteMock ];
}

// mock state that uses mock service
let homeStateMock: ReactStateDeclaration = {
  name: "home",
  url: "/",
  component: Home,
  resolve: [
    {
      token: "notes",
      resolveFn: getAllNotesMock
    }
  ]
};

// mock state that uses mock service
let edit1StateMock: ReactStateDeclaration = {
  name: "edit1",
  url: "/edit1/:noteId",
  component: Edit,
  resolve: [
    {
      token: "note",
      deps: ["$transition$"],
      resolveFn: (trans: any) => getNoteMock(trans.params().noteId)
    }
  ]
};

// mock state declaration that uses mock service
let editStateMock: ReactStateDeclaration = {
  name: "edit",
  url: "/edit/:id/:title/:text",
  component: Home,
  resolve: [
    {
      token: "notes",
      deps: ["$transition$"],
      resolveFn: (trans: any) =>
        editNoteMock(
          trans.params().id,
          trans.params().title,
          trans.params().text
        )
    }
  ]
};

// mock states for ui router
const statesMock: ReactStateDeclaration[] = [
  homeStateMock,
  edit1StateMock,
  editStateMock
];

let origErrorConsole: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);

  // suppress error message
  // see: https://github.com/jsdom/jsdom/issues/1937#issuecomment-561147951
  origErrorConsole = window.console.error;

  window.console.error = (...args: any[]) => {
    const firstArg = args.length > 0 && args[0];

    const shouldBeIgnored =
      firstArg &&
      typeof firstArg === 'string' &&
      firstArg.includes('Not implemented: HTMLFormElement.prototype.submit');

    if (!shouldBeIgnored) {
      origErrorConsole(...args);
    }
  }
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// parts of the test
const displayApp = async () => {
  await act(async () => {
    render(
      <App states={statesMock} />,
      container
    );
  });
}

const clickEdit = async () => {
  await act(async () => {
    const editButton = container.querySelector(".note-edit");
    expect(editButton.textContent).toBe("Edit");
    editButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

const clickOK = async () => {
  await act(async () => {
    const okButton = container.querySelector("#ok");
    expect(okButton.textContent).toBe("OK");
    okButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

// complex test of updating component
// (Home page with list of notes -> Edit -> changing title & test -> OK -> Home page) 
it("Example of Edit action", async () => {
  // Display app and assert first title
  await displayApp();
  const firstTitle = container.querySelector(".note-title");
  expect(firstTitle.textContent).toBe("Uno");

  // Display Edit page
  await clickEdit();
  const inputTitle = container.querySelector("#editTitle");
  expect(inputTitle.value).toBe("Uno");

  // Change title
  inputTitle.value = "Changed Uno";
  expect(inputTitle.value).toBe("Changed Uno");

  // Display Home page again and check the changed value
  await clickOK();
  const firstTitleAgain = container.querySelector(".note-title");
  expect(firstTitleAgain.textContent).toBe("Changed Uno");
});
