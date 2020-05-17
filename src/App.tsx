import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokedexMain } from "./pages/PokedexMain/PokedexMain";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import {
  initialSearchState,
  SearchContext,
  SearchDispatchContext,
  searchReducer,
  SearchActionType,
} from "./searchContext";
import {
  PokedexConfigMapper,
  DefaultPokedexConfig,
} from "./pokedexConfigs/configMapper";
import { PokedexProps } from "./helpers/routeHelper";

export const App = () => {
  const [searchState, searchDispatch] = React.useReducer(
    searchReducer,
    initialSearchState
  );

  const getPokedexComponent = ({ match }: PokedexProps) => {
    const configName = match.params.configName.toLocaleLowerCase();
    return (
      <PokedexMain
        config={PokedexConfigMapper[configName] ?? DefaultPokedexConfig}
      />
    );
  };

  return (
    <Router>
      <SearchContext.Provider value={searchState}>
        <SearchDispatchContext.Provider value={searchDispatch}>
          <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Pokedex</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
              <Form className="w-25">
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
              </Form>
            </Navbar.Collapse>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Container fluid className="bg-light">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/pokedex/:configName" render={getPokedexComponent} />
              <Route path="/">
                <PokedexMain config={DefaultPokedexConfig} />
              </Route>
            </Switch>
          </Container>
        </SearchDispatchContext.Provider>
      </SearchContext.Provider>
    </Router>
  );
};

function About() {
  return <h2>About</h2>;
}
