import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './components/Helloworld'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld user= {'Jaume Valls'} id={100}/>
  </React.StrictMode>,
)
