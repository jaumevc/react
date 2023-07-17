import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const h1 = React.createElement('h1', null, 'Hola Jaume Valls');
const div = React.createElement('div', null, React.createElement('ul', null, React.createElement('li',null, 'Format en react')));

const seccio= <div><ul><li>Proves React amb tags</li></ul></div>;

const babel = /*#__PURE__*/React.createElement("section", null, 
        /*#__PURE__*/React.createElement("div", null, 
        /*#__PURE__*/React.createElement("ul", null, 
        /*#__PURE__*/React.createElement("li", null, "dada 1"),
        /*#__PURE__*/React.createElement("li", null, "dada 2"))));

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <h1>Hola Mon</h1>
  //   <div>Hola Mon mundial</div>
  //   <App/>
  // </React.StrictMode>,
  // h1,
  // div,
  // seccio
  babel
)
