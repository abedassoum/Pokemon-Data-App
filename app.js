
"use strict"

window.addEventListener("load", initApp)

async function initApp(){
const pikachu = await getPokemon("pikachu.json")
showPokemon(pikachu);

}

async function getPokemon (url) {
 const response = await fetch(url);
 const data = await response.json();
 return data;
}

function showPokeModal(pokemon) {
  console.log(pokemon);
  document.querySelector("#dialog-image").src = `${pokemon.image}`
  document.querySelector("#dialog-name").textContent = `${pokemon.name}`
  document.querySelector("#dialog-description").textContent = `${pokemon.description}`
  document.querySelector("#dialog-ability").textContent = `${pokemon.ability}`;
  document.querySelector("#dialog-dexIndex").textContent = `${pokemon.dexIndex}`;
  document.querySelector("#dialog-subType").textContent = `${pokemon.subType}`;
  document.querySelector("#dialog-weaknesses").textContent = `${pokemon.weaknesses}`;
  document.querySelector("#dialog-gender").textContent = `${pokemon.gender}`;
  document.querySelector("#dialog-weight").textContent = `${pokemon.weight}`;
  document.querySelector("#dialog-height").textContent = `${pokemon.height}`;
  document.querySelector("#dialog-generation").textContent = `${pokemon.generation}`;
  document.querySelector("#dialog-gameVersion").textContent = `${pokemon.gameVersion}`;
  document.querySelector("#dialog-evolve").textContent = `${pokemon.canEvolve}`;
  document.querySelector("#dialog-HP").textContent = `${pokemon.statsHP}`;
  document.querySelector("#dialog-attack").textContent = `${pokemon.statsAttack}`;
  document.querySelector("#dialog-defence").textContent = `${pokemon.statsDefence}`;
  document.querySelector("#dialog-specialAttack").textContent = `${pokemon.statsSpecialAttack}`
  document.querySelector("#dialog-specialDefence").textContent = `${pokemon.statsSpecialDefence}`
  document.querySelector("#dialog-speed").textContent = `${pokemon.statsSpeed}`;
  document.querySelector("#dialog").showModal();
}

function showPokemon(pokemon) {
  console.log(pokemon);
  document.querySelector("#pokemon").insertAdjacentHTML(
    "beforeend", /*HTML*/`
      <article>
        <img src="${pokemon.image}"/>
        <h2>${pokemon.name}</h2>
        <p>Type: ${pokemon.type}</p>
        <p>Pokedex Number: ${pokemon.dexIndex}</p>
     </article>`);
  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);    
  function pokemonClicked() {
   showPokeModal(pokemon);
  }
}

 