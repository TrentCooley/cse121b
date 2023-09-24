/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */
let fullName = 'Trent Cooley';
let currentYear = '2023'; 
let profilePicture = 'images/Glasses.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img'); //hellllp

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ${fullName}');



/* Step 5 - Array */

let foods = ['Banana','Apple','Pizza','Ice Cream','German Pancakes'];
foodElement.innerHTML = foods;
let singleFood = 'Potatoes';
foods.push(singleFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;