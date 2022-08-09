import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Welcome } from "./pages/Welcome"
import { Deck } from "./pages/Deck"

export function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}>
      </Route>
      <Route path="/deck" element={<Deck />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}