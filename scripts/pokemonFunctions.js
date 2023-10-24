// pokemonFunctions.js

// Base URL for the PokéAPI
const API_URL = 'https://pokeapi.co/api/v2';

// Function to fetch all Pokémon
export async function getAllPokemon(offset = 0, limit = 20) {
    let allUrl =`${API_URL}/pokemon?limit=${limit}`
    if (offset!=0){
        allUrl+=`&offset=${offset}`
    }
    const response = await fetch(allUrl);
    console.log(allUrl);
    const data = await response.json();
    return data.results; // Retruns an array of the results
}

// Function to fetch Pokémon details
export async function getPokemonDetails(pokemon) {
    const response = await fetch(`${API_URL}/pokemon/${pokemon}`);
    const data = await response.json();
    return data;
}

// Function to filter Pokémon by type
export async function filterPokemonByType(type) {
    const response = await fetch(`${API_URL}/type/${type}`);
    const data = await response.json();
    return data.pokemon.map(p => p.pokemon);
}

// Function to search Pokémon by name
export async function searchPokemonByName(name) {
    try {
        const pokemon = await getPokemonDetails(name);
        return pokemon;
    } catch (error) {
        console.error(`No Pokémon found with the name "${name}"`);
        return null;
    }
}
