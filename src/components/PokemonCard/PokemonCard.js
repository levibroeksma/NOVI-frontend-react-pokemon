import {useState, useEffect} from "react";
import "./PokemonCard.css"
import axios from "axios";

function PokemonCard({nameOfPokemon}) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        console.log('fetching??')
        async function fetchData() {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`);
            console.log(result.data);
            setPokemon(result.data);
        }
        fetchData();
    }, [])


return (
    <div className="pokemonCard">
        {pokemon && <>
            <h2>{pokemon?.name}</h2>
            <div className="img-wrapper">
                <img src={pokemon?.sprites.front_shiny} alt=""/>
            </div>
            <span className="moves"><strong>moves:</strong> {pokemon?.moves.length}</span>
            <span className="weight"><strong>weight:</strong> {pokemon?.moves.length}</span>
            <span className="abilityTitle">
                <strong>Abilities:</strong>
            </span>
            <div className="ability-wrapper">
                {pokemon.abilities.map(ability => {
                    return <p className="ability">{ability.ability.name}</p>
                })}
            </div>
        </>}
    </div>
    )
}

export default PokemonCard;