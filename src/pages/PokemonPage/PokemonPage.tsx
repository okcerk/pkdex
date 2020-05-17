import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import useFetch from "react-fetch-hook";
import { IconContext } from "react-icons";
import {
  DefaultPokedexConfig,
  PokedexConfigMapper,
} from "src/pokedexConfigs/configMapper";
import { PokemonModel } from "src/pokedexConfigs/models";
import { EvolutionFlow } from "./EvolutionFlow";
import { StatsTable } from "./StatsTable";

const styles = {
  image: {
    height: "200px",
    width: "200px",
  },
  separator: { height: "20px" },
};

interface IPokemonPageMainProps {
  configName: string;
  pokemonName: string;
}

type PokemonPageMainProps = Readonly<IPokemonPageMainProps>;

const getFormattedPokemonName = (name: string) => name.toLocaleLowerCase();

const renderSeparator = () => (
  <Row className="bg-dark" style={styles.separator} />
);

export const PokemonPage = (props: PokemonPageMainProps) => {
  const { configName, pokemonName } = props;
  const config = PokedexConfigMapper[configName] ?? DefaultPokedexConfig;
  const formattedPokemonName = getFormattedPokemonName(pokemonName);
  const model = config.entries[formattedPokemonName];

  const spriteBaseFolder = `${process.env.PUBLIC_URL}${config.spritesFolderUrl}`;
  const spriteUrl = `${spriteBaseFolder}${model.spriteUrl}`;

  // eslint-disable-next-line no-restricted-globals
  const dataUrl = `${process.env.PUBLIC_URL}${config.pokemonDataFolderUrl}${formattedPokemonName}.json`;
  const { isLoading, data } = useFetch(dataUrl);

  if (isLoading) {
    return <Row className="d-flex justify-content-center">Loading...</Row>;
  }

  const pokemonData = data as PokemonModel;

  return (
    <IconContext.Provider
      value={{ color: "#343a40", className: "global-class-name" }}
    >
      <Row className="d-flex justify-content-center pb-4">
        <Col className="d-flex justify-content-center" lg={3}>
          <Image
            src={spriteUrl}
            className="border-secondary bg-light"
            style={styles.image}
            thumbnail
          />
        </Col>
        <Col className="px-4" lg={7}>
          <Row className="d-flex justify-content-left">
            <h1>{`#${pokemonData.pokedexNumber} ${pokemonData.name}`}</h1>
          </Row>
          <Row className="d-flex justify-content-left">
            <h3>{pokemonData.type1.toLocaleUpperCase()}</h3>
            {pokemonData.type2 && (
              <h3 className="ml-4">{`${pokemonData.type2.toLocaleUpperCase()}`}</h3>
            )}
          </Row>
          <Row className="d-flex justify-content-left">
            <h4 className="mr-5">{`${pokemonData.classification} Pokémon`}</h4>
            <h4>{`Height: ${pokemonData.height}m | Weight: ${pokemonData.weight}kg`}</h4>
          </Row>
        </Col>
      </Row>
      {pokemonData.evolution && (
        <>
          {renderSeparator()}
          {pokemonData.evolution.map((evolution) => (
            <Row className="d-flex justify-content-center">
              <EvolutionFlow evolution={evolution} config={config} />
            </Row>
          ))}
        </>
      )}
      {renderSeparator()}
      <Row className="d-flex justify-content-center py-4">
        <StatsTable stats={pokemonData.baseStats} />
      </Row>
      {renderSeparator()}
    </IconContext.Provider>
  );
};
