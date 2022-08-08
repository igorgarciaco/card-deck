import { useEffect, useState, useRef } from 'react';
import Card from '../../components/Card'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Icon } from '@iconify/react';

import api from '../../services/api'
import PokeZeroImage from '../../assets/pokemon_zero.png'

const MySwal = withReactContent(Swal)

import './style.scss'

export function Deck() {
  function pokeID() {
    let pokeNumber = Math.floor(Math.random() * 10)
    let pokeId = pokeNumber.toString()
    return pokeId
  }

  const [cards, setCards] = useState<string[]>([
    pokeID(),
    pokeID(),
    pokeID(),
    pokeID(),
    pokeID(),
  ]);

  const cardOfDecks = cards.map(card => card)

  function shuffleHandler(arr) {
    let arr2 = [...arr].sort(() => Math.random() - 0.5)
    setCards(arr2)
};

  function shuffle() {
    shuffleHandler(cardOfDecks)
  }

  const playerName = localStorage.getItem("player");

  function drawCard() {
    let count = cards.length;

    if (count > 7) {
      MySwal.fire({
        icon: 'error',
        html: '<div id="swalText">Você atingiu o limite máximo de cartas na mesa</div>',
        showConfirmButton: false,
        timer: 150000,
        toast: true,
      })
    } else {
      setCards([...cards, pokeID()])
      count++;
    }
  }

  return (
    <div>
      <h2 className="player-name">{playerName}</h2>
      <div className="cards-holder">
        {cards.map(card => {
          return <Card number={card} key={card+pokeID()}/>
        })}
      </div>

      <button className="btn btn-draw" onClick={drawCard} title="Sacar carta">
        <Icon icon="akar-icons:plus" color="#21202e" width="48" />
      </button>
      <button className="btn btn-shuffle" title="Embaralhar cartas">
        <Icon icon="akar-icons:arrow-shuffle" color="#21202e" width="48" onClick={shuffle} />
      </button>
    </div>
  )
}
