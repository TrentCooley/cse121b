let searchButton=document.getElementById('searchButton');
searchButton.addEventListener('click', getPokemon);

async function getPokemon() {
    const pokemonInput = document.getElementById('pokemonInput');
    const pokemonName = pokemonInput.value; // get the user's input
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; // build the API url
    const response = await fetch(url); // fetch data from the API

    if (!response.ok) { // if HTTP-status is 200-299
        // HTTP-status is not ok, handle the error
        console.log("HTTP-Status is not ok.");
        return;
    }

    const pokemonData = await response.json(); // parse JSON response
    displayPokemonData(pokemonData); // display the data on the page
}

function displayPokemonData(data) {
    const pokemonDataDiv = document.getElementById('pokemonData');
    
    // create a string using template literals
    let dataString = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Types: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    `;
    
    pokemonDataDiv.innerHTML = dataString; // set the innerHTML of the div to our string

    displayTypeButtons(data.types); // display a button for each type
}

function displayTypeButtons(types) {
    const typeButtonsDiv = document.getElementById('typeButtons');
    
    let buttonsString = '';
    
    for (let typeInfo of types) {
        buttonsString += `<button>${typeInfo.type.name}</button>`;
    }
    
    typeButtonsDiv.innerHTML = buttonsString;
}
