import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import useFetch from "react-fetch-hook";
import { AttacksDictionary, PokemonAttack } from "src/pokedexConfigs/models";

interface IAttacksTableProps {
  attacks: PokemonAttack[];
  attacksUrl: string;
  configName: string;
}

type AttacksTableProps = Readonly<IAttacksTableProps>;

const attackTypeTranslation: Record<string, string> = {
  bug: "Bug",
  dragon: "Dragon",
  electric: "Electric",
  fighting: "Fighting",
  fire: "Fire",
  Flying: "flying",
  ghost: "Ghost",
  grass: "Grass",
  ground: "Ground",
  ice: "Ice",
  normal: "Normal",
  poison: "Poison",
  psychic: "Psychic",
  rock: "Rock",
  water: "Water",
};

const renderTableRow = (
  attack: PokemonAttack,
  attacksDictionary: AttacksDictionary
) => {
  const attackModel = attacksDictionary[attack.attackId];

  if (!attackModel) {
    return null;
  }

  const level = attack.level === "baseAttack" ? "-" : attack.level;

  return (
    <tr>
      <td>{level}</td>
      <td>{attackModel.name}</td>
      <td>{attackTypeTranslation[attackModel.attackType]}</td>
      <td>{attackModel.pp}</td>
      <td>{attackModel.power}</td>
      <td>{attackModel.accuracy}</td>
      <td className="d-none d-md-block">{attackModel.description}</td>
    </tr>
  );
};

export const AttacksTable = (props: AttacksTableProps) => {
  const { attacks, attacksUrl, configName } = props;

  const { isLoading, data } = useFetch(
    `${process.env.PUBLIC_URL}${attacksUrl}`
  );

  if (isLoading) {
    return <Row className="d-flex justify-content-center">Loading...</Row>;
  }

  const attacksDictionary = data as AttacksDictionary;
  return (
    <Col lg={8}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">Lvl</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">PP</th>
            <th scope="col">Pow</th>
            <th scope="col">Acc</th>
            <th scope="col" className="d-none d-md-block">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {attacks.map((attack) => {
            if (
              attack.exclusiveToGames &&
              !attack.exclusiveToGames.find(
                (gameName) => gameName === configName
              )
            ) {
              return false;
            }

            return renderTableRow(attack, attacksDictionary);
          })}
        </tbody>
      </Table>
    </Col>
  );
};
