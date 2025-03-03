/*Exercise Question 3: Detect and Display User's Online/Offline Status

Create an application (i.e. make a component) to detect and display when a user goes offline and comes back online (e.g. like MSTeams, Slack, Google Meet, etc.).
The correct solution to this exercise will show "🟢 Online" when you are connected to the internet, and show "🔴 Offline" when you are disconnected from the internet; so ensure you enable/disable your Wi-Fi to test if your code works.

Task:
Create a component NetworkStatus.jsx.
Use the useEffect hook to detect when the user goes online or offline (see hints below).
Listen for the online and offline events from the window object.
Update the UI to display "🟢 Online" when the user is connected and "🔴 Offline" when disconnected (you can copy and paste these icons for use in your HTML).
Ensure that event listeners are removed when the component unmounts to prevent memory leaks.
Hints:

JavaScript provides the navigator.onLine property to check if the user is online or not (MDN linkLinks to an external site.).
Use window.addEventListener("online", callback) and window.addEventListener("offline", callback).
Clean up event listeners inside the cleanup function of useEffect.
*/

export default function NetworkStatus(){

   /* return(

    );*/
}