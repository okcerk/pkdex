export type PokemonCardModel = Readonly<{
  name: string;
  spriteUrl: string;
  pokedexNumber: number;
}>;

export type PokedexConfiguration = Readonly<{
  configName: string;
  spritesFolderUrl: string;
  entries: PokemonCardModel[];
}>;
