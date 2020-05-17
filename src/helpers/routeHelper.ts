import { RouteComponentProps } from "react-router-dom";

interface PokedexMatchParams {
  configName: string;
}

interface IPokedexProps extends RouteComponentProps<PokedexMatchParams> {}

export type PokedexProps = Readonly<IPokedexProps>;
