import axios from "axios";
import PokeZeroImage from "../../assets/pokemon_zero.png";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export function getPokemonById(pokeId: number) {
  return api.get(`pokemon/${pokeId}/`).then((response) => {
    const pokeValues = {
      id: response.data.id,
      name: response.data.forms[0].name,
      mainAbility: response.data.abilities[0].ability.name,
      secondaryAbility: response.data.abilities[1].ability.name,
      image: response.data.sprites.front_default,
    };
    return pokeValues;
  });
}
