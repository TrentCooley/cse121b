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