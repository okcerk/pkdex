/* eslint-disable no-restricted-globals */
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PokedexConfiguration } from "src/pokedexConfigs/models";

const styles = {
  image: {
    height: "100px",
    width: "100px",
  },
  imageLink: {
    color: "black",
    margin: "15px",
  },
  arrowContainer: {
    textAlign: "center" as const,
    marginLeft: "10px",
    marginRight: "10px",
  },
  arrow: { marginTop: "30px", fontSize: "50px" },
};

interface IPreviousNextPokemonProps {
  config: PokedexConfiguration;
  currentPokemonNumber: number;
}

type PreviousNextPokemonProps = Readonly<IPreviousNextPokemonProps>;

const renderImage = (
  config: PokedexConfiguration,
  siblingPokemonName: string,
  direction: "next" | "previous"
) => {
  const pokemonData = config.entries[siblingPokemonName];
  const spriteBaseFolder = config.spritesFolderUrl;
  const url = `${spriteBaseFolder}${pokemonData.spriteUrl}`;
  const isPrevious = direction === "previous";
  return (
    <Row className={isPrevious ? "float-left" : "float-right"}>
      {isPrevious && (
        <div style={styles.arrowContainer}>
          <h1 style={styles.arrow}>
            <FaArrowLeft />
          </h1>
        </div>
      )}
      <a
        href={`${location.origin}/pokedex/${
          config.configName
        }/${siblingPokemonName.toLocaleLowerCase()}`}
        style={styles.imageLink}
      >
        <Image
          src={url}
          className="border-secondary bg-light"
          style={styles.image}
          thumbnail
        />
        <p>{pokemonData.name}</p>
      </a>
      {!isPrevious && (
        <div style={styles.arrowContainer}>
          <h1 style={styles.arrow}>
            <FaArrowRight />
          </h1>
        </div>
      )}
    </Row>
  );
};

export const PreviousNextPokemon = (props: PreviousNextPokemonProps) => {
  const { config, currentPokemonNumber } = props;
  const previousPokemonName = config.indexByNumber[currentPokemonNumber - 1];
  const nextPokemonName = config.indexByNumber[currentPokemonNumber + 1];
  return (
    <>
      {previousPokemonName && (
        <Col>{renderImage(config, previousPokemonName, "previous")}</Col>
      )}
      {nextPokemonName && (
        <Col>{renderImage(config, nextPokemonName, "next")}</Col>
      )}
    </>
  );
};
