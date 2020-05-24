import { PokedexConfiguration } from "./models";
import { redBlue } from "./redBlue";

export const yellow: PokedexConfiguration = {
  configName: "yellow",
  title: "Pokémon Yellow",
  spritesFolderUrl: "/assets/sprites/yellow/",
  attacksUrl: "/assets/data/gen1/attacks.json",
  pokemonDataFolderUrl: "/assets/data/gen1/pokemon/",
  entries: redBlue.entries,
  indexByNumber: redBlue.indexByNumber,
};
