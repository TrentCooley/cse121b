/* LESSON 3 - Programming Tasks */


/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = addNumber1+addNumber2;
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtractNumber1-subtractNumber2;
  };
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiplyNumbers = () =>{
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    document.querySelector('#product').value = multiplyNumber1*multiplyNumber2;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
// /* Open Function Use - Divide Numbers */
let divideNumbers = () =>{
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = dividend/divisor;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

let curDate = new Date();
let curYear = curDate.getFullYear();
document.querySelector('#year').innerHTML = curYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
let odds = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = odds;
/* Output Evens Only Array */
let evens = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evens;
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((prenum ,curnum)  => prenum + curnum);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;
/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map( num => num * 2);
document.querySelector('#multiplied').innerHTML = multiplied;
/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = numbersArray.map( num => num * 2).reduce(
    (prenum ,curnum)  => prenum + curnum);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;



// Source Array: <span id="array"></span>
// </p>
// <p>
//     Odd Numbers: <span id="odds"></span>
// </p>
// <p>
//     Even Numbers: <span id="evens"></span>
// </p>
// <p>
//     Sum of Source Array: <span id="sumOfArray"></span>
// </p>
// <p>
//     Source Array Times Two: <span id="multiplied"></span>
// </p>
// <p>
//     Sum of Source Array Times Two: <span id="sumOfMultiplied"></span>