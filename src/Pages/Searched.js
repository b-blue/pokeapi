import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function Searched() {
  const [searchedPokemon, setSearchedPokemon] = useState({});
  let params = useParams();

  const getSearchedPokemon = async (input) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
    console.log(data.data);
    setSearchedPokemon(data.data);
  };

  useEffect(() => {
    getSearchedPokemon(params.search);
  }, [params.search]);

  // TODO: Return details about pokemon

  return (
    <div>
      {searchedPokemon.sprites === undefined ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <h4>{searchedPokemon.name}</h4>
          <img src={searchedPokemon.sprites.front_default} />
        </>
      )}
    </div>
  );
}

export default Searched;
