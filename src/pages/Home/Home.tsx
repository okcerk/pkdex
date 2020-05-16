import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { redBlue } from "../../pokedexConfigs/redBlue";
import { useSearchState } from "../../searchContext";

export const Home = () => {
  const config = redBlue;
  const spritesFolderUrl = config.spritesFolderUrl;
  const searchState = useSearchState();
  const currentSearchQuery = searchState.query;
  return (
    <Row className="d-flex justify-content-center">
      {config.entries.map((model) => {
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
