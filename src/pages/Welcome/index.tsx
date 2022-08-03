import {SetStateAction, useState, useRef} from 'react'
import { Outlet, Link, useNavigate  } from "react-router-dom"
import CardsImg from "../../assets/playing_cards.png"
import CardsImgWebp from "../../assets/playing_cards.webp"
import FormNewUser from '../../components/FormNewUser'

import "./style.scss"

export function Welcome() {


  return (
    <div className="welcome-wrapper">
        <picture>
          <source srcSet={CardsImgWebp} type="image/webp"/>
          <img src={CardsImg} alt=""/>
        </picture>
        <FormNewUser />
        <Outlet/>
    </div>
  )
}