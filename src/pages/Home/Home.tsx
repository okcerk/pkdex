import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { redBlue } from "../../pokedexConfigs/redBlue";

export const Home = () => {
  const config = redBlue;
  const spritesFolderUrl = config.spritesFolderUrl;
  return (
    <Row className="d-flex align-items-center">
      {config.entries.map((model) => (
        <PokemonCard model={model} spritesFolderUrl={spritesFolderUrl} />
      ))}
    </Row>
  );
};
