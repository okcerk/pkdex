import { gold } from "./gold";
import { PokedexConfiguration } from "./models";
import { redBlue } from "./redBlue";
import { yellow } from "./yellow";

export enum PokedexConfigs {
  RedBlue = "red-blue",
  Red = "red",
  Blue = "blue",
  Yellow = "yellow",
  Gold = "gold",
  Silver = "silver",
  Crystal = "crystal",
}

export const PokedexConfigMapper: Record<string, PokedexConfiguration> = {
  [PokedexConfigs.RedBlue]: redBlue,
  [PokedexConfigs.Red]: redBlue,
  [PokedexConfigs.Blue]: redBlue,
  [PokedexConfigs.Yellow]: yellow,
  [PokedexConfigs.Gold]: gold,
};

export const DefaultPokedexConfigName = PokedexConfigs.RedBlue;
export const DefaultPokedexConfig =
  PokedexConfigMapper[DefaultPokedexConfigName];
