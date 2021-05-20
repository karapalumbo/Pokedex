import React from 'react';
import PokeCard from './Pokecard'
import pokemonImg from './pokeImg'
import './Pokedex.css'

const Pokedex = ({ pokemon }) => {
    return (
        <div className="Pokedex">
            {pokemon.map(p => {
                const img = pokemonImg(p.id)
                return(
                <PokeCard key={p.id} name={p.name} img={img} type={p.type} exp={p.base_experience}/>
                )
            })}
        </div>
    )
}

export default Pokedex;
