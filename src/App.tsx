import React from 'react'
import './App.css'
// import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent
        textContent="Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova!"
        h2Color="red"
      /> */}
      <ClassComponent textContent="Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova!" />
    </div>
  )
}

export default App
