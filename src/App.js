import React, { useEffect } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Pages from "./Search/Pages";

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

//<PokemonList pokemon={pokemon} />
//        <Pagination
//          gotoNextPage={nextPageUrl ? gotoNextPage : null}
//          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
//        />

export default App;
