import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router';

function Searched() {
  let params = useParams()
const [searchedPokemon, setSearchedPokemon] = useState();

const getSearchedPokemon = async (input) => {
 //if (isFirstRender.current){
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    //} else{
    //    isFirstRender.current = true;
    //}
  };
}

  return (
    <>
    
    </>
  )
}

export default Searched;