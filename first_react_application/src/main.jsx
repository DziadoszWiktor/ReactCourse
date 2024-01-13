import React from 'react'
import ReactDOM from 'react-dom/client'
//import Card from './components/Card.jsx'
//import CreateToDo from './components/CreateToDo.jsx';
import App from './App.jsx'
import './index.css'


const myFirstElement = <h1>This is my first element</h1>;

ReactDOM.createRoot(document.getElementById('root')).render(
  // enabling warnings during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
