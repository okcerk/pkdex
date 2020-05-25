import { PokedexConfiguration } from "./models";
import { redBlue } from "./redBlue";

export const yellow: PokedexConfiguration = {
  configName: "yellow",
  title: "Pokémon Yellow",
  spritesFolderUrl: "https://pkdex.blob.core.windows.net/pkdex-assets/yellow/",
  attacksUrl: "/assets/data/gen1/attacks.json",
  pokemonDataFolderUrl: "/assets/data/gen1/pokemon/",
  entries: redBlue.entries,
  indexByNumber: redBlue.indexByNumber,
};
