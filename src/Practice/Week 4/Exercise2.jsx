/*Exercise 2: Debounced Search Input
You are building a search feature for a large dataset (e.g. Netflix). To optimise performance, you want to debounce (Debouncing a function ensures that it doesn't get called too frequently. LinkLinks to an external site.) the search input so that the API call is only made after the user has stopped typing for 500ms.

Task:
Create a search input field.
Use useEffect to debounce the input value.
Log the debounced value to the console (simulating an API call).
Hints:

Use useState to manage the input value.
Use useEffect to set up a debounce mechanism with setTimeout.
Clear the timeout on clean-up to avoid memory leaks.
*/