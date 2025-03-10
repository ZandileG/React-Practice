import React, { useState, useEffect } from "react";

function Window (){

    const[width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      //mounting
        function updateWidth(){
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", updateWidth);

      //umounting
        return () =>{
          //this is not visual, it is used for performance on the app
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

return(
    <div>
        <h1>Window Width: {width} px</h1>
    </div>
);
}

export default Window;