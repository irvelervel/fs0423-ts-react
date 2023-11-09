interface FunctionalComponentProps {
  textContent: string
  h2Color: string
}

const FunctionalComponent = (props: FunctionalComponentProps) => {
  return (
    <div>
      <h2 style={{ color: props.h2Color }}>Componente a funzione in TS!</h2>
      <p>{props.textContent}</p>
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
