import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloworldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp 
      user= {{name:'Jaume', lastName: 'Valls', city:'Lleida'}} 
      id= {100}
      title = {'Hola Món des del main.jsx'}
      />
  </React.StrictMode>,
)
