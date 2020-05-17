import { PokedexConfiguration } from "./models";
import { redBlue } from "./redBlue";
import { yellow } from "./yellow";

export enum PokedexConfigs {
  RedBlue = "red-blue",
  Red = "red",
  Blue = "blue",
  Yellow = "yellow",
}

export const PokedexConfigMapper: Record<string, PokedexConfiguration> = {
  [PokedexConfigs.RedBlue]: redBlue,
  [PokedexConfigs.Red]: redBlue,
  [PokedexConfigs.Blue]: redBlue,
  [PokedexConfigs.Yellow]: yellow,
};

export const DefaultPokedexConfigName = PokedexConfigs.RedBlue;
export const DefaultPokedexConfig =
  PokedexConfigMapper[DefaultPokedexConfigName];
