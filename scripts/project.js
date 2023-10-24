// main.js
import { getAllPokemon, getPokemonDetails, filterPokemonByType, searchPokemonByName } from './pokemonFunctions.js';
// DOM elements
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const searchButton = document.getElementById('searchButton');
const pokemonList = document.getElementById('pokemonList');
const typeButtons = document.getElementById('typeButtons');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

// Function to render Pokémon cards
async function renderPokemonCards(pokemonData) {
    pokemonList.innerHTML = ''; // Clear previous Pokémon cards

    for (const pokemon of pokemonData) {
        let pokemonDetails = await getPokemonDetails(pokemon['name']);
        console.log(pokemonDetails);
        const card = createPokemonCard(pokemonDetails);
        pokemonList.appendChild(card);
    }
}


// Function to create a Pokémon card
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    // Create the card's content using template literals
    card.innerHTML = `
        <h2>${pokemon.name} (ID: ${pokemon.id})</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Types: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>
    `;

    return card;
}


// Event listener for the search button
searchButton.addEventListener('click', () => {
    const name = searchInput.value;
    searchPokemonByName(name);
});

// Event listener for type filter
typeFilter.addEventListener('change', () => {
    const selectedType = typeFilter.value;
    filterPokemonByType(selectedType);
});


nextButton.addEventListener('click', async () => {
    offset += limit;
    const pokemonData = await getAllPokemon();
    renderPokemonCards(pokemonData);
});

prevButton.addEventListener('click', async () => {
    offset = Math.max(0, offset - limit);
    const pokemonData = await getAllPokemon();
    renderPokemonCards(pokemonData);
});

// Call getAllPokemon() to fetch and render Pokémon data when the page loads
getAllPokemon().then(pokemonData => {
    renderPokemonCards(pokemonData);
});
