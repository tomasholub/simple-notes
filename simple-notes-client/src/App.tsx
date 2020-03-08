import React, { useState } from "react";
import "./App.css";
import {
  pushStateLocationPlugin,
  ReactStateDeclaration,
  UIRouter,
  UISref,
  UIView
} from "@uirouter/react";

import {
  getGlobalLanguage,
  setGlobalLanguage,
  tr,
  LocalizationContext
} from "./localization";

import About from "./components/About";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Menu from "./components/Menu";
import View from "./components/View";

import services from "./services";

// states for UI-Router

// about page
let aboutState: ReactStateDeclaration = {
  name: "about",
  url: "/about",
  component: About
};

// form for creating a new note
let create1State: ReactStateDeclaration = {
  name: "create1",
  url: "/create1",
  component: Create
};

// home page is displayed after form for creating a new note is submitted
let createState: ReactStateDeclaration = {
  name: "create",
  url: "/create",
  params: {
    title: {
      type: "string"
    },
    text: {
      type: "string"
    }
  },
  component: Home,
  resolve: [
    {
      token: "notes",
      deps: ["$transition$"],
      resolveFn: (trans: any) =>
        services.createNote(trans.params().title, trans.params().text)
    }
  ]
};

// deletes a note and displays home page
let deleteState: ReactStateDeclaration = {
  name: "delete",
  url: "/delete/:noteId",
  component: Home,
  resolve: [
    {
      token: "notes",
      deps: ["$transition$"],
      resolveFn: (trans: any) => services.deleteNote(trans.params().noteId)
    }
  ]
};

// form for updating a note
let edit1State: ReactStateDeclaration = {
  name: "edit1",
  url: "/edit1/:noteId",
  component: Edit,
  resolve: [
    {
      token: "note",
      deps: ["$transition$"],
      resolveFn: (trans: any) => services.getNote(trans.params().noteId)
    }
  ]
};

// home page is displayed after form for editing a new note is submitted
let editState: ReactStateDeclaration = {
  name: "edit",
  url: "/edit/:id",
  params: {
    title: {
      type: "string"
    },
    text: {
      type: "string"
    }
  },
  component: Home,
  resolve: [
    {
      token: "notes",
      deps: ["$transition$"],
      resolveFn: (trans: any) =>
        services.editNote(
          trans.params().id,
          trans.params().title,
          trans.params().text
        )
    }
  ]
};

// home page with a list of notes
let homeState: ReactStateDeclaration = {
  name: "home",
  url: "/",
  component: Home,
  resolve: [
    {
      token: "notes",
      resolveFn: services.getAllNotes
    }
  ]
};

// home page is displayed after list of notes is reset to default values
let resetState: ReactStateDeclaration = {
  name: "reset",
  url: "/reset",
  component: Home,
  resolve: [
    {
      token: "notes",
      resolveFn: services.resetNotes
    }
  ]
};

// show details of the current note
let viewState: ReactStateDeclaration = {
  name: "view",
  url: "/view/:noteId",
  component: View,
  resolve: [
    {
      token: "note",
      deps: ["$transition$"],
      resolveFn: (trans: any) => services.getNote(trans.params().noteId)
    }
  ]
};

// all states
const statesReal: ReactStateDeclaration[] = [
  aboutState,
  create1State,
  createState,
  deleteState,
  edit1State,
  editState,
  homeState,
  resetState,
  viewState
];

// main app component
// contains Localization and UIRouter providers
const App = (props: any = null) => {
  console.debug("App.render");
  const [language, setLanguage] = useState(getGlobalLanguage());

  const handleCzech = () => {
    setLanguage("cs");
    setGlobalLanguage("cs");
  };
  const handleEnglish = () => {
    setLanguage("en");
    setGlobalLanguage("en");
  };

  return (
    <LocalizationContext.Provider value={{ language, tr }}>
      <UIRouter
        plugins={[pushStateLocationPlugin]}
        states={props && props.states ? props.states : statesReal}
      >
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
            <UISref to="home">
              <span className="navbar-brand flex-grow-1 clickable">
                SIMPLE NOTES
              </span>
            </UISref>
            <Menu />
            <img
              className="ml-2 mr-1 clickable"
              onClick={handleCzech}
              src="/cs.png"
              alt="Czech"
            />
            <img
              className="mr-1 clickable"
              onClick={handleEnglish}
              src="/en.png"
              alt="English"
            />
          </nav>
          <div style={{ margin: 10, width: 600 }}>
            <UIView />
          </div>
        </div>
      </UIRouter>
    </LocalizationContext.Provider>
  );
};

export default App;
