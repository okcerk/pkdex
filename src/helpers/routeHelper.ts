import { RouteComponentProps } from "react-router-dom";

// Pokedex main page _ /pokedex/:configName

interface PokedexMatchParams {
  configName: string;
}

interface IPokedexProps extends RouteComponentProps<PokedexMatchParams> {}

export type PokedexProps = Readonly<IPokedexProps>;

// Pokemon Page _ /pokedex/:configName/:pokemonName

interface PokemonPageMatchParams {
  configName: string;
  pokemonName: string;
}

interface IPokemonPageProps
  extends RouteComponentProps<PokemonPageMatchParams> {}

export type PokemonPageProps = Readonly<IPokemonPageProps>;
