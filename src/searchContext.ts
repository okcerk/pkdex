import React from "react";

interface ISearchState {
  query?: string;
}

export type SearchState = Readonly<ISearchState>;

export const initialSearchState: SearchState = {};

export const SearchContext = React.createContext<SearchState | undefined>(
  undefined
);

export const useSearchState = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      "useSearchState must be used within a SearchContext.Provider"
    );
  }
  return context;
};

/************************************ Dispatch ***********************************/

export enum SearchActionType {
  ChangeQuery = "changeQuery",
}

interface ISearchAction {
  type: SearchActionType;
  query?: string;
}

export type SearchAction = Readonly<ISearchAction>;

export type SearchDispatch = (action: SearchAction) => void;

export const SearchDispatchContext = React.createContext<
  SearchDispatch | undefined
>(undefined);

export const searchReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case SearchActionType.ChangeQuery: {
      return { query: action.query?.toLocaleLowerCase() };
    }
    default: {
      throw new Error(`Unhandled bundle page action type: ${action.type}`);
    }
  }
};

export const useSearchDispatch = () => {
  const context = React.useContext(SearchDispatchContext);
  if (context === undefined) {
    throw new Error(
      "SearchDispatchContext must be used within a SearchDispatchContext.Provider"
    );
  }
  return context;
};
