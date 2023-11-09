import { useState } from 'react'

interface FunctionalComponentProps {
  textContent: string
  h2Color?: string // questa prop è OPZIONALE, nel caso non venga fornita l'invocazione del componente
  // rimarrà comunque valida
}

const FunctionalComponent = (props: FunctionalComponentProps) => {
  const [firstName, setFirstName] = useState('Stefano')
  const [counter, setCounter] = useState<null | number>(null)
  // counter NASCE come null, ma non voglio che resti null per sempre!
  // ammettiamo un tipo unione per la variabile counter, e lo dichiariamo tra le <> (generic)

  return (
    <div>
      <h2 style={{ color: props.h2Color || 'blue' }}>
        VEDIAMO SE PUSHA LA MODIFICA!
      </h2>
      <p>{props.textContent}</p>
      <p onClick={() => setCounter(100)}>Il valore di counter è: {counter}</p>
    </div>
  )
}
export default FunctionalComponent

// OPPURE, SE VOLETE DESTRUTTURARNE LE PROPRIETÀ...

// const FunctionalComponent = ({ textContent, h2Color }: FunctionalComponentProps) => {
//   return (
//     <div>
//       <h2 style={{ color: h2Color }}>Componente a funzione in TS!</h2>
//       <p>{textContent}</p>
//     </div>
//   )
// }
// export default FunctionalComponent
