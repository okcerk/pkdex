import React from "react";
import { Row } from "react-bootstrap";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { redBlue } from "../../pokedexConfigs/redBlue";
import { useSearchState } from "../../searchContext";
import { PokedexConfiguration } from "src/pokedexConfigs/model";
import { PokedexConfigMapper } from "src/pokedexConfigs/configMapper";

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
      {Object.keys(config.entries).map((key) => {
        const model = config.entries[key];
        if (
          !currentSearchQuery ||
          model.name.toLocaleLowerCase().includes(currentSearchQuery) ||
          model.pokedexNumber.toString().includes(currentSearchQuery)
        ) {
          return (
            <PokemonCard model={model} spritesFolderUrl={spritesFolderUrl} />
          );
        }
        return false;
      })}
    </Row>
  );
};
