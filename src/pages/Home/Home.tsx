import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { redBlue } from "../../pokedexConfigs/redBlue";

export const Home = () => {
  const config = redBlue;
  const spritesFolderUrl = config.spritesFolderUrl;
  return (
    <Container>
      <Row>
        {config.entries.map((model) => (
          <Col xs={2}>
            <PokemonCard model={model} spritesFolderUrl={spritesFolderUrl} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
