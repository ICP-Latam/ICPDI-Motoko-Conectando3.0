import React from "react"
import logo from "./assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { InternetIdentity, defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as conectando_backend from "../.dfx/local/canisters/conectando_backend"

import { Counter } from "./components/Counter"
import { Transfer } from "./components/Transfer"
import { Profile } from "./components/Profile"

import { Principal } from "./components/Principal"
import { SolicitarServicio } from "./components/SolicitarServicio"
import { OfrecerServicio } from "./components/OfrecerServicio"
import  InsertarServicio  from "./components/InsertarServicio"
import { EliminarServicio } from "./components/EliminarServicio"
import { MostrarServicios } from "./components/MostrarServicios"
import { ModificarServicio } from "./components/ModificarServicio"
import { RegistroUsuario } from "./components/RegistroUsuario"
import { Encabezado } from "./components/encabezado"
function App() {

  return (
    <div className="App">
<div>
  <Encabezado></Encabezado>
<div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />
</div>
      

      <header className="App-header">
        {/* <Principal/> */}
        {/* <SolicitarServicio/> */}
        {/* <OfrecerServicio/> */}
        <InsertarServicio/>
        {/* <ModificarServicio/> */}
        {/* <MostrarServicios/> */}
        {/* <EliminarServicio/> */}
        {/* <RegistroUsuario/> */}
      </header>



      {/* <p className="examples-title">
        Examples
      </p>
      <div className="examples">
        <Counter />
        <Profile />
      <Transfer />
      </div> */}

    </div>
  )
}

const client = createClient({
  canisters: {
    conectando_backend
  },
  providers: [
new InternetIdentity ({ providerUrl :" http://127.0.0.1:8000/?canisterId=be2us-64aaa-aaaaa-qaabq-cai&id=br5f7-7uaaa-aaaaa-qaaca-cai"})
  ],
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: true,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
