/* Navigate to this temple JSON file by clicking on the link.
https://byui-cse.github.io/cse121b-ww-course/resources/temples.json
Quickly Review and become familiar with the temple data format.
Complete the following steps in the w05-task.js file. Do not alter the w05-task.html file.
Declare Global Variables
Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
Declare a global empty array variable to store a list of temples named templeList.
Function: displayTemples()
Example Temple Card Output
Figure 1: Example screenshot of temple card.
This function will build a temple display "card" for each item in the temple list passed to the function.

Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.
Check Your Understanding
Process each temple in the temple array using a forEach method and do the following for each temple item:
Create an HTML <article> element (createElement).
Create an HTML <h3> element and add the temple's templeName property to this new element.
Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
Append the <article> element to the global templesElement variable declared in Step 2.
Check Your Understanding
Function: getTemples()
Get JSON temple data using fetch().

Create another function expression called getTemples. Make it an async anonymous, arrow function.
Check Your Understanding
In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
Check Your Understanding
Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
💡If you are stuck with any of these steps, consider using the learning activity materials provided.
The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
💡A good idea here is to test your code by calling the getTemples function at the end of your JavaScript file. This will make sure that your code works before you move on to the next step. You can console.log(templeList) to review the results.
Function: reset()
Clear the displayed list of temples.

Declare a function expression named reset that clears all of the <article> elements from the templesElement.
Function: sortBy()
Sort the list of temples by the selected value of the HTML select element with an ID of sortBy. The preset selections include temples located in the state of Utah, those outside the state of Utah, and temples built before 1950 on the list.

Declare a function expression named sortBy.
The function should accept a argument in a parameter named temples.
In this function, first call the reset function to clear the output.
Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
Use a switch statement that uses the filter value as the selector responding to four (4) cases.
For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
"utah": filter for temples where the location contains "Utah" as a string.
"nonutah": filter for temples where the location does not contain "Utah" as a string.
"older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
"all": no filter. Just use temples as the argument.
Event Listener: sortBy Element change
Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function and sends a arrow function result with the templeList as the argument.*/
/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let articleElement =document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        let imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const templesUrl= 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'
    const response = await fetch(templesUrl);
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
let reset = () => {
    let templesElement = document.querySelector('#templesElement');
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* sortBy Function */
let sortBy = (temples) => {
    // First, clear the output
    reset();

    // Obtain the value of the HTML element with the ID of 'sortBy'
    let filter = document.querySelector('#sortBy').value;

    // Use a switch statement that uses the filter value as the selector
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
};


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {
    sortBy(templeList);
});