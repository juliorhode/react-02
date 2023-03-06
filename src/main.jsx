import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
import { CounterCustomHook } from './01-useState/CounterCustomHook'
import { FormularioCustomhook } from './02-useEffect/FormularioCustomhook'
import { FormularioSimple } from './02-useEffect/FormularioSimple'
import { MultipleCustomHook } from './03-ejemplos/MultipleCustomHook'
// import HooksApp from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterCustomHook/> */}
    {/* <FormularioSimple/> */}
    {/* <FormularioCustomhook/> */}
    <MultipleCustomHook/>
  </React.StrictMode>,
)
