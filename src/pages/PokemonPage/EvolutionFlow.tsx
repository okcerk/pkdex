/* eslint-disable no-restricted-globals */
import React from "react";
import { Image } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";
import {
  PokedexConfiguration,
  PokemonEvolutionDisplayGroup,
  PokemonEvolutionMethod,
} from "src/pokedexConfigs/models";

const styles = {
  image: {
    height: "100px",
    width: "100px",
  },
  imageLink: {
    margin: "30px",
  },
  arrowContainer: { textAlign: "center" as const },
  arrow: { marginTop: "30px", fontSize: "50px" },
};

interface IEvolutionFlowProps {
  evolution: PokemonEvolutionDisplayGroup;
  config: PokedexConfiguration;
}

type EvolutionFlowProps = Readonly<IEvolutionFlowProps>;

const renderImage = (
  spriteBaseFolder: string,
  spriteUrl: string,
  pokemonKey: string,
  configName: string
) => {
  const url = `${spriteBaseFolder}${spriteUrl}`;
  return (
    <a
      href={`${
        location.origin
      }/pokedex/${configName}/${pokemonKey.toLocaleLowerCase()}`}
      style={styles.imageLink}
    >
      <Image
        src={url}
        className="border-secondary bg-light"
        style={styles.image}
        thumbnail
      />
    </a>
  );
};

const getEvolutionText = (method: PokemonEvolutionMethod) => {
  if (typeof method == "number") {
    return `Lv.${method}`;
  }

  switch (method) {
    case "trade":
      return "Trade";
    case "thunderstone":
      return "Thunder Stone";
    case "firestone":
      return "Fire Stone";
    case "leafstone":
      return "Leaf Stone";
    case "waterstone":
      return "Water Stone";
    case "moonstone":
      return "Moon Stone";
    default:
      return "";
  }
};

const renderArrow = (method: PokemonEvolutionMethod) => {
  return (
    <div style={styles.arrowContainer}>
      <h1 style={styles.arrow}>
        <IoIosArrowDropright />
      </h1>
      <p>{getEvolutionText(method)}</p>
    </div>
  );
};

export const EvolutionFlow = (props: EvolutionFlowProps) => {
  const { evolution, config } = props;

  const basePokemonModel = config.entries[evolution.basePokemonName];

  const evolution1Model = config.entries[evolution.evolution1.evolutionName];

  const evolution2Model = evolution.evolution2
    ? config.entries[evolution.evolution2.evolutionName]
    : undefined;

  return (
    <>
      {renderImage(
        config.spritesFolderUrl,
        basePokemonModel.spriteUrl,
        evolution.basePokemonName,
        config.configName
      )}
      {renderArrow(evolution.evolution1.method)}
      {renderImage(
        config.spritesFolderUrl,
        evolution1Model.spriteUrl,
        evolution1Model.name,
        config.configName
      )}
      {evolution.evolution2 && evolution2Model && (
        <>
          {renderArrow(evolution.evolution2.method)}
          {renderImage(
            config.spritesFolderUrl,
            evolution2Model.spriteUrl,
            evolution2Model.name,
            config.configName
          )}
        </>
      )}
    </>
  );
};
