import { useEffect, useState } from 'react'
import api from '../../services/api'
import PokeZeroImage from '../../assets/pokemon_zero.png'

import './style.scss'

type CardProps = {
  number: string,
}

export default function Card(props: CardProps) {

  const initialValues = {                   // type all the fields you need
    name: '',
    mainAbility: '',
    secondaryAbility: '',
    image: ''
  };

  const [pokemon, setPokemon] = useState(initialValues);

  function newPokemon(pokeId: string) {
    useEffect(() => {
      api
        .get("pokemon/" + pokeId + "/")
        .then((response) => {
            const pokeValues = {
              ...pokemon,
              name: response.data.forms[0].name,
              mainAbility: response.data.abilities[0].ability.name,
              secondaryAbility: response.data.abilities[1].ability.name,
              image: response.data.sprites.front_default,
            }
            setPokemon(pokeValues)
        })
        .catch((err) => {
          const pokeValues = {
            ...pokemon,
            name: 'Pokemon',
            mainAbility: 'Carta',
            secondaryAbility: 'Coringa',
            image: PokeZeroImage
          }
          setPokemon(pokeValues)
        });
    }, []);
  }

  newPokemon(props.number);

  return (
    <>
      <div className="card">
        <div className="card-weight-top">{props.number}</div>
        <div className="card-container">
          <img src={pokemon.image} alt="Imagem da carta" className="card-img" />
          <div className="card-info">
            <h4><b>{pokemon.name}</b></h4>
            <div className="abilities">
              <p>{pokemon.mainAbility}</p>
              <p>{pokemon.secondaryAbility}</p>
            </div>
          </div>
        </div>
        <div className="card-weight-bottom">{props.number}</div>
      </div>
    </>
  )
}
