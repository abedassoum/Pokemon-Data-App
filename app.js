
"use strict"

window.addEventListener("load", initApp)

async function  initApp(){
const pikachu = await getPokemon("pikachu.json")
showInformation(pikachu);
// showPokemon(pikachu);

}

async function getPokemon (url) {
 const response = await fetch(url);
 const data = await response.json();
 return data;
}



function showInformation(pokemon){
const myHTML = /*html*/ `
<li>Name: ${pokemon.name}</li>
<li>Description: ${pokemon.description}</li>
<li>Ability: ${pokemon.ability}</li>
<img src = "${pokemon.image}"/>
<li>Foorprint: ${pokemon.footprint}</li>
<li>Dexindex: ${pokemon.dexindex}</li>
<li>Type: ${pokemon.type}</li>
<li>subtype: ${pokemon.subtype}</li>
<li>Weaknesses: ${pokemon.weaknesses}</li>
<li>Gender: ${pokemon.gender}</li>
<li>Weight: ${pokemon.weight}</li>
<li>Height: ${pokemon.height}</li>
<li>Generation: ${pokemon.generation}</li>
<li>Spilversion: ${pokemon.spilversion}</li>
<li>Can Evolve: ${pokemon.canEvolve}</li>
<li>HP: ${pokemon.statsHP}</li>
<li>Attack: ${pokemon.statsAttack}</li>
<li>Special attack: ${pokemon.statsSpecialAttack}</li>
<li>Special defence: ${pokemon.statsSpecialDefence}</li>
<li>Speed: ${pokemon.statsSpeed}</li>
`;
document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML)
document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);


}

function pokemonClicked(pokemon) {
  console.log(pokemon);

  document.querySelector("#dialog_pokemon_firstname").textContent = pokemon.name;
  document.querySelector("#dialog-type").textContent = pokemon.type;
  document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector("#dialog").showModal();
  // show dialog
  document.querySelector("#dialog-pokemon").showModal();
}



function showPokemon(pokemon) {
  console.log(pokemon);
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    `<article class="grid-item">
       <img src="${pokemon.image}"/>
       <h2>${pokemon.name}</h2>
       <p>Type ${pokemon.type}, ${pokemon.subtype}</p>
       <p>Pokedex Number: ${pokemon.dexindex}</p>
     </article>`
     
  );

  document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked);
}

 