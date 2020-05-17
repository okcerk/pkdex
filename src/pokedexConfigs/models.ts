// Pokedex models
export type PokemonCardModel = Readonly<{
  name: string;
  spriteUrl: string;
  pokedexNumber: number;
}>;

export type PokedexConfiguration = Readonly<{
  configName: string;
  spritesFolderUrl: string;
  pokemonDataFolderUrl: string;
  attacksDataFolderUrl: string;
  entries: Record<string, PokemonCardModel>;
}>;

// Pokemon models
export enum PokemonType {
  Normal = "normal",
  Fire = "fire",
  Water = "water",
  Electric = "electric",
  Grass = "grass",
  Ice = "ice",
  Fight = "fight",
  Poison = "poison",
  Ground = "ground",
  Flying = "flying",
  Psychic = "psychic",
  Bug = "bug",
  Rock = "rock",
  Ghost = "ghost",
  Dragon = "dragon",
  Dark = "dark",
  Steel = "steel",
  Fairy = "fairy",
}

export type PokemonStatsGen1 = Readonly<{
  hp: number;
  attack: number;
  defense: number;
  special: number;
  speed: number;
}>;

export type PokemonStatsGen2AndAbove = Readonly<{
  hp: number;
  attack: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  speed: number;
}>;

export type PokemonStats = PokemonStatsGen1 | PokemonStatsGen2AndAbove;

export enum PokemonGame {
  Red = "red",
  Blue = "blue",
  Yellow = "yellow",
  Gold = "gold",
  Silver = "silver",
  Crystal = "crystal",
  Ruby = "ruby",
  Sapphire = "sapphire",
  Emerald = "emerald",
  FireRed = "firered",
  LeafGreen = "leafgreen",
  Diamond = "diamond",
  Pearl = "pearl",
  Platinum = "platinum",
  HeartGold = "heartgold",
  SoulSilver = "soulsilver",
  Black = "black",
  White = "white",
  Black2 = "black2",
  White2 = "white2",
  X = "x",
  Y = "y",
  Sun = "sun",
  Moon = "moon",
  UltraSun = "ultrasun",
  UltraMoon = "ultramoon",
  Sword = "sword",
  Shield = "shield",
}

export type PokemonAttack = Readonly<{
  level: number | "baseAttack";
  attackId: string;
}>;

export type PokemonEvolutionMethod = number | "trade";

export type PokemonEvolution = Readonly<{
  evolutionName: string;
  method: PokemonEvolutionMethod;
}>;

export type PokemonEvolutionDisplayGroup = Readonly<{
  basePokemonName: string;
  evolution1: PokemonEvolution;
  evolution2?: PokemonEvolution;
}>;

export type PokemonModel = Readonly<{
  name: string;
  pokedexNumber: number;
  type1: PokemonType;
  type2?: PokemonType;
  evolution?: [PokemonEvolutionDisplayGroup];
  otherNames: { [language: string]: string };
  classification: string;
  height: number; // in meters
  weight: number; // in kg
  captureRate: number;
  baseStats: PokemonStats;
  locations: { [game: string]: string };
  attacks: [PokemonAttack];
  tms?: [string]; // i.e: "tm01" "hm02"
}>;
