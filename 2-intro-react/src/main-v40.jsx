import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld } from './components/Helloworld'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld 
      user= {{name:'Jaume', lastName: 'Valls', city:'Lleida'}} 
      id= {100}
      title = 'Hola Món des del main.jsx'
      />
  </React.StrictMode>,
)
