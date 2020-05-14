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
    <a className="text-secondary" style={{ cursor: "pointer" }} href="\">
      <Card
        className="border-secondary"
        style={{ width: "10rem", margin: ".5rem" }}
      >
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}${spritesFolderUrl}${model.spriteUrl}`}
          className="px-3 py-3"
        />
        <Card.Body>
          <Card.Title>{model.name}</Card.Title>
          <Card.Subtitle>{`#${model.pokedexNumber}`}</Card.Subtitle>
        </Card.Body>
      </Card>
    </a>
  );
};
