import React, { useContext} from "react";
import { SettingsContext } from "./SettingsContext";

function Content() {
  const {language, toggleLanguage} = useContext(SettingsContext);

//Use the solutions to see how to add English and Spanish text and how to translate them

  return (
    <section>
    <h1>Content</h1>
    <p>{language}</p>

    <button onClick={toggleLanguage}>Toggle Language</button>
    </section>
  );
}

export default Content;