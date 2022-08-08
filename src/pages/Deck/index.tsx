import { useEffect, useState, useRef } from 'react';
import Card from '../../components/Card'
// import api from "../../services/api"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
      console.log(count)
    }
    // let count = 5;
  }

  // console.log(cards.length)
  const ref = useRef(null);

  return (
    <div>
      <h2 className="player-name">{playerName}</h2>
      <div className="cards-holder">
        {cards.map(card => {
          return <Card number={card} />
        })}
      </div>

      <button className="btn-draw" onClick={drawCard} ref={ref}>
        <i className="plus-icon"></i>
      </button>
    </div>
  )
}
