import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import { useState, useEffect } from 'react'
import { shuffle } from 'lodash'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PastaComponent from './components/PastaComponent'
import FetchComponent from './components/FetchComponent'

function App() {
  const [array, setArray] = useState([1, 2, 3, 4])

  useEffect(() => {
    setArray(shuffle(array))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('ARRAY!', array)

  return (
    <BrowserRouter>
      <div className="App">
        <FormComponent />
        <Routes>
          <Route
            path="/"
            element={
              <FunctionalComponent
                textContent="Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova!"
                h2Color="red"
              />
            }
          />
          <Route
            path="/class"
            element={
              <ClassComponent textContent="Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova! Contenuto di prova!" />
            }
          />
          <Route path="/fetch" element={<FetchComponent />} />
          <Route path="/:pasta" element={<PastaComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
