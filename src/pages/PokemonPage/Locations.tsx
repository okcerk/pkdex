import React from "react";
import { Col, Table } from "react-bootstrap";
import { PokemonLocations } from "src/pokedexConfigs/models";

interface ILocationProps {
  locations: PokemonLocations;
}

type LocationProps = Readonly<ILocationProps>;

const gameNames: { [gameKey: string]: string } = {
  red: "Pokémon Red",
  blue: "Pokémon Blue",
  yellow: "Pokémon Yellow",
  gold: "Pokémon Gold",
  silver: "Pokémon Silver",
  crystal: "Pokémon Crystal",
  ruby: "Pokémon Ruby",
  sapphire: "Pokémon Sapphire",
  emerald: "Pokémon Emerald",
  firered: "Pokémon Firered",
  leafgreen: "Pokémon Leafgreen",
};

export const Locations = (props: LocationProps) => {
  const { locations } = props;
  return (
    <Col lg={8}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">Game</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(locations).map((key) => (
            <tr>
              <td>{gameNames[key]}</td>
              <td>{locations[key]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};
