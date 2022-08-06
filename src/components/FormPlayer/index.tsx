import React from 'react'
import { Outlet, Link, useNavigate  } from "react-router-dom"
import {SetStateAction, useState} from 'react'

export default function FormNewUser() {
  let navigate = useNavigate();
  const [name, setName] = useState('');

  function handleChange(event: { target: { value: SetStateAction<string> } }) {
    setName(event.target.value);
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    localStorage.setItem("player", name);
    navigate("/deck");
  }
  return (
    <form className="form-new-user" action="">
      <label>
        <input type="text" placeholder="Digite seu nome" onChange={handleChange} value={name} required />
      </label>
      <button className="btn-show-cards" onClick={handleClick}>Ver Cartas</button>
    </form>
  )
}
