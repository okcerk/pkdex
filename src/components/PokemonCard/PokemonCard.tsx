import React from "react";
import { Card, Container } from "react-bootstrap";
import { PokemonCardModel } from "../../pokedexConfigs/model";

export type PokemonCardProps = Readonly<{
  model: PokemonCardModel;
  spritesFolderUrl: string;
}>;

export const PokemonCard = (props: PokemonCardProps) => {
  const { model, spritesFolderUrl } = props;
  return (
    <a style={{ cursor: "pointer" }}>
      <Card style={{ width: "10rem", margin: ".5rem" }}>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}${spritesFolderUrl}/${model.spriteUrl}`}
        />
        <Card.Body>
          <Card.Title>{model.name}</Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};
