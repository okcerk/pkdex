import { PokedexConfiguration } from "./models";
import { redBlue } from "./redBlue";

export const yellow: PokedexConfiguration = {
  configName: "yellow",
  spritesFolderUrl: "/assets/sprites/yellow/",
  attacksDataFolderUrl: "/assets/data/gen1/attacks/",
  pokemonDataFolderUrl: "/assets/data/gen1/pokemon/",
  entries: redBlue.entries,
};
