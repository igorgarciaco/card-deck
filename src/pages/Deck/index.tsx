import { useEffect, useState, useRef } from "react";
import Card from "../../components/Card";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Icon } from "@iconify/react";
import { v4 as uuidv4 } from "uuid";

const MySwal = withReactContent(Swal);

import "./style.scss";
import { getPlayerName } from "../../utils/storage";

type Card = {
  pokemonID: number;
  uuid: string;
};

export function Deck() {
  function generateNewCard(): Card {
    const pokeNumber = Math.floor(Math.random() * 10) + 1;
    const pokeId = pokeNumber;
    return {
      pokemonID: pokeId,
      uuid: uuidv4(),
    };
  }

  const [cards, setCards] = useState<Card[]>([]);
  const [playerName, setPlayerName] = useState<string>("");

  function shuffleHandler(orderedDeck: Card[]) {
    const reOrderedDeck = [...orderedDeck].sort(() => Math.random() - 0.5);
    setCards(reOrderedDeck);
  }

  function shuffle() {
    shuffleHandler(cards);
  }

  useEffect(() => {
    setPlayerName(getPlayerName());
    setCards([
      generateNewCard(),
      generateNewCard(),
      generateNewCard(),
      generateNewCard(),
      generateNewCard(),
    ]);
  }, []);

  function drawCard() {
    const count = cards.length;
    const maxCardNumbers = 7;

    if (count > maxCardNumbers) {
      return MySwal.fire({
        icon: "error",
        html: '<div id="swalText">Você atingiu o limite máximo de cartas na mesa</div>',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
    }
    setCards([...cards, generateNewCard()]);
  }

  return (
    <div>
      <h2 className="player-name">{playerName}</h2>
      <div className="cards-holder">
        {cards.map((card) => {
          return <Card number={card.pokemonID} key={card.uuid} />;
        })}
      </div>

      <button className="btn btn-draw" onClick={drawCard} title="Sacar carta">
        <Icon icon="akar-icons:plus" color="#21202e" width="48" />
      </button>
      <button className="btn btn-shuffle" title="Embaralhar cartas">
        <Icon
          icon="akar-icons:arrow-shuffle"
          color="#21202e"
          width="48"
          onClick={shuffle}
        />
      </button>
    </div>
  );
}
