import React from "react";
import { Row } from "react-bootstrap";
import useFetch from "react-fetch-hook";
import {
  DefaultPokedexConfig,
  PokedexConfigMapper,
} from "src/pokedexConfigs/configMapper";
import { PokemonModel } from "src/pokedexConfigs/models";

interface IPokemonPageMainProps {
  configName: string;
  pokemonName: string;
}

type PokemonPageMainProps = Readonly<IPokemonPageMainProps>;

const getFormattedPokemonName = (name: string) => name.toLocaleLowerCase();

export const PokemonPage = (props: PokemonPageMainProps) => {
  const { configName, pokemonName } = props;
  const config = PokedexConfigMapper[configName] ?? DefaultPokedexConfig;
  const formattedPokemonName = getFormattedPokemonName(pokemonName);
  const model = config.entries[formattedPokemonName];

  const spriteUrl = `${process.env.PUBLIC_URL}${config.spritesFolderUrl}${model.spriteUrl}`;

  // eslint-disable-next-line no-restricted-globals
  const dataUrl = `${process.env.PUBLIC_URL}${config.pokemonDataFolderUrl}${formattedPokemonName}.json`;
  const { isLoading, data } = useFetch(dataUrl);

  if (isLoading) {
    return <Row className="d-flex justify-content-center">Loading...</Row>;
  }

  const pokemonData = data as PokemonModel;

  return (
    <Row className="d-flex justify-content-center">{pokemonData.type1}</Row>
  );
};
