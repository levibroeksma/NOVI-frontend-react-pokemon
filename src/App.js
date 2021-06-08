import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  //useEffect -> pokemon -> [{name: "bulbasuar"}, {name: "ivysaur"}]
    const [pokenames, setPokenames] = useState(null);

    useEffect(() => {
        console.log("Fetch here");

        async function fetchNames() {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');

            console.log(result.data.results)
            setPokenames(result.data.results)
        }
        fetchNames()
    }, []);

  return (
    <div className="page-wrapper">
        <h1>Pokemon</h1>
        <div className="nav-button-wrapper">
            <button type="button">Previous</button>
            <button type="button">next</button>
        </div>
        <div className="card-wrapper">
            {pokenames ? (
              <>
                  {pokenames.map((pokemon) => {
                      return <PokemonCard nameOfPokemon={pokemon.name} />
                  })}
              </>
            ) : (
                <h3>loading</h3>
            )}
        </div>
    </div>
  );
}

export default App;
