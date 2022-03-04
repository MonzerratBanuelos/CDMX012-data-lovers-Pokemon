import {
  order1_251,
  order251_1,
  orderByAz,
  orderByZa,
  filterByTypes,
  filterByLegendary,
  searchPokemon,
  getTotalAndAverange,
} from "./data.js";
import showPokemons from "./Article.js";

// ************ FUNCIONES QUE ORDENAN A LOS POKEMONS***************
window.orderPokemons = function orderPokemons() {
  let optionSelected = document.getElementById("order-by").value;
  let result = [];
  switch (optionSelected) { //parametro
    case "1-251":
      result = order1_251(); //Aqui data que es el argumento representa al parametro allDAta (que esta en el archivo de data.js)
      break;
    case "251-1":
      result = order251_1();
      break;
    case "AZ":
      result = orderByAz();
      break;
    case "ZA":
      result = orderByZa();
      break;
    default:
    //console.log("Por favor selecciona un orden valido");
  }
  showPokemons(result);//AQUI ES UN ARGUMENTO 
};

//***************FUNCION QUE MUESTRA A LOS POKEMONS POR EL TIPO QUE SE SELECCIONE (VALUE)*************
const selectByType = () => {
  const type = document.getElementById("type").value;
  let pokemons = filterByTypes(type);
  showPokemons(pokemons);
  document.getElementById("stats-space").style.display = "block"; //poner aqui las funciones de los porcentajes dentro de una variable
  let typesToMath = filterByTypes(type);
  let totalPokemonsByType = typesToMath.length;
  //************ESTA FUNCION NOS DA LOS VALORES DE BASE-ATTACK */
  let { sum: attackSum, porcentagePoint: attackPorcentagePoint } =
    getTotalAndAverange(typesToMath, "base-attack");

  let { sum: defenseSum, porcentagePoint: defensePorcentagePoint } =
    getTotalAndAverange(typesToMath, "base-defense"); //suma es el nombre del objeto en return y su propiedad es una variable

  let { sum: staminaSum, porcentagePoint: staminaPorcentagePoint } =
    getTotalAndAverange(typesToMath, "base-stamina");

  /*
  let { suma: cpSum, porcentagePoint: cpPorcentagePoint } = getTotalAndAverange(
    typesToMath,
    "max-cp"
  );*/

  let sumCp = getTotalAndAverange(typesToMath, "max-cp").sum; //esta es otra forma de acceder al objeto retornado
  let porcentageCp = getTotalAndAverange(typesToMath, "max-cp").porcentagePoint;

  let { sum: hpSum, porcentagePoint: hpPorcentagePoint } = getTotalAndAverange(
    typesToMath,
    "max-hp"
  );

  document.getElementById("total-pokemons"
  ).innerHTML = `This group is made of  ${totalPokemonsByType}  Pokemons`;
  document.getElementById(
    "attack-points"
  ).innerHTML = `The total <strong>Attack points</strong> of this group is: 
  <strong>${attackSum}</strong>
  points, with a porcentage of: 
  <strong>${attackPorcentagePoint}</strong>  points
    <br> The total <strong>Defense points</strong> of this group is: 
    <strong>${defenseSum}</strong> 
     points,  with a porcentage of: 
     <strong>${defensePorcentagePoint}</strong>  points
    <br> The total <strong>Stamina points</strong> of this group is: 
    <strong>${staminaSum}</strong> 
     points,  with a porcentage of: 
     <strong>${staminaPorcentagePoint}</strong>  points 
    <br> The total <strong>Combat points</strong> of this group is: 
    <strong>${sumCp}</strong> 
     points,  with a porcentage of:
    <strong>${porcentageCp}</strong>  points 
    <br> The total <strong>Health points</strong> of this group is: 
    <strong>${hpSum}</strong> 
     points,  with a porcentage of: 
     <strong>${hpPorcentagePoint}</strong> points`;
};

document.getElementById("type").addEventListener("change", selectByType);

//***********FUNCION QUE MUESTRA A LOS POKEMONES LEGENDARIOS*******************
const selectByLegendary = () => {
  const legendary = document.getElementById("clasify-legendary").value;
  let pokemons = filterByLegendary(legendary);

  showPokemons(pokemons);
};
document.getElementById("clasify-legendary").addEventListener("click", selectByLegendary);

//**************FUNCION DEL BUSCADOR************

let searchButton = document.getElementById("search");
function showMyPokemon() {
  let name = document.getElementById("search-text").value;
  let myfunction = searchPokemon(name);
  if (name == false || myfunction == false) {
    alert(
      "Pokémon not found, please check the spelling \n Note: If you are not sure of how to write the Pokémon´s name, try with the first letter of it´s name"
    );
    throw new TypeError("Please insert a value");
  } else {
    showPokemons(myfunction);
  }
}
searchButton.addEventListener("click", showMyPokemon);

/* PROPUESTA CARLOS
const filterByType = document.getElementById("type");
filterByType.addEventListener("change", (event) => {
  console.log("recibi: " + event.target.value);
});
*/
