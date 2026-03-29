import "./App.css"
import { Painel } from "./componentes/Painel/Painel"
import { GatoSay } from "./componentes/GatoSay/GatoSay"

export default function App(){

  return(
    <>
    <h1>OnlyCats</h1>
    <br />
    <GatoSay/>
    <br />
      <Painel/>
    </>
  )
}