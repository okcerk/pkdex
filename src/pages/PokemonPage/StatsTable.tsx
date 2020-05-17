import React from "react";
import { Col, Table } from "react-bootstrap";
import {
  PokemonStats,
  PokemonStatsGen1,
  PokemonStatsGen2AndAbove,
} from "src/pokedexConfigs/models";

interface IStatsTableProps {
  stats: PokemonStats;
}

type StatsTableProps = Readonly<IStatsTableProps>;

const statTranslation: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  special: "Special",
  speed: "Speed",
  specialAttack: "Special Attack",
  specialDefense: "Special Defense",
};

const renderTableRow = (statKey: string, value: number) => (
  <tr>
    <td>{statTranslation[statKey]}</td>
    <td>{value}</td>
  </tr>
);

export const StatsTable = (props: StatsTableProps) => {
  const { stats } = props;
  const gen1Stats = stats as PokemonStatsGen1;
  const gen2AboveStats = stats as PokemonStatsGen2AndAbove;
  return (
    <Col md={4}>
      <Table striped bordered hover>
        <tbody>
          {renderTableRow("hp", stats.hp)}
          {renderTableRow("attack", stats.attack)}
          {gen2AboveStats.specialAttack &&
            renderTableRow("specialAttack", gen2AboveStats.specialAttack)}
          {renderTableRow("defense", stats.defense)}
          {gen2AboveStats.specialDefense &&
            renderTableRow("specialDefense", gen2AboveStats.specialDefense)}
          {gen1Stats.special && renderTableRow("special", gen1Stats.special)}
          {renderTableRow("speed", stats.speed)}
        </tbody>
      </Table>
    </Col>
  );
};
