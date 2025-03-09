/*Extra: Real-Time Character Countdown (Tweet Composer)

Task:
*As an extra CSS exercise, quickly compose CSS to recreate a 'tweet' style composition input box.
Create a tweet composer that:

1. Allows the user to input their tweet in an input box, with a 'Tweet' button at the bottom.
2. Limits tweets to 280 characters.
3. Shows the remaining character count dynamically.
4. Disables the submit button if the limit is exceeded.
5. Allows users to reset the tweet.

For an Extra Challenge:
Add word count tracking.
Show a warning when 20 or fewer characters are left.
*/

import React, { Fragment, useState } from "react";

//Solution
export default function TweetComposer(){

    const maxChars = 280;
    const [tweet, setTweet] = useState("");

    function handleChange(event){
        setTweet(event.target.value);
    }

    function resetTweet(){
        setTweet("");
    }

    return(
        <Fragment>
        <h1>Compose Tweet</h1>
        <textarea value={tweet} onChange={handleChange} rows="4"></textarea>

        <div>
            <span>{maxChars - tweet.length} characters left</span>
            <button onClick={resetTweet}>Reset</button>
        </div>

            <button disabled={tweet.length > maxChars}>Tweet</button>
        </Fragment>    
    );
}