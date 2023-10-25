// main.js
import { getAllPokemon, getPokemonDetails, searchPokemonByName } from './pokemonFunctions.js';
// DOM elements
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const searchButton = document.getElementById('searchButton');
const pokemonList = document.getElementById('pokemonList');
const typeButtons = document.getElementById('typeButtons');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const fullDatabase = document.getElementById('full-database');
let offset = 0
let limit = 20

// Function to render Pokémon cards
async function renderPokemonCards(pokemonData) {
    pokemonList.innerHTML = ''; // Clear previous Pokémon cards

    // Use the map method to create an array of HTML cards
    const cards = pokemonData.map(async (pokemon) => {
        const pokemonDetails = await getPokemonDetails(pokemon.name);
        return createPokemonCard(pokemonDetails);
    });

    // Use Promise.all to wait for all the card creation promises to resolve
    const cardElements = await Promise.all(cards);

    // Append the card elements to the list
    cardElements.forEach((card) => {
        pokemonList.appendChild(card);
    });
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
searchButton.addEventListener('click', async () => {
    const name = searchInput.value;

    // Call the searchPokemonByName function and wait for the result
    const pokemon = await searchPokemonByName(name);

    // Check if a Pokémon was found and render the card
    if (pokemon) {
        renderPokemonCards([pokemon]); // Pass the found Pokémon as an array to renderPokemonCards
    }
});

fullDatabase.addEventListener('click', async () => {
    offset = 0
    getAllPokemon().then(pokemonData => {
        renderPokemonCards(pokemonData);
    });
});

nextButton.addEventListener('click', async () => {
    offset += limit; // Update the offset here
    const pokemonData = await getAllPokemon(offset, limit); // Pass offset as a parameter
    renderPokemonCards(pokemonData);
});

prevButton.addEventListener('click', async () => {
    offset = Math.max(0, offset - limit); // Update the offset here
    const pokemonData = await getAllPokemon(offset, limit); // Pass offset as a parameter
    renderPokemonCards(pokemonData);
});

// Call getAllPokemon() to fetch and render Pokémon data when the page loads
getAllPokemon().then(pokemonData => {
    renderPokemonCards(pokemonData);
});
