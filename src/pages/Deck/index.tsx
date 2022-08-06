import Card from '../../components/Card'
import './style.scss'

export function Deck() {

  const playerName = localStorage.getItem("player");

  return (
    <div>
      <h2 className="player-name">{playerName}</h2>
      <div className="cards-holder">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
