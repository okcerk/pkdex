import React, { ReactNode } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TitleComponent } from "./components/TitleComponent/TitleComponent";
import { PokedexProps, PokemonPageProps } from "./helpers/routeHelper";
import { PokedexMain } from "./pages/PokedexMain/PokedexMain";
import {
  getFormattedPokemonName,
  PokemonPage,
} from "./pages/PokemonPage/PokemonPage";
import {
  DefaultPokedexConfig,
  PokedexConfigMapper,
} from "./pokedexConfigs/configMapper";
import {
  initialSearchState,
  SearchActionType,
  SearchContext,
  SearchDispatchContext,
  searchReducer,
} from "./searchContext";

const styles = {
  searchButton: {
    backgroundColor: "gray",
    borderColor: "white",
  },
};

const withTitle = (component: ReactNode, title: string) => (
  <>
    <TitleComponent title={title} />
    {component}
  </>
);

export const App = () => {
  const [searchState, searchDispatch] = React.useReducer(
    searchReducer,
    initialSearchState
  );

  const getHome = () => {
    const config = DefaultPokedexConfig;
    const pageTitle = `Pokédex - ${config.title}`;
    return withTitle(<PokedexMain config={config} />, pageTitle);
  };

  const getPokedexComponent = ({ match }: PokedexProps) => {
    const configName = match.params.configName.toLocaleLowerCase();
    const config = PokedexConfigMapper[configName] ?? DefaultPokedexConfig;
    const pageTitle = `Pokédex - ${config.title}`;
    return withTitle(<PokedexMain config={config} />, pageTitle);
  };

  const getPokemonPage = ({ match }: PokemonPageProps) => {
    const configName = match.params.configName.toLocaleLowerCase();
    const pokemonName = match.params.pokemonName.toLocaleLowerCase();
    const config = PokedexConfigMapper[configName] ?? DefaultPokedexConfig;
    const formattedPokemonName = getFormattedPokemonName(pokemonName);
    const model = config.entries[formattedPokemonName];
    const pageTitle = `${model.name} - ${config.title}`;
    return withTitle(
      <PokemonPage config={config} pokemonName={pokemonName} />,
      pageTitle
    );
  };

  return (
    <div className="h-100">
      <Router>
        <SearchContext.Provider value={searchState}>
          <SearchDispatchContext.Provider value={searchDispatch}>
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">Pokédex</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Change Game" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/pokedex/red-blue">
                      Red & Blue
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/pokedex/yellow">
                      Yellow
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search by name"
                    className="mr-sm-3"
                    onChange={(e) =>
                      searchDispatch({
                        type: SearchActionType.ChangeQuery,
                        query: e.currentTarget.value,
                      })
                    }
                  />
                  <Button variant="primary" style={styles.searchButton}>
                    Search
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Container fluid className="bg-light pt-4">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route
                  path="/pokedex/:configName/:pokemonName"
                  render={getPokemonPage}
                />
                <Route
                  path="/pokedex/:configName"
                  render={getPokedexComponent}
                />
                <Route path="/">{getHome()}</Route>
              </Switch>
            </Container>
          </SearchDispatchContext.Provider>
        </SearchContext.Provider>
      </Router>
    </div>
  );
};

function About() {
  return <h2>About</h2>;
}
