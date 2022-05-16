import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
//  const isFirstRender = useRef(false);  //

  function handleQuery(e) {
    e.preventDefault();
    setInput(e.target.pokeQuery.value);
    navigate("/searched/" + input);
  }


  return (
    <>
      <form onSubmit={handleQuery}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Search;
