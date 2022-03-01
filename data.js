import { findAllPokemons } from "./data/pokemon/pokemon.repo.js";
//*******************FUNCION DE ORDENAMIENTO 1-251 */
export function order1_251() {
  const allPokemons = findAllPokemons();
  const finalUp = allPokemons.sort(function (a, b) {
    return a.num - b.num;
  });
  return finalUp;
}
//*******************FUNCION DE ORDENAMIENTO 251-1 
export function order251_1() {
  const allPokemons = findAllPokemons();
  const finalDown = allPokemons.sort(function (a, b) {
    return b.num - a.num;
  });
  return finalDown;
}
//*******************FUNCION DE ORDENAMIENTO A-Z */
export function orderByAz() {
  const allPokemons = findAllPokemons();
  const finalOrderAZ = allPokemons.sort((a, b) => {
    a = a.name;
    b = b.name;
    return a.localeCompare(b);
  });

  console.log(finalOrderAZ);
  return finalOrderAZ;
}
//*******************FUNCION DE ORDENAMIENTO Z-A */
export function orderByZa() {
  const allPokemons = findAllPokemons();
  const finalOrderZA = allPokemons.sort((a, b) => {
    a = a.name;
    b = b.name;
    return a.localeCompare(b);
  });
  console.log(finalOrderZA);
  return finalOrderZA.reverse();
}
//*******************FUNCION DE FILTRADO POR TIPOS */
export function filterByTypes(type) {
  const pokemones = findAllPokemons();
  const filtrado = pokemones.filter((pokemon) => pokemon.type.includes(type));
  return filtrado;
}
//*******************FUNCION DE POKEMONES LEGENDARIOS */
export function filterByLegendary(legendary) {
  const pokemones = findAllPokemons();
  legendary = "legendary";
  const legendarios = pokemones.filter((pokemon) =>
    pokemon["pokemon-rarity"].includes(legendary)
  );
  return legendarios;
}
//*******************FUNCION DE BUSQUEDA POR NOMBRE */
export function searchPokemon(word) {
  const pokemones = findAllPokemons();
  let finalSearch = pokemones.filter((item) => item.name.includes(word));
  return finalSearch;
}

//*******************FUNCION DE ATAQUE */
export function getTotalAndAverange(pokemons, property) {
  let allBaseAttack = pokemons.map((pokemon) =>
    parseInt(pokemon.stats[property])
  );
  let totalNumOfPokemons = allBaseAttack.length;
  let sum = allBaseAttack.reduce((a, b) => a + b, 0);
  let porcentagePoint = parseFloat((sum / totalNumOfPokemons).toFixed(2)); //toFixed disminuye el numero de decimales al valor introducido en los parentesis
  let allResult = {
    sum: sum,
    porcentagePoint: porcentagePoint,
  };

  return allResult;
}
