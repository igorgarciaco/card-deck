import { useEffect, useMemo, useState } from "react";
import { getPokemonById } from "../../services/api";


import "./style.scss";

type CardProps = {
  number: number;
};

export default function Card(props: CardProps) {
  const numberLessOne = useMemo(() => props.number - 1 ,[props.number])

  const initialValues = {
    name: "",
    mainAbility: "",
    secondaryAbility: "",
    image: "",
  };

  const [pokemon, setPokemon] = useState(initialValues);

    useEffect(() => {
      getPokemonById(props.number).then((data) => {
        setPokemon(data);
      });
    }, []);

  return (
    <>
      <div className="card">
        <div className="card-weight-top">{numberLessOne}</div>
        <div className="card-container">
          <img src={pokemon.image} alt="Imagem da carta" className="card-img" />
          <div className="card-info">
            <h4>
              <b>{pokemon.name}</b>
            </h4>
            <div className="abilities">
              <p>{pokemon.mainAbility}</p>
              <p>{pokemon.secondaryAbility}</p>
            </div>
          </div>
        </div>
        <div className="card-weight-bottom">{numberLessOne}</div>
      </div>
    </>
  );
}