/*Exercise 3:
Build an application that supports both theme (light/dark) and language (English/Spanish) toggling using Context.

Requirements:
Use Context to manage both theme and language settings.
Provide buttons to toggle the theme and language.
Update the UI text and styles based on the selected theme and language.

Hints:
Create a SettingsContext to store theme and language settings.
Use useContext to access and update the settings in the UI.
Use conditional rendering and CSS to apply the selected theme and language.
*/

import React, { createContext, useState} from "react";

export const SettingsContext = createContext();

function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  function toggleTheme(){
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function toggleLanguage(){
    setLanguage((prevLanguage) => (prevLanguage === "English" ? "Spanish" : "English"));
  }

  return (
    <SettingsContext.Provider value={{theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;