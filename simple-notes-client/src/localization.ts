import { createContext } from "react";

// own translation engine
// it allows to present useContext and other techniques

// translations are stored in this type
interface ITranslation {
  en: string;
  cs: string;
}

// translates phrases
// input phrase in english
// output phrase translated to the current language (or to "en")
const tr = (phrase: string) => {
  const lang = getGlobalLanguage();

  // hard-coded translations (for demo purposes)
  const phrases: ITranslation[] = [
    {
      en: "ABOUT",
      cs: "O PROGRAMU"
    },
    {
      en: "Cancel",
      cs: "Storno"
    },
    {
      en: "Created by",
      cs: "Vytvořil"
    },
    {
      en: "Delete",
      cs: "Smazat"
    },
    {
      en: "Edit",
      cs: "Upravit"
    },
    {
      en: "New Note",
      cs: "Nová poznámka"
    },
    {
      en: "OK",
      cs: "OK"
    },
    {
      en: "RESET",
      cs: "RESET"
    },
    {
      en: "Text",
      cs: "Text"
    },
    {
      en: "Title",
      cs: "Titulek"
    },
    {
      en: "There are default values here for the purpose of the demo.",
      cs: "Pro demonstrační účely jsou již vyplněné výchozí hodnoty."
    }
  ];

  // find phrase
  const foundPhrase: ITranslation | undefined = phrases.find(
    item => item.en === phrase
  );
  // translate phrase
  const translation: string =
    foundPhrase && lang === "cs" ? foundPhrase.cs : phrase;

  return translation && translation !== "" ? translation : phrase;
};

// current language is stored in localStorage = it is remembered when browser is closed
// returns current language (or "en")
const getGlobalLanguage = () => {
  const lang = localStorage.getItem("lang");
  return lang ? lang : "en";
};

// sets current language (to localStorage)
const setGlobalLanguage = (lang: string) => {
  localStorage.setItem("lang", lang);
};

interface ILocalizationContext {
  language: string;
  tr: (phrase: string) => string;
}

const LocalizationContext = createContext({} as ILocalizationContext);

export { getGlobalLanguage, setGlobalLanguage, tr, LocalizationContext };
