import React from 'react'
import './pokecard.css'

const PokeCard = ({ name, img, type, exp }) => {
    return (
        <div className="PokeCard-container">
            <h4 className="PokeCard-name">{name}</h4>
            <img className="PokeCard-img" src={img} alt=""/>
            <ul className="PokeCard-list">
                <li>Type: {type}</li>
                <li>EXP: {exp}</li>
            </ul>
        </div>
    )
}

export default PokeCard;