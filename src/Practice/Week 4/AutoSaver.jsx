import React, { useState, useEffect } from "react";

function AutoSaver (){

    const [text, setText] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {

        if (!text) return;
        setIsSaving (true);

     //Built-in JS method that executes some code after a certain amount of time
       const timeout = setTimeout(() => {
            setIsSaving (false);
            console.log("Autosaved: ", text)
        }, 2000);

      return () =>{
        clearTimeout(timeout);
      };
    }, [text]);

return(
    <div>
        <h2>Google Text Editor</h2>
        <textarea rows="10" 
                  placeholder="Start typing..." 
                  onChange={(e) => setText(e.target.value)}>
        </textarea>

        <p>{isSaving ? "Saving..." : "Changes Saved!"}</p>
    </div>
);
}

export default AutoSaver;