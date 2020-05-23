/* eslint-disable no-restricted-globals */
import React from "react";
import { Row } from "react-bootstrap";
import { PokedexConfiguration } from "src/pokedexConfigs/models";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { useSearchState } from "../../searchContext";

interface IPokedexMainProps {
  config: PokedexConfiguration;
}

type PokedexMainProps = Readonly<IPokedexMainProps>;

export const PokedexMain = (props: PokedexMainProps) => {
  const { config } = props;
  const spritesFolderUrl = config.spritesFolderUrl;
  const searchState = useSearchState();
  const currentSearchQuery = searchState.query;
  return (
    <Row className="d-flex justify-content-center">
      {Object.keys(config.entries).map((pokemonKey) => {
        const model = config.entries[pokemonKey];
        if (
          !currentSearchQuery ||
          model.name.toLocaleLowerCase().includes(currentSearchQuery) ||
          model.pokedexNumber.toString().includes(currentSearchQuery)
        ) {
          return (
            <a
              className="mx-3 my-3"
              style={{ cursor: "pointer" }}
              href={`${location.origin}/pokedex/${config.configName}/${pokemonKey}`}
            >
              <PokemonCard model={model} spritesFolderUrl={spritesFolderUrl} />
            </a>
          );
        }
        return false;
      })}
    </Row>
  );
};
