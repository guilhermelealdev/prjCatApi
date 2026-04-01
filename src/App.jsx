import "./App.css"
import { Painel } from "./componentes/Painel/Painel"
import { GatoSay } from "./componentes/GatoSay/GatoSay"

export default function App(){

  return(
    <>
    <h1>ONLYCATS</h1>
    <h3>somente gatos, literalmente.</h3>
    <br />
    <GatoSay/>
    <br />
      <Painel/>
    </>
  )
}