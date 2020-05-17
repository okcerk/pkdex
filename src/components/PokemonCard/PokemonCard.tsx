import React from "react";
import { Card } from "react-bootstrap";
import { PokemonCardModel } from "../../pokedexConfigs/model";

const styles = {
  image: {
    minHeight: "156px",
  },
};

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
          style={styles.image}
        />
        <Card.Body>
          <Card.Title>{model.name}</Card.Title>
          <Card.Subtitle>{`#${model.pokedexNumber}`}</Card.Subtitle>
        </Card.Body>
      </Card>
    </a>
  );
};
